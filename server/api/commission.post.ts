// server/api/commission.post.ts
import nodemailer from "nodemailer";
import dns from "node:dns/promises";

// Common fake test domains to block
const FORBIDDEN_DOMAINS = [
  "example.com",
  "example.org",
  "example.net",
  "test.com",
  "localhost",
];

// Common disposable email providers
const DISPOSABLE_DOMAINS = [
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "tempmail.com",
  "trashmail.com",
];

async function isValidEmail(
  email: string,
): Promise<{ valid: boolean; reason?: string }> {
  // 1. Strict Regex Syntax Validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { valid: false, reason: "Invalid email format." };
  }

  const parts = email.split("@");
  const domain = parts[1] ? parts[1].toLowerCase() : "";

  if (!domain) {
    return { valid: false, reason: "Invalid email domain." };
  }

  // 2. Block Known Test / Fake Domains
  if (FORBIDDEN_DOMAINS.includes(domain)) {
    return {
      valid: false,
      reason: "Please provide a real email address, not a test domain.",
    };
  }

  // 3. Block Disposable / Temporary Email Services
  if (DISPOSABLE_DOMAINS.includes(domain)) {
    return {
      valid: false,
      reason: "Temporary or disposable email addresses are not allowed.",
    };
  }

  // 4. DNS MX Record Lookup (Checks if domain actually receives email)
  try {
    const mxRecords = await dns.resolveMx(domain);
    if (!mxRecords || mxRecords.length === 0) {
      return {
        valid: false,
        reason: "The email domain does not have valid mail servers.",
      };
    }
  } catch (error) {
    // DNS resolution failed (domain doesn't exist)
    return {
      valid: false,
      reason: `Domain "${domain}" does not exist or cannot receive emails.`,
    };
  }

  return { valid: true };
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, message, website, formStartTime } = body;

  // 1. HONEYPOT CHECK
  // If 'website' has a value, it's a bot (real users can't see or fill this field)
  if (website) {
    // Return a fake 200 response so the bot assumes success and gives up
    return { success: true, message: "Commission request sent!" };
  }

  // 2. TIME-BASED BOT CHECK
  // Reject submissions filled out faster than 3 seconds
  if (formStartTime && Date.now() - formStartTime < 3000) {
    throw createError({
      statusCode: 422,
      statusMessage: "Form submitted too quickly. Please try again.",
    });
  }

  // 3. Validate required fields
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please fill out all fields.",
    });
  }

  // 4. Perform Email Validation
  const emailCheck = await isValidEmail(email);
  if (!emailCheck.valid) {
    throw createError({
      statusCode: 422, // Unprocessable Entity
      statusMessage: emailCheck.reason,
    });
  }

  // 5. Configure Transporter using environment runtimeConfig
  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.mailHost,
    port: Number(config.mailPort),
    secure: Number(config.mailPort) === 465, // true for port 465, false for 587
    auth: {
      user: config.mailUser,
      pass: config.mailPass,
    },
  });

  // 6. Send Email
  try {
    await transporter.sendMail({
      from: `"${name}" <${config.mailUser}>`, // Your authenticated email address
      replyTo: email, // Direct replies go straight to the customer
      to: config.mailTo || config.mailUser, // Receives the commission notification
      subject: `🎨 New Commission Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Commission Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <h3>Commission Description:</h3>
        <p style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 6px;">${message}</p>
      `,
    });

    return { success: true, message: "Commission request sent!" };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email. Please try again later.",
    });
  }
});

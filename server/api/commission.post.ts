import nodemailer from "nodemailer";
import dns from "node:dns/promises";

const FORBIDDEN_DOMAINS = [
  "example.com",
  "example.org",
  "example.net",
  "test.com",
  "localhost",
];
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
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { valid: false, reason: "Invalid email format." };
  }

  const parts = email.split("@");
  const domain = parts[1] ? parts[1].toLowerCase() : "";

  if (!domain) {
    return { valid: false, reason: "Invalid email domain." };
  }

  if (FORBIDDEN_DOMAINS.includes(domain)) {
    return {
      valid: false,
      reason: "Please provide a real email address, not a test domain.",
    };
  }

  if (DISPOSABLE_DOMAINS.includes(domain)) {
    return {
      valid: false,
      reason: "Temporary or disposable email addresses are not allowed.",
    };
  }

  try {
    const mxRecords = await dns.resolveMx(domain);
    if (!mxRecords || mxRecords.length === 0) {
      return {
        valid: false,
        reason: "The email domain does not have valid mail servers.",
      };
    }
  } catch {
    return {
      valid: false,
      reason: `Domain "${domain}" does not exist or cannot receive emails.`,
    };
  }

  return { valid: true };
}

// Human-readable labels for the email body
const COMMISSION_TYPE_LABELS: Record<string, string> = {
  "bust-up": "Bust-Up",
  "half-body": "Half-Body",
  "full-body": "Full-Body",
  "character-sheet": "Character Sheet",
  other: "Other",
};

const LICENSE_TYPE_LABELS: Record<string, string> = {
  personal: "Personal Use",
  commercial: "Commercial Use (extra fee)",
};

const PRIORITY_LABELS: Record<string, string> = {
  yes: "Yes — Priority Slot (extra fee)",
  no: "No",
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    name,
    email,
    message,
    website,
    formStartTime,
    commissionType,
    licenseType,
    priority,
  } = body;

  // 1. HONEYPOT CHECK
  if (website) {
    return { success: true, message: "Commission request sent!" };
  }

  // 2. TIME-BASED BOT CHECK
  if (formStartTime && Date.now() - formStartTime < 3000) {
    throw createError({
      statusCode: 422,
      statusMessage: "Form submitted too quickly. Please try again.",
    });
  }

  // 3. Validate required fields — commissionType is now required too
  if (
    !name ||
    !email ||
    !message ||
    !commissionType ||
    !licenseType ||
    !priority
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please fill out all required fields.",
    });
  }

  // 4. Email validation
  const emailCheck = await isValidEmail(email);
  if (!emailCheck.valid) {
    throw createError({ statusCode: 422, statusMessage: emailCheck.reason });
  }

  // 5. Transporter
  const config = useRuntimeConfig();
  const transporter = nodemailer.createTransport({
    host: config.mailHost,
    port: Number(config.mailPort),
    secure: Number(config.mailPort) === 465,
    auth: { user: config.mailUser, pass: config.mailPass },
  });

  const commissionTypeLabel =
    COMMISSION_TYPE_LABELS[commissionType] ?? commissionType ?? "Not specified";
  const licenseTypeLabel = LICENSE_TYPE_LABELS[licenseType] ?? "Not specified";
  const priorityLabel = PRIORITY_LABELS[priority] ?? "Not specified";

  try {
    await transporter.sendMail({
      from: `"${name}" <${config.mailUser}>`,
      replyTo: email,
      to: config.mailTo || config.mailUser,
      subject: `🎨 New Commission Request from ${name}`,
      text: `Name: ${name}
Email: ${email}
Commission Type: ${commissionTypeLabel}
License Type: ${licenseTypeLabel}
Priority Slot: ${priorityLabel}

Message:
${message}`,
      html: `
        <h2>New Commission Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Commission Type:</strong> ${commissionTypeLabel}</p>
        <p><strong>License Type:</strong> ${licenseTypeLabel}</p>
        <p><strong>Priority Slot:</strong> ${priorityLabel}</p>
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

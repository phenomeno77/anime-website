<template>
  <!-- Hero — base tone -->
  <section class="relative">
    <div
      class="container-custom flex min-h-[42vh] flex-col justify-center text-center py-20 lg:min-h-[48vh] lg:py-32"
    >
      <p class="text-sm font-bold uppercase tracking-[0.22em] text-accent-2">
        Your Privacy
      </p>

      <h1
        class="mx-auto mt-5 font-display text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl"
      >
        Privacy Policy
      </h1>

      <p class="mx-auto mt-8 max-w-2xl text-lg text-muted">
        This Privacy Policy explains how personal data is processed when you
        visit this website in accordance with the General Data Protection
        Regulation (GDPR).
      </p>
    </div>
  </section>

  <!-- Privacy Policy — raised tone -->
  <UiSectionBackground tone="raised" divider>
    <section class="relative">
      <div class="container-custom py-16 lg:py-24">
        <div class="mx-auto max-w-4xl">
          <div
            class="rounded-2xl border border-border bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(157,92,255,0.35)] sm:p-8 lg:p-10"
          >
            <div class="space-y-10">
              <!-- Data Controller -->
              <div>
                <h2 class="font-display text-xl font-bold text-text">
                  Data Controller
                </h2>

                <p class="mt-3 leading-7 text-muted">
                  The data controller responsible for processing personal data
                  on this website is:
                </p>

                <p class="mt-4 leading-7 text-muted">
                  <strong class="font-medium text-text">Your Name</strong>
                  <br />
                  Email:
                  <a
                    href="mailto:email@example.com"
                    class="font-medium text-accent-2 transition-colors hover:text-text hover:underline"
                  >
                    email@example.com
                  </a>
                </p>
              </div>

              <!-- Cookies -->
              <div class="border-t border-border pt-10">
                <h2 class="font-display text-xl font-bold text-text">
                  Cookies
                </h2>

                <p class="mt-3 leading-7 text-muted">
                  This website does not use cookies for tracking, analytics,
                  advertising, or personalization.
                </p>
              </div>

              <!-- Analytics -->
              <div class="border-t border-border pt-10">
                <h2 class="font-display text-xl font-bold text-text">
                  Analytics
                </h2>

                <p class="mt-3 leading-7 text-muted">
                  This website does not use Google Analytics, Matomo, or any
                  other visitor tracking or analytics services.
                </p>
              </div>

              <!-- Contact Form -->
              <div class="border-t border-border pt-10">
                <h2 class="font-display text-xl font-bold text-text">
                  Contact Form
                </h2>

                <div class="mt-3 space-y-3 leading-7 text-muted">
                  <p>
                    If you contact me using the contact form, the information
                    you provide (such as your name, email address, and message)
                    is processed solely for the purpose of responding to your
                    inquiry.
                  </p>

                  <p>
                    Your data will not be shared with third parties unless
                    required by law.
                  </p>
                </div>
              </div>

              <!-- Rate Limiting -->
              <div class="border-t border-border pt-10">
                <h2 class="font-display text-xl font-bold text-text">
                  Rate Limiting &amp; Security
                </h2>

                <div class="mt-3 space-y-3 leading-7 text-muted">
                  <p>
                    To protect this website against spam and abuse, rate
                    limiting is used. When a form is submitted, your IP address
                    is processed temporarily to detect repeated requests.
                  </p>

                  <p>
                    The IP address is stored only for the duration necessary to
                    enforce the rate limit (approximately five minutes) and is
                    then automatically discarded.
                  </p>
                </div>
              </div>

              <!-- Font Awesome -->
              <div class="border-t border-border pt-10">
                <h2 class="font-display text-xl font-bold text-text">
                  Font Awesome
                </h2>

                <p class="mt-3 leading-7 text-muted">
                  This website uses Font Awesome icons.
                </p>

                <div class="mt-4 space-y-4">
                  <p class="leading-7 text-muted">
                    <strong class="font-medium text-text">
                      If Font Awesome is self-hosted:
                    </strong>
                    <br />
                    No personal data is transmitted to Font Awesome.
                  </p>

                  <p class="leading-7 text-muted">
                    <strong class="font-medium text-text">
                      If Font Awesome is loaded from a CDN:
                    </strong>
                    <br />
                    Your IP address may be transmitted to the provider in order
                    to load the icon files.
                  </p>
                </div>
              </div>

              <!-- Server Logs -->
              <div class="border-t border-border pt-10">
                <h2 class="font-display text-xl font-bold text-text">
                  Server Log Files
                </h2>

                <p class="mt-3 leading-7 text-muted">
                  The hosting provider may automatically collect technical
                  information such as:
                </p>

                <ul
                  class="mt-4 list-disc space-y-2 pl-6 leading-7 text-muted marker:text-accent-2"
                >
                  <li>IP address</li>
                  <li>Date and time of access</li>
                  <li>Requested page</li>
                  <li>Browser type</li>
                  <li>Operating system</li>
                </ul>

                <p class="mt-4 leading-7 text-muted">
                  These logs are used solely to ensure the secure and reliable
                  operation of the website and are deleted automatically
                  according to the hosting provider's retention policy.
                </p>
              </div>

              <!-- Third Party -->
              <div class="border-t border-border pt-10">
                <h2 class="font-display text-xl font-bold text-text">
                  Third-Party Services
                </h2>

                <p class="mt-3 leading-7 text-muted">
                  No advertising networks, tracking services, or social media
                  plugins are integrated into this website.
                </p>
              </div>

              <!-- Rights -->
              <div class="border-t border-border pt-10">
                <h2 class="font-display text-xl font-bold text-text">
                  Your Rights
                </h2>

                <p class="mt-3 leading-7 text-muted">
                  Under the GDPR, you have the right to:
                </p>

                <ul
                  class="mt-4 list-disc space-y-2 pl-6 leading-7 text-muted marker:text-accent-2"
                >
                  <li>Access your personal data.</li>
                  <li>Request correction of inaccurate data.</li>
                  <li>Request deletion of your personal data.</li>
                  <li>Restrict processing.</li>
                  <li>Object to processing.</li>
                  <li>Data portability where applicable.</li>
                  <li>
                    Lodge a complaint with the Austrian Data Protection
                    Authority.
                  </li>
                </ul>
              </div>

              <!-- Contact -->
              <div class="border-t border-border pt-10">
                <h2 class="font-display text-xl font-bold text-text">
                  Contact
                </h2>

                <p class="mt-3 leading-7 text-muted">
                  If you have questions regarding this Privacy Policy or the
                  processing of your personal data, please contact:
                </p>

                <p class="mt-4">
                  <a
                    href="mailto:email@example.com"
                    class="font-medium text-accent-2 transition-colors hover:text-text hover:underline"
                  >
                    email@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </UiSectionBackground>
</template>

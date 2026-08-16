<script setup lang="ts">
const generalTerms = [
  "I may decline any commission request.",
  "I retain full copyright to all artworks.",
  "Do not use my works for NFTs or any AI training.",
  "Commissioned artwork is for personal, non-profit use only, unless commercial rights are purchased.",
  "If you do not want your commission showcased in my portfolio or social media, please let me know beforehand.",
  "A visible watermark will remain on all personal-use artworks.",
  "Fanart commissions for merchandise purposes won't be accepted.",
];

const paymentTerms = [
  "Payment is accepted via PayPal invoice only.",
  "Full payment must be made after the sketch is approved, unless otherwise agreed.",
  "Final price may vary depending on the complexity of the illustration.",
  "Refunds are not available once the sketch has been approved.",
];

const processTerms = [
  "Turnaround time begins after sketch approval. (Delivery time may vary depending on complexity or personal health reasons.)",
  "Maximum of 3 major revisions are allowed without extra payment, unless they're my own mistakes. Afterwards, extra fees may follow (+€5–€20).",
  "You will receive the finished work in both .png and .jpeg formats in 2k & 4k quality (350 dpi), plus a web-friendly version via Google Drive folder (unless another method is agreed upon).",
];

const personalUse = [
  "You may share/post the artwork online and use it for icons, profile pictures, or covers on personal pages.",
  "Personal-use artwork may not be used for profit.",
];

const commercialUse = [
  "Commercial use includes any profit-related purpose (e.g., merchandise, promotional material, branding, streaming assets such as Twitch/YouTube overlays/emotes, website banners, novel covers, etc.).",
  "Commercial commissions grant a license to use the artwork, but do not transfer copyright.",
  "The artwork cannot be resold, redistributed, or claimed as your own.",
  "Commercial use requires an additional fee of +100%–200% of the base price.",
];
</script>

<template>
  <!-- Hero — base tone -->
  <section class="relative">
    <div
      class="container-custom flex min-h-[42vh] flex-col justify-center text-center py-20 lg:min-h-[48vh] lg:py-28"
    >
      <p class="text-sm font-bold uppercase tracking-[0.22em] text-accent-2">
        Commission Guidelines
      </p>

      <h1
        class="mt-5 font-display text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl"
      >
        Terms of Service
      </h1>
      <p class="mx-auto mt-8 max-w-2xl text-lg text-muted">
        Please read these terms carefully before requesting a commission. By
        commissioning artwork, you agree to the terms outlined below.
      </p>
    </div>
  </section>

  <!-- Terms — raised tone -->
  <UiSectionBackground tone="raised" divider>
    <section class="relative">
      <div class="container-custom py-16 lg:py-32">
        <div class="mx-auto max-w-4xl">
          <!-- General -->
          <div
            class="rounded-2xl border border-border bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(157,92,255,0.35)] sm:p-8 lg:p-10"
          >
            <div>
              <h2 class="font-display text-xl font-bold text-text">General</h2>

              <ul class="mt-5 space-y-4">
                <li
                  v-for="item in generalTerms"
                  :key="item"
                  class="flex items-start gap-3 leading-7 text-muted"
                >
                  <span
                    class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-2"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Payment -->
            <div class="mt-10 border-t border-border pt-10">
              <h2 class="font-display text-xl font-bold text-text">Payment</h2>

              <ul class="mt-5 space-y-4">
                <li
                  v-for="item in paymentTerms"
                  :key="item"
                  class="flex items-start gap-3 leading-7 text-muted"
                >
                  <span
                    class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-2"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Process -->
            <div class="mt-10 border-t border-border pt-10">
              <h2 class="font-display text-xl font-bold text-text">Process</h2>

              <ul class="mt-5 space-y-4">
                <li
                  v-for="item in processTerms"
                  :key="item"
                  class="flex items-start gap-3 leading-7 text-muted"
                >
                  <span
                    class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-2"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Usage Rights -->
          <div class="mt-16">
            <div>
              <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-accent-2"
              >
                Licensing
              </p>

              <h2
                class="mt-3 font-display text-2xl font-bold tracking-tight text-text sm:text-3xl"
              >
                Usage Rights
              </h2>

              <p class="mt-3 max-w-2xl leading-7 text-muted">
                Personal and commercial commissions come with different usage
                permissions. Please make sure you choose the appropriate option
                for your intended use.
              </p>
            </div>

            <div class="mt-8 grid gap-5 sm:grid-cols-2">
              <!-- Personal -->
              <div
                class="rounded-2xl border border-accent-2/20 bg-accent-2/[0.06] p-6 sm:p-7"
              >
                <div class="flex items-center gap-3">
                  <span
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-2/10 text-accent-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
                      />
                    </svg>
                  </span>

                  <span class="font-display text-lg font-bold text-accent-2">
                    Personal Use
                  </span>
                </div>

                <ul class="mt-5 space-y-3">
                  <li
                    v-for="item in personalUse"
                    :key="item"
                    class="flex items-start gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-2"
                    />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Commercial -->
              <div
                class="rounded-2xl border border-border bg-surface p-6 sm:p-7"
              >
                <div class="flex items-center gap-3">
                  <span
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-2/10 text-accent-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 4h16v16H4V4Zm3 3v10h10V7H7Zm2 2h6v2H9V9Zm0 4h6v2H9v-2Z"
                      />
                    </svg>
                  </span>

                  <span class="font-display text-lg font-bold text-text">
                    Commercial Use
                  </span>
                </div>

                <ul class="mt-5 space-y-3">
                  <li
                    v-for="item in commercialUse"
                    :key="item"
                    class="flex items-start gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-2"
                    />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Contact -->
          <div class="mt-16 border-t border-border pt-8 text-center">
            <p class="text-sm leading-6 text-muted">
              Questions about these terms? Contact
              <a
                href="mailto:email@example.com"
                class="font-medium text-accent-2 transition-colors hover:text-text hover:underline"
              >
                email@example.com </a
              >.
            </p>
          </div>
        </div>
      </div>
    </section>
  </UiSectionBackground>
</template>

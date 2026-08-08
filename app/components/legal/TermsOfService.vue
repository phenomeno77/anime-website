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
  "Maximum of 3 major revisions are allowed without extra payment, unless they're my own mistakes. Afterwards, extra fees may follow (+$5–$20).",
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
  <section class="py-20 lg:py-28">
    <div class="container-custom max-w-3xl leading-relaxed text-zinc-600">
      <h1 class="mb-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
        Terms of Service
      </h1>
      <p class="mb-10 text-sm text-zinc-400">
        Please read these terms carefully before requesting a commission. By
        commissioning artwork, you agree to the terms outlined below.
      </p>

      <!-- General -->
      <div class="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8">
        <h2 class="mb-4 text-lg font-semibold text-zinc-900">General</h2>
        <ul class="space-y-3">
          <li
            v-for="item in generalTerms"
            :key="item"
            class="flex items-start gap-3"
          >
            <span
              class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Payment -->
      <div
        class="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8"
      >
        <h2 class="mb-4 text-lg font-semibold text-zinc-900">Payment</h2>
        <ul class="space-y-3">
          <li
            v-for="item in paymentTerms"
            :key="item"
            class="flex items-start gap-3"
          >
            <span
              class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Process -->
      <div
        class="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8"
      >
        <h2 class="mb-4 text-lg font-semibold text-zinc-900">Process</h2>
        <ul class="space-y-3">
          <li
            v-for="item in processTerms"
            :key="item"
            class="flex items-start gap-3"
          >
            <span
              class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Usage Rights -->
      <h2 class="mb-4 mt-10 text-xl font-semibold text-zinc-900">
        Usage Rights
      </h2>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-2xl border border-violet-100 bg-violet-50/50 p-6">
          <span class="text-sm font-semibold text-violet-600"
            >Personal Use</span
          >
          <ul class="mt-4 space-y-2.5">
            <li
              v-for="item in personalUse"
              :key="item"
              class="flex items-start gap-2 text-sm text-zinc-700"
            >
              <span
                class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400"
              />
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="rounded-2xl border border-pink-100 bg-pink-50/50 p-6">
          <span class="text-sm font-semibold text-pink-600"
            >Commercial Use</span
          >
          <ul class="mt-4 space-y-2.5">
            <li
              v-for="item in commercialUse"
              :key="item"
              class="flex items-start gap-2 text-sm text-zinc-700"
            >
              <span
                class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-400"
              />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <p class="mt-10 text-sm text-zinc-400">
        Questions about these terms? Contact
        <a
          href="mailto:email@example.com"
          class="font-medium text-violet-600 hover:underline"
        >
          email@example.com </a
        >.
      </p>
    </div>
  </section>
</template>

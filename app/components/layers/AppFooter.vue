<script setup lang="ts">
const year = new Date().getFullYear();

const siteLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Commissions", to: "/commissions" },
  { label: "Webtoon", to: "/#webtoon" },
  { label: "About", to: "/about" },
  { label: "Start Commission", to: "/start-commission" },
];

const legalLinks = [
  { label: "Legal Notice", to: "/legal-notice" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
];
</script>

<template>
  <footer class="relative border-t border-zinc-200">
    <!-- Gradient hairline accent -->
    <div
      class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"
    />

    <div class="container-custom py-12">
      <div
        class="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left"
      >
        <!-- Brand + copyright -->
        <div class="flex max-w-xs flex-col lg:max-w-sm">
          <span
            class="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-lg font-bold text-transparent"
          >
            InQu
          </span>
          <p class="mt-3 text-sm leading-relaxed text-zinc-500">
            All artwork, illustrations, and images displayed on this website are
            protected by copyright and may not be copied, reproduced,
            distributed, modified, published, stored, or used in any form
            without prior written permission.
          </p>
          <p class="mt-4 text-sm text-zinc-400">
            © {{ year }} AnimeArt Marianelo. All rights reserved.
          </p>
        </div>

        <!-- Site navigation -->
        <div>
          <span
            class="text-xs font-semibold uppercase tracking-wide text-zinc-400"
            >Explore</span
          >
          <div class="mt-4 flex flex-col items-center gap-3 lg:items-start">
            <NuxtLink
              v-for="link in siteLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-zinc-600 transition hover:text-violet-600"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Legal -->
        <div>
          <span
            class="text-xs font-semibold uppercase tracking-wide text-zinc-400"
            >Legal</span
          >
          <div class="mt-4 flex flex-col items-center gap-3 lg:items-start">
            <NuxtLink
              v-for="link in legalLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-zinc-600 transition hover:text-violet-600"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Social -->
        <div>
          <span
            class="text-xs font-semibold uppercase tracking-wide text-zinc-400"
            >Social Media</span
          >
          <div
            class="mt-4 flex items-center justify-center gap-4 lg:justify-start"
          >
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-zinc-100 py-6">
      <p class="text-center text-xs text-zinc-400">
        Website Designed &amp; developed by
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-zinc-500 underline underline-offset-2 transition hover:text-violet-600"
        >
          Deligiannidis Enterprise
        </a>
      </p>
    </div>
  </footer>
</template>

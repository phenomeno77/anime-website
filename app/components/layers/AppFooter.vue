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
  <footer class="relative border-t border-border">
    <!-- Gradient hairline accent -->
    <div
      class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2 to-transparent"
    />

    <div class="container-custom py-12">
      <div
        class="flex flex-col items-start gap-10 text-left lg:flex-row lg:justify-between"
      >
        <!-- Brand + copyright -->
        <div class="flex max-w-xs flex-col lg:max-w-sm">
          <span class="font-display text-lg font-bold tracking-tight text-text">
            In<span class="text-accent-2">Qu</span>
          </span>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            All artwork, illustrations, and images displayed on this website are
            protected by copyright and may not be copied, reproduced,
            distributed, modified, published, stored, or used in any form
            without prior written permission.
          </p>
          <p class="mt-4 text-sm text-muted/70">
            © {{ year }} AnimeArt Marianelo. All rights reserved.
          </p>
        </div>

        <!-- Site navigation -->
        <div>
          <span
            class="text-xs font-bold uppercase tracking-[0.18em] text-accent-2"
            >Explore</span
          >
          <div class="mt-4 flex flex-col items-start gap-3">
            <NuxtLink
              v-for="link in siteLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-muted transition-colors duration-300 ease-smooth hover:text-text"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Legal -->
        <div>
          <span
            class="text-xs font-bold uppercase tracking-[0.18em] text-accent-2"
            >Legal</span
          >
          <div class="mt-4 flex flex-col items-start gap-3">
            <NuxtLink
              v-for="link in legalLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-muted transition-colors duration-300 ease-smooth hover:text-text"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Social -->
        <div>
          <span
            class="text-xs font-bold uppercase tracking-[0.18em] text-accent-2"
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

    <div class="border-t border-border py-6">
      <p class="text-center text-xs text-muted/70">
        Website Designed &amp; developed by
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-muted underline underline-offset-2 transition-colors duration-300 ease-smooth hover:text-text"
        >
          Deligiannidis Enterprise
        </a>
      </p>
    </div>
  </footer>
</template>

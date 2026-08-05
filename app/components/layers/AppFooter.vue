<template>
  <footer class="py-6 px-6 text-sm text-slate-400 border-t border-[#27272A]">
    <div
      class="mx-auto md:mx-0 flex flex-col md:flex-row w-full justify-between items-center gap-6"
    >
      <div class="max-w-4xl space-y-2">
        <p class="text-slate-300">
          © {{ new Date().getFullYear() }} AnimeArt Marianelo. All rights
          reserved.
        </p>

        <p class="text-slate-500 leading-relaxed">
          All artwork, illustrations, and images displayed on this website are
          protected by copyright and may not be copied, reproduced, distributed,
          modified, published, stored, or used in any form without prior written
          permission.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-4 whitespace-nowrap">
        <NuxtLink
          to="/legal-notice"
          class="underline hover:text-[var(--manga-gold)] transition-colors"
        >
          Legal Notice
        </NuxtLink>

        <NuxtLink
          to="/privacy-policy"
          class="underline hover:text-[var(--manga-gold)] transition-colors"
        >
          Privacy Policy
        </NuxtLink>

        <NuxtLink
          to="/terms"
          class="underline hover:text-[var(--manga-gold)] transition-colors"
        >
          Terms of Use
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

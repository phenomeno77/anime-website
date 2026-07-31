<template>
  <footer class="py-6 px-6 text-sm text-slate-500">
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
    >
      <div class="max-w-4xl">
        <p>
          © {{ new Date().getFullYear() }} AnimeArt Marianelo. All rights
          reserved.
        </p>

        <p>
          All artwork, illustrations, and images displayed on this website are
          protected by copyright and may not be copied, reproduced, distributed,
          modified, published, stored, or used in any form without prior written
          permission.
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-4 whitespace-nowrap">
        <NuxtLink to="/legal-notice" class="hover:text-slate-300 underline">
          Legal Notice
        </NuxtLink>

        <NuxtLink to="/privacy-policy" class="hover:text-slate-300 underline">
          Privacy Policy
        </NuxtLink>

        <NuxtLink to="/terms" class="hover:text-slate-300 underline">
          Terms of Use
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

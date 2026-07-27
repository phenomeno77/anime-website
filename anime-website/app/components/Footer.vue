<template>
  <footer
    class="border-t border-slate-800 py-6 text-center text-sm text-slate-500"
  >
    <div
      class="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4"
    >
      <p>
        © {{ new Date().getFullYear() }} AnimeArt Austria. All rights reserved.
      </p>

      <div class="flex gap-4">
        <NuxtLink to="/impressum" class="hover:text-slate-300 underline"
          >Impressum</NuxtLink
        >
        <NuxtLink to="/datenschutz" class="hover:text-slate-300 underline"
          >Datenschutz</NuxtLink
        >
      </div>
    </div>
  </footer>
</template>

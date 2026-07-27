<template>
  <header
    class="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50"
  >
    <nav class="container mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="text-xl font-bold text-sky-400 flex items-center gap-2"
      >
        <font-awesome-icon :icon="['fas', 'palette']" />
        <span>AnimeArt</span>
      </NuxtLink>

      <div class="flex gap-6 text-slate-300 font-medium">
        <NuxtLink to="/" class="hover:text-sky-400 transition-colors"
          >Home</NuxtLink
        >
        <NuxtLink to="/gallery" class="hover:text-sky-400 transition-colors"
          >Gallery</NuxtLink
        >
        <NuxtLink to="/about" class="hover:text-sky-400 transition-colors"
          >About</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>

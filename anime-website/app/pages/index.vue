<template>
  <div class="container mx-auto px-4 py-16 space-y-24">
    <!-- Hero Section -->
    <section class="text-center space-y-6 py-20">
      <h1 class="text-5xl font-extrabold text-sky-400 drop-shadow-md">
        Anime & Digital Art Commissions
      </h1>
      <p class="text-xl text-slate-300 max-w-2xl mx-auto">
        Custom hand-painted anime PC glass panels and digital artwork crafted to
        order.
      </p>
      <div class="flex justify-center gap-4 pt-4">
        <NuxtLink
          to="/gallery"
          class="bg-sky-500 hover:bg-sky-600 font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-sky-500/25"
        >
          Explore Gallery
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-3 rounded-xl transition-all"
        >
          About Artist
        </NuxtLink>
      </div>
    </section>

    <!-- Feature Cards (Generates vertical height for scrolling) -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="i in 6"
        :key="i"
        class="bg-slate-800/80 backdrop-blur border border-slate-700 p-8 rounded-2xl shadow-xl space-y-4"
      >
        <div class="text-sky-400 text-3xl font-bold">0{{ i }}</div>
        <h3 class="text-xl font-bold">Custom PC Artwork</h3>
        <p class="text-slate-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Watch the
          background glide seamlessly as you scroll!
        </p>
      </div>
    </section>

    <!-- Extra Long Section to Guarantee Scrolling -->
    <section
      class="bg-slate-900/90 border border-slate-800 p-12 rounded-3xl text-center space-y-6"
    >
      <h2 class="text-3xl font-bold text-amber-400">
        Ready to order your commission?
      </h2>
      <p class="text-slate-300 max-w-xl mx-auto">
        Reach out via email or direct message with your chosen character or
        design idea to get a quote.
      </p>
    </section>
  </div>
</template>

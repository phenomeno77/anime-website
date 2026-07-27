<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-8">Artwork Gallery</h1>

    <div v-if="pending" class="text-center py-12 text-slate-400">
      Loading gallery...
    </div>

    <div
      v-else-if="!images || images.length === 0"
      class="text-center py-12 text-slate-400"
    >
      No artwork found in gallery folder yet!
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        class="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-md hover:shadow-sky-500/20 transition-all duration-300"
      >
        <img
          :src="img"
          alt="Anime Digital Artwork"
          class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: images, pending } = await useFetch("/api/gallery");
</script>

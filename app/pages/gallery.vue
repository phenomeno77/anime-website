<script setup>
import { useGalleryImages } from "../composables/useGalleryImages";

const galleryImages = useGalleryImages();
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1
      class="text-4xl font-bold text-center mb-8 text-[var(--manga-gold)] drop-shadow-[0_0_15px_rgba(212,160,23,0.2)]"
    >
      Artwork Gallery
    </h1>

    <div
      v-if="!galleryImages || galleryImages.length === 0"
      class="text-center py-12 text-slate-400"
    >
      No artwork found in gallery yet!
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="(img, index) in galleryImages"
        :key="index"
        class="group overflow-hidden rounded-xl bg-[#15151A] border border-[#27272A] hover:border-[var(--manga-gold)] transition-all duration-300 shadow-lg hover:-translate-y-2"
      >
        <Image
          :src="img"
          preview
          :pt="{
            root: {
              class: 'block w-full',
            },
            image: {
              class:
                'block w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105',
            },
          }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-image-preview-mask) {
  background: rgba(0, 0, 0, 0.8);
}

:deep(.p-image-preview-icon) {
  color: var(--manga-gold);
}
</style>

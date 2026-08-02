<script setup lang="ts">
import { useGalleryImages } from "../composables/useGalleryImages";

const allGalleryImages = useGalleryImages();

const PAGE_SIZE = 12;

const visibleCount = ref(PAGE_SIZE);

const galleryImages = computed(() =>
  allGalleryImages.slice(0, visibleCount.value),
);

const hasMore = computed(() => visibleCount.value < allGalleryImages.length);

const loadMore = () => {
  visibleCount.value += PAGE_SIZE;
};
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1
      class="text-4xl font-bold text-center mb-8 text-[var(--manga-gold)] drop-shadow-[0_0_15px_rgba(212,160,23,0.2)]"
    >
      Artwork Gallery
    </h1>

    <div
      v-if="galleryImages.length === 0"
      class="text-center py-12 text-slate-400"
    >
      No artwork found in gallery yet!
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="img in galleryImages"
        :key="img"
        class="group overflow-hidden rounded-xl bg-[#15151A] border border-[#27272A] hover:border-[var(--manga-gold)] transition-all duration-300 shadow-lg hover:-translate-y-2"
      >
        <Image
          :src="img"
          preview
          loading="lazy"
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

    <!-- Load more button -->
    <div v-if="hasMore" class="flex justify-center mt-10">
      <Button
        label="Load More"
        size="large"
        class="!bg-[var(--manga-accent)] !border-[var(--manga-accent)] hover:!bg-[#a30f35]"
        @click="loadMore"
      />
    </div>

    <!-- Optional end message -->
    <p
      v-else-if="allGalleryImages.length > PAGE_SIZE"
      class="text-center mt-10 text-slate-500"
    >
      You have seen all artwork.
    </p>
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

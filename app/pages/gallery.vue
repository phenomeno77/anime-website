<script setup lang="ts">
import { useGalleryImages } from "../composables/useGalleryImages";

const allGalleryImages = useGalleryImages();

const PAGE_SIZE = 12;

const visibleCount = ref(PAGE_SIZE);

const animationStartIndex = ref(0);

const galleryImages = computed(() =>
  allGalleryImages.slice(0, visibleCount.value),
);

const hasMore = computed(() => visibleCount.value < allGalleryImages.length);

const loadMore = async () => {
  animationStartIndex.value = visibleCount.value;

  visibleCount.value += PAGE_SIZE;
};

const isLoading = ref(true);

onMounted(async () => {
  console.log("Gallery page mounted");
  setTimeout(() => {
    isLoading.value = false;
    document.body.style.overflow = "";
  }, 300);
});
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 bg-[#101014] flex items-center justify-center"
  >
    <div class="animate-pulse text-[var(--manga-gold)] text-xl font-bold">
      Loading artwork...
    </div>
  </div>

  <div
    class="container mx-auto px-4 py-16"
    :class="{ 'pointer-events-none': isLoading }"
  >
    <h1
      class="text-4xl font-bold text-center mb-8 text-[var(--manga-gold)] drop-shadow-[0_0_15px_rgba(212,160,23,0.2)] animate-fade"
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
      v-show="galleryImages.length"
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
    >
      <div
        v-for="(img, index) in galleryImages"
        :key="img"
        class="group overflow-hidden rounded-xl bg-[#15151A] transition-colors duration-300 animate-card aspect-[3/4]"
        :style="{
          animationDelay:
            index >= animationStartIndex
              ? `${(index - animationStartIndex) * 80}ms`
              : `${index * 80}ms`,
        }"
      >
        <Image
          :src="img"
          preview
          loading="lazy"
          class="block w-full h-full"
          :pt="{
            root: {
              class: 'block w-full h-full overflow-hidden',
            },
            image: {
              class:
                'block w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105',
            },
          }"
        />
      </div>
    </div>

    <!-- Load more button -->
    <div
      v-if="hasMore"
      class="flex justify-center mt-10 animate-fade"
      style="animation-delay: 700ms"
    >
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
:deep(.p-image-preview-icon) {
  color: var(--manga-gold);
}

.animate-fade {
  animation: fadeUp 0.8s ease-out both;
}

.animate-card {
  animation: fadeUp 0.8s ease-out both;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 767px) {
  /* Same animation on mobile */
  .animate-fade,
  .animate-card {
    animation-duration: 0.8s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade,
  .animate-card {
    animation: none;
  }
}
</style>

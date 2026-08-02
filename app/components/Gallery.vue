<script setup lang="ts">
import { useHomepageGalleryImages } from "../composables/useHomepageGalleryImages";

const homepageImages = useHomepageGalleryImages();

const images = computed(() =>
  homepageImages.slice(0, 9).map((img) => ({
    itemImageSrc: img,
    thumbnailImageSrc: img,
    alt: "Anime Digital Artwork",
  })),
);

const activeIndex = ref(0);
const displayCustom = ref(false);

const imageClick = (index: number) => {
  activeIndex.value = index;
  displayCustom.value = true;
};

const galleryReveal = useReveal();
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-10">
      <h2
        class="text-3xl font-bold text-[var(--manga-accent)] drop-shadow-[0_0_15px_rgba(193,18,63,0.25)]"
      >
        My Work
      </h2>
    </div>

    <div
      :ref="galleryReveal.target"
      :class="[galleryReveal.isVisible.value ? 'animate-gallery-show' : '']"
    >
      <!-- Fullscreen viewer -->
      <Galleria
        v-model:activeIndex="activeIndex"
        v-model:visible="displayCustom"
        :value="images"
        :circular="true"
        :fullScreen="true"
        :showItemNavigators="true"
        :showThumbnails="false"
        :pt="{
          root: {
            class: 'border-0!',
          },
        }"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            class="w-full max-h-[90vh] object-contain"
          />
        </template>
      </Galleria>

      <!-- Homepage image grid -->
      <div
        v-if="images.length"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="group cursor-pointer overflow-hidden rounded-xl"
          @click="imageClick(index)"
        >
          <img
            :src="image.thumbnailImageSrc"
            :alt="image.alt"
            loading="lazy"
            class="aspect-square w-full object-cover rounded-xl border border-transparent transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--manga-gold)]"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-center gap-4 pt-6">
      <NuxtLink to="/gallery" class="inline-flex">
        <Button
          label="Visit Gallery"
          size="large"
          class="!bg-[var(--manga-accent)] !border-[var(--manga-accent)] hover:!bg-[#a30f35]"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.animate-gallery-show {
  animation: galleryShow 0.8s ease-out both;
}

@keyframes galleryShow {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Mobile: no reveal animation */
@media (max-width: 767px) {
  .animate-gallery-show {
    animation: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-gallery-show {
    animation: none;
  }
}
</style>

<script setup lang="ts">
import { useGalleryImages } from "../composables/useGalleryImages";

const galleryImages = useGalleryImages();

const images = computed(() =>
  galleryImages.map((img) => ({
    itemImageSrc: img as string,
    thumbnailImageSrc: img as string,
    alt: "Anime Digital Artwork",
  })),
);

const responsiveOptions = [
  {
    breakpoint: "1300px",
    numVisible: 6,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
  },
  {
    breakpoint: "575px",
    numVisible: 3,
  },
  {
    breakpoint: "420px",
    numVisible: 2,
  },
  {
    breakpoint: "318px",
    numVisible: 1,
  },
];
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-10">
      <h2
        class="text-3xl font-bold text-[var(--manga-accent)] drop-shadow-[0_0_15px_rgba(193,18,63,0.25)]"
      >
        Artwork Gallery
      </h2>
    </div>

    <Galleria
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="8"
      containerClass="rounded-xl overflow-hidden"
      :pt="{
        root: {
          class: 'border-0! shadow-none',
        },
      }"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          class="w-full h-[350px] sm:h-[450px] md:h-[600px] object-contain py-4"
        />
      </template>

      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          class="w-24 h-20 object-cover rounded-lg border border-transparent hover:border-[var(--manga-gold)] transition-all duration-300"
        />
      </template>
    </Galleria>

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
:deep(.p-galleria-thumbnails-content) {
  background: transparent;
}

:deep(.p-galleria-thumbnail-item) {
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

:deep(.p-galleria-thumbnail-item:hover) {
  transform: translateY(-3px);
}

:deep(.p-galleria-thumbnail-item.p-galleria-thumbnail-item-current) {
  border: 1px solid var(--manga-gold);
}
</style>

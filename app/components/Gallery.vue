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
      <h2 class="text-3xl font-bold text-sky-400">Artwork Gallery</h2>
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
          class="w-24 h-20 object-cover rounded-lg"
        />
      </template>
    </Galleria>
  </div>
</template>

<style scoped>
:deep(.p-galleria-thumbnails-content) {
  background: transparent;
}
</style>

<script setup lang="ts">
import type { Artwork } from "~/types/artwork";

const props = withDefaults(
  defineProps<{
    artworks: Artwork[];
    eyebrow?: string;
    title?: string;
    description?: string;
    showCta?: boolean;
    ctaLabel?: string;
    ctaTo?: string;
  }>(),
  {
    eyebrow: "Selected Work",
    title: "Featured Artwork",
    description:
      "A small selection of recent pieces — original characters, webtoon panels and client commissions.",
    showCta: true,
    ctaLabel: "View Full Portfolio",
    ctaTo: "/portfolio",
  },
);

const sizeClasses: Record<Artwork["size"], string> = {
  large: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

const responsiveOptions = [
  { breakpoint: "768px", numVisible: 4 },
  { breakpoint: "560px", numVisible: 3 },
];

const lightboxOpen = ref(false);
const activeIndex = ref(0);

function openLightbox(artwork: any) {
  activeIndex.value = props.artworks.findIndex((a) => a.id === artwork.id);
  lightboxOpen.value = true;
}
</script>

<template>
  <section class="relative py-20 lg:py-32">
    <div class="container-custom">
      <UiSectionTitle
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
      />

      <div
        class="mt-16 grid grid-flow-dense grid-cols-2 gap-1 auto-rows-[160px] sm:grid-cols-3 sm:auto-rows-[200px] sm:gap-3 lg:grid-cols-4 lg:auto-rows-[240px] lg:gap-4"
      >
        <UiArtworkCard
          v-for="artwork in artworks"
          :key="artwork.id"
          :artwork="artwork"
          :span-class="sizeClasses[artwork.size]"
          @select="openLightbox"
        />
      </div>

      <div v-if="showCta" class="mt-14 flex justify-center">
        <UiPrimaryButton :label="ctaLabel" :href="ctaTo" />
        <!-- <NuxtLink
          :to="ctaTo"
          class="rounded-xl border border-zinc-200 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-700 transition duration-300 hover:-translate-y-1 hover:bg-zinc-50 active:translate-y-0"
        >
          {{ ctaLabel }}
        </NuxtLink> -->
      </div>
    </div>

    <Galleria
      v-model:visible="lightboxOpen"
      v-model:activeIndex="activeIndex"
      :value="artworks"
      :responsive-options="responsiveOptions"
      :num-visible="5"
      circular
      :full-screen="true"
      :show-item-navigators="false"
      :show-thumbnails="true"
    >
      <template #item="{ item }: { item: Artwork }">
        <img
          :src="item.image"
          :alt="item.alt"
          class="max-h-[60vh] w-full bg-zinc-50 object-contain"
        />
      </template>

      <template #thumbnail="{ item }: { item: Artwork }">
        <img
          :src="item.thumbnail"
          :alt="item.alt"
          class="h-16 w-16 rounded-md object-cover sm:h-20 sm:w-20"
        />
      </template>

      <template #caption="{ item }: { item: Artwork }">
        <div v-if="item.title || item.medium" class="p-5">
          <span
            v-if="item.medium"
            class="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600"
          >
            {{ item.medium }}
          </span>
          <h3 v-if="item.title" class="mt-3 text-xl font-bold">
            {{ item.title }}
          </h3>
        </div>
      </template>
    </Galleria>
  </section>
</template>

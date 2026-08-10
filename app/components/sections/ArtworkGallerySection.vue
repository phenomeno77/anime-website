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
    enableLoadMore?: boolean;
    initialCount?: number;
    loadMoreStep?: number;
  }>(),
  {
    eyebrow: "Selected Work",
    title: "Featured Artwork",
    description:
      "A small selection of recent pieces — original characters, webtoon panels and client commissions.",
    showCta: true,
    ctaLabel: "View Full Portfolio",
    ctaTo: "/portfolio",
    enableLoadMore: false,
    initialCount: 7,
    loadMoreStep: 7,
  },
);

const sizeClasses: Record<Artwork["size"], string> = {
  large: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

const visibleCount = ref(
  props.enableLoadMore ? props.initialCount : props.artworks.length,
);
const visibleArtworks = computed(() =>
  props.artworks.slice(0, visibleCount.value),
);
const hasMore = computed(
  () => props.enableLoadMore && visibleCount.value < props.artworks.length,
);

const isLoadingMore = ref(false);

async function loadMore() {
  if (isLoadingMore.value) return;

  isLoadingMore.value = true;

  // Small artificial delay so the loading state is actually perceptible —
  // this isn't a real fetch, just revealing already-loaded data, but an
  // instant reveal reads as broken/flickery rather than intentional.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  visibleCount.value += props.loadMoreStep;
  isLoadingMore.value = false;
}

const responsiveOptions = [
  { breakpoint: "768px", numVisible: 4 },
  { breakpoint: "560px", numVisible: 3 },
];

const lightboxOpen = ref(false);
const activeIndex = ref(0);

function openLightbox(artwork: Artwork) {
  activeIndex.value = visibleArtworks.value.findIndex(
    (a) => a.id === artwork.id,
  );
  lightboxOpen.value = true;
}

const reveal = useReveal();
</script>

<template>
  <section class="relative py-20 lg:py-32">
    <div
      class="container-custom"
      :ref="reveal.target"
      :class="[reveal.isVisible.value ? 'show-element' : 'hide-element']"
    >
      <UiSectionTitle
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
        class="animate-drop"
      />

      <div
        class="mt-16 grid grid-flow-dense grid-cols-2 gap-1 auto-rows-[160px] sm:grid-cols-3 sm:auto-rows-[200px] sm:gap-3 lg:grid-cols-4 lg:auto-rows-[240px] lg:gap-4"
      >
        <UiArtworkCard
          v-for="artwork in visibleArtworks"
          :key="artwork.id"
          class="animate-scale"
          :artwork="artwork"
          :span-class="sizeClasses[artwork.size]"
          @select="openLightbox"
        />
      </div>

      <!-- Load more — Portfolio only -->
      <div v-if="hasMore" class="mt-10 flex justify-center">
        <UiPrimaryButton
          label="Load More"
          :loading="isLoadingMore"
          :loading-label="'Loading...'"
          :disabled="isLoadingMore"
          @click="loadMore"
        />
      </div>

      <div v-if="showCta" class="mt-10 flex justify-center">
        <UiPrimaryButton :label="ctaLabel" :href="ctaTo" />
      </div>
    </div>

    <Galleria
      v-model:visible="lightboxOpen"
      v-model:activeIndex="activeIndex"
      :value="visibleArtworks"
      :responsive-options="responsiveOptions"
      :num-visible="6"
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

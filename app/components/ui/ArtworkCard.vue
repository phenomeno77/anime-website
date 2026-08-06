<script setup lang="ts">
import type { Artwork } from "~/types/artwork";

const props = defineProps<{
  artwork: Artwork;
  spanClass?: string;
}>();

defineEmits<{
  select: [artwork: Artwork];
}>();
</script>

<template>
  <button
    type="button"
    :class="spanClass"
    class="group relative overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
    :aria-label="`View ${artwork.title}, ${artwork.medium}`"
    @click="$emit('select', artwork)"
  >
    <img
      :src="artwork.image"
      :alt="artwork.alt"
      class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      loading="lazy"
    />
    <!-- Scrim -->
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/85 via-zinc-900/10 to-transparent opacity-100 transition duration-500 md:opacity-0 md:group-hover:opacity-100"
    />

    <!-- Label -->
    <div
      v-if="artwork.title || artwork.medium"
      class="pointer-events-none absolute inset-x-0 bottom-0 p-4 transition duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 lg:p-5"
    >
      <span
        v-if="artwork.medium"
        class="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur"
      >
        {{ artwork.medium }}
      </span>
      <h3
        v-if="artwork.title"
        class="mt-2 text-base font-semibold text-white lg:text-lg"
      >
        {{ artwork.title }}
      </h3>
    </div>
  </button>
</template>

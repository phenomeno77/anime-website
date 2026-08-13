<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: "base" | "raised";
    divider?: boolean;
  }>(),
  {
    tone: "base",
    divider: false,
  },
);
</script>

<template>
  <section class="relative" :class="tone === 'raised' ? 'bg-surface' : 'bg-bg'">
    <div
      v-if="divider"
      class="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-border to-transparent"
      aria-hidden="true"
    />
    <slot />
  </section>
</template>

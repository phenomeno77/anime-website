<script setup lang="ts">
withDefaults(
  defineProps<{
    imageSrc?: string;
    imageAlt?: string;
  }>(),
  {
    imageAlt: "Portrait of the artist",
  },
);
</script>

<template>
  <div class="relative mx-auto aspect-[4/5] w-full max-w-md">
    <div
      v-if="!imageSrc"
      class="flex h-full w-full items-center justify-center rounded-[2rem] border-2 border-dashed border-violet-200 bg-violet-50/50 shadow-xl"
    >
      <span class="text-sm font-medium text-violet-400"
        >Portrait placeholder</span
      >
    </div>

    <NuxtImg
      v-else
      :src="imageSrc"
      :alt="imageAlt"
      class="h-full w-full rounded-[2rem] object-cover shadow-xl"
      format="webp"
      quality="85"
    />

    <div
      class="pointer-events-none absolute -right-4 -bottom-4 -z-10 hidden aspect-[4/5] w-[85%] -rotate-6 rounded-[2rem] bg-gradient-to-br from-violet-200/50 to-pink-200/50 lg:block"
      aria-hidden="true"
    />
  </div>
</template>

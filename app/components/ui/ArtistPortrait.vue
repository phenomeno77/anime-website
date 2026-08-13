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
      class="flex h-full w-full items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-surface shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
    >
      <span class="text-sm font-medium text-muted">Portrait placeholder</span>
    </div>

    <NuxtImg
      v-else
      :src="imageSrc"
      :alt="imageAlt"
      class="relative z-10 h-full w-full rounded-[2rem] border border-border object-cover shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8),0_0_60px_-20px_var(--color-glow)]"
      format="webp"
      quality="85"
    />

    <div
      class="pointer-events-none absolute -right-4 -bottom-4 -z-10 hidden aspect-[4/5] w-[85%] -rotate-6 rounded-[2rem] bg-gradient-to-br from-accent-2/30 to-glow/10 blur-sm lg:block"
      aria-hidden="true"
    />
  </div>
</template>

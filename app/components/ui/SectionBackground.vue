<script setup lang="ts">
type Variant = "default" | "lavender" | "rose" | "sky" | "cream" | "aurora";

withDefaults(
  defineProps<{
    variant?: Variant;
  }>(),
  {
    variant: "default",
  },
);
</script>

<template>
  <section
    class="relative overflow-hidden"
    :class="{
      'bg-transparent': variant === 'default',
      'bg-gradient-to-b from-violet-50/80 via-white to-white':
        variant === 'lavender',
      'bg-gradient-to-b from-pink-50/80 via-white to-white': variant === 'rose',
      'bg-gradient-to-b from-sky-50/80 via-white to-white': variant === 'sky',
      'bg-gradient-to-b from-amber-50/60 via-white to-white':
        variant === 'cream',
      'bg-aurora': variant === 'aurora',
    }"
  >
    <!-- Dot grid — always rendered above the section's own background -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true" />

    <div class="relative">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.bg-aurora {
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(244, 114, 182, 0.18),
      transparent 35%
    ),
    radial-gradient(
      circle at 80% 40%,
      rgba(139, 92, 246, 0.18),
      transparent 40%
    ),
    linear-gradient(to bottom, #faf5ff, white);
}
</style>

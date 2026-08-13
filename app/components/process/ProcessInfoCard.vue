<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
  description: string;
}>();
</script>

<template>
  <div
    class="group rounded-3xl border border-border bg-surface p-6 transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_24px_50px_-24px_rgba(157,92,255,0.5)]"
  >
    <p class="text-xs font-bold uppercase tracking-[0.16em] text-accent-2">
      {{ title }}
    </p>

    <h3 class="mt-3 font-display text-2xl font-bold tracking-tight text-text">
      {{ value }}
    </h3>

    <p class="mt-3 text-sm leading-6 text-muted">
      {{ description }}
    </p>
  </div>
</template>

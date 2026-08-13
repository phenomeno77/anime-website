<script setup lang="ts">
defineProps<{
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}>();
</script>

<template>
  <div class="relative flex gap-6">
    <!-- Timeline -->
    <div class="flex flex-col items-center">
      <div
        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-border bg-surface font-display text-sm font-bold text-accent-2 shadow-[0_0_0_4px_rgba(157,92,255,0.06)]"
      >
        {{ number }}
      </div>

      <div
        v-if="!isLast"
        class="mt-3 h-full w-px bg-gradient-to-b from-accent-2 via-border to-transparent"
      />
    </div>

    <!-- Content -->
    <div class="pb-14">
      <h3 class="font-display text-xl font-bold tracking-tight text-text">
        {{ title }}
      </h3>

      <p class="mt-3 max-w-xl leading-7 text-muted">
        {{ description }}
      </p>
    </div>
  </div>
</template>

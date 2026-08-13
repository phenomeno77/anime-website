<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="mx-auto max-w-3xl text-center">
    <p
      v-if="eyebrow"
      class="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-accent-2"
    >
      {{ eyebrow }}
    </p>

    <h2
      class="font-display text-4xl font-bold tracking-tight text-text sm:text-5xl"
    >
      {{ title }}
    </h2>

    <p v-if="description" class="mt-6 text-lg leading-8 text-muted">
      {{ description }}
    </p>
  </div>
</template>

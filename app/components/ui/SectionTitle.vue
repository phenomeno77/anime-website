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
      class="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500"
    >
      {{ eyebrow }}
    </p>

    <h2 class="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
      {{ title }}
    </h2>

    <p v-if="description" class="mt-6 text-lg leading-8 text-zinc-500">
      {{ description }}
    </p>
  </div>
</template>

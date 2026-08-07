<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
  description: string;
}>();
</script>

<template>
  <div
    class="rounded-3xl border border-zinc-200/60 bg-white/70 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <p class="text-sm text-zinc-500">
      {{ title }}
    </p>

    <h3 class="mt-2 text-2xl font-semibold text-zinc-900">
      {{ value }}
    </h3>

    <p class="mt-3 text-sm leading-6 text-zinc-600">
      {{ description }}
    </p>
  </div>
</template>

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
        class="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-900 shadow-sm"
      >
        {{ number }}
      </div>

      <div
        v-if="!isLast"
        class="mt-3 h-full w-px bg-gradient-to-b from-pink-400 via-zinc-400 to-transparent"
      />
    </div>

    <!-- Content -->
    <div class="pb-14">
      <h3 class="text-xl font-semibold text-zinc-900">
        {{ title }}
      </h3>

      <p class="mt-3 max-w-xl leading-7 text-zinc-600">
        {{ description }}
      </p>
    </div>
  </div>
</template>

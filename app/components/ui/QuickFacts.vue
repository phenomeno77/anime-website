<script setup lang="ts">
defineProps<{
  facts: { label: string; value: string }[];
  align?: "center" | "left";
}>();
</script>

<template>
  <div
    class="flex flex-wrap gap-x-8 gap-y-6"
    :class="
      align === 'left' ? 'justify-center md:justify-start' : 'justify-center'
    "
  >
    <div
      v-for="fact in facts"
      :key="fact.label"
      :class="align === 'left' ? 'text-center md:text-left' : 'text-center'"
    >
      <strong class="block text-base font-bold text-zinc-900">{{
        fact.value
      }}</strong>
      <span class="text-sm text-zinc-500">{{ fact.label }}</span>
    </div>
  </div>
</template>

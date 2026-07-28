<script setup lang="ts">
const items = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "About me", to: "/about" },
];
</script>

<template>
  <Menubar
    :model="items"
    :pt="{
      root: {
        class: 'justify-between',
      },
    }"
  >
    <template #start>
      <NuxtLink to="/" class="font-bold text-xl"> My App </NuxtLink>
    </template>

    <template #item="{ item, props }">
      <NuxtLink
        v-if="item.to"
        :to="item.to"
        v-bind="props.action"
        class="flex items-center px-3 py-2"
      >
        {{ item.label }}
      </NuxtLink>

      <a v-else v-bind="props.action">
        {{ item.label }}
      </a>
    </template>
  </Menubar>
</template>

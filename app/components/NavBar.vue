<script setup lang="ts">
const route = useRoute();

const items = [
  { label: "Home", url: "/" },
  { label: "Gallery", url: "/gallery" },
  { label: "About me", url: "/about" },
  { label: "Contact", url: "/contact" },
];

const isActive = (path: string) => {
  return route.path.replace(/\/$/, "") === path.replace(/\/$/, "");
};
</script>

<template>
  <Menubar
    :model="items"
    :pt="{
      root: {
        class: 'justify-between rounded-none! border-none! shadow-none!',
      },
      rootlist: {
        class: 'border-none! shadow-none!',
      },
    }"
    id="navigation-bar"
  >
    <template #start>
      <NuxtLink
        to="/"
        class="font-bold text-xl text-[var(--manga-gold)] hover:text-[var(--manga-accent)] transition-colors"
      >
        My App
      </NuxtLink>
    </template>

    <template #item="{ item }">
      <NuxtLink
        v-if="item.url"
        :to="item.url"
        :class="[
          'flex items-center px-3 py-2 transition-colors',
          isActive(item.url)
            ? 'text-[var(--manga-accent)]!'
            : 'text-slate-200! hover:text-[var(--manga-gold)]!',
        ]"
      >
        {{ item.label }}
      </NuxtLink>
    </template>
  </Menubar>
</template>

<style scoped>
.menubar-rootlist {
  background-color: transparent !important;
}
</style>

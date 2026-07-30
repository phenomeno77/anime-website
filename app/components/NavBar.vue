<script setup lang="ts">
const route = useRoute();

// Use custom property 'url' instead of 'to'
// to prevent PrimeVue from attaching its internal route handler
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
        class:
          'justify-between bg-slate-950/50! rounded-none! border-none! shadow-none!',
      },
      itemContent: {
        class: 'hover:bg-slate-500/50! transition-colors duration-300!',
      },
      rootlist: {
        class: 'bg-slate-700/80! md:bg-transparent! border-none! shadow-none!',
      },
    }"
    id="navigation-bar"
  >
    <template #start>
      <NuxtLink
        to="/"
        class="font-bold text-xl text-sky-400 hover:text-sky-300 transition-colors"
      >
        My App
      </NuxtLink>
    </template>

    <template #item="{ item }">
      <!-- Standard NuxtLink with strict 'to' binding -->
      <NuxtLink
        v-if="item.url"
        :to="item.url"
        :class="[
          'flex items-center px-3 py-2 transition-colors',
          isActive(item.url)
            ? 'text-sky-400! lg:text-sky-400!'
            : 'text-sky-400! lg:text-slate-200! hover:text-sky-400!',
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

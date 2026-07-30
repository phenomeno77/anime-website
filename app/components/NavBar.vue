<script setup lang="ts">
const route = useRoute();

const items = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "About me", to: "/about" },
  { label: "Contact", to: "/contact" },
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

    <template #item="{ item, props }">
      <NuxtLink
        v-if="item.to"
        :to="item.to"
        v-bind="props.action"
        :class="[
          'flex items-center px-3 py-2 transition-colors',
          isActive(item.to)
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

<script setup lang="ts">
const mobileMenuOpen = ref(false);

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Commissions",
    to: "/commissions",
  },
  {
    label: "Webtoon",
    to: "/webtoon",
  },
  {
    label: "About",
    to: "/about",
  },
];
</script>

<template>
  <header class="fixed left-0 top-0 z-50 w-full px-4 pt-5 lg:px-8">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/60 bg-white/90 px-5 py-3 shadow-lg shadow-zinc-200/20"
    >
      <!-- Logo -->

      <NuxtLink
        to="/"
        class="flex items-center gap-2 transition duration-300 hover:opacity-90"
      >
        <img
          src="/logo.png"
          alt="Artist logo"
          class="h-10 w-auto object-contain transform-gpu transition duration-300 hover:scale-[1.03]"
        />
        <span
          class="hidden text-lg font-bold tracking-tight text-zinc-900 sm:block"
        >
          Artist Name
        </span>
      </NuxtLink>

      <!-- Desktop links -->

      <div class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="text-sm font-medium text-zinc-600 transition hover:text-violet-500"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- CTA -->

      <div class="hidden lg:block">
        <UiPrimaryButton label="Commission" />
      </div>

      <!-- Mobile button -->

      <button
        class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-zinc-100 text-xl lg:hidden"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        ☰
      </button>
    </nav>

    <!-- Mobile menu -->

    <div
      v-if="mobileMenuOpen"
      class="mt-3 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-xl lg:hidden"
    >
      <div class="flex flex-col gap-4">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="rounded-xl px-4 py-3 text-zinc-700 transition hover:bg-violet-50"
          @click="mobileMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>

        <UiPrimaryButton label="Start Commission" />
      </div>
    </div>
  </header>
</template>

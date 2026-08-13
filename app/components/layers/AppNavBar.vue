<script setup lang="ts">
const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const artistName = "InQu";

const links = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Commissions", to: "/commissions" },
  { label: "Webtoon", to: "/#webtoon" },
  { label: "About Me", to: "/about" },
];

function onScroll() {
  scrolled.value = window.scrollY > 24;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b transition-all duration-400 ease-smooth"
    :class="
      scrolled || mobileMenuOpen
        ? 'border-border bg-bg/70 backdrop-blur-xl'
        : 'border-transparent bg-transparent'
    "
  >
    <nav
      class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2 transition duration-300 ease-smooth hover:opacity-90"
      >
        <img
          src="/logo.png"
          alt="Artist logo"
          class="h-10 w-auto transform-gpu object-contain transition duration-300 ease-smooth hover:scale-[1.03]"
        />
        <span
          class="hidden font-display text-lg font-bold tracking-tight text-text sm:block"
        >
          {{ artistName.slice(0, 2)
          }}<span class="text-accent-2">{{ artistName.slice(2) }}</span>
        </span>
      </NuxtLink>

      <!-- Desktop links -->
      <div class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="text-sm font-medium text-muted transition-colors duration-300 ease-smooth hover:text-text"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- CTA -->
      <div class="hidden lg:block">
        <UiPrimaryButton label="Commission" href="/start-commission" />
      </div>

      <!-- Mobile button -->
      <button
        class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-border bg-surface text-xl text-text lg:hidden"
        @click="mobileMenuOpen = !mobileMenuOpen"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-300 ease-smooth"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-smooth"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="border-t border-border bg-bg/80 px-6 pb-6 pt-2 backdrop-blur-xl lg:hidden"
      >
        <div class="mx-auto flex max-w-7xl flex-col gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="rounded-xl px-4 py-3 text-muted transition-colors duration-300 ease-smooth hover:bg-white/[0.04] hover:text-text"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>

          <div class="mt-2">
            <UiPrimaryButton
              label="Start Commission"
              href="/start-commission"
            />
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

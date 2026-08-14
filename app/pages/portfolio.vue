<script setup lang="ts">
useSeoMeta({
  title: "Portfolio",
  description:
    "A gallery of anime character illustrations, original characters, commissions, and webtoon panels by InQu.",
});
</script>

<template>
  <UiAmbientBackground>
    <ClientOnly>
      <SectionsArtworkGallerySection />

      <template #fallback>
        <div class="container-custom py-20 lg:py-32">
          <div
            class="mt-16 grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-1 sm:auto-rows-[200px] sm:grid-cols-3 sm:gap-3 lg:auto-rows-[240px] lg:grid-cols-4 lg:gap-4"
          >
            <div
              v-for="n in 8"
              :key="n"
              class="animate-pulse rounded-2xl bg-surface"
            />
          </div>
        </div>
      </template>
    </ClientOnly>
  </UiAmbientBackground>
</template>

<script setup lang="ts">
const artworks = usePortfolioArtworks();
</script>

<template>
  <UiAmbientBackground>
    <section class="relative py-20 lg:py-32">
      <ClientOnly>
        <SectionsArtworkGallerySection
          :artworks="artworks"
          eyebrow="Full Archive"
          title="Portfolio"
          description="Every commissioned piece, original character and webtoon panel and more in one place."
          :show-cta="false"
          enable-load-more
          :initial-count="8"
          :load-more-step="8"
        />

        <template #fallback>
          <div class="container-custom">
            <div
              class="mt-16 grid grid-flow-dense grid-cols-2 gap-1 auto-rows-[160px] sm:grid-cols-3 sm:auto-rows-[200px] sm:gap-3 lg:grid-cols-4 lg:auto-rows-[240px] lg:gap-4"
            >
              <div
                v-for="n in 8"
                :key="n"
                class="animate-pulse rounded-2xl bg-zinc-100"
              />
            </div>
          </div>
        </template>
      </ClientOnly>
    </section>
  </UiAmbientBackground>
</template>

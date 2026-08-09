<script setup lang="ts">
const artworks = usePortfolioArtworks();
</script>

<template>
  <UiAmbientBackground>
    <section class="relative py-20 lg:py-32">
      <SectionsArtworkGallerySection
        :artworks="artworks"
        eyebrow="Full Archive"
        title="Portfolio"
        description="Every commissioned piece, original character and webtoon panel and more in one place."
        :show-cta="false"
      />
    </section>
  </UiAmbientBackground>
</template>

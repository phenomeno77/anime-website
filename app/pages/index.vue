<script setup lang="ts">
const artworks = useHomepageArtworks();
</script>

<template>
  <div>
    <!-- <SectionsHeroSection /> -->
    <SectionsHeroSection id="hero-section" />

    <!-- Section Artwork  -->
    <SectionsArtworkGallerySection id="artwork-gallery" :artworks="artworks" />

    <!-- Section Commission steps -->
    <UiSectionBackground variant="aurora">
      <SectionsCommissionSection />
    </UiSectionBackground>

    <!-- Section Webtoon -->
    <UiSectionBackground variant="lavender">
      <SectionsWebtoonSection />
    </UiSectionBackground>

    <!-- Section About me -->
    <UiSectionBackground variant="rose">
      <SectionsAboutTeaserSection />
    </UiSectionBackground>
  </div>
</template>

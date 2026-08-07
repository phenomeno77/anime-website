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
    <!-- Backgrounds available | "default"
  | "lavender"
  | "rose"
  | "sky"
  | "cream"
  | "aurora"-->
    <UiSectionBackground variant="aurora">
      <SectionsCommissionSection />
    </UiSectionBackground>

    <!-- <HomePricingSection />

    <HomeWebtoonSection />

    <HomeAboutSection />

    <HomeTestimonialsSection />

    <HomeFAQSection />

    <HomeCTASection />  -->
  </div>
</template>

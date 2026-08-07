<script setup lang="ts">
const artworks = useHomepageArtworks()

const scrollToGallery = () => {
  document
    .getElementById("artwork-gallery")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
}
</script>

<template>
  <div>
    <!-- <SectionsHeroSection /> -->
    <div
      class="parallax relative"
      :style="{
        backgroundImage: `url(/hero/hero-section-parallax.webp)`
      }">  
    
      <SectionsHeroSection />
      <button
        class="hidden cursor-pointer absolute bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white/80 p-4 shadow-xl backdrop-blur transition hover:scale-110 lg:block"
        @click="scrollToGallery"
      >
        ↓
      </button>

  </div>

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

<script setup lang="ts">
const artworks = useHomepageArtworks();

</script>

<template>
  <div>
    
    <SectionsHeroSection />
<!-- 
        <div class="parallax" :style="{
      backgroundImage:  `url(/hero/hero-section-parallax.webp)`}">

          <SectionsHeroSection />

    </div> -->

    

    <SectionsArtworkGallerySection id="artwork-gallery" :artworks="artworks" />

    <!--<HomeGallerySection />

    <HomeCommissionSection />

    <HomePricingSection />

    <HomeWebtoonSection />

    <HomeAboutSection />

    <HomeTestimonialsSection />

    <HomeFAQSection />

    <HomeCTASection /> -->
  </div>
</template>

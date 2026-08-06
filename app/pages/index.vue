<script setup lang="ts">
import type { Artwork } from "~/types/artwork";

const artworks: Artwork[] = [
  {
    id: "aw-1",
    title: "Moonlit Vow",
    medium: "Original Character",
    image: "/artwork-gallery/artworks-home/001.webp",
    thumbnail: "/artwork-gallery/artworks-home/001.webp",
    alt: "Anime character illustration under moonlight",
    size: "large",
  },
  {
    id: "aw-2",
    title: "Static District",
    medium: "Commission",
    image: "/artwork-gallery/artworks-home/003.webp",
    thumbnail: "/artwork-gallery/artworks-home/003.webp",
    alt: "Webtoon panel of a neon city street",
    size: "normal",
  },
  {
    id: "aw-3",
    title: "Ember",
    medium: "Webtoon Panel",
    image: "/artwork-gallery/artworks-home/002.webp",
    thumbnail: "/artwork-gallery/artworks-home/002.webp",
    alt: "Commissioned portrait of a fire-themed character",
    size: "tall",
  },
  {
    id: "aw-4",
    title: "Rooftop Duel",
    medium: "Commission",
    image: "/artwork-gallery/artworks-home/001.webp",
    thumbnail: "/artwork-gallery/artworks-home/001.webp",
    alt: "Action pose webtoon panel of two characters dueling",
    size: "normal",
  },
  {
    id: "aw-5",
    title: "Quiet Hour",
    medium: "Original Character",
    image: "/artwork-gallery/artworks-home/002.webp",
    thumbnail: "/artwork-gallery/artworks-home/002.webp",
    alt: "Soft lighting character illustration in a cafe",
    size: "normal",
  },
  {
    id: "aw-6",
    title: "Twin Blades",
    medium: "Webtoon Panel",
    image: "/artwork-gallery/artworks-home/003.webp",
    thumbnail: "/artwork-gallery/artworks-home/003.webp",
    alt: "Commissioned dual-wielding character illustration",
    size: "normal",
  },
  {
    id: "aw-7",
    title: "Quiet Hour",
    medium: "Original Character",
    image: "/artwork-gallery/artworks-home/001.webp",
    thumbnail: "/artwork-gallery/artworks-home/001.webp",
    alt: "Soft lighting character illustration in a cafe",
    size: "wide",
  },
];
</script>

<template>
  <div>
    <SectionsHeroSection />

    <SectionsArtworkGallerySection :artworks="artworks" />

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

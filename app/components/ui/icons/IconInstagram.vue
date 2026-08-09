<script setup lang="ts">
import { siInstagram } from "simple-icons";
</script>

<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFDC80" />
        <stop offset="25%" stop-color="#F56040" />
        <stop offset="50%" stop-color="#C13584" />
        <stop offset="75%" stop-color="#833AB4" />
        <stop offset="100%" stop-color="#405DE6" />
      </linearGradient>
    </defs>
    <path :d="siInstagram.path" fill="url(#ig-gradient)" />
  </svg>
</template>

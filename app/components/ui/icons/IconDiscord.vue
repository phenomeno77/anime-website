<script setup lang="ts">
import { siDiscord } from "simple-icons";
</script>

<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path :d="siDiscord.path" :fill="`#${siDiscord.hex}`" />
  </svg>
</template>

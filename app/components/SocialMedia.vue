<script setup lang="ts">
const linkClass = `
  inline-block
  h-8
  w-8
  text-muted
  opacity-70
  transition-all
  duration-300
  ease-smooth
  hover:-translate-y-0.5
  hover:text-text
  hover:opacity-100
`;
</script>

<template>
  <a
    href="https://www.instagram.com/inqu_buss/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    :class="linkClass"
  >
    <UiIconsIconInstagram class="h-full w-full" />
  </a>

  <a
    href="https://www.tiktok.com/@orimeskariokes"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    :class="linkClass"
  >
    <UiIconsIconTiktok class="h-full w-full" />
  </a>

  <a
    href="https://www.webtoons.com/en/canvas/nutcases/list?title_no=1084062"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WEBTOON"
    :class="linkClass"
  >
    <UiIconsIconWebtoon class="h-full w-full" />
  </a>

  <a
    href="https://discordid.netlify.app/?id=1276407146333995081"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Discord"
    :class="linkClass"
  >
    <UiIconsIconDiscord class="h-full w-full" />
  </a>
</template>

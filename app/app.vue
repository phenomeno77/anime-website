<script setup lang="ts">
useNavigationHeight();
</script>

<template>
  <BackgroundView />

  <div class="relative z-10 min-h-screen flex flex-col">
    <NavBar />

    <main class="flex-1 container mx-auto px-4 py-16">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<template>
  <section class="relative isolate overflow-hidden">
    <!-- Ambient background -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <!-- primary glow, top-right -->
      <div
        class="absolute right-[-15%] top-[-10%] h-[650px] w-[650px] rounded-full bg-glow/20 blur-[120px]"
      />
      <!-- secondary glow, mid-left, dimmer + cooler -->
      <div
        class="absolute left-[-20%] top-[35%] h-[550px] w-[550px] rounded-full bg-accent/15 blur-[120px]"
      />
      <!-- faint anchor glow, bottom-center -->
      <div
        class="absolute bottom-[-15%] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent-2/10 blur-[130px]"
      />

      <!-- subtle grid texture so the dark isn't a flat void -->
      <div class="ambient-grid absolute inset-0" />
    </div>

    <!-- Content -->
    <div class="relative">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.ambient-grid {
  background-image:
    linear-gradient(rgba(157, 92, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(157, 92, 255, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(
    ellipse 80% 60% at 50% 40%,
    black,
    transparent 75%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 80% 60% at 50% 40%,
    black,
    transparent 75%
  );
}
</style>

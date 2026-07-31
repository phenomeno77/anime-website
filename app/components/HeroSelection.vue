<template>
  <section
    class="text-center space-y-8 flex flex-col items-center justify-center"
  >
    <div>
      <Tag value="Anime Artist & Creator" severity="info" rounded />
    </div>
    <h1 class="text-5xl md:text-6xl font-extrabold text-sky-400 drop-shadow-lg">
      Anime & Digital Art Commissions
    </h1>

    <p class="text-xl text-slate-300 max-w-2xl mx-auto">
      Custom hand-painted anime PC glass panels and digital artwork crafted to
      order.
    </p>

    <div class="flex justify-center gap-4 pt-6">
      <NuxtLink to="/gallery" class="inline-flex">
        <Button label="Explore Gallery" size="large" />
      </NuxtLink>

      <NuxtLink to="/about" class="inline-flex">
        <Button
          label="About Artist"
          size="large"
          severity="secondary"
          outlined
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const flipped = ref(false);
const isMobile = ref(false);

let mql: MediaQueryList | null = null;

function updateIsMobile() {
  if (mql) isMobile.value = mql.matches;
}

function toggleFlip() {
  if (isMobile.value) {
    flipped.value = !flipped.value;
  }
}

const reveal = useReveal();

onMounted(() => {
  mql = window.matchMedia("(max-width: 767px)");
  updateIsMobile();
  mql.addEventListener("change", updateIsMobile);
});

onUnmounted(() => {
  mql?.removeEventListener("change", updateIsMobile);
});

</script>

<template>
<section class="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32"  >    
  <div class="container-custom max-w-7xl">
      <div
        class="grid min-h-[700px] items-center gap-8 md:grid-cols-2 lg:gap-16"
        :ref="reveal.target"
      :class="[
        reveal.isVisible.value
          ? 'show-element'
          : 'hide-element',
      ]"
      >
        <!-- LEFT CONTENT -->
        <div class="animate-hero-drop text-center lg:text-left">
          <!-- Eyebrow -->
          <div
            class="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600"
          >
            <span class="h-2 w-2 rounded-full bg-violet-500" />
            Anime Illustrator & Webtoon Creator
          </div>

          <!-- Heading -->
          <h1
            class="mx-auto max-w-md text-4xl font-bold leading-tight tracking-tight text-violet-300 sm:text-5xl lg:mx-0 lg:max-w-xl lg:text-7xl animate-hero-hero-up"
          >
            Your Characters
            <span
              class="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"
            >
              Beautifully
            </span>
            Illustrated.
          </h1>

          <!-- Description -->
          <p
            class="animate-hero-description-up mx-auto mt-8 max-w-md text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8 lg:mx-0"
          >
            Bringing your ideas to life through custom anime portraits, original
            characters and webtoon illustrations made with passion and attention
            to detail.
          </p>

          <!-- Buttons -->
          <div 
            class="animate-hero-scale mt-10 flex flex-col items-center gap-1 sm:gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <UiPrimaryButton label="Start Commission" />

            <button
              class="rounded-xl border border-zinc-200 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-700 transition duration-300 hover:-translate-y-1 hover:bg-zinc-50 active:translate-y-0"
            >
              <NuxtLink to="/portfolio">View Portfolio</NuxtLink>
            </button>
          </div>

          <!-- Trust indicators -->
          <div
            class="animate-hero-scale mt-12 flex flex-wrap justify-center gap-x-8 gap-y-6 text-center lg:justify-start lg:text-left"
          >
            <div>
              <strong class="block text-lg font-bold "
                >◉ 100+</strong
              >
              <span class="text-sm text-zinc-500">Custom artworks</span>
            </div>
            <div>
              <strong class="block text-lg font-bold "
                >◉ Original</strong
              >
              <span class="text-sm text-zinc-500">Webtoon stories</span>
            </div>
            <div>
              <strong class="block text-lg font-bold "
                >◉ High Quality</strong
              >
              <span class="text-sm text-zinc-500">Digital art</span>
            </div>
          </div>

          <!-- Social links -->
          <div
            class="animate-hero-description-up mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-zinc-500 transition hover:text-violet-500"
            >
              Instagram
            </a>
            <a
              href="https://www.webtoon.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-zinc-500 transition hover:text-violet-500"
            >
              Webtoon
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-zinc-500 transition hover:text-violet-500"
            >
              TikTok
            </a>
          </div>
        </div>

        <!-- RIGHT SIDE - Artwork -->
        <div class="animate-hero-scale relative flex h-full items-center justify-center">
          <!-- glows ... -->

          <div
            class="group relative aspect-[4/5] w-full max-w-xl"
            role="button"
            tabindex="0"
            aria-label="Flip artwork"
            @click="toggleFlip"
            @keydown.enter.space.prevent="toggleFlip"
          >
            <!-- Desktop -->
            <div
              class="hidden h-full w-full transition duration-700 md:block md:group-hover:[transform:perspective(1000px)_rotateY(8deg)_rotateX(4deg)]"
            >
              <NuxtImg
                src="/hero/hero-section.webp"
                alt="Featured artwork"
                class="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-xl transition duration-700 md:group-hover:scale-105 md:group-hover:rotate-2"
                width="800"
                height="1000"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 576px"
                format="webp"
                quality="85"
                loading="eager"
                fetchpriority="high"
                preload
              />

              <NuxtImg
                src="/hero/hero-section-hover.webp"
                alt="Featured artwork hover"
                class="absolute inset-0 h-full w-full rounded-[2rem] object-cover opacity-0 shadow-xl transition duration-700 md:group-hover:opacity-100 md:group-hover:scale-105 md:group-hover:-rotate-2"
                width="800"
                height="1000"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 576px"
                format="webp"
                quality="85"
                loading="lazy"
              />
            </div>
            <!-- Mobile (tap to flip) -->
            <div
              class="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl md:hidden"
              style="perspective: 1000px"
            >
              <div
                class="relative h-full w-full transition-transform duration-700"
                :class="flipped ? '[transform:rotateY(180deg)]' : ''"
                style="transform-style: preserve-3d"
              >
                <!-- Front -->
                <NuxtImg
                  src="/hero/hero-section.webp"
                  alt="Featured artwork"
                  class="absolute inset-0 h-full w-full rounded-[2rem] object-cover"
                  width="800"
                  height="1000"
                  format="webp"
                  quality="85"
                  loading="eager"
                  style="backface-visibility: hidden"
                />

                <!-- Back -->
                <NuxtImg
                  src="/hero/hero-section-hover.webp"
                  alt="Featured artwork hover"
                  class="absolute inset-0 h-full w-full rounded-[2rem] object-cover"
                  width="800"
                  height="1000"
                  format="webp"
                  quality="85"
                  loading="lazy"
                  style="
                    backface-visibility: hidden;
                    transform: rotateY(180deg);
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import "photoswipe/style.css";

const commissionTypes = [
  {
    title: "Portrait Illustration",
    description:
      "Character-focused illustrations with a basic textured background or a flat color background.",
    options: [
      {
        name: "Bust Up",
        price: "$75 - $110",
        time: "2-3 weeks",
        exampleImage: "/commissions/examples/bust-up.webp",
      },
      {
        name: "Half Body",
        price: "$110 - $150",
        time: "2-3 weeks",
        exampleImage: "/commissions/examples/half-body.webp",
      },
      {
        name: "Full Body",
        price: "$150 - $200",
        time: "3-4 weeks",
        exampleImage: "/commissions/examples/full-body.webp",
      },
    ],
  },
  {
    title: "Character Reference Sheet",
    description:
      "A complete character reference sheet with up to 3 illustrations with a basic textured background or flat color background.",
    options: [
      {
        name: "2 Bust Up Illustrations",
        price: "$200 - $300",
        time: "5-6 weeks",
        exampleImage: "/commissions/examples/ref-sheet-bust-up.webp",
      },
      {
        name: "1 Bust Up + 1 Half Body",
        price: "$270 - $400",
        time: "5-6 weeks",
        exampleImage: "/commissions/examples/ref-sheet-mixed.webp",
      },
    ],
  },
];

/* ---------------- PhotoSwipe single-image viewer ---------------- */
let lightbox: any = null;

const dimCache = new Map<string, { w: number; h: number }>();
function loadDims(src: string): Promise<{ w: number; h: number }> {
  if (dimCache.has(src)) return Promise.resolve(dimCache.get(src)!);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const d = { w: img.naturalWidth || 1600, h: img.naturalHeight || 2000 };
      dimCache.set(src, d);
      resolve(d);
    };
    img.onerror = () => resolve({ w: 1600, h: 2000 });
    img.src = src;
  });
}

async function openExample(option: { name: string; exampleImage?: string }) {
  if (!option.exampleImage || !lightbox) return;
  const dims = await loadDims(option.exampleImage);
  lightbox.loadAndOpen(0, [
    {
      src: option.exampleImage,
      width: dims.w,
      height: dims.h,
      alt: `Example of ${option.name}`,
      title: `${option.name} — Example`,
    },
  ]);
}

onMounted(async () => {
  const { default: PhotoSwipeLightbox } = await import("photoswipe/lightbox");
  lightbox = new PhotoSwipeLightbox({
    pswpModule: () => import("photoswipe"),
    bgOpacity: 0.96,
    showHideAnimationType: "zoom",
    wheelToZoom: true,
  });

  lightbox.on("uiRegister", () => {
    lightbox.pswp.ui.registerElement({
      name: "inqu-caption",
      order: 9,
      isButton: false,
      appendTo: "root",
      onInit: (el: HTMLElement) => {
        const update = () => {
          const d = lightbox.pswp.currSlide?.data ?? {};
          el.className = "pswp__inqu-caption";
          el.innerHTML = d.title
            ? `<span class="c-name">${d.title}</span>`
            : "";
        };
        lightbox.pswp.on("change", update);
        update();
      },
    });
  });

  lightbox.init();
});

onUnmounted(() => {
  lightbox?.destroy?.();
  lightbox = null;
});
</script>

<template>
  <section class="relative">
    <div class="container-custom py-12">
      <h2 class="font-display text-3xl font-bold tracking-tight text-text">
        Available Commissions
      </h2>

      <div class="mt-8 grid gap-8 lg:grid-cols-2">
        <article
          v-for="type in commissionTypes"
          :key="type.title"
          class="rounded-3xl border border-border bg-surface p-8"
        >
          <h3 class="font-display text-2xl font-bold tracking-tight text-text">
            {{ type.title }}
          </h3>

          <p class="mt-4 text-muted">{{ type.description }}</p>

          <div class="mt-8 space-y-4">
            <div
              v-for="option in type.options"
              :key="option.name"
              class="flex justify-between rounded-2xl border border-border bg-bg/40 p-5"
            >
              <div>
                <p class="font-medium text-text">
                  {{ option.name }}
                  <button
                    v-if="option.exampleImage"
                    type="button"
                    class="ml-1 cursor-pointer text-sm font-normal text-accent-2 underline underline-offset-2 transition-colors hover:text-glow"
                    @click="openExample(option)"
                  >
                    (see example)
                  </button>
                </p>
                <p class="text-sm text-muted">{{ option.time }}</p>
              </div>
              <p class="font-medium text-text">{{ option.price }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style>
.pswp {
  --pswp-bg: #0b0a0f;
}
.pswp__inqu-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 18px;
  text-align: center;
  padding: 0 16px;
  pointer-events: none;
}
.pswp__inqu-caption .c-name {
  font-family: "Clash Display", sans-serif;
  color: var(--color-text);
  font-size: 1.05rem;
}
</style>

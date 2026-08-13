<script lang="ts" setup>
import type { Artwork } from "~/types/artwork";

const artworks = useHomepageArtworks();

const sizeClasses: Record<Artwork["size"], string> = {
  large: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

/* ---------------- PhotoSwipe lightbox ---------------- */
let lightbox: any = null;

// resolve natural image dimensions once, cached (instant for already-loaded thumbs)
const dimCache = new Map<string, { w: number; h: number }>();
function loadDims(src: string): Promise<{ w: number; h: number }> {
  if (dimCache.has(src)) return Promise.resolve(dimCache.get(src)!);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const d = {
        w: img.naturalWidth || 1600,
        h: img.naturalHeight || 2000,
      };
      dimCache.set(src, d);
      resolve(d);
    };
    img.onerror = () => resolve({ w: 1600, h: 2000 });
    img.src = src;
  });
}

async function toSlide(a: Artwork) {
  const dims =
    a.width && a.height ? { w: a.width, h: a.height } : await loadDims(a.image);
  return {
    src: a.image,
    width: dims.w,
    height: dims.h,
    alt: a.alt,
    medium: a.medium ?? "",
    title: a.title ?? "",
  };
}

async function openLightbox(artwork: Artwork) {
  if (!lightbox) return;
  const items = await Promise.all(
    (artworks.value ?? []).map((a) => toSlide(a)),
  );
  const index = Math.max(
    0,
    artworks.value.findIndex((a) => a.id === artwork.id),
  );
  lightbox.loadAndOpen(index, items);
}

onMounted(async () => {
  const { default: PhotoSwipeLightbox } = await import("photoswipe/lightbox");
  lightbox = new PhotoSwipeLightbox({
    pswpModule: () => import("photoswipe"),
    bgOpacity: 0.96,
    showHideAnimationType: "zoom",
    wheelToZoom: true,
  });

  // custom caption: medium (eyebrow) + title
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
          el.innerHTML =
            d.title || d.medium
              ? `${d.medium ? `<span class="c-cat">${d.medium}</span>` : ""}${
                  d.title ? `<span class="c-name">${d.title}</span>` : ""
                }`
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

const reveal = useReveal();
</script>

<template>
  <section class="relative py-20 lg:py-32">
    <div
      class="container-custom"
      :ref="reveal.target"
      :class="[reveal.isVisible.value ? 'show-element' : 'hide-element']"
    >
      <UiSectionTitle
        eyebrow="Selected Work"
        title="Featured Artwork"
        description="A small selection of recent pieces — original characters, webtoon panels and client commissions. Click any piece to open it full-screen and zoom in."
        class="animate-drop"
      />

      <div
        class="mt-16 grid grid-flow-dense grid-cols-2 auto-rows-[160px] gap-1 sm:auto-rows-[200px] sm:grid-cols-3 sm:gap-3 lg:auto-rows-[240px] lg:grid-cols-4 lg:gap-4"
      >
        <UiArtworkCard
          v-for="(artwork, index) in artworks"
          :key="artwork.id"
          class="animate-scale"
          :style="{ animationDelay: (index % 8) * 70 + 'ms' }"
          :artwork="artwork"
          :span-class="sizeClasses[artwork.size]"
          @select="openLightbox"
        />
      </div>

      <div class="mt-10 flex justify-center">
        <UiPrimaryButton label="View Full Portfolio" href="/portfolio" />
      </div>
    </div>
  </section>
</template>

<style>
/* PhotoSwipe teleports to <body>, so this stays unscoped */
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
.pswp__inqu-caption .c-cat {
  display: block;
  margin-bottom: 4px;
  color: var(--color-accent-2);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.7rem;
  font-weight: 700;
}
.pswp__inqu-caption .c-name {
  font-family: "Clash Display", sans-serif;
  color: var(--color-text);
  font-size: 1.05rem;
}
</style>

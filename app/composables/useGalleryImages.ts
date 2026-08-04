// composables/useGalleryImages.ts
type GallerySize = "small" | "medium" | "big";

interface GalleryImage {
  src: string;
  size: GallerySize;
  position: number;
}

const getGallerySize = (value?: string): GallerySize => {
  if (value === "medium" || value === "big") {
    return value;
  }

  return "small";
};

export const useGalleryImages = (): GalleryImage[] => {
  const images = import.meta.glob<string>(
    "~/assets/gallery/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    },
  );

  return Object.entries(images)
    .map(([path, src]) => {
      const filename = path.split("/").pop() ?? "";

      const match = filename.match(/^(\d+)(?:-(medium|big))?/);

      return {
        src,
        position: Number(match?.[1] ?? 0),
        size: getGallerySize(match?.[2]),
      };
    })
    .sort((a, b) => a.position - b.position);
};

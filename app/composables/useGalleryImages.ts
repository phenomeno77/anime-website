// composables/useGalleryImages.ts

export const useGalleryImages = (): string[] => {
  const images = import.meta.glob<string>(
    "~/assets/gallery/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    },
  );

  return Object.values(images).sort();
};

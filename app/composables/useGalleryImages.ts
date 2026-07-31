// composables/useGalleryImages.ts

export const useGalleryImages = () => {
  return Object.values(
    import.meta.glob("~/assets/gallery/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  );
};

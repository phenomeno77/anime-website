export const useHomepageGalleryImages = (): string[] => {
  return Object.values(
    import.meta.glob<string>("~/assets/homepageGallery/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  );
};

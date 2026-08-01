// composables/useBackgroundImages.ts

export const useBackgroundImages = () => {
  return Object.entries(
    import.meta.glob("~/assets/background-home/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, value]) => value);
};

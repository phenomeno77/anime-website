import type { Artwork, ArtworkSize } from "../types/artwork";

const VALID_SIZES: ArtworkSize[] = ["large", "tall", "wide", "normal"];

function parseSize(value?: string): ArtworkSize {
  return VALID_SIZES.includes(value as ArtworkSize)
    ? (value as ArtworkSize)
    : "normal";
}

export const usePortfolioArtworks = (): Artwork[] => {
  const images = import.meta.glob<string>(
    "/assets/artworks-portfolio/*.{webp,jpg,jpeg,png}",
    { eager: true, import: "default" },
  );

  console.log("glob matched:", Object.keys(images)); // ← temporary

  return Object.entries(images)
    .map(([path, src]) => {
      const filename = path.split("/").pop() ?? "";
      // "014-large.webp" -> position "014", size "large"
      // "007.webp"       -> position "007", size "normal" (default)
      const match = filename.match(/^(\d+)(?:-(large|tall|wide|normal))?/);
      const position = Number(match?.[1] ?? 0);

      const artwork: Artwork = {
        id: `pf-${match?.[1] ?? position}`,
        image: src,
        thumbnail: src,
        alt: `Artwork ${match?.[1] ?? position}`,
        size: parseSize(match?.[2]),
      };

      return { artwork, position };
    })
    .sort((a, b) => a.position - b.position)
    .map(({ artwork }) => artwork);
};

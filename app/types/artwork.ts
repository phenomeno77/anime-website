export type ArtworkSize = "large" | "tall" | "wide" | "normal";

export interface Artwork {
  id: string;
  image: string;
  thumbnail: string;
  alt: string;
  size: ArtworkSize;
  title?: string;
  medium?: string;
  width?: number;
  height?: number;
}

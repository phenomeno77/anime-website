import fs from "node:fs";
import path from "node:path";

export default defineEventHandler(() => {
  // Path to public/gallery
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  // Read all files and filter for .png images
  const files = fs.readdirSync(galleryDir);
  const pngImages = files
    .filter((file) => file.toLowerCase().endsWith(".jpg"))
    .map((file) => `/gallery/${file}`); // Public URL path

  return pngImages;
});

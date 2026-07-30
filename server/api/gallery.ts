import fs from "node:fs";
import path from "node:path";

export default defineEventHandler(async () => {
  // Use path resolution that works both in dev and built Node servers
  const galleryDir = path.resolve(process.cwd(), "public/gallery");

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  const files = fs.readdirSync(galleryDir);

  // Note: Your filter was looking for '.jpg', but your variable was named pngImages
  const imageFiles = files
    .filter(
      (file) =>
        file.toLowerCase().endsWith(".jpg") ||
        file.toLowerCase().endsWith(".png"),
    )
    .map((file) => `/gallery/${file}`);

  return imageFiles;
});

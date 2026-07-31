import fs from "node:fs";
import path from "node:path";

export default defineEventHandler(async () => {
  console.log("Fetching gallery images...");
  const galleryDir = path.resolve(process.cwd(), "public/gallery");

   console.log("cwd:", process.cwd());
  console.log("galleryDir:", galleryDir);
  console.log("exists:", fs.existsSync(galleryDir));

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

  console.log(imageFiles);

  return imageFiles;
});

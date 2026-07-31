import fs from "node:fs";
import path from "node:path";

const galleryDir = path.resolve("public/gallery");
const outputFile = path.resolve("public/gallery/index.json");

if (!fs.existsSync(galleryDir)) {
  console.error("Gallery directory does not exist:", galleryDir);
  process.exit(1);
}

const images = fs
  .readdirSync(galleryDir)
  .filter((file) => /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(file))
  .sort()
  .map((file) => `/gallery/${file}`);

fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));

console.log(`Generated gallery/index.json with ${images.length} images.`);
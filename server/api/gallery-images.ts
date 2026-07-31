// server/api/about-images.ts
import { readdir } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async () => {
  const dir = join(process.cwd(), "public/gallery");
  const files = await readdir(dir);

  return files
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => `/gallery/${file}`);
});

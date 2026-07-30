import { readdir } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async (event) => {
  const folder = getRouterParam(event, "folder");

  if (!folder) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing folder name",
    });
  }

  const folderPath = join(process.cwd(), "public", folder);

  const files = await readdir(folderPath);

  return files
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => `/${folder}/${file}`);
});

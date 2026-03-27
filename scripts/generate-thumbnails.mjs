import { mkdir, readdir, stat } from "node:fs/promises";
import { dirname, extname, join, relative } from "node:path";
import sharp from "sharp";

const publicRoot = join(process.cwd(), "public");
const outputRoot = join(publicRoot, "thumbs");
const sourceDirs = [join(publicRoot, "images"), join(publicRoot, "gallery-images")];
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const targetWidthFor = (relativePath) => {
  if (relativePath.startsWith("images/hero")) return 1600;
  if (relativePath.startsWith("images/")) return 960;
  return 900;
};

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = join(dir, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    }),
  );

  return files.flat();
};

for (const dir of sourceDirs) {
  const files = await walk(dir);

  for (const file of files) {
    if (!imageExtensions.has(extname(file).toLowerCase())) continue;

    const relativePath = relative(publicRoot, file).replace(/\\/g, "/");
    const outputPath = join(outputRoot, relativePath).replace(/\.[^.]+$/, ".webp");

    const [sourceStats, existingStats] = await Promise.all([
      stat(file),
      stat(outputPath).catch(() => null),
    ]);

    if (existingStats && existingStats.mtimeMs >= sourceStats.mtimeMs) {
      continue;
    }

    await mkdir(dirname(outputPath), { recursive: true });

    await sharp(file)
      .rotate()
      .resize({ width: targetWidthFor(relativePath), withoutEnlargement: true })
      .webp({ quality: 72, effort: 4 })
      .toFile(outputPath);
  }
}
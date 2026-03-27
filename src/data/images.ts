export const thumbnailFor = (imagePath: string) => {
  if (!imagePath.startsWith("/")) {
    return imagePath;
  }

  return `/thumbs${imagePath.replace(/\.[^.]+$/, ".webp")}`;
};
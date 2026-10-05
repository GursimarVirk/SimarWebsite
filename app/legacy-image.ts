export function legacyImage(src: string) {
  return `/api/legacy-image?src=${encodeURIComponent(src)}`;
}

export function legacyImage(src: string) {
  // Google Sites' image CDN already serves the original portfolio assets publicly.
  // Keep the source URL intact instead of proxying it through a server route; the
  // proxy was the reason the deployed portfolio rendered empty image frames.
  return src;
}

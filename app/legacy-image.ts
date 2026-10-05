const prefixMap: Record<string, string> = {
  "AMxu72v7": "/images/Home/dcb69b8d3505bf2fbe6ff659aff682b4.webp",
  "AMxu72sKr": "/images/Home/0916f5e28e0a1edb3590341eb6dd5c2c.webp",
  "AMxu72sKO": "/images/Home/60a566a5a4395445cc3d781dbab4e536.webp",
  "AMxu72uRX": "/images/Home/d40fc533c4af7350b0ce95a3627f0658.webp",
  "AMxu72vv9": "/images/Home/027b9604ec0a299f5ae4b6edd26c88b4.webp",
  "AMxu72uRE": "/images/Home/b5edc2802fd22f5e3d828898fd11e6f4.webp",
  "AMxu72sg-": "/images/Home/67c15c7a7ba0b7e2a3252cb7c0b6c6e6.webp",
  "AMxu72uKt": "/images/Combat Box/76e706e5b8a5d2856e048b6e3f51bf92.webp",
  "AMxu72uE7": "/images/Home/d727f021d5f96238b980a330b25da90b.webp",
  "AMxu72vFKS": "/images/Home/2ea1f7ee762bbaaa434b56d33143590f.webp",
  "AMxu72tia": "/images/Kesier Wire Raceway/a7c13c2d2bd19eb90e68383b5a985ac4.webp",
};

export function legacyImage(src: string) {
  if (!src) return src;
  if (src.startsWith("/")) return src;

  const marker = "/sitesv-images-rt/";
  const id = src.includes(marker) ? src.split(marker)[1] : src;
  const key = Object.keys(prefixMap).find((prefix) => id.startsWith(prefix));
  return key ? prefixMap[key] : src;
}

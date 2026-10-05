import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://simarvirk.com/sitemap.xml",
    host: "https://simarvirk.com",
  };
}

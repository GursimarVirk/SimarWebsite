import { NextRequest } from "next/server";

const ALLOWED_HOSTS = new Set([
  "sites.google.com",
  "i.ytimg.com",
  "pbcdn1.podbean.com",
  "kuwaittimes.com",
]);

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");
  if (!src) return new Response("Invalid image source", { status: 400 });

  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return new Response("Invalid image source", { status: 400 });
  }

  if (url.protocol !== "https:" || !ALLOWED_HOSTS.has(url.hostname)) {
    return new Response("Image host not allowed", { status: 403 });
  }

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "SimarVirkPortfolio/1.0" },
      next: { revalidate: 86400 },
    });

    if (!response.ok) return new Response("Image unavailable", { status: response.status });

    return new Response(await response.arrayBuffer(), {
      headers: {
        "Content-Type": response.headers.get("content-type") || "image/jpeg",
        "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
      },
    });
  } catch {
    return new Response("Image unavailable", { status: 502 });
  }
}

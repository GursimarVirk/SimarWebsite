import { NextRequest } from "next/server";

const ALLOWED_PREFIX = "https://sites.google.com/sitesv-images-rt/";

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");
  if (!src || !src.startsWith(ALLOWED_PREFIX)) {
    return new Response("Invalid image source", { status: 400 });
  }

  try {
    const response = await fetch(src, {
      headers: { "User-Agent": "SimarVirkPortfolio/1.0" },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return new Response("Image unavailable", { status: response.status });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    return new Response(await response.arrayBuffer(), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
      },
    });
  } catch {
    return new Response("Image unavailable", { status: 502 });
  }
}

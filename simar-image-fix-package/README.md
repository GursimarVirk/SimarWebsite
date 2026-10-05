# SimarVirk image migration

These are the recovered Google Sites portfolio images converted to WebP for the new
simarvirk.com site.

Source:
- Google Takeout export supplied by Gursimar Virk
- PUBLISHED portfolio assets
- 48 valid image assets recovered
- Images resized to max 1800 px and compressed for web delivery

Install:
1. Copy `public/images/` into the Next.js repository's `public/` directory.
2. Replace the old `sites.google.com/sitesv-images-rt/...` image URLs with local
   paths such as `/images/Home/dcb69b8d3505bf2fbe6ff659aff682b4.webp`.
3. Do not keep the Google Sites CDN as a dependency.

The original export also contains a few files whose `.jpg` extension actually
contains HEIF/HEVC data. Those were converted to valid WebP files here so browsers
do not depend on the misleading extension.

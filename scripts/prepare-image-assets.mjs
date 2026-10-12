import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { inflateRawSync } from "node:zlib";

const root = process.cwd();
const archive = path.join(root, "simar-image-fix-package.zip");
if (!existsSync(archive)) {
  console.warn("[prepare-image-assets] ZIP not present; keeping checked-in public assets.");
  process.exit(0);
}

const destinations = new Map([
  ["global-pounding-main.webp", "public/images/15lb Robot/global-pounding-main.webp"],
  ["global-pounding-parts.webp", "public/images/15lb Robot/global-pounding-parts.webp"],
  ["global-pounding-build.webp", "public/images/15lb Robot/global-pounding-build.webp"],
  ["global-pounding-fight.webp", "public/images/15lb Robot/global-pounding-fight.webp"],
  ["15dof-hand-testing.webp", "public/images/Robotic Hand/15dof-hand-testing.webp"],
  ["15dof-hand-build-annotated.webp", "public/images/Robotic Hand/15dof-hand-build-annotated.webp"],
]);

const zip = readFileSync(archive);
let eocd = -1;
for (let i = Math.max(0, zip.length - 65557); i <= zip.length - 22; i++) {
  if (zip.readUInt32LE(i) === 0x06054b50) eocd = i;
}
if (eocd < 0) {
  console.warn("[prepare-image-assets] ZIP central directory not found; skipping extraction.");
  process.exit(0);
}

const entries = zip.readUInt16LE(eocd + 10);
let cursor = zip.readUInt32LE(eocd + 16);
let copied = 0;
for (let n = 0; n < entries && cursor + 46 <= zip.length; n++) {
  if (zip.readUInt32LE(cursor) !== 0x02014b50) break;
  const method = zip.readUInt16LE(cursor + 10);
  const compressedSize = zip.readUInt32LE(cursor + 20);
  const uncompressedSize = zip.readUInt32LE(cursor + 24);
  const nameLength = zip.readUInt16LE(cursor + 28);
  const extraLength = zip.readUInt16LE(cursor + 30);
  const commentLength = zip.readUInt16LE(cursor + 32);
  const localOffset = zip.readUInt32LE(cursor + 42);
  const entryName = zip.subarray(cursor + 46, cursor + 46 + nameLength).toString("utf8");
  const baseName = path.posix.basename(entryName);
  const destination = destinations.get(baseName);

  if (destination && localOffset + 30 <= zip.length) {
    const localNameLength = zip.readUInt16LE(localOffset + 26);
    const localExtraLength = zip.readUInt16LE(localOffset + 28);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = zip.subarray(dataStart, dataStart + compressedSize);
    let bytes;
    if (method === 0) bytes = Buffer.from(compressed);
    else if (method === 8) bytes = inflateRawSync(compressed);
    else {
      console.warn(`[prepare-image-assets] Unsupported compression method ${method} for ${entryName}`);
      cursor += 46 + nameLength + extraLength + commentLength;
      continue;
    }
    if (bytes.length === uncompressedSize) {
      const target = path.join(root, destination);
      mkdirSync(path.dirname(target), { recursive: true });
      writeFileSync(target, bytes);
      copied++;
      console.log(`[prepare-image-assets] Installed ${destination}`);
    }
  }
  cursor += 46 + nameLength + extraLength + commentLength;
}
console.log(`[prepare-image-assets] Installed ${copied}/${destinations.size} portfolio images.`);

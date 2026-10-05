export type LegacyEmbed = { title: string; src: string; open: string; kind: "drive" | "doc" | "slides" };
export type LegacyPage = { title: string; eyebrow: string; intro?: string; blocks: string[]; embeds?: LegacyEmbed[]; links?: {label:string; href:string}[]; imageFolder?: string };

import { legacyPagesA } from "./legacy-data-a";
import { legacyPagesB } from "./legacy-data-b";
import { legacyPagesC } from "./legacy-data-c";

export const legacyPages: Record<string, LegacyPage> = {
  ...legacyPagesA,
  ...legacyPagesB,
  ...legacyPagesC,
};
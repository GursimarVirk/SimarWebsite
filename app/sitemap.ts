import type { MetadataRoute } from "next";

const base = "https://simarvirk.com";

const routes = [
  "",
  "/media",
  "/media/stats",
  "/experience/meta",
  "/experience/amazon-robotics",
  "/experience/combat-robotics-at-berkeley",
  "/experience/ultimate-fight-bots",
  "/experience/sorcerer-earth",
  "/experience/autopallet-robotics",
  "/experience/keiser",
  "/projects/30-lb-combat-robot",
  "/projects/15-lb-combat-robots",
  "/projects/humanoid-robotics",
  "/projects/grocerygizmo",
  "/projects/robotic-hand",
  "/projects/combat-box",
  "/projects/motorcycle-communication-system",
  "/projects/cars-and-machines",
  "/projects/nasa-hunch-magnetic-boots",
  "/projects/iot-millipede-monitor",
  "/projects/towel-holder-innovation",
  "/projects/statistics-data-project",
  "/projects/robotic-arms",
  "/projects/keiser-wire-raceway",
  "/projects/class-projects",
  "/projects/hobbies-other",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: base + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/experience/") ? 0.9 : 0.8,
  }));
}

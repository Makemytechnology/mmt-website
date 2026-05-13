import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://makemytechnology.com";
  const routes = [
    "",
    "/5g-6g",
    "/5g-6g/studio-core",
    "/5g-6g/studio-testbench",
    "/5g-6g/studio-fleet",
    "/5g-6g/studio-field",
    "/iot",
    "/ai",
    "/drone-corridor",
    "/quantum",
    "/contact",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

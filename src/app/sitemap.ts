import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://makemytechnology.com";
  const routes = [
    "",
    "/5g-6g",
    "/5g-6g/studio-core",
    "/5g-6g/studio-gnb",
    "/5g-6g/studio-testbench",
    "/5g-6g/studio-fleet",
    "/5g-6g/studio-field",
    "/5g-6g/studio-academy",
    "/iot",
    "/gnu-radio",
    "/ai",
    "/drone-corridor",
    "/quantum",
    "/contact",
    "/documents/gnb-specifications",
    "/documents/studio-5g-manual",
    "/documents/cots-manual",
    "/documents/gnu-manual",
    "/documents/5g-system-engineering-syllabus",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

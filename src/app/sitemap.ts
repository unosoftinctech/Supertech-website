import type { MetadataRoute } from "next";

import { company, navLinks } from "@/data/site";

export const dynamic = "force-static";

const baseUrl = `https://${company.website}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map(({ href }): MetadataRoute.Sitemap[number] => ({
    url: href === "/" ? `${baseUrl}/` : `${baseUrl}${href}/`,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}

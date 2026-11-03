import type { MetadataRoute } from "next";

import { blogPosts, company, navLinks } from "@/data/site";

export const dynamic = "force-static";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || `https://${company.website}`
).replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = navLinks.map(
    ({ href }): MetadataRoute.Sitemap[number] => ({
      url: href === "/" ? `${baseUrl}/` : `${baseUrl}${href}/`,
      changeFrequency: "monthly",
      priority: href === "/" ? 1 : 0.7,
    })
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}/`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}

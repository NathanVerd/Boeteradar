import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boeteradar.vercel.app";

  const pages = [
    "",
    "/btw-aangifte-te-laat",
    "/btw-te-laat-betaald",
    "/autokeuring-vervallen",
    "/personenbelasting-te-laat",
    "/student-te-veel-gewerkt",
    "/checklists/btw-deadline-checklist",
    "/checklists/personenbelasting-noodchecklist",
    "/disclaimer",
    "/bronnen",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : page.includes("/checklists/") ? 0.7 : 0.8,
  }));
}
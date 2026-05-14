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
    "/disclaimer",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}
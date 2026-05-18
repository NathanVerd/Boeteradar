import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.boeteradar.be";

  const pages = [
    "",
    "/over",
    "/bronnen",
    "/disclaimer",
    "/feedback",
    "/hulp-aanvragen",
    "/btw-aangifte-te-laat",
    "/btw-te-laat-betaald",
    "/brief-fod-financien-ontvangen",
    "/personenbelasting-te-laat",
    "/autokeuring-vervallen",
    "/student-te-veel-gewerkt",
    "/checklists/btw-deadline-checklist",
    "/checklists/personenbelasting-noodchecklist",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      page === ""
        ? 1
        : page === "/hulp-aanvragen"
          ? 0.9
          : page === "/over" || page === "/bronnen" || page === "/feedback"
            ? 0.85
            : page.includes("/checklists/")
              ? 0.7
              : 0.8,
  }));
}
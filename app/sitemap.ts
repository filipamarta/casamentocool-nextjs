import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.casamentocool.pt/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      alternates: {
        languages: {
          pt: "https://www.casamentocool.pt/pt",
          en: "https://www.casamentocool.pt/en",
        },
      },
    },
  ];
}

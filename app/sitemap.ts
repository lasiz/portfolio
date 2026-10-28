import { MetadataRoute } from "next";
import { profile } from "@/constant/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = profile.siteUrl.replace(/\/$/, "");

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(profile.lastUpdated),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

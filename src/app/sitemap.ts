import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllProjectSlugs } from "@/lib/projects";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;
  const staticPages = ["/", "/about", "/work", "/contact", "/resume"];
  const projectPages = getAllProjectSlugs().map((slug) => `/work/${slug}`);
  const pages = [...staticPages, ...projectPages];

  const path = (locale: string, page: string) =>
    `${baseUrl}/${locale}${page === "/" ? "" : page}`;

  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: path(locale, page),
      lastModified: new Date(),
      alternates: {
        languages: {
          ...Object.fromEntries(routing.locales.map((l) => [l, path(l, page)])),
          "x-default": path(routing.defaultLocale, page),
        },
      },
    })),
  );
}

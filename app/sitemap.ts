import type { MetadataRoute } from "next"
import { locales } from "@/middleware"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atlas-law.com"
  const routes = ["", "/services", "/about", "/team", "/contact"]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate entries for each route in each locale
  routes.forEach((route) => {
    const entry: MetadataRoute.Sitemap[0] = {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {},
      },
    }

    // Add language alternates
    locales.forEach((locale) => {
      if (entry.alternates?.languages) {
        entry.alternates.languages[locale] = `${baseUrl}/${locale}${route}`
      }
    })

    sitemap.push(entry)
  })

  return sitemap
}


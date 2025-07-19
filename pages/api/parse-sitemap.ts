import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseStringPromise } from "xml2js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const sitemapUrl = "https://aicipherleads.com/sitemap-0.xml";
    const response = await axios.get(sitemapUrl);
    const result = await parseStringPromise(response.data);

    type SitemapEntry = {
      loc: string[];
      lastmod?: string[];
      changefreq?: string[];
      priority?: string[];
    };

    const pages = result.urlset.url.map((entry: SitemapEntry) => ({
      url: entry.loc[0],
      lastmod: entry.lastmod?.[0] || "",
      changefreq: entry.changefreq?.[0] || "daily",
      priority: entry.priority?.[0] || "0.5",
    }));

    res.status(200).json(pages);
  } catch (error) {
    console.error("Error parsing sitemap:", error);
    res.status(500).json({ error: "Failed to parse sitemap" });
  }
}

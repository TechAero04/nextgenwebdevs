import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

const paths = [
  "",
  "/features",
  "/templates",
  "/pricing",
  "/about",
  "/contact",
  "/signup",
  "/login",
  "/terms",
  "/privacy",
  "/refund-policy",
  "/license",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${company.url}${p}` }));
}

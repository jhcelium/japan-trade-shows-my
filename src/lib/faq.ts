import type { FAQ } from "../content/site.config";

export function faqEntriesWithSlug(faq: FAQ[]): (FAQ & { slug: string })[] {
  return faq.filter((item): item is FAQ & { slug: string } => Boolean(item.slug));
}

export function findFaqBySlug(faq: FAQ[], slug: string): (FAQ & { slug: string }) | undefined {
  return faqEntriesWithSlug(faq).find((item) => item.slug === slug);
}

export function previewText(text: string, maxLen = 160): string {
  const t = text.trim();
  if (t.length <= maxLen) return t;
  return `${t.slice(0, maxLen - 1).trim()}…`;
}

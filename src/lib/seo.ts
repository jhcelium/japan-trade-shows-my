import { siteConfig } from "../content/site.config";

/** Build canonical URL for a given path */
export function canonicalUrl(path: string): string {
  const domain = siteConfig.domain;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `https://${domain}${cleanPath}`;
}

/** Build full page title */
export function pageTitle(subtitle?: string): string {
  if (!subtitle) return siteConfig.siteName;
  return `${subtitle} | ${siteConfig.siteName}`;
}

/** JSON-LD: Organization */
export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    url: `https://${siteConfig.domain}`,
    description: siteConfig.primaryIntent,
    ...(siteConfig.localPresence && {
      address: {
        "@type": "PostalAddress",
        addressLocality: "Osaka",
        addressRegion: "Osaka",
        addressCountry: "JP",
      },
    }),
  };
}

/** JSON-LD: WebSite */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: `https://${siteConfig.domain}`,
    description: siteConfig.brandLine,
  };
}

/** JSON-LD: WebPage */
export function webPageJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: canonicalUrl(path),
    isPartOf: {
      "@type": "WebSite",
      url: `https://${siteConfig.domain}`,
    },
  };
}

/** JSON-LD: FAQPage */
export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

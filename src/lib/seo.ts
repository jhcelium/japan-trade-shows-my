import { siteConfig } from "../content/site.config";

const SITE_URL = `https://${siteConfig.domain}`;

/** Build canonical URL for a given path */
export function canonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/** Build full page title */
export function pageTitle(subtitle?: string): string {
  if (!subtitle) {
    return siteConfig.brandLine
      ? `${siteConfig.brandLine} | ${siteConfig.siteName}`
      : siteConfig.siteName;
  }
  return `${subtitle} | ${siteConfig.siteName}`;
}

// ── Speakable helper (reused across schemas) ────────────────────

function speakable(cssSelectors: string[]) {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}

// ── Organization (GEO/E-E-A-T enriched) ─────────────────────────

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    url: SITE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: "en-MY",
    areaServed: [
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "Malaysia" },
    ],
    knowsAbout: [
      "Japan trade shows",
      "Japan B2B exhibitions",
      "FOODEX Japan",
      "Japan market entry",
      "Japan distributor search",
      "trade show preparation",
      "exhibition follow-up",
      "Malaysia–Japan trade",
    ],
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

// ── WebSite (enriched with about, publisher, description) ────────

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: SITE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: "en-MY",
    about: {
      "@type": "Thing",
      name: "Japan Trade Shows",
      description:
        "B2B trade exhibitions in Japan used as a structured market entry channel for international exporters.",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company,
      url: SITE_URL,
    },
    speakable: speakable(["h1", "[data-speakable-intro]"]),
  };
}

// ── WebPage (with speakable) ─────────────────────────────────────

export function webPageJsonLd(
  path: string,
  name: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: "en-MY",
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
    },
    speakable: speakable(["h1", "[data-speakable-intro]"]),
  };
}

// ── FAQPage (full, with speakable) ───────────────────────────────

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
    speakable: speakable(["h1", "[data-speakable-intro]", "dt"]),
  };
}

/** Single-question FAQPage for /faq/:slug answer assets */
export function singleFaqPageJsonLd(item: { question: string; answer: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      },
    ],
    speakable: speakable(["h1", "[data-speakable-intro]"]),
  };
}

// ── HowTo (AEO: step-by-step instructional content) ─────────────

export type HowToStep = {
  name: string;
  text: string;
};

export function howToJsonLd(
  name: string,
  description: string,
  steps: HowToStep[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

// ── DefinedTermSet (AEO: key terminology) ────────────────────────

export type DefinedTermEntry = {
  name: string;
  description: string;
};

export function definedTermSetJsonLd(
  name: string,
  terms: DefinedTermEntry[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      description: t.description,
    })),
  };
}

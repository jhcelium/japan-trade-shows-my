import { Helmet } from "react-helmet-async";
import { siteConfig } from "../content/site.config";
import {
  canonicalUrl,
  orgJsonLd,
  webSiteJsonLd,
  webPageJsonLd,
  faqPageJsonLd,
} from "../lib/seo";

type Props = {
  path: string;
  title: string;
  description: string;
  /** WebPage JSON-LD `name` (defaults to `title` when omitted) */
  pageStructuredName?: string;
  isFaq?: boolean;
  extraJsonLd?: Record<string, unknown>[];
};

export default function SEOHead({
  path,
  title,
  description,
  pageStructuredName,
  isFaq = false,
  extraJsonLd = [],
}: Props) {
  const canonical = canonicalUrl(path);
  const robotsContent = siteConfig.noindex ? "noindex,nofollow" : "index,follow";
  const ogImage = `https://${siteConfig.domain}/og.png`;
  const webPageName = pageStructuredName ?? title;

  const jsonLdScripts = [
    orgJsonLd(),
    webSiteJsonLd(),
    webPageJsonLd(path, webPageName, description),
    ...(isFaq ? [faqPageJsonLd()] : []),
    ...extraJsonLd,
  ];

  return (
    <Helmet>
      <html lang="en-MY" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robotsContent} />

      {/* hreflang */}
      <link rel="alternate" hrefLang="en-MY" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_MY" />
      <meta property="og:site_name" content={siteConfig.siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {jsonLdScripts.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

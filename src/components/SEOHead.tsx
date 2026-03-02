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
  isFaq?: boolean;
};

export default function SEOHead({ path, title, description, isFaq = false }: Props) {
  const canonical = canonicalUrl(path);
  const robotsContent = siteConfig.noindex ? "noindex,nofollow" : "index,follow";

  const jsonLdScripts = [
    orgJsonLd(),
    webSiteJsonLd(),
    webPageJsonLd(path, title, description),
    ...(isFaq ? [faqPageJsonLd()] : []),
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robotsContent} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`https://${siteConfig.domain}/og.png`} />
      <meta property="og:site_name" content={siteConfig.siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://${siteConfig.domain}/og.png`} />

      {/* JSON-LD structured data */}
      {jsonLdScripts.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

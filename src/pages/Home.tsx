import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

// Step 7 — FAQPage JSON-LD (homepage-specific, not from config FAQ)
const HOME_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How to export from Malaysia to Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exporting to Japan requires regulatory mapping, documentation compliance, distributor alignment and pre-shipment validation.",
      },
    },
    {
      "@type": "Question",
      name: "What are Japan import requirements for Malaysian products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Requirements vary by sector but include customs documentation, labelling compliance and adherence to Japan's import regulations.",
      },
    },
    {
      "@type": "Question",
      name: "How does Malaysia–Japan FTA reduce tariffs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tariff reductions apply when exporters meet rules of origin requirements and submit valid certification documentation.",
      },
    },
    {
      "@type": "Question",
      name: "What compliance is required for Japan supermarkets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Supermarket entry requires product labelling compliance, distributor capability validation and documentation verification.",
      },
    },
    {
      "@type": "Question",
      name: "How to assess export readiness for Japan market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Export readiness assessment evaluates regulatory alignment, operational capacity and channel preparedness before shipment.",
      },
    },
  ],
};

const HOW_WE_WORK = [
  {
    step: "1",
    title: "Initial Assessment",
    body: "We review your product, pricing, certifications, and target channel to determine Japan market fit before any commitment.",
  },
  {
    step: "2",
    title: "Market Mapping",
    body: "We identify the relevant distributor categories, regulatory requirements, and trade channels specific to your product.",
  },
  {
    step: "3",
    title: "Distributor Identification",
    body: "We shortlist and approach qualified Japan-side partners using our established network and direct outreach.",
  },
  {
    step: "4",
    title: "Introduction & Meeting Support",
    body: "We facilitate introductory meetings, prepare briefing materials, and provide bilingual support during discussions.",
  },
  {
    step: "5",
    title: "Follow-up Coordination",
    body: "We maintain contact with distributors after initial meetings and coordinate next steps on your behalf.",
  },
];

const HOME_FAQS = [
  {
    question: "How to export from Malaysia to Japan?",
    answer:
      "Exporting to Japan requires regulatory mapping, product documentation compliance, distributor qualification, and pre-shipment validation. Each step must be sequenced to avoid delays at customs or rejection at the distributor level.",
  },
  {
    question: "What are Japan import requirements for Malaysian products?",
    answer:
      "Requirements vary by product category. Core documentation includes a commercial invoice, packing list, certificate of origin, and any sector-specific certification such as food safety or halal documentation. Japanese labelling standards apply at point of sale.",
  },
  {
    question: "How does Malaysia–Japan FTA reduce tariffs?",
    answer:
      "The Malaysia–Japan EPA provides preferential tariff rates for qualifying goods. Exporters must hold a valid Certificate of Origin (Form MJEPA) issued by MITI or an approved body, and the goods must satisfy rules of origin criteria.",
  },
  {
    question: "What compliance is required for Japan supermarkets?",
    answer:
      "Supermarket channel entry requires Japanese-language labelling compliant with the Food Labelling Standards Act, distributor capability to handle import logistics, and often category buyer approval before listing.",
  },
  {
    question: "How to assess export readiness for Japan market?",
    answer:
      "An export readiness assessment evaluates regulatory alignment, pricing viability at Japan retail or wholesale levels, certification gaps, labelling compliance, and whether the company has the operational capacity to support a Japan distributor relationship.",
  },
];

export default function Home() {
  const title = pageTitle();
  const description = `${siteConfig.brandLine} ${siteConfig.primaryIntent}`;

  return (
    <>
      <SEOHead path="/" title={title} description={description} />

      {/* Step 7 — inject FAQPage JSON-LD for homepage FAQs */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(HOME_FAQ_JSONLD)}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Hero — Steps 2 & 3 */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            {siteConfig.domain}
          </p>

          {/* Step 2 — updated H1, primary keyword instance 1 */}
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Export from Malaysia to Japan — Structural Market Entry Advisory
          </h1>

          {/* Step 3 — hero paragraph, primary keyword instance 2 */}
          <p className="text-sm text-neutral-600 leading-relaxed mb-8">
            Export from Malaysia to Japan requires regulatory alignment, tariff
            optimisation under the Malaysia–Japan FTA, structured distributor
            qualification, product labelling compliance, and disciplined market
            entry sequencing. This page outlines the execution framework
            Malaysian companies must follow before shipment and channel
            expansion.
          </p>

          <div className="flex flex-wrap gap-3">
            <CTA />
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 text-neutral-700 text-sm font-medium px-6 py-3 hover:border-neutral-600 hover:text-neutral-900"
            >
              Japan Market Hub →
            </a>
          </div>
        </section>

        {/* Step 4 — What This Page Covers */}
        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            What This Page Covers
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl text-sm leading-relaxed">
            This page provides a structural overview of exporting from Malaysia
            to Japan, including regulatory requirements, FTA utilisation,
            compliance strategy, distributor entry models, and export readiness
            evaluation.
          </p>
          <ul className="mt-8 space-y-3 text-gray-700 text-sm leading-relaxed">
            {[
              "Japan import regulations applicable to Malaysian exporters",
              "Product compliance and labelling requirements for the Japan market",
              "Malaysia–Japan FTA tariff optimisation strategy",
              "Halal and supermarket channel entry considerations",
              "Step-by-step export execution roadmap",
              "Structural export readiness assessment framework",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Site Identity / Positioning */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Site Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-neutral-900 pl-4">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                Primary Intent
              </p>
              <p className="text-sm text-neutral-800 leading-relaxed">
                {siteConfig.primaryIntent}
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 pl-4">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                Who We Serve
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Malaysian and ASEAN-based SMEs and exporters looking to enter
                the Japan B2B market.
              </p>
            </div>
            {siteConfig.localPresence && (
              <div className="border-l-2 border-neutral-300 pl-4">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                  Where We Operate
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Japan-based coordinator in Osaka, Japan — supporting
                  meetings, distributor visits, and on-the-ground follow-up.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Step 5 — mid-page H2 with primary keyword (instance 3) + How We Work */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
            Step-by-Step Framework to Export from Malaysia to Japan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {HOW_WE_WORK.map((item) => (
              <div key={item.step}>
                <p className="text-xs font-semibold text-neutral-400 mb-2">
                  Step {item.step}
                </p>
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            What We Bring
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {siteConfig.socialProofBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700">{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Step 6 — Visible FAQ block with 5 targeted questions */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Common Questions
          </h2>
          <dl className="divide-y divide-neutral-200">
            {HOME_FAQS.map((item) => (
              <div key={item.question} className="py-6">
                <dt className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.question}
                </dt>
                <dd className="text-sm text-neutral-600 leading-relaxed">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Ready to evaluate your Japan market options?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              We work with Malaysian SMEs at different stages of Japan market
              readiness. The first step is a direct conversation about your
              product, pricing, and target channel.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}

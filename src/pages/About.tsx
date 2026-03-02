import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

const DELIVERABLES = [
  {
    title: "Export Readiness Assessment",
    body: "Structured review of your product's commercial fit for Japan — covering pricing, certification gaps, labelling requirements, and category timing.",
  },
  {
    title: "Distributor Selection Report",
    body: "A shortlist of 3–5 qualified Japan-side distribution candidates, pre-screened for category fit, market coverage, and willingness to engage.",
  },
  {
    title: "Trade Show Preparation & Follow-up",
    body: "Pre-show briefing on relevant buyer and distributor profiles, on-the-ground support during show days, and post-show contact follow-up.",
  },
  {
    title: "On-the-ground Coordination",
    body: "Japan-based coordinator available for distributor meetings, relationship maintenance, material delivery, and structured activity reporting.",
  },
];

export default function About() {
  const title = pageTitle("About");
  const description = `About ${siteConfig.siteName}. We help Malaysian exporters and SMEs enter the Japan B2B market through structured market entry support.`;

  return (
    <>
      <SEOHead path="/about" title={title} description={description} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            About
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            {siteConfig.siteName}
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            {siteConfig.primaryIntent}
          </p>
        </section>

        {/* Who we help */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Who We Help
          </h2>
          <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              We work with Malaysian SMEs and exporters who are evaluating Japan as a target market or have already decided to enter and need structured support.
            </p>
            <p>
              Our typical clients are manufacturers, food producers, health and wellness brands, and industrial suppliers who have a product ready for export but lack Japan-specific knowledge and local contacts.
            </p>
            <p>
              We also work with ASEAN-based companies seeking the Malaysia–Japan trade corridor as their first developed-market entry.
            </p>
          </div>
        </section>

        {/* What we deliver */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DELIVERABLES.map((item) => (
              <div key={item.title} className="border border-neutral-200 p-5">
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Where we operate */}
        {siteConfig.localPresence && (
          <section className="border-t border-neutral-200 pt-10">
            <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
              Where We Operate
            </h2>
            <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                Our Japan-side coordinator is based in{" "}
                <strong className="text-neutral-900">Osaka, Japan</strong> — a central commercial hub with direct access to Tokyo, Nagoya, and key B2B trade channels across western Japan.
              </p>
              <p>
                Osaka provides practical access to Japan's distribution networks and serves as a base for meeting distributors, attending trade shows, and maintaining ongoing relationships without requiring our clients to relocate or establish a Japan entity.
              </p>
              <p>
                Our Malaysia-side coordination is conducted remotely, with structured reporting back to your team after each Japan-side engagement.
              </p>
            </div>
          </section>
        )}

        {/* Hub link */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Part of NeoiDigital Japan Market Hub
          </h2>
          <p className="text-sm text-neutral-600 mb-5 max-w-xl leading-relaxed">
            This site is part of a broader set of Japan market entry resources for Malaysian companies. The hub aggregates tools, guides, and consulting pathways across the full export journey.
          </p>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-900 text-neutral-900 text-sm px-4 py-2 hover:bg-neutral-900 hover:text-white"
          >
            Visit Japan Market Hub →
          </a>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Start with a direct conversation.
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              We review your product and situation before recommending any specific service. Tell us what you are working with.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}

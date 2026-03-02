import SEOHead from "../components/SEOHead";
import FAQList from "../components/FAQList";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

export default function FAQ() {
  const title = pageTitle("FAQ");
  const description = `Frequently asked questions about ${siteConfig.siteName}. ${siteConfig.primaryIntent}`;

  return (
    <>
      <SEOHead path="/faq" title={title} description={description} isFaq={true} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Common questions about {siteConfig.siteName.toLowerCase()} and how we work with Malaysian exporters entering the Japan market.
          </p>
        </section>

        {/* All FAQs */}
        <section className="border-t border-neutral-200 pt-2">
          <FAQList items={siteConfig.faq} />
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Have a question not answered here?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Reach out directly. We respond to all enquiries within one business day.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}

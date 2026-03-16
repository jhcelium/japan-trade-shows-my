import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQList from "../components/FAQList";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

export default function FAQ() {
  const title = pageTitle("Japan Trade Shows FAQ — Fair Selection, Preparation & Follow-up");
  const description =
    "Common questions about Japan trade shows: which trade fair to choose, Foodex Japan suitability for Malaysian exporters, preparation framework, and post-show follow-up discipline.";

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
            Japan Trade Shows — Common Questions
          </h1>
          <p
            className="text-base text-neutral-600 leading-relaxed"
            data-speakable-intro=""
          >
            Direct answers to questions about using Japan trade shows as a
            market entry channel — covering how to use Japan trade shows to
            enter the market, which trade fair is right for your product
            category, Foodex Japan suitability for Malaysian exporters, and
            what structured follow-up looks like after an exhibition.
          </p>
        </section>

        {/* All FAQs from config */}
        <section className="border-t border-neutral-200 pt-2">
          <FAQList items={siteConfig.faq} />
        </section>

        {/* Internal link back to Home */}
        <section className="border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-500">
            For the full resource overview including preparation framework and
            distributor screening checklist, visit{" "}
            <Link
              to="/"
              className="text-neutral-900 font-medium underline underline-offset-2 hover:text-neutral-600"
            >
              Japan Trade Shows home →
            </Link>
          </p>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Have a question not answered here?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Reach out directly. We respond to all enquiries within one
              business day.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}

import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQList from "../components/FAQList";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { faqEntriesWithSlug, previewText } from "../lib/faq";
import { pageTitle } from "../lib/seo";

export default function FAQ() {
  const withSlug = faqEntriesWithSlug(siteConfig.faq);
  const title = pageTitle(
    "Japan Trade Shows FAQ — Exhibition Entry & Follow-up",
  );
  const description =
    "Practical answers on using Japan trade shows and B2B exhibitions for market entry: fair choice, preparation, booth screening, costs, follow-up, Foodex, and timelines. Linked answer pages for each topic.";

  return (
    <>
      <SEOHead path="/faq" title={title} description={description} isFaq={true} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan trade shows — question hub
          </h1>
          <p
            className="text-base text-neutral-600 leading-relaxed mb-4"
            data-speakable-intro=""
          >
            This section answers practical questions about using Japan trade
            shows as a market entry channel — not event calendars. Topics cover
            when exhibitions make sense, how to choose a fair by product
            category, preparation before the show, distributor conversations at
            the booth, realistic follow-up, and timelines to a first deal.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Each linked page below gives a single full answer you can share or
            revisit. For the broader resource (frameworks and checklists), start
            from home.
          </p>
        </section>

        {withSlug.length > 0 ? (
          <section className="border-t border-neutral-200 pt-10" aria-labelledby="faq-topics-heading">
            <h2
              id="faq-topics-heading"
              className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8"
            >
              Topics
            </h2>
            <ul className="space-y-0 divide-y divide-neutral-200 border-t border-neutral-200">
              {withSlug.map((item) => (
                <li key={item.slug} className="py-8">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    <Link
                      to={`/faq/${item.slug}`}
                      className="hover:text-neutral-600 underline-offset-4 hover:underline"
                    >
                      {item.question}
                    </Link>
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                    {previewText(item.answer, 200)}
                  </p>
                  <Link
                    to={`/faq/${item.slug}`}
                    className="text-xs font-medium text-neutral-500 uppercase tracking-wide hover:text-neutral-900"
                  >
                    Read answer →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section className="border-t border-neutral-200 pt-2">
            <FAQList items={siteConfig.faq} />
          </section>
        )}

        <section className="border-t border-neutral-200 pt-10 flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-10 text-sm text-neutral-600">
          <p>
            <Link
              to="/"
              className="text-neutral-900 font-medium underline underline-offset-2 hover:text-neutral-600"
            >
              Japan Trade Shows home →
            </Link>
          </p>
          <p>
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 font-medium underline underline-offset-2 hover:text-neutral-600"
            >
              NeoiDigital Japan Market Hub →
            </a>
          </p>
        </section>

        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Plan your next exhibition step
            </h2>
            <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
              Share your category and target channel via the hub intake if you
              want execution support aligned to these answers.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}

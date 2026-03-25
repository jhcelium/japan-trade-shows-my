import { Link, useParams } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQAnswerLayout from "../components/FAQAnswerLayout";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { findFaqBySlug, previewText } from "../lib/faq";
import { pageTitle, singleFaqPageJsonLd } from "../lib/seo";

export default function FAQDetail() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? findFaqBySlug(siteConfig.faq, slug) : undefined;

  if (!item) {
    return (
      <>
        <SEOHead
          path={slug ? `/faq/${slug}` : "/faq"}
          title={pageTitle("Question not found")}
          description="The requested FAQ could not be found."
          extraJsonLd={[]}
        />
        <main className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-sm text-neutral-600 mb-6">
            This question is not available.
          </p>
          <Link
            to="/faq"
            className="text-sm text-neutral-900 underline underline-offset-2"
          >
            Back to FAQ hub →
          </Link>
        </main>
      </>
    );
  }

  const path = `/faq/${item.slug}`;
  const title = pageTitle(previewText(item.question, 62));
  const description = previewText(item.answer, 158);

  return (
    <>
      <SEOHead
        path={path}
        title={title}
        description={description}
        extraJsonLd={[singleFaqPageJsonLd(item)]}
      />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <FAQAnswerLayout
          question={item.question}
          answer={item.answer}
          slug={item.slug}
        >
          <div className="border-t border-neutral-200 mt-10 pt-8 space-y-4 text-sm text-neutral-500">
            <p>
              <Link
                to="/"
                className="text-neutral-900 font-medium underline underline-offset-2 hover:text-neutral-600"
              >
                Japan Trade Shows home
              </Link>
              {" · "}
              <a
                href={siteConfig.hubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 font-medium underline underline-offset-2 hover:text-neutral-600"
              >
                Japan Market Hub
              </a>
            </p>
          </div>
        </FAQAnswerLayout>

        <section className="border-t border-neutral-200 pt-10 max-w-xl">
          <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
            Need a structured plan for your next exhibition? Use the hub intake.
          </p>
          <CTA />
        </section>
      </main>
    </>
  );
}

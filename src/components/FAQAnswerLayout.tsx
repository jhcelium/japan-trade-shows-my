import { Link } from "react-router-dom";

type RelatedQuestion = {
  slug: string;
  question: string;
};

type Props = {
  question: string;
  answer: string;
  slug: string;
  relatedQuestions?: RelatedQuestion[];
  /** Optional extra blocks below the answer (related links, notes) */
  children?: React.ReactNode;
};

/**
 * Reusable shell for /faq/:slug answer pages and future event-specific FAQ assets.
 * Keeps heading order: page h1 = question; body = answer.
 */
export default function FAQAnswerLayout({
  question,
  answer,
  slug,
  relatedQuestions,
  children,
}: Props) {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
        <Link to="/faq" className="hover:text-neutral-600">
          FAQ
        </Link>
        <span className="text-neutral-300 mx-2">/</span>
        <span className="text-neutral-400">{slug}</span>
      </p>

      <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-6">
        {question}
      </h1>

      <div
        className="text-sm text-neutral-700 leading-relaxed space-y-4"
        data-speakable-intro=""
      >
        {answer.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {relatedQuestions && relatedQuestions.length > 0 && (
        <section className="border-t border-neutral-200 mt-10 pt-8">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Related questions
          </h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            {relatedQuestions.map((r) => (
              <li key={r.slug}>
                <Link
                  to={`/faq/${r.slug}`}
                  className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                >
                  {r.question}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {children}

      <footer className="border-t border-neutral-200 mt-12 pt-8">
        <Link
          to="/faq"
          className="text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
        >
          ← All trade show questions
        </Link>
      </footer>
    </article>
  );
}

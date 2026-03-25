import { Link } from "react-router-dom";

type Props = {
  question: string;
  answer: string;
  slug: string;
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

import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

// FAQPage JSON-LD — homepage-specific, conversion-relevant subset
const HOME_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When do Japan trade shows make sense as a market entry channel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trade shows are appropriate when your product has regional traction, you have clear category positioning, and you are prepared to follow up systematically after the event.",
      },
    },
    {
      "@type": "Question",
      name: "How long from exhibition participation to a first deal in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realistically, 6–12 months from first exhibition contact to a signed commercial agreement. Japanese distributors operate on careful evaluation cycles.",
      },
    },
    {
      "@type": "Question",
      name: "How does NeoiDigital support Foodex Japan participants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide pre-show distributor meeting booking, booth messaging localisation, on-site Osaka-based coordination, and structured post-show follow-up management.",
      },
    },
  ],
};

const WHAT_SHOWS_DO = [
  "Category validation: trade shows confirm whether your product finds genuine distributor or buyer interest in a live market context.",
  "Distributor discovery: exhibitions concentrate category-specific distributors in one location, enabling structured introduction without cold outreach.",
  "Buyer feedback loop: direct booth conversations reveal how Japanese buyers evaluate pricing, packaging, and positioning.",
  "Competitive mapping: walking the show floor provides a live view of how competitors present and which categories are saturated.",
  "Channel positioning: exhibition presence establishes early brand recognition in a market where trust is built through repeated visibility.",
];

const READINESS_CONDITIONS = [
  "Your product already has regional traction — at least one confirmed sale or distributor relationship in an Asian market.",
  "You have clear category positioning and can articulate your product's differentiation in one sentence.",
  "MOQ flexibility is available — Japanese distributors typically test with small initial orders before committing to volume.",
  "Certification readiness is confirmed — relevant food safety, labelling, or product compliance documentation is in order.",
  "Budget for follow-up travel is allocated — a single exhibition visit is rarely sufficient without in-person follow-up.",
  "You are willing to adapt after buyer feedback — Japan market fit often requires product or pricing adjustment.",
];

const PREPARATION_STEPS = [
  {
    step: "1",
    title: "Pre-Book Distributor Meetings",
    body: "Identify target distributors in your category before arriving. Request appointments through trade directories, association introductions, or your Japan-side coordinator. Walk-in conversations should supplement, not replace, scheduled meetings.",
  },
  {
    step: "2",
    title: "Localised Booth Messaging",
    body: "Product descriptions, pricing sheets, and company introductions must be translated and adapted for Japanese business conventions. Literal translations are insufficient — messaging must reflect Japanese buyer decision criteria.",
  },
  {
    step: "3",
    title: "Screening Questions for Visitors",
    body: "Prepare a short set of qualifying questions to ask every visitor. This separates serious distributor candidates from general foot traffic and prevents wasted time on unsuitable contacts.",
  },
  {
    step: "4",
    title: "Logistics and On-Site Coordination",
    body: "Sample shipping, booth setup, interpreter arrangements, and accommodation near the venue must be confirmed in advance. On-site surprises are costly in both time and credibility.",
  },
];

const SCREENING_QUESTIONS = [
  {
    q: "What regions do you cover?",
    note: "Confirms geographic fit — national, regional, or channel-specific.",
  },
  {
    q: "What does your current portfolio look like? Any overlap with our category?",
    note: "Identifies conflicts of interest and existing category expertise.",
  },
  {
    q: "Do you have cold-chain or specialist logistics capability?",
    note: "Critical for perishable, refrigerated, or temperature-sensitive products.",
  },
  {
    q: "What is your typical MOQ requirement from new suppliers?",
    note: "Sets commercial expectations early and avoids post-show negotiation breakdown.",
  },
  {
    q: "How do you structure after-sales support for imported products?",
    note: "Reveals operational depth and commitment level.",
  },
  {
    q: "What is your typical decision cycle for a new product listing?",
    note: "Calibrates realistic follow-up timelines — avoid chasing when they are still evaluating.",
  },
  {
    q: "Are you open to non-exclusive arrangements initially?",
    note: "Exclusivity expectations can block market access; clarify early.",
  },
];

const FAILURE_PATTERNS = [
  {
    pattern: "No pre-booked meetings",
    detail:
      "Relying entirely on walk-in traffic results in unqualified conversations. Serious distributors attend with agendas and rarely stop at unfamiliar booths without prior contact.",
  },
  {
    pattern: "No distributor type clarity",
    detail:
      "Exhibitors who cannot clearly describe their target distributor type — regional wholesaler, national importer, category specialist — waste meetings on structurally unsuitable partners.",
  },
  {
    pattern: "Over-reliance on booth traffic",
    detail:
      "High foot traffic does not correlate with qualified leads. A booth visited by 200 people with no screening criteria produces the same outcome as 20 unqualified contacts.",
  },
  {
    pattern: "No structured follow-up",
    detail:
      "Exchanging business cards without a follow-up protocol is the single most common failure mode. Lead quality degrades every day without contact.",
  },
  {
    pattern: "Unrealistic timeline expectations",
    detail:
      "Expecting a commercial agreement within 30–60 days of a first exhibition meeting is a misunderstanding of Japanese distributor evaluation cycles. Six to twelve months is realistic.",
  },
];

const FAQ_PREVIEW = [
  {
    question: "When do trade shows work as a Japan market entry strategy?",
    answer:
      "Trade shows are effective when you have a clear product category, some regional traction, and the discipline to follow up systematically. They are not effective as a pure awareness exercise without pre-booked meetings and a follow-up protocol.",
  },
  {
    question: "How long from exhibition participation to a first deal in Japan?",
    answer:
      "Six to twelve months is a realistic range from first substantive exhibition conversation to a signed commercial agreement. This timeline assumes structured follow-up. Without it, most leads expire within 30 days.",
  },
  {
    question: "How do you support Foodex Japan participants?",
    answer:
      "We support Foodex Japan participants with distributor meeting pre-booking, booth messaging localisation, on-site coordination through our Osaka base, and post-show follow-up management including bilingual outreach.",
  },
];

export default function Home() {
  const title = pageTitle();
  const description = `${siteConfig.brandLine} — ${siteConfig.primaryIntent}`;

  return (
    <>
      <SEOHead path="/" title={title} description={description} />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(HOME_FAQ_JSONLD)}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* A — Hero */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            {siteConfig.domain}
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan Trade Shows
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8">
            NeoiDigital helps Malaysian exporters use japan trade shows as a
            structured market entry channel — from fair selection to distributor
            follow-up.
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

        {/* B — What Japan Trade Shows Are For */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            What Japan Trade Shows Are For
          </h2>
          <ul className="space-y-3">
            {WHAT_SHOWS_DO.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-neutral-700 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* C — When Exhibitions Are the Right Entry Channel */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            When Exhibitions Are the Right Entry Channel
          </h2>
          <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
            Trade shows are not the right first step for every exporter. The
            following conditions indicate readiness.
          </p>
          <ul className="space-y-3">
            {READINESS_CONDITIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-neutral-700 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* D — Choosing the Right Japan Trade Fair */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Choosing the Right Japan Trade Fair
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8">
            Understanding which japan trade fair is right for my product
            requires mapping your category to the exhibition's buyer and
            distributor profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-2 border-neutral-900 pl-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Food, Beverage and Lifestyle
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                FOODEX Japan is the primary entry point for food and beverage
                exporters. Lifestyle and health products have dedicated
                pavilions within broader consumer shows. Category match matters
                more than show scale.
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 pl-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Distributor-Heavy vs Retail-Heavy
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Some exhibitions attract trade buyers and importers. Others
                attract end-retail buyers. Your channel strategy — wholesale
                distribution or direct retail — determines which show delivers
                the right room of decision-makers.
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 pl-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Regional vs Tokyo-Based
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Tokyo-based shows attract national and international buyers.
                Regional exhibitions in Osaka, Nagoya, or Fukuoka reach
                mid-tier distributors and regional chains that are often more
                accessible to new exporters.
              </p>
            </div>
          </div>
        </section>

        {/* E — Japan Trade Show Preparation Framework */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Japan Trade Show Preparation Framework
          </h2>
          <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
            Effective japan trade show preparation begins 4–6 months before
            the exhibition date. The following four steps are non-negotiable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PREPARATION_STEPS.map((item) => (
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

        {/* F — How to Screen Distributors at Your Booth */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            How to Screen Distributors at Your Booth
          </h2>
          <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
            Ask every serious prospect these seven questions. Poor answers
            early prevent wasted follow-up investment.
          </p>
          <ol className="space-y-4">
            {SCREENING_QUESTIONS.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm">
                <span className="flex-shrink-0 font-semibold text-neutral-900 w-5">
                  {i + 1}.
                </span>
                <div>
                  <p className="font-medium text-neutral-900">{item.q}</p>
                  <p className="text-neutral-500 mt-0.5 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* G — Follow-Up Discipline After the Exhibition */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Follow-Up Discipline After the Exhibition
          </h2>
          <div className="max-w-3xl space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              Most leads collected at Japan B2B exhibitions go cold within two
              weeks because no structured follow-up system exists. Our japan
              exhibition follow up service addresses this gap directly.
            </p>
            <p>
              Within 24 hours of each exhibition day, classify all contacts
              into three tiers: A leads (clear purchase intent, confirmed
              category fit), B leads (interest but evaluation in progress), and
              C leads (general enquiry or no near-term potential).
            </p>
            <p>
              A leads require a bilingual summary email within 48 hours — in
              English and Japanese — confirming the booth conversation, your
              product specifications, and a proposed next step. Generic emails
              are ineffective; each summary must reference the specific
              conversation.
            </p>
            <p>
              Schedule the next in-person or video meeting before leaving
              Japan. Japanese distributors respond more reliably when the next
              step is already confirmed during or immediately after the show.
            </p>
            <p>
              For B leads, prepare a decision memo — a one-page product summary
              in Japanese with pricing, MOQ, and certification details — and
              send it within one week. This reduces decision friction and
              shortens the evaluation cycle.
            </p>
            <p>
              C leads require a single follow-up email and a 90-day
              re-evaluation window. Do not invest coordination resources in
              prospects with no qualified intent.
            </p>
          </div>
        </section>

        {/* H — Common Failure Patterns After Japan Exhibitions */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Common Failure Patterns After Japan Exhibitions
          </h2>
          <ul className="space-y-5">
            {FAILURE_PATTERNS.map((item) => (
              <li key={item.pattern} className="border-l-2 border-neutral-200 pl-4">
                <p className="text-sm font-semibold text-neutral-900">
                  {item.pattern}
                </p>
                <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
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

        {/* I — Coverage Map (de-emphasised) */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-1">
            Coverage Map
          </h2>
          <p className="text-xs text-neutral-400 mb-6">
            Common search topics this page addresses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Main Keywords
              </h3>
              <ul className="space-y-2">
                {siteConfig.mainKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-800 font-medium">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Supporting Keywords
              </h3>
              <ul className="space-y-1">
                {siteConfig.supportingKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-600">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Long-tail Keywords
              </h3>
              <ul className="space-y-1">
                {siteConfig.longTailKeywords.slice(0, 6).map((kw) => (
                  <li key={kw} className="text-sm text-neutral-500">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* J — FAQ Preview (3 conversion-relevant items) */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Common Questions
          </h2>
          <dl className="divide-y divide-neutral-200">
            {FAQ_PREVIEW.map((item) => (
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
          <a
            href="/faq"
            className="inline-block mt-4 text-sm text-neutral-500 hover:text-neutral-900 underline underline-offset-2"
          >
            View all FAQs →
          </a>
        </section>

        {/* K — Final CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Ready to plan your exhibition strategy?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Share your product category and target channel. We will confirm
              whether exhibitions are the right entry path.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}

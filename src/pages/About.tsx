import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

const DELIVERABLES = [
  {
    title: "Exhibition Selection and Preparation",
    body: "We map your product category to the right Japan trade fair, confirm distributor profile alignment, and prepare booth messaging, screening questions, and pre-booked meeting targets before the event.",
  },
  {
    title: "Pre-Show Meeting Booking",
    body: "We identify and schedule appointments with qualified distributors and buyers in advance. Prepared meetings produce better outcomes than walk-in booth conversations.",
  },
  {
    title: "On-Site Booth Coordination",
    body: "Japan-based coordinator available during exhibition days for distributor introductions, screening support, interpreter coordination, and logistics management on the floor.",
  },
  {
    title: "Post-Show Follow-Up Management",
    body: "Lead classification, bilingual summary emails, next-meeting scheduling, and decision memo preparation within the critical 48-hour window after each exhibition day.",
  },
];

const FOLLOWUP_FAILURES = [
  {
    label: "No follow-up protocol",
    detail:
      "Most exhibitors leave Japan with a stack of business cards and no defined next action. Without a protocol — who gets contacted, when, and in what language — leads expire within two weeks.",
  },
  {
    label: "48-hour window missed",
    detail:
      "Japanese business culture expects prompt, structured follow-up. A generic email sent five days after the show signals lack of seriousness. The 48-hour window for A leads is non-negotiable.",
  },
  {
    label: "English-only outreach",
    detail:
      "Distributors evaluate foreign suppliers partly on operational reliability. An English-only follow-up email — even with a good product — creates doubt about long-term support capability.",
  },
  {
    label: "No decision memo",
    detail:
      "B leads require a one-page Japanese-language product summary with pricing, MOQ, and certifications. Without it, distributors cannot move an opportunity through internal evaluation.",
  },
  {
    label: "Unrealistic timeline",
    detail:
      "Expecting a signed agreement within 60 days of an exhibition is a structural misunderstanding. Japanese distributor evaluation cycles run 6–12 months. Impatience signals poor fit.",
  },
];

export default function About() {
  const title = pageTitle("About — Japan Trade Show Execution");
  const description =
    "Why exhibition execution without structured follow-up fails in Japan — and how NeoiDigital supports Malaysian exporters through fair selection, on-site coordination, and post-show distributor conversion.";

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
            Japan Trade Show Execution
          </h1>
          <p
            className="text-base text-neutral-600 leading-relaxed"
            data-speakable-intro=""
          >
            NeoiDigital supports Malaysian exporters through the full exhibition
            cycle — from fair selection and preparation to on-site distributor
            screening and post-show follow-up coordination.
          </p>
        </section>

        {/* Why follow-up failure is the norm */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Why Exhibition Execution Without Follow-up Fails
          </h2>
          <p className="text-sm text-neutral-500 mb-8 max-w-2xl leading-relaxed">
            Exhibiting at a Japan trade show is necessary but not sufficient.
            The majority of leads collected at Japan B2B exhibitions convert
            into nothing — not because the product is wrong, but because the
            execution after the event breaks down. The following patterns are
            the most common causes.
          </p>
          <ul className="space-y-5">
            {FOLLOWUP_FAILURES.map((item) => (
              <li key={item.label} className="border-l-2 border-neutral-200 pl-4">
                <p className="text-sm font-semibold text-neutral-900">
                  {item.label}
                </p>
                <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Who we help */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Who We Help
          </h2>
          <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              We work with Malaysian exporters and SMEs who are planning to
              exhibit at or attend Japan B2B trade shows and need structured
              support before, during, and after the event.
            </p>
            <p>
              Typical clients are food and beverage producers, health and
              wellness brands, manufacturers, and industrial suppliers with
              export-ready products who lack Japan-specific distributor contacts
              and local coordination capacity.
            </p>
            <p>
              We also support first-time Japan exhibitors who have attended a
              show independently but failed to convert leads — and need a
              structured follow-up and re-engagement approach.
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
                <strong className="text-neutral-900">Osaka, Japan</strong> —
                providing direct access to exhibition venues, distributor
                offices, and B2B meeting facilities across western Japan, Tokyo,
                and Nagoya.
              </p>
              <p>
                On-the-ground presence enables same-day follow-up after
                exhibition meetings, direct delivery of samples and materials,
                and in-person distributor visits that remote coordination cannot
                replicate.
              </p>
              <p>
                Malaysia-side coordination is conducted remotely with structured
                activity reports after each Japan-side engagement.
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
            This site is part of a broader set of Japan market entry resources
            for Malaysian companies. The hub aggregates tools, guides, and
            consulting pathways across the full export journey.
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

        {/* Internal link back to Home */}
        <section className="border-t border-neutral-200 pt-10">
          <p className="text-sm text-neutral-500">
            Looking for the full resource overview?{" "}
            <Link
              to="/"
              className="text-neutral-900 font-medium underline underline-offset-2 hover:text-neutral-600"
            >
              Return to Japan Trade Shows home →
            </Link>
          </p>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Start with a direct conversation.
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Tell us your product category and your exhibition plan. We will
              confirm whether our preparation and follow-up support is the right
              fit.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}

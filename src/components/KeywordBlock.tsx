import { siteConfig } from "../content/site.config";

export default function KeywordBlock() {
  return (
    <section className="border-t border-neutral-200 pt-10">
      <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
        Keyword Coverage
      </h2>

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
            {siteConfig.longTailKeywords.map((kw) => (
              <li key={kw} className="text-sm text-neutral-500">
                {kw}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

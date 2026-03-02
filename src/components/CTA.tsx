import { siteConfig } from "../content/site.config";

type Props = {
  className?: string;
};

export default function CTA({ className = "" }: Props) {
  return (
    <div className={className}>
      <a
        href={siteConfig.primaryCTA.href}
        target={siteConfig.primaryCTA.href.startsWith("http") ? "_blank" : undefined}
        rel={siteConfig.primaryCTA.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="inline-block bg-neutral-900 text-white text-sm font-medium px-6 py-3 hover:bg-neutral-700"
      >
        {siteConfig.primaryCTA.label}
      </a>
    </div>
  );
}

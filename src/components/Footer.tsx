import { Link } from "react-router-dom";
import { siteConfig } from "../content/site.config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">
              {siteConfig.siteName}
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {siteConfig.brandLine}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">
              Pages
            </p>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-sm text-neutral-500 hover:text-neutral-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-neutral-500 hover:text-neutral-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-neutral-500 hover:text-neutral-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">
              Hub
            </p>
            <p className="text-sm text-neutral-500 mb-3">
              Part of the NeoiDigital Japan Market Hub.
            </p>
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm border border-neutral-900 text-neutral-900 px-3 py-1 hover:bg-neutral-900 hover:text-white"
            >
              Visit Hub →
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-100 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-xs text-neutral-400">
            © {year} {siteConfig.company}. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            {siteConfig.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}

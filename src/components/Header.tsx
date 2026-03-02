import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../content/site.config";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      {/* Logo bar — centered */}
      <div className="border-b border-neutral-100 py-5 flex justify-center">
        <Link to="/">
          <img
            src="/logo.png"
            alt="ネオインスパイア株式会社"
            className="h-16 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Site name + nav bar */}
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="text-sm font-semibold tracking-wide text-neutral-900 uppercase"
        >
          {siteConfig.siteName}
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-neutral-900 font-medium" : "text-neutral-500 hover:text-neutral-900"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-neutral-900 font-medium" : "text-neutral-500 hover:text-neutral-900"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-neutral-900 font-medium" : "text-neutral-500 hover:text-neutral-900"}`
            }
          >
            FAQ
          </NavLink>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-neutral-900 text-neutral-900 px-3 py-1 hover:bg-neutral-900 hover:text-white"
          >
            Hub
          </a>
        </nav>
      </div>
    </header>
  );
}

/**
 * Auto-generates public/sitemap.xml and public/robots.txt
 * from src/content/site.config.ts.
 *
 * DO NOT EDIT — this file is a build tool.
 * To customise a sub-site, edit src/content/site.config.ts only.
 */

"use strict";

const fs = require("fs");
const path = require("path");

// ── Read the TypeScript source as raw text ───────────────────
const configPath = path.join(__dirname, "..", "src", "content", "site.config.ts");
const src = fs.readFileSync(configPath, "utf8");

// ── Extract ACTIVE_SITE_KEY ──────────────────────────────────
const keyMatch = src.match(/ACTIVE_SITE_KEY\s*=\s*["']([^"']+)["']/);
if (!keyMatch) {
  console.error("[generate-public] ERROR: Cannot find ACTIVE_SITE_KEY in site.config.ts");
  process.exit(1);
}
const activeKey = keyMatch[1];

// ── Find the preset block for the active key ─────────────────
// Locate the quoted key in the SITE_PRESETS object
const keyIndex = src.indexOf('"' + activeKey + '"');
if (keyIndex === -1) {
  console.error("[generate-public] ERROR: Cannot find preset key '" + activeKey + "' in SITE_PRESETS");
  process.exit(1);
}

// Slice from the key to a reasonable preset block end
const blockStart = keyIndex;
// Find the matching closing brace for this preset (heuristic: next top-level "," + newline + 2 spaces)
const rawBlock = src.slice(blockStart, blockStart + 4000);

// ── Extract domain ────────────────────────────────────────────
const domainMatch = rawBlock.match(/domain\s*:\s*["']([^"']+)["']/);
const domain = domainMatch ? domainMatch[1] : activeKey + ".neoidigital.com";

// ── Extract noindex flag ──────────────────────────────────────
// The noindex property appears as: noindex: true
const noindexMatch = rawBlock.match(/noindex\s*:\s*(true|false)/);
const noindex = noindexMatch ? noindexMatch[1] === "true" : false;

// ── Build sitemap.xml ─────────────────────────────────────────
const today = new Date().toISOString().split("T")[0];
const baseUrl = "https://" + domain;

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  "  <url>",
  "    <loc>" + baseUrl + "/</loc>",
  "    <lastmod>" + today + "</lastmod>",
  "    <changefreq>weekly</changefreq>",
  "    <priority>1.0</priority>",
  "  </url>",
  "  <url>",
  "    <loc>" + baseUrl + "/about</loc>",
  "    <lastmod>" + today + "</lastmod>",
  "    <changefreq>monthly</changefreq>",
  "    <priority>0.8</priority>",
  "  </url>",
  "  <url>",
  "    <loc>" + baseUrl + "/faq</loc>",
  "    <lastmod>" + today + "</lastmod>",
  "    <changefreq>monthly</changefreq>",
  "    <priority>0.8</priority>",
  "  </url>",
  "</urlset>",
  "",
].join("\n");

// ── Build robots.txt ─────────────────────────────────────────
const robots = noindex
  ? "User-agent: *\nDisallow: /\n"
  : "User-agent: *\nAllow: /\n\nSitemap: " + baseUrl + "/sitemap.xml\n";

// ── Write output ─────────────────────────────────────────────
const publicDir = path.join(__dirname, "..", "public");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

console.log("[generate-public] OK");
console.log("  Active key : " + activeKey);
console.log("  Domain     : " + domain);
console.log("  noindex    : " + noindex);
console.log("  Wrote      : public/sitemap.xml, public/robots.txt");

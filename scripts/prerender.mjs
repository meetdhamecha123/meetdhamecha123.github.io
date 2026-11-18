// Pre-render the portfolio after `vite build`.
//
// The app is a client-side React SPA, so the built dist/index.html only
// contains <div id="root"></div>. Crawlers that don't run JavaScript (Bing's
// first pass, LinkedIn/WhatsApp link previews, most AI search crawlers) see an
// empty page, and Google only sees the content after a delayed render pass.
//
// This script serves dist/, renders "/" once in headless Chromium, and writes the
// resulting #root HTML back into dist/index.html. The React app still mounts
// normally with createRoot (it replaces this static markup on load), so nothing
// changes for visitors.
//
// Scroll-reveal animations are frozen in their initial state while rendering, so
// the saved HTML matches React's first render and there is no visible flash.
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { preview } from "vite";
import { chromium } from "playwright";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const INDEX = path.join(ROOT, "dist", "index.html");
const EMPTY_ROOT = '<div id="root"></div>';
const MUST_CONTAIN = ["Meet", "Dhamecha", "Sattvam Soft", "TeamOpine", "Synapse", "Switchboard"];

const server = await preview({
  root: ROOT,
  logLevel: "silent",
  preview: { port: 4179, strictPort: false, open: false },
});
const url = server.resolvedUrls?.local?.[0] ?? "http://localhost:4179/";
const browser = await chromium.launch();

try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.addInitScript(() => {
    // Keep useScrollReveal's sections in their initial state.
    window.IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() { return []; }
    };
  });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForSelector("#root h1", { timeout: 15000 });
  const rendered = await page.$eval("#root", (el) => el.innerHTML);
  if (errors.length) throw new Error(`page errors while rendering: ${errors.join(" | ")}`);

  const missing = MUST_CONTAIN.filter((s) => !rendered.includes(s));
  if (missing.length) throw new Error(`rendered HTML is missing: ${missing.join(", ")}`);

  const html = await readFile(INDEX, "utf8");
  if (!html.includes(EMPTY_ROOT)) throw new Error(`${EMPTY_ROOT} not found in dist/index.html`);
  await writeFile(INDEX, html.replace(EMPTY_ROOT, `<div id="root">${rendered}</div>`));
  console.log(`prerender: wrote ${Math.round(rendered.length / 1024)} KB of HTML into dist/index.html`);
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}

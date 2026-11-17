// Builds Meet_Dhamecha_Resume.pdf from resume/resume.html with headless Chromium.
//
//   npm run resume     (or: node resume/build.cjs, from the present-my-awesome-self folder)
//
// Writes public/Meet_Dhamecha_Resume.pdf — the file the portfolio's
// "Download Resume" buttons serve. Fails if the Inter font did not load or
// the PDF is not exactly two pages.
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(__dirname, "resume.html");
const OUT = path.join(ROOT, "public", "Meet_Dhamecha_Resume.pdf");
const EXPECTED_PAGES = 2;

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(SRC).href, { waitUntil: "load" });
    const fonts = await page.evaluate(async () => {
      await document.fonts.ready;
      return [...document.fonts].filter((f) => f.status === "loaded").map((f) => `${f.family} ${f.weight}`);
    });
    if (!fonts.some((f) => f.startsWith("Inter"))) {
      throw new Error(`Inter did not load (loaded: ${fonts.join(", ") || "none"})`);
    }
    await page.pdf({
      path: OUT,
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true, // structure tags -> correct reading order for screen readers / parsers
      outline: false,
    });
  } finally {
    await browser.close();
  }

  const pdf = fs.readFileSync(OUT, "latin1");
  const pages = (pdf.match(/\/Type\s*\/Page(?!s)/g) || []).length;
  if (pages !== EXPECTED_PAGES) {
    console.error(`FAIL: ${pages} pages (expected ${EXPECTED_PAGES}). Tune --fs / --lh / --sec-gap in resume.html.`);
    process.exit(1);
  }
  console.log(`OK: ${pages} pages -> ${path.relative(ROOT, OUT)}`);
})().catch((e) => {
  console.error("FAIL:", e.message);
  process.exit(1);
});

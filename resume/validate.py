"""Validate Meet_Dhamecha_Resume.pdf and render page previews.

    python resume/validate.py            (needs: pip install pymupdf)

Checks: page count, embedded font types (no Type3), text inside the page
margins, extractable text and reading order, required facts, hyperlinks,
headings not stranded at a page bottom, and how full each page is.
Writes resume/preview/page-1.png and page-2.png at 150 dpi.
Exit code 1 if any check fails.
"""
import sys
from pathlib import Path

import pymupdf

HERE = Path(__file__).resolve().parent
PDF = HERE.parent / "public" / "Meet_Dhamecha_Resume.pdf"
PREVIEW = HERE / "preview"
MM = 72 / 25.4
MARGIN = {"top": 14 * MM, "right": 16 * MM, "bottom": 13 * MM, "left": 16 * MM}

HEADINGS = ["PROFESSIONAL SUMMARY", "TECHNICAL SKILLS", "PROFESSIONAL EXPERIENCE", "PROJECTS", "EDUCATION"]
IN_ORDER = ["Sattvam Soft", "TeamOpine Solutions", "Zerobit Infotech", "Synapse", "Switchboard AI",
            "Database Insight Assistant", "Database Communicator RAG", "Document Intelligence System",
            "Full-Stack E-Commerce", "Bachelor of Science in Information Technology"]
FACTS = ["May 2026 – Oct 2026", "Jan 2025 – May 2026", "Jul 2024 – Dec 2024", "2020 – 2024",
         "Aivana AI Studio", "KathaToon AI", "Pixtura", "AI Video Upscaling",
         "meetdhamecha82@gmail.com", "+91 8401447120",
         "over 60%", "80%", "1,000+ daily requests", "95%+ uptime", "40–60%", "5–10 ms",
         "47 actions", "27.1 s to 3.7 s", "~60 s to ~14 s", "89 automated tests", "270 / 270",
         "~7× cheaper", "100× query speedup", "~5 ms", "820 ms to under 190 ms", "500K+ records/week", "85%+"]
LINKS = {"mailto:meetdhamecha82@gmail.com", "tel:+918401447120",
         "https://www.linkedin.com/in/meet-dhamecha-616021236", "https://github.com/meetdhamecha123",
         "https://developers.aivana.ai/", "https://lnkd.in/p/d7pNJNY3", "https://lnkd.in/p/dRrSVznf",
         "https://github.com/meetdhamecha/switchboard-ai", "https://lnkd.in/p/db5sTUbC"}

failures, warnings = [], []
def check(ok, msg):
    print(("  PASS  " if ok else "  FAIL  ") + msg)
    if not ok:
        failures.append(msg)

doc = pymupdf.open(PDF)
print(f"{PDF.name}")

# 1. Page count and size
check(doc.page_count == 2, f"exactly 2 pages (found {doc.page_count})")
check(all(abs(p.rect.width - 595.3) < 1 and abs(p.rect.height - 841.9) < 1 for p in doc), "A4 page size")

# 2. Fonts: embedded, no Type3
fonts = {f[0]: f for p in doc for f in p.get_fonts()}
types = sorted({f[2] for f in fonts.values()})
names = sorted({f[3].split("+")[-1] for f in fonts.values()})
check("Type3" not in types, f"no Type3 fonts (types: {types}; fonts: {names})")

# 3. Text extraction, reading order, facts
text = "\n".join(p.get_text() for p in doc)
flat = " ".join(text.split())
check(len(flat) > 3000, f"text is selectable/extractable ({len(flat)} characters)")
all_lines = [l.strip() for l in text.splitlines() if l.strip()]
pos = [next((k for k, l in enumerate(all_lines) if l.upper() == h), -1) for h in HEADINGS]
check(all(x >= 0 for x in pos) and pos == sorted(pos), f"section headings present (as headings) and in order: {HEADINGS}")
pos = [flat.find(s) for s in IN_ORDER]
check(all(x >= 0 for x in pos) and pos == sorted(pos), "jobs, projects and education extract in reading order")
missing = [f for f in FACTS if f not in flat]
check(not missing, f"{len(FACTS)} key facts/metrics present in extracted text" + (f" — missing: {missing}" if missing else ""))

# 4. Hyperlinks
found = {l.get("uri") for p in doc for l in p.get_links() if l.get("uri")}
check(LINKS <= found, f"{len(LINKS)} expected hyperlinks present" + (f" — missing: {sorted(LINKS - found)}" if not LINKS <= found else ""))
extra = found - LINKS
if extra:
    warnings.append(f"unexpected links: {sorted(extra)}")

# 5. Per-page layout: margins, stranded headings, fill
for i, p in enumerate(doc, 1):
    W, H = p.rect.width, p.rect.height
    lines = []
    for b in p.get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            t = "".join(s["text"] for s in l["spans"]).strip()
            if t:
                lines.append((l["bbox"], t))
    x0 = min(b[0] for b, _ in lines); x1 = max(b[2] for b, _ in lines)
    y0 = min(b[1] for b, _ in lines); y1 = max(b[3] for b, _ in lines)
    inside = (x0 >= MARGIN["left"] - 1 and x1 <= W - MARGIN["right"] + 1
              and y0 >= MARGIN["top"] - 1 and y1 <= H - MARGIN["bottom"] + 1)
    check(inside, f"page {i}: all text inside margins (text box {x0:.0f}–{x1:.0f} x {y0:.0f}–{y1:.0f} pt)")
    for (bb, t) in lines:
        if t.upper() in HEADINGS and (H - MARGIN["bottom"]) - bb[3] < 45:
            check(False, f"page {i}: heading '{t}' stranded at the bottom of the page")
    free = (H - MARGIN["bottom"]) - y1
    usable = H - MARGIN["top"] - MARGIN["bottom"]
    print(f"  INFO  page {i}: {free:.0f} pt free at bottom ({free / usable:.0%} of usable height)")
    print(f"  INFO  page {i} starts: {lines[0][1][:90]!r}")
    print(f"  INFO  page {i} ends:   {lines[-1][1][:90]!r}")
    if free / usable > 0.12:
        warnings.append(f"page {i} has {free / usable:.0%} empty space at the bottom")

# 6. Previews
PREVIEW.mkdir(exist_ok=True)
for old in PREVIEW.glob("page-*.png"):
    old.unlink()
for i, p in enumerate(doc, 1):
    out = PREVIEW / f"page-{i}.png"
    p.get_pixmap(dpi=150).save(out)
print(f"  INFO  previews written to {PREVIEW}")

for w in warnings:
    print("  WARN  " + w)
print("RESULT:", "FAIL" if failures else "PASS", f"({len(failures)} failed, {len(warnings)} warnings)")
sys.exit(1 if failures else 0)

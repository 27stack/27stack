/**
 * Renders the social preview cards (Open Graph / Twitter images) in public/og/: the logo above a
 * headline, in the site's colors and type. For now every page shares the one card with
 * the slogan (see app/lib/meta.ts).
 *
 *   pnpm og                  # all cards
 *   pnpm og slogan           # just these
 *
 * It needs the network for the Google Fonts the site uses.
 */
import { mkdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { SITE_NAME, SITE_URL } from "../app/lib/site.ts";

const root = fileURLToPath(new URL("..", import.meta.url));

interface Card {
  /** The file name in public/og/, without ".png". */
  slug: string;
  /** The headline, as HTML. */
  headline: string;
}

const cards: Card[] = [
  // The home page's headline, styled as the hero styles it.
  { slug: "slogan", headline: `You used to own<br>your computer.<br>You can again.` },
];

/** The logo drawn for the navy ground, as it is. */
const logo = (await readFile(`${root}public/logo-dark.svg`, "utf8")).replace(/<metadata>[\s\S]*?<\/metadata>/, "");

const fonts =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=DM+Serif+Display&display=swap";

function page(card: Card) {
  return `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="stylesheet" href="${fonts}">
<style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 64px 72px;
    /* The site's dark theme: navy under a riso dot screen. */
    background: radial-gradient(rgba(255, 255, 255, 0.05) 0.9px, transparent 1.3px) 0 0 / 5px 5px, #14213D;
    color: #FFF7EC;
    font-family: 'DM Sans', sans-serif;
  }
  .top { display: flex; align-items: center; justify-content: space-between; }
  .mark svg { display: block; width: auto; height: 72px; }
  .url { font-size: 24px; font-weight: 700; color: #D6D9E3; }
  .eyebrow { font-size: 22px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #FF8A4D; }
  .text { display: flex; flex-direction: column; gap: 24px; height: 400px; justify-content: flex-end; }
  h1 { font-family: 'DM Serif Display', serif; font-weight: 400; line-height: 0.96; letter-spacing: -0.03em; color: #A9B8EE; }
</style></head>
<body>
  <div class="top">
    <div class="mark">${logo}</div>
    <p class="url">${new URL(SITE_URL).host}</p>
  </div>
  <div class="text">
    <p class="eyebrow">${SITE_NAME}</p>
    <h1>${card.headline}</h1>
  </div>
</body></html>`;
}

const only = process.argv.slice(2);
const todo = only.length ? cards.filter((card) => only.includes(card.slug)) : cards;
if (!todo.length) throw new Error(`No cards named ${only.join(", ")}. Try: ${cards.map((c) => c.slug).join(", ")}`);

await mkdir(`${root}public/og`, { recursive: true });
const browser = await chromium.launch();
try {
  const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const card of todo) {
    await tab.setContent(page(card), { waitUntil: "networkidle" });
    await tab.evaluate(() => document.fonts.ready);
    // The biggest size that keeps the headline within three lines and its column.
    await tab.evaluate(() => {
      const h1 = document.querySelector("h1")!;
      const box = h1.parentElement!;
      const room = box.clientHeight - 60;
      for (let size = 132; size >= 48; size -= 2) {
        h1.style.fontSize = `${size}px`;
        const lines = Math.round(h1.scrollHeight / (size * 0.96));
        if (lines <= 3 && h1.scrollHeight <= room && h1.scrollWidth <= h1.clientWidth) break;
      }
    });
    await tab.screenshot({ path: `${root}public/og/${card.slug}.png` });
    console.log(`public/og/${card.slug}.png`);
  }
} finally {
  await browser.close();
}

/**
 * Renders the icons browsers and phones ask for from the logo, as it is drawn:
 *
 *   public/icon.svg               the light logo itself, for browsers that take an SVG
 *   public/favicon.ico            16px and 32px, on a clear ground
 *   public/apple-touch-icon.png   180px, on the site's cream, since iOS fills a clear ground with black
 *
 *   pnpm icons
 *
 * The logo is wider than it is tall, so it sits centered in each square.
 */
import { copyFile, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = fileURLToPath(new URL("..", import.meta.url));
const logo = await readFile(`${root}public/logo-light.svg`, "utf8");

function page(size: number, ground: string, pad: number) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  html, body { margin: 0; width: ${size}px; height: ${size}px; background: ${ground}; }
  body { box-sizing: border-box; display: grid; place-items: center; padding: ${pad}px; }
  svg { display: block; width: 100%; height: auto; }
</style></head><body>${logo}</body></html>`;
}

/** An .ico file holding each PNG as it is, which every current browser reads. */
function ico(images: { size: number; png: Buffer }[]) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, png }, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });
  return Buffer.concat([header, ...images.map(({ png }) => png)]);
}

const browser = await chromium.launch();
try {
  const shoot = async (size: number, ground: string, pad: number) => {
    const tab = await browser.newPage({ viewport: { width: size, height: size } });
    await tab.setContent(page(size, ground, pad));
    const png = await tab.screenshot({ omitBackground: ground === "transparent" });
    await tab.close();
    return png;
  };

  await copyFile(`${root}public/logo-light.svg`, `${root}public/icon.svg`);
  console.log("public/icon.svg");
  await writeFile(
    `${root}public/favicon.ico`,
    ico([
      { size: 16, png: await shoot(16, "transparent", 0) },
      { size: 32, png: await shoot(32, "transparent", 0) },
    ]),
  );
  console.log("public/favicon.ico");
  await writeFile(`${root}public/apple-touch-icon.png`, await shoot(180, "#FFF7EC", 22));
  console.log("public/apple-touch-icon.png");
} finally {
  await browser.close();
}

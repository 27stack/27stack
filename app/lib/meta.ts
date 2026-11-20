import { SITE_NAME, SITE_URL } from "./site";

interface PageMeta {
  /** The page's own title. The site's name is added after it; the home page leaves it out. */
  title?: string;
  description?: string;
  /** The page's path, like "/plan". */
  path: string;
}

/** The preview card every page shares for now: the avatar and the slogan (scripts/og-images.ts). */
const CARD = { path: "/og/slogan.png", alt: `${SITE_NAME}: You used to own your computer. You can again.` };

/** The <title>, description and social preview tags for a page. */
export function pageMeta({ title: pageTitle, description, path }: PageMeta) {
  const title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}${CARD.path}`;
  return [
    { title },
    ...(description
      ? [
          { name: "description", content: description },
          { property: "og:description", content: description },
          { name: "twitter:description", content: description },
        ]
      : []),
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: CARD.alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:image", content: image },
  ];
}

// Shared per-route <head> metadata for React Router `meta()` exports.
//
// The invariant tags — charset, viewport, theme-color, icons, self-hosted fonts,
// og:type, og:site_name, and the shared og:image / twitter:card+image block —
// live as static tags in root.jsx's <Layout>. This helper emits ONLY the tags
// that legitimately differ per route, so each page gets its own crawlable
// canonical, social title, and description without duplicating the global ones.
// Keeping all per-route tags in one function is what prevents drift between,
// e.g., the visible title and the og:title.

const SITE = "https://fairfeedbackproject.org";

// `path` is the route's canonical path: "/" for home, "/about" etc. for the rest.
// canonical and og:url share it. `ogDescription` is optional; when omitted, the
// social description falls back to `description` (used by the four content routes,
// which intentionally use one string for both search and social).
export function routeMeta({ title, description, ogDescription, path }) {
  const url = SITE + path;
  const social = ogDescription ?? description;
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: social },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: social },
  ];
}

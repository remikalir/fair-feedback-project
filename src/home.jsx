import { COLORS } from "./colors";

export function meta() {
  return [{ title: "The Fair Feedback Project" }];
}

export default function Home() {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "3rem 1.25rem 5rem" }}>
      <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: 32, color: COLORS.slate900, lineHeight: 1.2 }}>
        Batch 2 · step 1 — shell migrated
      </h1>
      <p style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", color: COLORS.slate600, lineHeight: 1.6, fontSize: 17 }}>
        The document head (self-hosted fonts, social tags, icons, canonical, theme-color)
        and the route-independent chrome (skip link, footer) now live in root.jsx, with the
        COLORS tokens in a shared module. If this heading renders in Source Serif 4 and this
        paragraph in Source Sans 3 on the paper background, with the footer below, the head
        and shell migration is good. The five real views get wired to routes in step 2.
      </p>
    </div>
  );
}

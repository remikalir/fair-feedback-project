export function meta() {
  return [{ title: "FFP — Tier 3 routing boot test" }];
}

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "3rem", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
      <h1>React Router v8 is prerendering.</h1>
      <p>
        This is the Batch 1 plumbing test for the Tier 3 routing migration. If you are
        reading this as static HTML on the preview URL, the prerender pipeline works.
        The real Fair Feedback Project views get wired in at Batch 2.
      </p>
    </main>
  );
}

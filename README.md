# The Fair Feedback Project

An openly accessible, research-based resource that helps instructors address documented bias in student evaluations of teaching (SETs).

Live site: https://fairfeedbackproject.org

## Citation and license

Kalir, R. (2026). *The Fair Feedback Project*. https://fairfeedbackproject.org

Created by Remi Kalir, PhD, in collaboration with Claude. Released under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

## Development

Requires Node 24 (see `.nvmrc`; matches the Vercel project setting).

```sh
npm install
npm run dev      # local dev server at http://localhost:5173
npm run lint
npm run build    # static prerender to build/client/
```

## Architecture notes

- **React Router v8, framework mode, static prerender** (`ssr: false`). Every route in `react-router.config.js` is prerendered to HTML at build time; there is no server at runtime.
- **React Router versions are pinned exactly.** `react-router`, `@react-router/node`, and `@react-router/dev` must move together. 8.1.0 previously failed with an internal module-resolution error; 8.5.1 was verified in November 2026 (prerendered output identical to 8.0.0).
- **Content as data.** The FAQ lives in `src/faqData.js`, which drives both the visible FAQ page and the FAQPage JSON-LD, so the two cannot drift. New structured content should follow this pattern.
- **Per-route metadata** (titles, descriptions, canonicals, Open Graph/Twitter cards) is built by `src/routeMeta.js`.
- **OG image** is rendered by `tools/render_og.py` (Pillow).

## Deployment

Vercel builds `react-router build` and serves `build/client/` (see `vercel.json`). Pushes to `main` deploy to production; other branches get preview deployments.

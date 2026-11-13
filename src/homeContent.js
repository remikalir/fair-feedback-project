// Homepage content as data, following the faqData.js pattern: copy lives here,
// layout lives in App.jsx's Landing component, so wording edits never touch
// presentation code.

// "How it works" — three steps. Every claim must stay true of the tool itself.
export const HOW_IT_WORKS = [
  {
    title: "Share your course info",
    text: "Answer a few questions about your discipline, course level, class size, and how you plan to reach students. No names, no institution, and no questions about your identity.",
  },
  {
    title: "Get tailored materials",
    text: "Receive an evaluation preamble, an in-class script, and an email or LMS announcement, with optional extras such as a discussion guide and portfolio language.",
  },
  {
    title: "See the evidence",
    text: "Every piece comes with a note citing the peer-reviewed research behind it, so you can adapt it with confidence.",
  },
];

// Verbatim excerpts from colleagues' public LinkedIn responses (April 2026),
// shown anonymously. Editorial conventions: [brackets] replace an identifying or
// institution-specific term; an ellipsis (…) marks omitted words; quotation
// marks nested inside a quote become single quotes. Nothing else is altered. Remi notified each person; remove any quote on request.
export const QUOTES = [
  "First off, what a needed tool, and secondly, thank you for including the references. The initial one I developed (for an introductory STEM course) seemed right on target for what we need to communicate with students before the [course evaluations] are deployed.",
  "I just generated your feedback materials for inclusion in an upcoming course I am teaching in Canvas. … Thank you for innovating in this important, although often neglected, space!",
  "Cool, straightforward tool. I generated the full resource option. This is a great idea for framing how we approach instructor/course feedback.",
  "I've … generated a statement to use with my students, and I'll also plan to share the ‘what to share with a colleague’ info with them as well, so they can understand the research behind the statement.",
];

// Podcast feature. Link only, no embedded player: an embed would load
// third-party content on every visit, contrary to the site's privacy posture.
export const PODCAST = {
  show: "Teaching in Higher Ed",
  episode: "Episode 628: The Fair Feedback Project, with Remi Kalir",
  host: "Bonni Stachowiak",
  date: "June 25, 2026",
  url: "https://teachinginhighered.com/podcast/the-fair-feedback-project-with-remi-kalir/",
  quote: "These are evidence-based strategies to address bias in student evaluations of teaching.",
};

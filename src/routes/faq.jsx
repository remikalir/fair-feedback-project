import { FAQPage } from "../App";
import { routeMeta } from "../routeMeta";
import { faqJsonLd } from "../faqData";
export function meta() {
  return [
    ...routeMeta({
      title: "Frequently Asked Questions — The Fair Feedback Project",
      description: "FAQ about how the project works, design decisions, why it uses implicit-bias framing, how to implement anti-bias statements, and what the intervention research does and doesn't support.",
      path: "/faq",
    }),
    { "script:ld+json": faqJsonLd() },
  ];
}
export default function FAQRoute() { return <FAQPage />; }

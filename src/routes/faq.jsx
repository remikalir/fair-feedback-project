import { FAQPage } from "../App";
import { routeMeta } from "../routeMeta";
export function meta() {
  return routeMeta({
    title: "Frequently Asked Questions — The Fair Feedback Project",
    description: "FAQ about how the project works, design decisions, why it uses implicit-bias framing, how to implement anti-bias statements, and what the intervention research does and doesn't support.",
    path: "/faq",
  });
}
export default function FAQRoute() { return <FAQPage />; }

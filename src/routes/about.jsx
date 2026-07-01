import { AboutPage } from "../App";
import { routeMeta } from "../routeMeta";
export function meta() {
  return routeMeta({
    title: "About — The Fair Feedback Project",
    description: "The research and rationale guiding The Fair Feedback Project and how it was built as a transparent and accessible demonstration of responsible AI use in higher education.",
    path: "/about",
  });
}
export default function AboutRoute() { return <AboutPage />; }

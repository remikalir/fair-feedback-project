import { Landing } from "../App";
import { routeMeta } from "../routeMeta";
export function meta() {
  return routeMeta({
    title: "The Fair Feedback Project",
    description: "Evidence-based strategies for addressing bias in student evaluations of teaching.",
    ogDescription: "Research-based, openly available tools to help instructors and institutions address documented bias in student evaluations of teaching.",
    path: "/",
  });
}
export default function HomeRoute() { return <Landing />; }

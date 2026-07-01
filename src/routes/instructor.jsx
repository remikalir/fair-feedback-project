import { InstructorTrack } from "../App";
import { routeMeta } from "../routeMeta";
export function meta() {
  return routeMeta({
    title: "Instructor Track — The Fair Feedback Project",
    description: "Generate evidence-based anti-bias statements and strategies for a course, including a preamble, in-class script, email announcement, discussion guide and more, for free and with no data collected.",
    path: "/instructor",
  });
}
export default function InstructorRoute() { return <InstructorTrack />; }

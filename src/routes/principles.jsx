import { PrinciplesPage } from "../App";
import { routeMeta } from "../routeMeta";
export function meta() {
  return routeMeta({
    title: "Principles — The Fair Feedback Project",
    description: "The five commitments behind the project: bias is a structural problem, evidence-based recommendations, a professional best practice, transparency and limitations, care and nuance.",
    path: "/principles",
  });
}
export default function PrinciplesRoute() { return <PrinciplesPage />; }

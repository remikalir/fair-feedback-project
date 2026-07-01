import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/about.jsx"),
  route("principles", "routes/principles.jsx"),
  route("faq", "routes/faq.jsx"),
  route("instructor", "routes/instructor.jsx"),
];

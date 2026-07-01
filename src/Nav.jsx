import { Link, NavLink } from "react-router";
import { COLORS } from "./colors";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/principles", label: "Principles" },
  { to: "/faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <nav style={{
      borderBottom: `1px solid ${COLORS.slate200}`,
      background: COLORS.white,
      padding: "0 1.25rem",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 56,
        flexWrap: "wrap",
        gap: "4px 0",
        padding: "8px 0",
      }}>
        <Link
          to="/"
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: 17,
            fontWeight: 600,
            color: COLORS.slate900,
            letterSpacing: "-0.01em",
            textDecoration: "none",
          }}
        >
          The Fair Feedback Project
        </Link>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              style={({ isActive }) => ({
                background: isActive ? COLORS.slate100 : "none",
                padding: "6px 12px",
                borderRadius: 6,
                fontSize: 14,
                color: isActive ? COLORS.slate900 : COLORS.slate600,
                fontWeight: isActive ? 500 : 400,
                transition: "all 0.15s ease",
                fontFamily: "'Source Sans 3', system-ui, sans-serif",
                textDecoration: "none",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

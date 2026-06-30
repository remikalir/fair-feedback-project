import { useState } from "react";
import { COLORS } from "./colors";

export default function SkipLink() {
  const [focused, setFocused] = useState(false);
  return (
    <a
      href="#main-content"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        position: "absolute",
        left: focused ? 12 : -9999,
        top: focused ? 12 : "auto",
        zIndex: 200,
        background: COLORS.white,
        color: COLORS.accentDark,
        border: `1px solid ${COLORS.accent}`,
        borderRadius: 6,
        padding: "8px 16px",
        fontSize: 14,
        fontWeight: 500,
        fontFamily: "'Source Sans 3', system-ui, sans-serif",
        textDecoration: "none",
      }}
    >
      Skip to main content
    </a>
  );
}

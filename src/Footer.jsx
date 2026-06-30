import { COLORS } from "./colors";

export default function Footer() {
  const linkStyle = {
    color: COLORS.slate500,
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    transition: "color 0.15s ease",
  };
  return (
    <footer style={{
      borderTop: `1px solid ${COLORS.slate200}`,
      padding: "2rem 1.25rem",
      textAlign: "center",
      fontSize: 13,
      color: COLORS.slate500,
      fontFamily: "'Source Sans 3', system-ui, sans-serif",
      lineHeight: 1.6,
    }}>
      <p style={{ margin: "0 4px" }}>Created by <a href="https://remikalir.com" target="_blank" rel="noopener noreferrer" style={linkStyle}
          onMouseEnter={(e) => e.target.style.color = COLORS.accent}
          onMouseLeave={(e) => e.target.style.color = COLORS.slate500}
        >Remi Kalir, PhD</a>, in collaboration with Claude (Opus 4.6 & 4.8)
        <span style={{ margin: "0 8px" }}>|</span>
        Not affiliated with any institution</p>
      <p style={{ margin: "0 0 4px" }}>Please cite as: Kalir, R. (2026). The Fair Feedback Project. https://fairfeedbackproject.org — released under CC BY-NC-SA 4.0.</p>
      <p style={{ margin: 0 }}>
        <a href="https://forms.gle/m8JihbGLbq1SirLD9" target="_blank" rel="noopener noreferrer" style={linkStyle}
          onMouseEnter={(e) => e.target.style.color = COLORS.accent}
          onMouseLeave={(e) => e.target.style.color = COLORS.slate500}
        >Share your feedback and suggestions</a>
        <span style={{ margin: "0 8px" }}>|</span>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" style={linkStyle}
          onMouseEnter={(e) => e.target.style.color = COLORS.accent}
          onMouseLeave={(e) => e.target.style.color = COLORS.slate500}
        >CC BY-NC-SA 4.0</a>
      </p>
    </footer>
  );
}

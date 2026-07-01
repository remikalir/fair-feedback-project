import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, useLocation } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useId, useRef, useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region src/colors.js
var COLORS = {
	slate900: "#2d3436",
	slate700: "#4a5568",
	slate600: "#636e72",
	slate500: "#69727f",
	slate400: "#a0aab4",
	slate200: "#e2e8f0",
	slate100: "#f1f3f5",
	slate50: "#f8f9fa",
	accent: "#5b4a8a",
	accentLight: "#eeebf5",
	accentDark: "#3d3160",
	green: "#2d6a4f",
	greenLight: "#e8f3ed",
	greenDark: "#1b4332",
	azure: "#1392D3",
	azureLight: "#e8f4fb",
	azureDark: "#0b6fa3",
	text: "#2d3436",
	textSecondary: "#636e72",
	bg: "#faf9f7",
	white: "#ffffff"
};
//#endregion
//#region src/SkipLink.jsx
function SkipLink() {
	const [focused, setFocused] = useState(false);
	return /* @__PURE__ */ jsx("a", {
		href: "#main-content",
		onFocus: () => setFocused(true),
		onBlur: () => setFocused(false),
		style: {
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
			textDecoration: "none"
		},
		children: "Skip to main content"
	});
}
//#endregion
//#region src/Nav.jsx
var NAV_ITEMS = [
	{
		to: "/",
		label: "Home",
		end: true
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/principles",
		label: "Principles"
	},
	{
		to: "/faq",
		label: "FAQ"
	}
];
function Nav() {
	return /* @__PURE__ */ jsx("nav", {
		style: {
			borderBottom: `1px solid ${COLORS.slate200}`,
			background: COLORS.white,
			padding: "0 1.25rem",
			position: "sticky",
			top: 0,
			zIndex: 100
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 960,
				margin: "0 auto",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				minHeight: 56,
				flexWrap: "wrap",
				gap: "4px 0",
				padding: "8px 0"
			},
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/",
				style: {
					fontFamily: "'Source Serif 4', Georgia, serif",
					fontSize: 17,
					fontWeight: 600,
					color: COLORS.slate900,
					letterSpacing: "-0.01em",
					textDecoration: "none"
				},
				children: "The Fair Feedback Project"
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					gap: 4,
					flexWrap: "wrap"
				},
				children: NAV_ITEMS.map((item) => /* @__PURE__ */ jsx(NavLink, {
					to: item.to,
					end: item.end,
					style: ({ isActive }) => ({
						background: isActive ? COLORS.slate100 : "none",
						padding: "6px 12px",
						borderRadius: 6,
						fontSize: 14,
						color: isActive ? COLORS.slate900 : COLORS.slate600,
						fontWeight: isActive ? 500 : 400,
						transition: "all 0.15s ease",
						fontFamily: "'Source Sans 3', system-ui, sans-serif",
						textDecoration: "none"
					}),
					children: item.label
				}, item.to))
			})]
		})
	});
}
//#endregion
//#region src/Footer.jsx
function Footer() {
	const linkStyle = {
		color: COLORS.slate500,
		textDecoration: "underline",
		textUnderlineOffset: "2px",
		transition: "color 0.15s ease"
	};
	return /* @__PURE__ */ jsxs("footer", {
		style: {
			borderTop: `1px solid ${COLORS.slate200}`,
			padding: "2rem 1.25rem",
			textAlign: "center",
			fontSize: 13,
			color: COLORS.slate500,
			fontFamily: "'Source Sans 3', system-ui, sans-serif",
			lineHeight: 1.6
		},
		children: [
			/* @__PURE__ */ jsxs("p", {
				style: { margin: "0 4px" },
				children: [
					"Created by ",
					/* @__PURE__ */ jsx("a", {
						href: "https://remikalir.com",
						target: "_blank",
						rel: "noopener noreferrer",
						style: linkStyle,
						onMouseEnter: (e) => e.target.style.color = COLORS.accent,
						onMouseLeave: (e) => e.target.style.color = COLORS.slate500,
						children: "Remi Kalir, PhD"
					}),
					", in collaboration with Claude (Opus 4.6 & 4.8)",
					/* @__PURE__ */ jsx("span", {
						style: { margin: "0 8px" },
						children: "|"
					}),
					"Not affiliated with any institution"
				]
			}),
			/* @__PURE__ */ jsx("p", {
				style: { margin: "0 0 4px" },
				children: "Please cite as: Kalir, R. (2026). The Fair Feedback Project. https://fairfeedbackproject.org — released under CC BY-NC-SA 4.0."
			}),
			/* @__PURE__ */ jsxs("p", {
				style: { margin: 0 },
				children: [
					/* @__PURE__ */ jsx("a", {
						href: "https://forms.gle/m8JihbGLbq1SirLD9",
						target: "_blank",
						rel: "noopener noreferrer",
						style: linkStyle,
						onMouseEnter: (e) => e.target.style.color = COLORS.accent,
						onMouseLeave: (e) => e.target.style.color = COLORS.slate500,
						children: "Share your feedback and suggestions"
					}),
					/* @__PURE__ */ jsx("span", {
						style: { margin: "0 8px" },
						children: "|"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
						target: "_blank",
						rel: "noopener noreferrer",
						style: linkStyle,
						onMouseEnter: (e) => e.target.style.color = COLORS.accent,
						onMouseLeave: (e) => e.target.style.color = COLORS.slate500,
						children: "CC BY-NC-SA 4.0"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/root.jsx
var root_exports = /* @__PURE__ */ __exportAll({
	Layout: () => Layout,
	default: () => root_default
});
var FONT_FACE_CSS = `
/* Source Sans 3 — variable weight axis (200-900), latin subset, self-hosted */
@font-face {
  font-family: 'Source Sans 3';
  font-style: normal;
  font-weight: 200 900;
  font-display: swap;
  src: url('/fonts/source-sans-3-latin-wght-normal.woff2') format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}
@font-face {
  font-family: 'Source Sans 3';
  font-style: italic;
  font-weight: 200 900;
  font-display: swap;
  src: url('/fonts/source-sans-3-latin-wght-italic.woff2') format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}
/* Source Serif 4 — variable weight axis (200-900), latin subset, self-hosted */
@font-face {
  font-family: 'Source Serif 4';
  font-style: normal;
  font-weight: 200 900;
  font-display: swap;
  src: url('/fonts/source-serif-4-latin-wght-normal.woff2') format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}
`;
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "canonical",
				href: "https://fairfeedbackproject.org/"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "theme-color",
				content: "#faf9f7"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32.png"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "description",
				content: "Evidence-based strategies for addressing bias in student evaluations of teaching."
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:type",
				content: "website"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:site_name",
				content: "The Fair Feedback Project"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:url",
				content: "https://fairfeedbackproject.org/"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:title",
				content: "The Fair Feedback Project"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:description",
				content: "Research-based, openly available tools to help instructors and institutions address documented bias in student evaluations of teaching."
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image",
				content: "https://fairfeedbackproject.org/og-image.png"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image:type",
				content: "image/png"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image:width",
				content: "1200"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image:height",
				content: "630"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image:alt",
				content: "Title card for The Fair Feedback Project, showing the project name above the tagline: research-based, openly available tools to help instructors and institutions address documented bias in student evaluations of teaching."
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:card",
				content: "summary_large_image"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:title",
				content: "The Fair Feedback Project"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:description",
				content: "Research-based, openly available tools to help instructors and institutions address documented bias in student evaluations of teaching."
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:image",
				content: "https://fairfeedbackproject.org/og-image.png"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:image:alt",
				content: "Title card for The Fair Feedback Project, showing the project name above the tagline: research-based, openly available tools to help instructors and institutions address documented bias in student evaluations of teaching."
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "preload",
				href: "/fonts/source-sans-3-latin-wght-normal.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "preload",
				href: "/fonts/source-serif-4-latin-wght-normal.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			}),
			/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: FONT_FACE_CSS } }),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	const location = useLocation();
	const mainRef = useRef(null);
	const firstRender = useRef(true);
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		mainRef.current?.focus({ preventScroll: true });
	}, [location.pathname]);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: COLORS.bg,
			minHeight: "100vh",
			fontFamily: "'Source Sans 3', system-ui, sans-serif"
		},
		children: [
			/* @__PURE__ */ jsx(SkipLink, {}),
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx("main", {
				id: "main-content",
				ref: mainRef,
				tabIndex: -1,
				style: { outline: "none" },
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
});
//#endregion
//#region src/App.jsx
var SR_ONLY = {
	position: "absolute",
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0
};
function scrollToElement(el) {
	if (!el) return;
	const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}
function Landing() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handler = () => setIsMobile(window.innerWidth < 640);
		handler();
		window.addEventListener("resize", handler);
		return () => window.removeEventListener("resize", handler);
	}, []);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("div", {
			style: {
				textAlign: "center",
				padding: isMobile ? "3rem 1.25rem 2rem" : "5rem 2rem 3rem",
				maxWidth: 720,
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsx("h1", {
					style: {
						fontFamily: "'Source Serif 4', Georgia, serif",
						fontSize: isMobile ? 30 : 40,
						fontWeight: 600,
						color: COLORS.slate900,
						lineHeight: 1.15,
						margin: "0 0 1.25rem",
						letterSpacing: "-0.02em"
					},
					children: "The Fair Feedback Project"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: isMobile ? 16 : 18,
						color: COLORS.slate600,
						lineHeight: 1.65,
						margin: "0 0 0.5rem",
						fontFamily: "'Source Sans 3', system-ui, sans-serif"
					},
					children: "Evidence-based strategies for addressing bias in student evaluations of teaching."
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: isMobile ? 14 : 15,
						color: COLORS.slate500,
						lineHeight: 1.6,
						margin: "0 auto 3.5rem",
						maxWidth: 560,
						fontFamily: "'Source Sans 3', system-ui, sans-serif"
					},
					children: "Decades of peer-reviewed research document that student evaluations are influenced by instructor gender, race, ethnicity, and other factors unrelated to teaching quality. This project provides practical, research-grounded resources for instructors and institutions."
				})
			]
		}),
		/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 800,
				margin: "0 auto 4rem",
				padding: "0 1.25rem",
				display: "grid",
				gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
				gap: 24
			},
			children: [/* @__PURE__ */ jsx(TrackCard, {
				label: "For instructors",
				title: "Instructor Track",
				description: "Generate course-specific anti-bias statements, discussion guides, and mitigation strategies grounded in the intervention research. Designed for immediate use this semester.",
				action: "Start generating materials",
				accent: COLORS.accent,
				accentBg: COLORS.accentLight,
				to: "/instructor"
			}), /* @__PURE__ */ jsx(TrackCard, {
				label: "For institutions",
				title: "Institutional Track",
				description: "Access research briefs, reform models, policy templates, and workshop resources for centers for teaching and learning, department chairs, and administrators.",
				action: "Coming soon",
				accent: COLORS.green,
				accentBg: COLORS.greenLight
			})]
		}),
		/* @__PURE__ */ jsx("div", {
			style: {
				maxWidth: 640,
				margin: "0 auto 5rem",
				padding: "0 1.25rem",
				textAlign: "center"
			},
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					borderTop: `1px solid ${COLORS.slate200}`,
					paddingTop: "2.5rem"
				},
				children: [
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: 14,
							color: COLORS.slate500,
							lineHeight: 1.7,
							margin: "0 0 1.5rem",
							fontFamily: "'Source Sans 3', system-ui, sans-serif"
						},
						children: "Before exploring the tracks, we recommend reading about the research and principles that guide this project."
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: 14,
							color: COLORS.slate500,
							lineHeight: 1.7,
							margin: "0 0 1.5rem",
							fontFamily: "'Source Sans 3', system-ui, sans-serif"
						},
						children: "Your privacy matters: The Fair Feedback Project does not collect, store, or transmit any of your data, ever."
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							gap: 12,
							justifyContent: "center",
							flexWrap: "wrap"
						},
						children: [
							"about",
							"principles",
							"faq"
						].map((id) => /* @__PURE__ */ jsx(Link, {
							to: `/${id}`,
							style: {
								background: "none",
								border: `1px solid ${COLORS.slate200}`,
								borderRadius: 6,
								padding: "8px 20px",
								fontSize: 14,
								color: COLORS.slate700,
								cursor: "pointer",
								textDecoration: "none",
								fontFamily: "'Source Sans 3', system-ui, sans-serif",
								transition: "all 0.15s ease"
							},
							onMouseEnter: (e) => {
								e.target.style.borderColor = COLORS.accent;
								e.target.style.color = COLORS.accentDark;
							},
							onMouseLeave: (e) => {
								e.target.style.borderColor = COLORS.slate200;
								e.target.style.color = COLORS.slate700;
							},
							children: id === "about" ? "About" : id === "principles" ? "Principles" : "FAQ"
						}, id))
					})
				]
			})
		})
	] });
}
function TrackCard({ label, title, description, action, accent, accentBg, to }) {
	const [hovered, setHovered] = useState(false);
	const clickable = !!to;
	const cardStyle = {
		background: COLORS.white,
		border: `1px solid ${hovered ? accent : COLORS.slate200}`,
		borderRadius: 10,
		padding: "2rem 1.75rem",
		cursor: clickable ? "pointer" : "default",
		transition: "border-color 0.2s ease",
		display: "flex",
		flexDirection: "column",
		width: "100%",
		boxSizing: "border-box",
		textAlign: "left",
		font: "inherit",
		color: "inherit"
	};
	const badge = /* @__PURE__ */ jsx("span", {
		style: {
			display: "inline-block",
			fontSize: 12,
			fontWeight: 500,
			color: accent,
			background: accentBg,
			padding: "3px 10px",
			borderRadius: 4,
			marginBottom: 14,
			alignSelf: "flex-start",
			fontFamily: "'Source Sans 3', system-ui, sans-serif",
			textTransform: "uppercase",
			letterSpacing: "0.04em"
		},
		children: label
	});
	const titleStyle = {
		fontFamily: "'Source Serif 4', Georgia, serif",
		fontSize: 22,
		fontWeight: 600,
		color: COLORS.slate900,
		margin: "0 0 10px"
	};
	const descStyle = {
		fontSize: 14.5,
		color: COLORS.slate600,
		lineHeight: 1.65,
		margin: "0 0 1.5rem",
		flex: 1,
		fontFamily: "'Source Sans 3', system-ui, sans-serif"
	};
	const actionStyle = {
		fontSize: 13,
		color: COLORS.slate600,
		fontStyle: "italic",
		fontFamily: "'Source Sans 3', system-ui, sans-serif"
	};
	if (clickable) return /* @__PURE__ */ jsxs(Link, {
		to,
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		"aria-label": `${title} — ${action}`,
		style: {
			...cardStyle,
			textDecoration: "none"
		},
		children: [
			badge,
			/* @__PURE__ */ jsx("span", {
				style: {
					...titleStyle,
					display: "block"
				},
				children: title
			}),
			/* @__PURE__ */ jsx("span", {
				style: {
					...descStyle,
					display: "block"
				},
				children: description
			}),
			/* @__PURE__ */ jsx("span", {
				style: actionStyle,
				children: action
			})
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		style: cardStyle,
		children: [
			badge,
			/* @__PURE__ */ jsx("h2", {
				style: titleStyle,
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				style: descStyle,
				children: description
			}),
			/* @__PURE__ */ jsx("span", {
				style: actionStyle,
				children: action
			})
		]
	});
}
function Prose({ children }) {
	return /* @__PURE__ */ jsx("div", {
		style: {
			maxWidth: 680,
			margin: "0 auto",
			padding: "3rem 1.25rem 5rem",
			fontFamily: "'Source Sans 3', system-ui, sans-serif",
			fontSize: 16,
			lineHeight: 1.75,
			color: COLORS.text
		},
		children
	});
}
function H1({ children }) {
	return /* @__PURE__ */ jsx("h1", {
		style: {
			fontFamily: "'Source Serif 4', Georgia, serif",
			fontSize: 34,
			fontWeight: 600,
			color: COLORS.slate900,
			margin: "0 0 2rem",
			letterSpacing: "-0.015em",
			lineHeight: 1.2
		},
		children
	});
}
function H2({ children }) {
	return /* @__PURE__ */ jsx("h2", {
		style: {
			fontFamily: "'Source Serif 4', Georgia, serif",
			fontSize: 23,
			fontWeight: 600,
			color: COLORS.slate900,
			margin: "2.5rem 0 1rem",
			lineHeight: 1.3
		},
		children
	});
}
function H3({ children }) {
	return /* @__PURE__ */ jsx("h3", {
		style: {
			fontFamily: "'Source Serif 4', Georgia, serif",
			fontSize: 18,
			fontWeight: 600,
			color: COLORS.slate900,
			margin: "2rem 0 0.75rem",
			lineHeight: 1.35
		},
		children
	});
}
function P({ children, style = {} }) {
	return /* @__PURE__ */ jsx("p", {
		style: {
			margin: "0 0 1.25rem",
			...style
		},
		children
	});
}
function Strong({ children }) {
	return /* @__PURE__ */ jsx("strong", {
		style: {
			fontWeight: 600,
			color: COLORS.slate900
		},
		children
	});
}
function Em({ children }) {
	return /* @__PURE__ */ jsx("em", {
		style: { fontStyle: "italic" },
		children
	});
}
function FAQQuestion({ children }) {
	return /* @__PURE__ */ jsx("h3", {
		style: {
			fontFamily: "'Source Serif 4', Georgia, serif",
			fontSize: 17,
			fontWeight: 600,
			color: COLORS.slate900,
			margin: "2.25rem 0 0.75rem",
			lineHeight: 1.4
		},
		children
	});
}
function FAQSection({ children, id }) {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", {
		id,
		style: {
			fontFamily: "'Source Sans 3', system-ui, sans-serif",
			fontSize: 13,
			fontWeight: 600,
			color: COLORS.accent,
			textTransform: "uppercase",
			letterSpacing: "0.06em",
			margin: "3rem 0 0.5rem",
			paddingTop: "1rem",
			borderTop: `1px solid ${COLORS.slate200}`,
			scrollMarginTop: 72
		},
		children
	}) });
}
function BackToTop({ topRef }) {
	return /* @__PURE__ */ jsx("div", {
		style: {
			margin: "1.5rem 0 0",
			textAlign: "right"
		},
		children: /* @__PURE__ */ jsx("button", {
			onClick: () => scrollToElement(topRef.current),
			style: {
				background: "none",
				border: "none",
				cursor: "pointer",
				fontSize: 13,
				color: COLORS.slate500,
				fontFamily: "'Source Sans 3', system-ui, sans-serif",
				padding: "4px 0"
			},
			onMouseEnter: (e) => e.target.style.color = COLORS.accent,
			onMouseLeave: (e) => e.target.style.color = COLORS.slate500,
			children: "Back to top"
		})
	});
}
function SectionNavButtons({ sections, color, colorLight, colorDark }) {
	const scrollTo = (id) => {
		scrollToElement(document.getElementById(id));
	};
	return /* @__PURE__ */ jsx("div", {
		style: {
			display: "flex",
			flexWrap: "wrap",
			gap: 8,
			margin: "0 0 1rem"
		},
		children: sections.map((s) => /* @__PURE__ */ jsx("button", {
			onClick: () => scrollTo(s.id),
			style: {
				background: colorLight,
				border: "1px solid transparent",
				borderRadius: 6,
				padding: "6px 14px",
				fontSize: 13,
				color: colorDark,
				cursor: "pointer",
				fontFamily: "'Source Sans 3', system-ui, sans-serif",
				fontWeight: 500,
				transition: "all 0.15s ease"
			},
			onMouseEnter: (e) => {
				e.target.style.borderColor = color;
			},
			onMouseLeave: (e) => {
				e.target.style.borderColor = "transparent";
			},
			children: s.label
		}, s.id))
	});
}
function SectionDivider({ id, children, color }) {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", {
		id,
		style: {
			fontFamily: "'Source Sans 3', system-ui, sans-serif",
			fontSize: 13,
			fontWeight: 600,
			color,
			textTransform: "uppercase",
			letterSpacing: "0.06em",
			margin: "3rem 0 0.5rem",
			paddingTop: "1rem",
			borderTop: `1px solid ${COLORS.slate200}`,
			scrollMarginTop: 72
		},
		children
	}) });
}
var ABOUT_SECTIONS = [
	{
		id: "about-why",
		label: "Why this project"
	},
	{
		id: "about-research",
		label: "The research"
	},
	{
		id: "about-action",
		label: "Invitation to action"
	},
	{
		id: "about-accessibility",
		label: "Accessibility"
	},
	{
		id: "about-references",
		label: "Selected references"
	}
];
var PRINCIPLES_SECTIONS = [
	{
		id: "prin-structural",
		label: "Bias is structural"
	},
	{
		id: "prin-evidence",
		label: "Evidence-based recommendations"
	},
	{
		id: "prin-practice",
		label: "Professional best practice"
	},
	{
		id: "prin-limitations",
		label: "Transparency about limitations"
	},
	{
		id: "prin-nuance",
		label: "Care and nuance"
	}
];
function AboutPage() {
	const topRef = useRef(null);
	return /* @__PURE__ */ jsxs(Prose, { children: [
		/* @__PURE__ */ jsx("div", {
			ref: topRef,
			style: { scrollMarginTop: 72 }
		}),
		/* @__PURE__ */ jsx(H1, { children: "About The Fair Feedback Project" }),
		/* @__PURE__ */ jsx(SectionNavButtons, {
			sections: ABOUT_SECTIONS,
			color: COLORS.azure,
			colorLight: COLORS.azureLight,
			colorDark: COLORS.azureDark
		}),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "about-why",
			color: COLORS.azure,
			children: "Why The Fair Feedback Project exists"
		}),
		/* @__PURE__ */ jsxs(P, { children: [
			"Student evaluations of teaching (SETs) are among the most consequential and controversial documents in higher education. At more than 16,000 institutions worldwide, these instruments shape decisions about hiring, reappointment, tenure, promotion, and compensation. In many departments, they represent the ",
			/* @__PURE__ */ jsx(Em, { children: "only" }),
			" systematic metric of teaching performance and quality."
		] }),
		/* @__PURE__ */ jsx(P, { children: "Yet decades of peer-reviewed research — spanning multiple disciplines, methodologies, and national contexts — demonstrate that SETs do not reliably measure teaching effectiveness. What they often measure instead is the degree to which an instructor conforms to students' expectations, expectations shaped by the instructor's gender, race, ethnicity, language background, age, disability status, and sexual orientation. The consequences are not abstract. Faculty who are women, people of color, non-native English speakers, and members of other marginalized groups receive systematically lower evaluation scores and disproportionately more abusive comments — even when teaching identical courses with identical materials. These biased scores then follow them into personnel files, where small numerical differences can determine who is promoted and who is not." }),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project was created by Remi Kalir, PhD, in collaboration with Claude (Claude Code/Opus 4.6 & 4.8), as a practical resource that simultaneously demonstrates how generative AI may be responsibly used to advance pedagogical innovation. It was designed to address this problem at two levels. For individual instructors, it provides evidence-based, course-specific strategies and materials that can be implemented immediately. For centers for teaching and learning, department chairs, and administrators, it provides resources to support institutional reform of how student feedback is collected, interpreted, and used." }),
		/* @__PURE__ */ jsx(P, {
			style: {
				fontStyle: "italic",
				color: COLORS.slate600
			},
			children: "It is not a solution. It is a starting point."
		}),
		/* @__PURE__ */ jsx(BackToTop, { topRef }),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "about-research",
			color: COLORS.azure,
			children: "The research foundation"
		}),
		/* @__PURE__ */ jsx(P, { children: "The design of The Fair Feedback Project is grounded in a substantial body of peer-reviewed scholarship. Rather than summarizing every study, we highlight the key findings that informed our approach." }),
		/* @__PURE__ */ jsx(H3, { children: "The problem: bias in student evaluations" }),
		/* @__PURE__ */ jsx(P, { children: "Research consistently finds that SETs are influenced by factors unrelated to teaching quality. Among the most well-documented:" }),
		/* @__PURE__ */ jsxs(P, { children: [/* @__PURE__ */ jsx(Strong, { children: "Gender bias." }), " Studies using controlled and quasi-experimental designs — in which students evaluate identical courses taught by instructors of different genders, or in which the perceived gender of the instructor is manipulated — find that women receive significantly lower scores than men (Boring, Ottoboni, & Stark, 2016; Chávez & Mitchell, 2020; MacNell, Driscoll, & Hunt, 2015; Mitchell & Martin, 2018). Qualitative analysis of evaluation comments reveals that students evaluate women on different criteria than men, focusing more on personality and appearance and less on expertise, and that women are penalized for failing to conform to gendered expectations of warmth and nurturing (Adams et al., 2022). A review of more than 100 articles confirmed that this bias is robust across data sources and methodologies, though its magnitude is conditional on other factors including discipline, course level, and student demographics (Kreitzer & Sweet-Cushman, 2022)."] }),
		/* @__PURE__ */ jsxs(P, { children: [/* @__PURE__ */ jsx(Strong, { children: "Racial and ethnic bias." }), " Faculty of color receive lower evaluation scores than white faculty, even with course content and format held constant (Chávez & Mitchell, 2020; Reid, 2010; Smith & Hawkins, 2011). Faculty from non-English-speaking backgrounds face similar penalties (Fan et al., 2019). These effects compound with gender: women of color face the intersection of both biases (Daskalopoulou, 2024; Merritt, 2008)."] }),
		/* @__PURE__ */ jsxs(P, { children: [/* @__PURE__ */ jsx(Strong, { children: "Structural and contextual effects." }), " Evaluations are influenced by class size, course level, whether the course is required or elective, discipline, time of day, and grading leniency — none of which reflect teaching quality (Kogan, 2014; Kreitzer & Sweet-Cushman, 2022). A department's gender composition creates role-congruity expectations that bias evaluations of faculty in the gender minority (Aragón, Pietri, & Powell, 2023)."] }),
		/* @__PURE__ */ jsxs(P, { children: [/* @__PURE__ */ jsx(Strong, { children: "Abusive comments." }), " Anonymous evaluation comments directed at women and marginalized faculty include personal attacks on appearance, intelligence, and identity. A survey of 674 academics found that previous estimates of the rate and severity of abuse had underestimated the problem, and that many institutions are aware of the issue but prioritize data collection over staff protection (Heffernan, 2023). The mental health consequences of biased and abusive evaluations are significant and underexamined (Daskalopoulou, 2024; Heffernan, 2022)."] }),
		/* @__PURE__ */ jsxs(P, { children: [/* @__PURE__ */ jsx(Strong, { children: "Weak relationship to learning." }), " Meta-analyses have found little to no correlation between SET scores and student learning outcomes (Boring, Ottoboni, & Stark, 2016; Uttl, White, & Gonzalez, 2017). SETs appear to reward practices associated with student satisfaction — such as lenient grading — more than practices associated with deep learning."] }),
		/* @__PURE__ */ jsx(H3, { children: "What works: evidence on mitigation strategies" }),
		/* @__PURE__ */ jsx(P, { children: "A smaller but growing body of research has tested interventions designed to reduce bias in SETs. The Fair Feedback Project draws on those findings while being transparent about their limitations." }),
		/* @__PURE__ */ jsxs(P, { children: [/* @__PURE__ */ jsx(Strong, { children: "Informational anti-bias statements show promise." }), " In a randomized experiment at Iowa State University, students who received language informing them of unconscious bias and asking them to focus on course content rated female instructors significantly higher — as much as half a point on a five-point scale — with no effect on ratings of male instructors (Peterson, Biederman, Andersen, Ditonto, & Roe, 2019). A larger replication at Ohio State University across 800+ classes found that a \"high-stakes\" treatment emphasizing the career consequences of evaluations led to higher scores for racial and ethnic minority instructors (Genetin, Chen, Kogan, & Kalish, 2022). A field experiment at a French university found that an informational message sharing research data on bias was effective, while a normative \"don't discriminate\" message was not (Boring & Philippe, 2021)."] }),
		/* @__PURE__ */ jsxs(P, { children: [
			/* @__PURE__ */ jsx(Strong, { children: "Framing matters — and can backfire." }),
			" A study at the University of Girona tested debiasing videos and found that a video about implicit bias generally reduced the gender gap, but a video explicitly focused on gender bias caused male students to rate female instructors ",
			/* @__PURE__ */ jsx(Em, { children: "lower" }),
			" than the control group (Ayllón & Zamora, 2025). An Australian replication found that male and female students responded to bias messaging in opposite directions (Kim, Williams, Johnston, & Fan, 2024). These findings demonstrate that how a message is framed is as important as whether a message is delivered."
		] }),
		/* @__PURE__ */ jsxs(P, { children: [/* @__PURE__ */ jsx(Strong, { children: "Self-affirmation reduces bias through a different mechanism." }), " Belgian researchers found that having students complete a self-affirmation exercise before evaluations eliminated gender bias — but by reducing inflated ratings for male professors rather than raising ratings for female professors (Hoorens, Dekkers, & Deschrijver, 2021)."] }),
		/* @__PURE__ */ jsxs(P, { children: [/* @__PURE__ */ jsx(Strong, { children: "Some interventions have shown null effects." }), " A study at selective liberal arts colleges found that neither modified evaluation questions nor delayed timing of evaluations reduced gender disparities in qualitative comments (Owen, De Bruin, & Wu, 2025). A biology department replication of Peterson et al. yielded variable results across subfields (Mitchem et al., 2025). These null findings are important: they indicate that messaging interventions are not universally effective and should not be treated as a standalone solution."] }),
		/* @__PURE__ */ jsx(BackToTop, { topRef }),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "about-action",
			color: COLORS.azure,
			children: "An invitation to institutional action"
		}),
		/* @__PURE__ */ jsx(P, { children: "If you are an instructor, staff at a center for teaching and learning or similar office, or an administrator, we want to be direct: the most impactful thing you can do is not to share The Fair Feedback Project with your colleagues, though we hope you will. The most impactful thing you can do is to change — within your respective sphere of influence — how your institution collects, interprets, and uses student evaluation data." }),
		/* @__PURE__ */ jsx(P, { children: "The evidence supports several institutional reforms. Rename evaluation instruments to emphasize student feedback rather than teaching ratings (as Augsburg University and UNC Asheville have done). Redesign evaluation questions to focus on specific student experiences and learning rather than global judgments of instructor quality. Report distributions, medians, and trends rather than means, and never use small numerical differences between instructors as evidence of differential teaching quality. Restrict or redesign open-ended comment prompts, where bias and abuse are most concentrated. Adopt a holistic approach to teaching assessment that includes peer observation, teaching portfolios, and evidence of student learning alongside student feedback. And make explicit, in tenure and promotion guidelines, that raw SET scores should not be used as a primary or standalone metric of teaching effectiveness." }),
		/* @__PURE__ */ jsx(P, { children: "Several institutions have already taken meaningful steps. In 2018, the University of Southern California stopped using student evaluations of teaching in tenure and promotion decisions, a change prompted by the provost's concern about documented bias against women and faculty of color. USC moved to a peer-review model of teaching assessment, in which peer evaluation is based on classroom observation and review of course materials, design, and assignments; faculty submit teaching reflection statements that describe how they use student feedback to improve instruction; and student evaluations were redesigned to focus on student engagement and responsibility rather than instructor ratings. Students are now asked about factors like hours dedicated to study, engagement outside class, and their own approaches to learning course material. As USC's UCAPT manual notes, student ratings and comments may be considered as indicators of student engagement, but the well-known limitations of those evaluations should be recognized. Hamilton College now requires departments to use multiple types of evidence in tenure and promotion decisions, and has explicitly prohibited using student feedback to compare faculty to one another. As Hamilton economist Ann Owen, who led the faculty committee on evaluation reform, has explained, the college can no longer conclude that one person is a better teacher than another based on more positive student feedback. Hamilton's Department Chair Handbook instructs chairs not to allow student evaluations to define good teaching exclusively, to corroborate numerical evaluations with written comments, to consider contextual issues such as class size and course level, and to discuss evidence of possible bias. At the departmental level, Hamilton's Sociology department has gone further, stating that student evaluations will be assessed within the broader gendered, racialized, and heteronormative context of the college." }),
		/* @__PURE__ */ jsxs(P, { children: [
			"Beyond these individual examples, a broader movement to transform teaching evaluation is underway. In a comprehensive survey of over 20 institutions, Michael McCreary (2026) documents a growing consensus that traditional reliance on student evaluations is inadequate and that modern approaches must incorporate multiple dimensions of teaching effectiveness assessed through multiple sources of evidence — not just the student voice, but also the instructor's self-reflection and peer review. Institutions as varied as UCLA, the University of Oregon, the University of Colorado Boulder, Clemson, Boise State, and the University of Georgia have adopted or are piloting teaching quality frameworks that define effective teaching across four to seven dimensions, evaluated through portfolios of evidence rather than a single numerical score. McCreary identifies six stages of institutional change, from recognizing the problem to reaching a sustainable steady state, and notes that even minimal policy changes — such as requiring that peer observation be available to faculty who want it — can catalyze broader cultural shifts. For institutions just beginning this work, the TEval approach, the DeLTA project, and the 2025 publication ",
			/* @__PURE__ */ jsx(Em, { children: "Transforming College Teaching Evaluation" }),
			" (Austin et al.) provide particularly useful models and resources."
		] }),
		/* @__PURE__ */ jsx(P, { children: "The 2019 American Sociological Association Statement on Student Evaluations of Teaching, now endorsed by nearly two dozen scholarly organizations, provides an authoritative summary of the case for reform and concrete recommendations for institutions. We urge institutions to consult it." }),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project recognizes that reform is slow and uneven; nonetheless, instructors need support now. The project will have succeeded most fully if it contributes, even modestly, to making itself unnecessary." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef }),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "about-accessibility",
			color: COLORS.azure,
			children: "Accessibility"
		}),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project is designed for use by everyone, including instructors who rely on assistive technology. This project site has been audited against WCAG 2.1 Level AA — the international standard for digital accessibility — and revised to meet it (audit completed in June, 2026). This accessibility audit was conducted in collaboration with Claude (Opus 4.8), consistent with how the overall project was built. Practically, that means every interactive element can be reached and operated by keyboard; the question flows in the Instructor Track are structured so screen readers announce them clearly; focus moves sensibly as you navigate; generated materials and status messages are announced rather than appearing silently; and text meets contrast and readability guidelines." }),
		/* @__PURE__ */ jsx(P, { children: "In keeping with this project's commitment to transparency, we describe this as an aim we work toward, not a guarantee. Accessibility standards evolve, assistive technologies vary, and no audit catches everything. If you encounter a barrier — anything that makes the site harder to use than it should be — please tell us through the feedback form (link below in the footer), and we will work to fix it." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef }),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "about-references",
			color: COLORS.azure,
			children: "Selected references"
		}),
		/* @__PURE__ */ jsx("div", {
			style: {
				fontSize: 14,
				lineHeight: 1.7,
				color: COLORS.textSecondary
			},
			children: REFERENCES.map((ref, i) => /* @__PURE__ */ jsx("p", {
				style: {
					margin: "0 0 0.75rem",
					paddingLeft: "2rem",
					textIndent: "-2rem"
				},
				children: ref
			}, i))
		}),
		/* @__PURE__ */ jsx(BackToTop, { topRef })
	] });
}
var REFERENCES = [
	"Adams, S., Bekker, S., Fan, Y., Gordon, T., Shepherd, L. J., Slavich, E., & Waters, D. (2022). Gender bias in student evaluations of teaching: 'Punish[ing] those who fail to do their gender right.' Higher Education, 83, 787–807.",
	"Aragón, O. R., Pietri, E. S., & Powell, B. A. (2023). Gender bias in teaching evaluations: The causal role of department gender composition. Proceedings of the National Academy of Sciences, 120(4), e2118466120.",
	"Austin, A. E., et al. (2025). Transforming college teaching evaluation: A framework for advancing instructional excellence. Harvard Education Press.",
	"Ayllón, S., & Zamora, C. (2025). Gender bias in student evaluations of teaching: Do debiasing campaigns work? IZA Discussion Paper No. 17632.",
	"Boring, A., Ottoboni, K., & Stark, P. B. (2016). Student evaluations of teaching (mostly) do not measure teaching effectiveness. ScienceOpen Research.",
	"Boring, A., & Philippe, A. (2021). Reducing discrimination in the field: Evidence from an awareness raising intervention targeting gender biases in student evaluations of teaching. Journal of Public Economics, 193, 104323.",
	"Chávez, K., & Mitchell, K. M. W. (2020). Exploring bias in student evaluations: Gender, race, and ethnicity. PS: Political Science & Politics, 53(2), 270–274.",
	"Daskalopoulou, A. (2024). Understanding the impact of biased student evaluations: An intersectional analysis of academics' experiences in the UK higher education context. Studies in Higher Education, 49(12), 2411–2422.",
	"Fan, Y., Shepherd, L. J., Slavich, E., Waters, D., Stone, M., Abel, R., & Johnston, E. L. (2019). Gender and cultural bias in student evaluations: Why representation matters. PLoS ONE, 14(2), e0209749.",
	"Genetin, B., Chen, J., Kogan, V., & Kalish, A. (2022). Mitigating implicit bias in student evaluations: A randomized intervention. Applied Economic Perspectives and Policy, 44, 110–128.",
	"Heffernan, T. (2022). Sexism, racism, prejudice, and bias: A literature review and synthesis of research surrounding student evaluations of courses and teaching. Assessment & Evaluation in Higher Education, 47(1), 144–154.",
	"Heffernan, T. (2023). Abusive comments in student evaluations of courses and teaching: The attacks women and marginalised academics endure. Higher Education, 85, 225–239.",
	"Hoorens, V., Dekkers, G., & Deschrijver, E. (2021). Gender bias in student evaluations of teaching: Students' self-affirmation reduces the bias by lowering evaluations of male professors. Sex Roles, 84, 34–48.",
	"Kim, F., Williams, L. A., Johnston, E. L., & Fan, Y. (2024). Bias intervention messaging in student evaluations of teaching: The role of gendered perceptions of bias. Heliyon, 10(17).",
	"Kogan, J. (2014). Student course evaluation: Class size, class level, discipline and gender bias. In Proceedings of the 6th International Conference on Computer Supported Education (CSEDU-2014), 221–225.",
	"Kreitzer, R. J., & Sweet-Cushman, J. (2022). Evaluating student evaluations of teaching: A review of measurement and equity bias in SETs and recommendations for ethical reform. Journal of Academic Ethics, 20, 73–84.",
	"MacNell, L., Driscoll, A., & Hunt, A. N. (2015). What's in a name: Exposing gender bias in student ratings of teaching. Innovative Higher Education, 40, 291–303.",
	"McCreary, M. (2026, February 10). A practical guide to modern teaching evaluation. Engaged Learning Collective (Substack).",
	"Merritt, D. J. (2008). Bias, the brain, and student evaluations of teaching. St. John's Law Review, 82, 235–287.",
	"Mitchem, L. D., et al. (2025). Replication of an intervention to mitigate gender bias in student evaluations of teaching yields variable results across a biology department. CBE—Life Sciences Education, 24(3), ar35.",
	"Mitchell, K. M. W., & Martin, J. (2018). Gender bias in student evaluations. PS: Political Science & Politics, 51(3), 648–652.",
	"Owen, A. L., De Bruin, E., & Wu, S. (2025). Can you mitigate gender bias in student evaluations of teaching? Evaluating alternative methods of soliciting feedback. Assessment & Evaluation in Higher Education, 50(3), 442–457.",
	"Peterson, D. A. M., Biederman, L. A., Andersen, D., Ditonto, T. M., & Roe, K. (2019). Mitigating gender bias in student evaluations of teaching. PLoS ONE, 14(5), e0216241.",
	"Reinsch, R. W., Goltz, S. M., & Hietapelto, A. B. (2020). Student evaluations and the problem of implicit bias. Journal of College and University Law, 45(1), 114–140.",
	"Uttl, B., White, C. A., & Gonzalez, D. W. (2017). Meta-analysis of faculty's teaching effectiveness: Student evaluation of teaching ratings and student learning are not related. Studies in Educational Evaluation, 54, 22–42."
];
function PrinciplesPage() {
	const topRef = useRef(null);
	return /* @__PURE__ */ jsxs(Prose, { children: [
		/* @__PURE__ */ jsx("div", {
			ref: topRef,
			style: { scrollMarginTop: 72 }
		}),
		/* @__PURE__ */ jsx(H1, { children: "Principles" }),
		/* @__PURE__ */ jsx(P, { children: "The following five principles informed every design decision in The Fair Feedback Project. The principles are presented here not as abstract ideals but as commitments that carry practical consequences throughout the project — shaping what we recommend, what we caution against, and what we decline to promise." }),
		/* @__PURE__ */ jsx(SectionNavButtons, {
			sections: PRINCIPLES_SECTIONS,
			color: COLORS.green,
			colorLight: COLORS.greenLight,
			colorDark: COLORS.greenDark
		}),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "prin-structural",
			color: COLORS.green,
			children: "1. Bias is structural"
		}),
		/* @__PURE__ */ jsx(H2, { children: "1. Bias in student evaluations is a structural problem, not an individual failing." }),
		/* @__PURE__ */ jsx(P, { children: "The research makes clear that bias in student evaluations of teaching is systemic — rooted in cultural stereotypes, institutional norms, and evaluation instrument design. Individual instructors did not create this problem and cannot be expected to solve it alone." }),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project provides individual-level strategies because they can be implemented immediately and the evidence suggests they can help. But it does so within an explicit framework that calls for institutional and policy-level reform. Every recommendation in the Instructor Track is accompanied by a clear acknowledgment that individual action is necessary but not sufficient, and the Institutional Track exists precisely to support the structural changes that the research calls for." }),
		/* @__PURE__ */ jsx(P, { children: "We urge institutions to adopt the recommendations of the American Sociological Association's 2019 Statement on Student Evaluations of Teaching, endorsed by nearly two dozen scholarly organizations: use student evaluations as one component of a holistic assessment of teaching, not as a standalone metric; frame evaluation instruments as opportunities for student feedback rather than ratings of teaching effectiveness; and exercise caution in the use of evaluation data in personnel decisions." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef }),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "prin-evidence",
			color: COLORS.green,
			children: "2. Evidence-based recommendations"
		}),
		/* @__PURE__ */ jsx(H2, { children: "2. All recommendations are tied to specific research findings." }),
		/* @__PURE__ */ jsx(P, { children: "Every strategy, every piece of generated language, and every recommendation in The Fair Feedback Project is grounded in peer-reviewed scholarship. Where the evidence is strong, we say so. Where it is mixed, limited, or context-dependent, we say that too. We do not present contested findings as settled, and we do not extrapolate beyond what the data support." }),
		/* @__PURE__ */ jsx(P, { children: "This commitment shapes the project in concrete ways. When the Instructor Track generates anti-bias language for evaluation preambles, it draws on the specific messaging approaches that Peterson et al. (2019), Genetin et al. (2022), and Boring and Philippe (2021) found to be effective — and it steers instructors away from the normative and explicitly gendered framing that Boring and Philippe (2021) and Ayllón and Zamora (2025) found to be ineffective or counterproductive. When the project describes the likely effects of a strategy, it reports the range of findings across studies, including null results such as Owen, De Bruin, and Wu (2025) and variable results such as Mitchem et al. (2025), rather than cherry-picking only the positive outcomes." }),
		/* @__PURE__ */ jsx(P, { children: "Throughout the project, citations are provided so that university instructors, staff, and administrators can consult the original studies and make informed decisions for their own contexts." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef }),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "prin-practice",
			color: COLORS.green,
			children: "3. Professional best practice"
		}),
		/* @__PURE__ */ jsx(H2, { children: "3. The Fair Feedback Project is designed as a professional best practice, not an additional burden." }),
		/* @__PURE__ */ jsx(P, { children: "We are acutely aware that the faculty most likely to seek out this project are those most harmed by biased evaluations — women, faculty of color, non-native English speakers, and other marginalized instructors. We have designed the project so that engaging with it feels empowering rather than exhausting, and so that the labor of mitigating bias is framed as a shared professional responsibility rather than the individual burden of those most affected." }),
		/* @__PURE__ */ jsx(P, { children: "This principle has several practical implications. The project is designed for use by all instructors, including those who may benefit from current evaluation practices. Bias mitigation is framed as something a thoughtful professional does — comparable to inclusive syllabus design or accessible course materials — not as a defensive measure taken by the structurally vulnerable. We encourage centers for teaching and learning and faculty leaders to promote The Fair Feedback Project broadly and to incorporate its resources into programming, faculty development workshops, and departmental conversations about evaluation practice, so that engagement with bias mitigation becomes part of the ordinary fabric of teaching rather than an act of individual self-protection." }),
		/* @__PURE__ */ jsx(P, { children: "The project is also designed to respect peoples' time. An instructor should be able to generate useful, evidence-based materials in a single focused session. Depth is available for those who want it — the research base, the nuances of framing, the institutional resources — but it is never required to reach a practical outcome." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef }),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "prin-limitations",
			color: COLORS.green,
			children: "4. Transparency about limitations"
		}),
		/* @__PURE__ */ jsx(H2, { children: "4. Transparency about limitations is a feature, not a flaw." }),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project cannot eliminate bias in student evaluations. We are direct about this because instructors deserve honesty, and because overpromising would ultimately undermine the credibility of the broader reform effort." }),
		/* @__PURE__ */ jsx(P, { children: "Here is what the evidence supports and what it does not. Well-designed messaging interventions can meaningfully reduce bias in quantitative ratings for some instructors in some contexts. Effects vary by discipline, course level, student demographics, institutional culture, and the specific framing of the intervention. There is less evidence that messaging interventions reduce bias in qualitative comments, where abusive and prejudicial language is most prevalent (Owen, De Bruin, & Wu, 2025). Self-affirmation exercises have shown promise, but operate through a different mechanism — reducing inflated ratings for male professors rather than raising ratings for female professors (Hoorens, Dekkers, & Deschrijver, 2021). And no individual-level strategy can compensate for an institutional policy that treats raw evaluation scores as a reliable measure of teaching quality." }),
		/* @__PURE__ */ jsx(P, { children: "We present these limitations not to discourage action but to calibrate expectations. An instructor who uses The Fair Feedback Project and sees modest improvement in their evaluations has achieved something real. An instructor who uses it and sees no change has not failed — they have encountered the limits of individual action against a structural problem, and that experience can itself become fuel for advocacy." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef }),
		/* @__PURE__ */ jsx(SectionDivider, {
			id: "prin-nuance",
			color: COLORS.green,
			children: "5. Care and nuance"
		}),
		/* @__PURE__ */ jsx(H2, { children: "5. Effective messaging requires care and nuance." }),
		/* @__PURE__ */ jsx(P, { children: "The intervention research reveals that the content and framing of anti-bias messaging is critical — and that well-intentioned but poorly designed interventions can do more harm than good. This principle governs the language The Fair Feedback Project generates and recommends." }),
		/* @__PURE__ */ jsxs(P, { children: [
			"Three categories of findings inform our approach. First, ",
			/* @__PURE__ */ jsx(Strong, { children: "informational messages work better than normative ones." }),
			" Messages that describe how bias operates, share research findings, and invite students to reflect on their judgments have shown positive effects (Boring & Philippe, 2021; Genetin et al., 2022; Peterson et al., 2019). Messages that simply instruct students not to discriminate have generally been ineffective (Boring & Philippe, 2021). Second, ",
			/* @__PURE__ */ jsx(Strong, { children: "implicit-bias framing works better than explicit gender-bias framing." }),
			" A study testing debiasing videos found that a video about implicit bias generally reduced the gender gap in evaluations, but a video explicitly focused on gender bias triggered backlash — male students rated female instructors even lower than the control group (Ayllón & Zamora, 2025). Third, ",
			/* @__PURE__ */ jsx(Strong, { children: "the same message can affect different students differently." }),
			" An Australian replication found that male students responded to bias messaging by raising ratings of disadvantaged instructors, while female students responded by lowering ratings of advantaged instructors (Kim, Williams, Johnston, & Fan, 2024). The net effect was reduced disparity, but through divergent mechanisms."
		] }),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project steers instructors toward messaging approaches that the evidence supports and away from approaches the evidence suggests are ineffective or counterproductive. We explain these choices throughout the project so that instructors understand not just what to say, but why — and so that they can make informed adaptations for their own contexts rather than treating any generated language as a script to be followed uncritically." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef })
	] });
}
var FAQ_SECTIONS = [
	{
		id: "faq-about",
		label: "About the project"
	},
	{
		id: "faq-design",
		label: "Design decisions"
	},
	{
		id: "faq-implementation",
		label: "Practical implementation"
	},
	{
		id: "faq-limitations",
		label: "Limitations"
	},
	{
		id: "faq-institutional",
		label: "Institutional use"
	}
];
function FAQPage() {
	const faqTopRef = useRef(null);
	return /* @__PURE__ */ jsxs(Prose, { children: [
		/* @__PURE__ */ jsx("div", {
			ref: faqTopRef,
			style: { scrollMarginTop: 72 }
		}),
		/* @__PURE__ */ jsx(H1, { children: "Frequently asked questions" }),
		/* @__PURE__ */ jsx(SectionNavButtons, {
			sections: FAQ_SECTIONS,
			color: COLORS.accent,
			colorLight: COLORS.accentLight,
			colorDark: COLORS.accentDark
		}),
		/* @__PURE__ */ jsx(FAQSection, {
			id: "faq-about",
			children: "About The Fair Feedback Project"
		}),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "What is The Fair Feedback Project?" }),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project is an openly accessible, research-based resource designed to help higher education instructors and institutions address documented bias in student evaluations of teaching (SETs). The project was created by Remi Kalir, PhD, as a practical resource that simultaneously demonstrates how generative AI (specifically Claude Code/Opus 4.6 & 4.8) may be responsibly used to advance pedagogical innovation." }),
		/* @__PURE__ */ jsx(P, { children: "This project offers two tracks: an Instructor Track, which helps individual instructors generate evidence-based, course-specific mitigation strategies and materials for immediate use; and an Institutional Track, which provides resources and guidance for centers for teaching and learning, faculty leaders, and administrators working toward structural reform of how student feedback is collected, interpreted, and used in higher education. The project is designed to be useful across institutional types — research universities, liberal arts colleges, community colleges, and professional schools. All design decisions are grounded in peer-reviewed scholarship rather than any single institution's policies or practices." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Is this project affiliated with a specific institution?" }),
		/* @__PURE__ */ jsx(P, { children: "No. The Fair Feedback Project, developed by Remi Kalir in collaboration with Claude, is neither affiliated with nor endorsed by any higher education institution (including Remi's employer, Duke University), or any evaluation software vendor, professional organization, or advocacy group." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Who is this for?" }),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project is designed for anyone involved in the teaching evaluation process in higher education. This includes individual instructors seeking practical strategies they can implement in their own courses this semester; educational developers and centers for teaching and learning looking for workshop materials, research summaries, and frameworks for campus conversations; department chairs responsible for interpreting evaluation data or supporting professional learning; as well as faculty and administrators involved in designing evaluation instruments, setting personnel policies, or making tenure and promotion decisions." }),
		/* @__PURE__ */ jsx(P, { children: "We encourage all instructors to engage with The Fair Feedback Project, not only those who may be disadvantaged by current evaluation practices. Bias mitigation is most effective — and most equitable — when it is treated as a shared professional practice rather than an individual response to a personal problem." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Does The Fair Feedback Project collect any data?" }),
		/* @__PURE__ */ jsx(P, { children: "No. The Fair Feedback Project does not collect, store, or transmit any user data. Any information you voluntarily provide while using the Instructor Track — such as your discipline, course level, or class size — is used solely to generate your materials in real time. Nothing is saved, logged, or accessible to anyone after your session. There are no individual accounts, no analytics tracking individual usage, and no way for us or anyone else to connect generated materials back to a specific person or course." }),
		/* @__PURE__ */ jsx(P, { children: "We made this a foundational design choice because instructors — particularly those most affected by evaluation bias — should be able to explore these resources without concern that doing so will be visible to their institution, documented in any system, or used for any purpose beyond their own." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef: faqTopRef }),
		/* @__PURE__ */ jsx(FAQSection, {
			id: "faq-design",
			children: "Design decisions"
		}),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Why does the project use \"implicit bias\" framing rather than explicitly naming gender or racial bias?" }),
		/* @__PURE__ */ jsx(P, { children: "This is one of the most consequential design decisions in The Fair Feedback Project, and it is grounded directly in the intervention research. Three findings are particularly relevant." }),
		/* @__PURE__ */ jsx(P, { children: "First, Boring and Philippe (2021) tested two different messages at a French university: one that shared research information about bias and one that normatively instructed students not to discriminate, especially on the basis of gender. The informational message was effective; the normative one was not." }),
		/* @__PURE__ */ jsx(P, { children: "Second, Ayllón and Zamora (2025) tested two debiasing videos at the University of Girona. A video about implicit bias generally reduced the gender gap in evaluations. But a video that explicitly focused on gender bias — including the finding that male students are the primary source of the bias — triggered backlash: male students in that treatment group rated female instructors even lower than the control group." }),
		/* @__PURE__ */ jsx(P, { children: "Third, Peterson et al. (2019) used language that referenced both race and gender bias but framed it within a broader discussion of unconscious and unintentional bias, the high stakes of evaluations, and a request to focus on course content. This framing was effective." }),
		/* @__PURE__ */ jsx(P, { children: "The pattern is clear: informational, research-based messaging about implicit bias shows consistent positive effects, while normative or explicitly gendered messaging risks ineffectiveness or backlash. The Fair Feedback Project generates language consistent with the approaches that have demonstrated positive results, and it flags the risks associated with alternative framings so that instructors can make informed decisions for their own contexts." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Why doesn't the project ask about my gender, race, or other identity characteristics?" }),
		/* @__PURE__ */ jsx(P, { children: "For two reasons. First, the evidence suggests that the most effective mitigation strategies — informational, implicit-bias framing with an emphasis on course content and the high stakes of evaluations — are beneficial regardless of the instructor's identity. Peterson et al. (2019) found that their intervention improved ratings for female instructors with no negative effect on male instructors. Genetin et al. (2022) found that their high-stakes treatment improved ratings for racial and ethnic minority instructors. These are strategies that help those most affected without requiring them to identify themselves." }),
		/* @__PURE__ */ jsx(P, { children: "Second, asking instructors to disclose identity characteristics in order to receive appropriate recommendations would place the burden of the problem on those experiencing it, which conflicts with our Principle 3 commitment to designing The Fair Feedback Project as a professional best practice rather than an additional burden on marginalized faculty." }),
		/* @__PURE__ */ jsx(P, { children: "The project does ask about course-level contextual factors — such as discipline, class size, course level, and modality — because the research shows these variables interact with bias in ways that affect which strategies are most appropriate and how language should be tailored." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Why does the project include strategies beyond just the anti-bias statement?" }),
		/* @__PURE__ */ jsx(P, { children: "Because no single intervention is sufficient. The anti-bias evaluation preamble is the most well-studied strategy, but even the most optimistic findings (Peterson et al., 2019) show effects of approximately half a point on a five-point scale — meaningful but not transformative. Owen, De Bruin, and Wu (2025) found that similar messaging did not reduce gender disparities in qualitative comments. Heffernan (2023) documents the severity of abusive comments that no preamble is likely to prevent." }),
		/* @__PURE__ */ jsx(P, { children: "A multi-strategy approach — combining evaluation preambles with structured in-class discussions, redesigned evaluation questions, self-affirmation prompts, and guidance on building teaching portfolios that contextualize evaluation data — offers more comprehensive coverage of the problem. It also gives instructors agency to select the strategies that are most appropriate for their course context and comfort level, rather than presenting a single intervention as a universal fix." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "How does the project account for differences across disciplines and institutional types?" }),
		/* @__PURE__ */ jsx(P, { children: "The Instructor Track asks about course-level contextual factors because the research identifies several variables that interact with evaluation bias. Evaluations in STEM fields tend to show different patterns than those in the humanities (Kreitzer & Sweet-Cushman, 2022). Large introductory courses present different challenges than small upper-level seminars. Required courses receive systematically different ratings than electives (Kogan, 2014). A department's gender composition shapes the role-congruity expectations that drive bias (Aragón, Pietri, & Powell, 2023)." }),
		/* @__PURE__ */ jsx(P, { children: "The project uses these inputs to tailor its recommendations — for example, adjusting the emphasis of generated language or flagging strategies that may be more or less effective in a given context. However, we are transparent that the intervention research has been conducted in a limited range of institutional and disciplinary settings. Most experimental studies have been conducted at large public universities in introductory-level courses. Generalization to other contexts — small colleges, graduate seminars, clinical settings, online programs — requires caution, and we note this wherever relevant." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef: faqTopRef }),
		/* @__PURE__ */ jsx(FAQSection, {
			id: "faq-implementation",
			children: "Practical implementation"
		}),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "When should I deploy an anti-bias statement?" }),
		/* @__PURE__ */ jsx(P, { children: "The research has tested anti-bias messaging in three deployment contexts: as a preamble to the evaluation instrument itself (included in the email or online survey before questions begin), as an in-class script delivered verbally by the instructor before evaluations, and as a pre-evaluation announcement posted to the course learning management system." }),
		/* @__PURE__ */ jsx(P, { children: "The experimental studies most commonly used the evaluation preamble format (Peterson et al., 2019; Genetin et al., 2022; Boring & Philippe, 2021; Kim et al., 2024). This has the advantage of reaching every student who completes the evaluation, requiring no class time, and being easily standardized. However, at many institutions, individual instructors cannot modify the evaluation instrument — that is controlled at the department or institutional level. In those cases, an in-class script or LMS announcement may be the most practical option. The Fair Feedback Project generates materials for all three contexts." }),
		/* @__PURE__ */ jsx(P, { children: "If you have the opportunity to choose, deploying the statement through the evaluation instrument itself most closely replicates the conditions under which the research has demonstrated positive effects. If your institution allows instructors to include custom introductory language in course evaluations, that is the strongest option." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Will this look like I'm trying to manipulate my evaluations?" }),
		/* @__PURE__ */ jsx(P, { children: "This is a reasonable concern, and we take it seriously. A few points may be useful." }),
		/* @__PURE__ */ jsxs(P, { children: [
			"The strategies in The Fair Feedback Project are drawn from peer-reviewed, published research conducted at major universities with institutional review board approval. Peterson et al. (2019) published their intervention language, data, and analysis in ",
			/* @__PURE__ */ jsx(Em, { children: "PLoS ONE" }),
			", an open-access journal. Genetin et al. (2022) pre-registered their study design. These are not informal workarounds — they are rigorously tested, transparent, evidence-based practices."
		] }),
		/* @__PURE__ */ jsx(P, { children: "If you anticipate that colleagues or administrators might question your use of anti-bias language, The Fair Feedback Project can help you prepare. The project provides specific citations and summaries you can share with a department chair or tenure committee to contextualize the intervention as a response to well-documented measurement problems in student evaluations. Framing your use of these strategies as part of a professional commitment to fair evaluation — rather than an attempt to inflate your scores — is both accurate and consistent with how the researchers themselves describe the purpose of their interventions." }),
		/* @__PURE__ */ jsx(P, { children: "You may also find it useful to advocate for your institution to adopt anti-bias language at the departmental or institutional level, so that it becomes standard practice rather than an individual choice. The Institutional Track of The Fair Feedback Project provides resources to support that conversation." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Can I use the generated language exactly as written, or should I modify it?" }),
		/* @__PURE__ */ jsx(P, { children: "The language generated by The Fair Feedback Project is designed to be used as-is, but thoughtful adaptation for your specific context is also appropriate. The generated text is modeled on the messaging approaches that have demonstrated positive effects in the research. Significant departures from these approaches — particularly toward more normative or explicitly gendered framing — risk reducing effectiveness or triggering backlash, as discussed in our Principles." }),
		/* @__PURE__ */ jsx(P, { children: "If you do adapt the language, we recommend preserving three core elements that are consistent across the effective interventions: an informational statement that evaluation bias is a documented phenomenon, an emphasis on the consequential nature of evaluations for instructors' careers, and a concrete redirection asking students to focus on course content and their learning experience rather than factors unrelated to instruction." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "How should I introduce this topic to my students?" }),
		/* @__PURE__ */ jsx(P, { children: "The research supports a range of approaches, from a brief written statement to a substantive classroom discussion. A written preamble — delivered through the evaluation instrument, an email, or an LMS announcement — requires the least class time and most closely replicates the experimental conditions in the literature." }),
		/* @__PURE__ */ jsx(P, { children: "However, some instructors may wish to go further. A growing number of faculty are incorporating discussions of evaluation bias into their courses, treating it as a teaching moment about critical thinking, research methods, or equity — topics that are already part of many curricula. This approach is consistent with the broader pedagogical case for transparency in teaching, and some practitioners have argued that it can be more impactful than a standalone written statement precisely because it engages students in active reflection rather than passive reading." }),
		/* @__PURE__ */ jsx(P, { children: "If you choose to hold a classroom discussion, we recommend framing it around the research evidence rather than your personal experience. Students are more receptive to information about documented patterns across institutions than to a conversation that may feel like a plea for better ratings. The Instructor Track can generate a discussion guide tailored to your course context." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef: faqTopRef }),
		/* @__PURE__ */ jsx(FAQSection, {
			id: "faq-limitations",
			children: "Limitations and honest expectations"
		}),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Will this fix bias in my evaluations?" }),
		/* @__PURE__ */ jsx(P, { children: "Probably not entirely, and we think it's important to be straightforward about that. The positive studies show meaningful but modest effects — approximately half a point on a five-point scale for quantitative ratings of female instructors (Peterson et al., 2019), and higher scores for racial and ethnic minority instructors in the high-stakes treatment condition (Genetin et al., 2022). These effects are meaningful because they are comparable in magnitude to the bias itself. But they are not transformative, and they have not been demonstrated consistently across all contexts." }),
		/* @__PURE__ */ jsx(P, { children: "There is less evidence that messaging interventions affect qualitative comments (Owen, De Bruin, & Wu, 2025), and no evidence that they prevent abusive comments (Heffernan, 2023). Effects may diminish over time if students become habituated to the language (Peterson et al., 2019). And no individual-level strategy can offset an institutional policy that treats raw evaluation scores as a primary measure of teaching quality." }),
		/* @__PURE__ */ jsx(P, { children: "What we can say is this: the strategies in The Fair Feedback Project represent the best available evidence on what individual instructors can do to promote fairer evaluation of their teaching. Using them is substantially better than doing nothing. But they work best as part of a broader institutional commitment to evaluation reform, not as a substitute for one." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Should my institution still be using student evaluations in tenure and promotion decisions?" }),
		/* @__PURE__ */ jsx(P, { children: "The American Sociological Association, joined by nearly two dozen scholarly organizations, recommends against using student evaluations as a primary or standalone metric in personnel decisions. This recommendation is grounded in evidence that SETs are weakly related to student learning (Boring, Ottoboni, & Stark, 2016; Uttl, White, & Gonzalez, 2017), systematically biased against marginalized faculty, and statistically misused (means of skewed distributions, small differences treated as meaningful, low response rates ignored)." }),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project does not take a position on whether institutions should eliminate student evaluations entirely. Student feedback can provide valuable information about the learning experience when it is collected thoughtfully, interpreted with appropriate caution, and situated within a holistic assessment that includes peer observation, teaching portfolios, evidence of student learning, and reflective teaching statements. What the evidence does not support is the continued use of raw evaluation scores — particularly single-item global ratings — as the primary or sole basis for consequential employment decisions." }),
		/* @__PURE__ */ jsxs(P, { children: [
			"For institutions exploring alternatives, we recommend consulting the TEval framework, the DeLTA project, Michael McCreary's (2026) practical guide to modern teaching evaluation, and the 2025 publication ",
			/* @__PURE__ */ jsx(Em, { children: "Transforming College Teaching Evaluation" }),
			" (Austin et al.), all of which provide detailed models for holistic teaching assessment."
		] }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "What about the concern that raising awareness of bias could cause students to overcorrect?" }),
		/* @__PURE__ */ jsx(P, { children: "This is a legitimate methodological concern raised by Peterson et al. (2019) themselves: it is possible that students who are told about bias against female instructors may overcompensate by raising their ratings beyond what an unbiased assessment would produce. The researchers acknowledge that their data cannot definitively distinguish between bias reduction and overcorrection." }),
		/* @__PURE__ */ jsx(P, { children: "However, several considerations are worth noting. The intervention showed no effect on ratings of male instructors, which would be unexpected if students were simply inflating all ratings in response to a social desirability cue. The magnitude of the positive effect on female instructors (approximately half a point) is comparable to the estimated magnitude of the gender bias itself, which is consistent with bias reduction rather than overcorrection. And the Kim et al. (2024) Australian study found that male and female students responded in opposite directions — male students raised ratings of disadvantaged instructors while female students lowered ratings of advantaged instructors — which suggests a more nuanced recalibration than simple inflation." }),
		/* @__PURE__ */ jsx(P, { children: "We present this concern transparently because it is part of the scholarly conversation, and because instructors should understand that the evidence, while promising, is not without open questions." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "The research has mostly been conducted at large public universities. Is it relevant to my context?" }),
		/* @__PURE__ */ jsx(P, { children: "Most of the experimental intervention studies — Peterson et al. (2019) at Iowa State, Genetin et al. (2022) at Ohio State, Boring and Philippe (2021) at a French university — were conducted in large introductory courses at research-intensive institutions. The Owen, De Bruin, and Wu (2025) study at liberal arts colleges is a notable exception, though it found null results for its specific interventions. The Kim et al. (2024) study was conducted at an Australian university. Ayllón and Zamora (2025) worked at the University of Girona in Spain." }),
		/* @__PURE__ */ jsx(P, { children: "The underlying evidence on bias itself is broader — documented across institutional types, national contexts, disciplines, and course modalities. The question is whether the specific mitigation strategies tested in one context transfer to others. We think it is reasonable to expect that the general principles — informational framing, emphasis on high stakes, redirection toward course content — will be useful across contexts, but we cannot guarantee that effect sizes will be comparable. We note these limitations wherever relevant and encourage instructors to think of the generated materials as an evidence-informed starting point for their own context, not a guaranteed intervention." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef: faqTopRef }),
		/* @__PURE__ */ jsx(FAQSection, {
			id: "faq-institutional",
			children: "Institutional use"
		}),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "How can a center for teaching and learning use The Fair Feedback Project?" }),
		/* @__PURE__ */ jsx(P, { children: "The Institutional Track provides resources designed for faculty development contexts. Centers for teaching and learning and similar campus offices can use the research summaries and evidence briefs to anchor workshops on evaluation bias; use the generated anti-bias language as a starting point for developing institution-wide evaluation preambles; share the project with faculty as part of orientation programming or pre-evaluation-season communications; use the Principles and About sections as a framework for conversations about evaluation reform; and draw on the institutional case studies and reform models to build a case for policy change with administrators and faculty governance bodies." }),
		/* @__PURE__ */ jsx(P, { children: "The project is designed to complement, not replace, broader institutional reform efforts. University centers, offices, departments, and other groups that are already engaged in teaching evaluation reform — through teaching quality frameworks, peer observation protocols, or holistic evaluation models — may find The Fair Feedback Project useful as one component of that larger work, particularly for addressing the specific problem of bias in the student feedback component of a multi-source evaluation system." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "Can we adopt anti-bias language at the departmental or institutional level rather than leaving it to individual instructors?" }),
		/* @__PURE__ */ jsx(P, { children: "Yes, and the research suggests this may be more effective and more equitable than individual adoption. When anti-bias language is standard — included in the evaluation instrument for all courses rather than added optionally by individual instructors — it avoids placing the burden of bias mitigation on those most affected by bias. It also avoids the concern that individual use might be perceived as an attempt to manipulate evaluations, since the language applies uniformly." }),
		/* @__PURE__ */ jsx(P, { children: "However, institutional adoption also carries risks. Peterson et al. (2019) cautioned that if anti-bias language became universal, students might habituate to it and its effects could diminish. Ayllón and Zamora (2025) found that only about 13% of treated students actually watched a debiasing video when participation was voluntary, raising questions about compliance in institutional deployments. And any institutional language will need to be carefully framed — the evidence clearly favors informational over normative approaches, and institutions should resist the temptation to add language that sounds appropriately strong but that the research suggests is counterproductive." }),
		/* @__PURE__ */ jsx(P, { children: "The Fair Feedback Project can generate language suitable for institutional adoption, and the Institutional Track provides guidance on how to implement it effectively." }),
		/* @__PURE__ */ jsx(FAQQuestion, { children: "How should evaluation committees interpret SET data given what we know about bias?" }),
		/* @__PURE__ */ jsx(P, { children: "This is a question for institutions rather than individual instructors, but it is one of the most consequential applications of the research. Several evidence-based recommendations from the literature are worth highlighting." }),
		/* @__PURE__ */ jsx(P, { children: "Look at distributions, not just means. Most faculty receive positively skewed evaluation scores, which means means are disproportionately influenced by negative outliers — a pattern that may itself be shaped by bias (Kreitzer & Sweet-Cushman, 2022). Medians and modal responses are more robust. Never treat small numerical differences as meaningful. Typical evaluation scores fall within a fraction of a point of one another. A difference between a 4.43 and a 4.60 on a five-point scale is not evidence of differential teaching quality — it is noise, and it may be bias-driven noise (Aragón, Pietri, & Powell, 2023). Consider contextual factors. Class size, course level, whether the course is required or elective, discipline, and time of day all influence evaluation scores independently of teaching quality (Kogan, 2014; Kreitzer & Sweet-Cushman, 2022). Committees should account for these factors rather than comparing raw scores across dissimilar courses. Corroborate with other evidence. Evaluation scores should be interpreted alongside peer observations, teaching portfolios, evidence of student learning, and the instructor's own reflective statement — not in isolation. Use student feedback formatively, not comparatively. Hamilton College's policy of prohibiting the use of student feedback to compare faculty to one another provides a useful model. Evaluation data can help an individual instructor understand and improve their practice without being weaponized as a ranking system." }),
		/* @__PURE__ */ jsx(BackToTop, { topRef: faqTopRef })
	] });
}
function generatePreamble(ctx) {
	const disc = ctx.discipline;
	let contentFocus = "the assignments, the materials, the clarity of instruction, and what you learned";
	if (disc === "stem") contentFocus = "the problem sets, labs, lectures, and how effectively the material was taught";
	if (disc === "humanities" || disc === "arts") contentFocus = "the readings, discussions, assignments, and how effectively the material was taught";
	if (disc === "professional") contentFocus = "the cases, projects, practical applications, and how effectively the material was taught";
	let text = "Student evaluations of teaching play an important role in the review of instructors and the improvement of courses at this institution. Research has shown that student evaluations can be influenced by unconscious and unintentional biases related to factors such as the instructor's background, rather than the quality of instruction or what students have learned.";
	if (ctx.size === "large" || ctx.size === "very_large") {
		if (ctx.level === "intro" && ctx.required === "yes") text += "\n\nThis is especially important in large, introductory courses where research shows that factors beyond instruction — such as whether a course is required, class size, and discipline — can systematically influence evaluation scores.";
	}
	text += "\n\nYour feedback is taken seriously and has a direct impact on instructors' professional development and career progression. Because of this, we ask that your responses reflect your genuine assessment of the course and instruction.";
	let focusIntro = "As you complete this evaluation, please focus on the substance of the course — ";
	if (ctx.modality === "online") {
		focusIntro = "As you complete this evaluation, please focus on the substance of the course — the organization of the online learning experience, ";
		contentFocus = contentFocus.replace("the clarity of instruction, and", "and");
	}
	text += "\n\n" + focusIntro + contentFocus + " — rather than factors unrelated to your learning experience.";
	text += "\n\nThank you for taking the time to provide thoughtful and constructive feedback.";
	return text;
}
function generateScript(ctx) {
	const disc = ctx.discipline;
	let specificGuidance = "Did the assignments help you learn? Were the course materials effective? Was the instruction clear and well-organized? Was feedback on your work useful?";
	if (disc === "stem") specificGuidance = "Did the problem sets and labs help you learn? Were the lectures clear and well-structured? Did you understand how concepts built on each other? Was feedback on your work useful?";
	if (disc === "humanities" || disc === "arts") specificGuidance = "Did the readings and discussions deepen your understanding? Were assignments well-designed and clearly communicated? Did the course challenge you to think in new ways? Was feedback on your work useful?";
	if (disc === "professional") specificGuidance = "Did the cases, projects, or practical applications help you develop professional skills? Was the course well-organized? Did you see connections between the material and your professional goals? Was feedback on your work useful?";
	let text = `Before we get to course evaluations, ${ctx.size === "small" ? "I want to have a brief conversation" : "I want to take a moment to talk"} about how they work and why your feedback matters.

A large body of peer-reviewed research — published in journals across political science, economics, psychology, and education — has found that student evaluations are often influenced by factors that have nothing to do with how much students actually learned. These factors include things like class size, whether the course is required, the time of day it meets, and the discipline. Research has also shown that unconscious biases related to an instructor's background can affect evaluation scores, even when the quality of teaching is identical.`;
	if (ctx.size === "large" || ctx.size === "very_large") text += " For example, research shows that large courses like this one tend to receive somewhat lower evaluation scores than small seminars, regardless of teaching quality.";
	if (ctx.required === "yes") text += " Required courses also tend to receive lower scores than electives, independent of the instruction.";
	text += `

I want you to know that evaluations are consequential. They are used in decisions about instructors' careers, including hiring, promotion, and professional development. Your honest, thoughtful assessment makes a real difference.

So when you complete the evaluation, I'd encourage you to focus on things like: ${specificGuidance} These are the kinds of observations that are most valuable — both for improving this course and for fairly assessing instruction.

I'm not asking for higher ratings — I'm asking for more accurate ones. Your honest feedback, focused on the course and your learning, helps make the evaluation process fairer for everyone. Thank you.`;
	return text;
}
function generateLMS(ctx) {
	const disc = ctx.discipline;
	let contentFocus = "the quality of the assignments, the clarity of instruction, the usefulness of feedback on your work, and what you took away from the course";
	if (disc === "stem") contentFocus = "the quality of the problem sets and labs, the clarity of lectures, the usefulness of feedback on your work, and what you took away from the course";
	if (disc === "humanities" || disc === "arts") contentFocus = "the quality of the readings and discussions, the design of assignments, the usefulness of feedback on your work, and what you took away from the course";
	if (disc === "professional") contentFocus = "the quality of the cases and projects, the relevance of practical applications, the usefulness of feedback on your work, and what you took away from the course";
	return `A note about course evaluations

As the evaluation period approaches, I want to share some context about how course evaluations work and how your feedback will be used.

Research across multiple disciplines has found that student evaluations can be influenced by unconscious biases and by factors unrelated to teaching quality — including class size, discipline, and whether a course is required. Your evaluations are taken seriously and play a meaningful role in instructors' professional development and career progression.

When completing the evaluation, I'd encourage you to focus on your learning experience: ${contentFocus}. Feedback that addresses these specific elements is most useful for improving instruction and for fairly assessing teaching.

Thank you for taking the time to provide thoughtful feedback. Your perspective genuinely matters.`;
}
function generateDiscussionGuide() {
	return `INSTRUCTOR NOTE (not to be read aloud): This guide is designed for a 15–20 minute structured discussion about evaluation bias, to be held before the evaluation period. The research supports framing this conversation around documented patterns rather than your personal experience. Students are more receptive to information about research findings than to a conversation that may feel like a request for better ratings. You can adapt this guide to your teaching style and course context. The key principles to preserve are: (1) ground the conversation in research, not personal anecdote; (2) emphasize that bias affects the accuracy of evaluations, not just the feelings of instructors; and (3) redirect students toward specific, course-focused feedback.

---

OPENING: "Today I want us to spend a few minutes thinking critically about course evaluations — how they work, what the research says about them, and how to give feedback that's genuinely useful. This is a topic that connects to broader questions about how we measure quality, how unconscious bias operates, and how institutions make decisions based on data."

RESEARCH CONTEXT: "Here's what the research says. Over the past two decades, studies using rigorous experimental designs — including randomized controlled trials — have found that evaluation scores are influenced by factors including class size, whether a course is required, the discipline, and unconscious biases related to instructor characteristics. In some studies, identical courses taught with identical materials received significantly different evaluation scores based solely on the perceived identity of the instructor. This doesn't mean evaluations are useless — it means they're measuring a mix of things, and we can make them more accurate by being aware of that."

REFLECTION QUESTIONS (choose 1–2):
• "What do you think makes an evaluation genuinely useful for improving a course?"
• "If you were designing an evaluation instrument, what questions would you ask to get the most accurate picture of the learning experience?"
• "When you've filled out evaluations in the past, what have you focused on? Has it usually been about the course content, or about other factors?"

CLOSING: "I'm sharing this because I want your evaluations to be as accurate and useful as possible — for you as a student whose feedback shapes how courses are taught, and for the fairness of the process for instructors. When you complete the evaluation for this course, I'd encourage you to focus on what you actually learned, what helped your learning, and what could be improved."`;
}
function generateSelfAffirmation() {
	return `INSTRUCTOR NOTE: Research suggests that having students briefly reflect on their own values or strengths before completing evaluations can reduce the influence of unconscious bias on their responses (Hoorens, Dekkers, & Deschrijver, 2021). The mechanism appears to be that self-affirmation reduces the need to maintain self-image through social comparison, which in turn reduces biased judgments of others. This prompt can be included at the beginning of the evaluation instrument (if your institution allows custom content), read aloud before evaluations, or posted as part of an LMS announcement. It takes less than two minutes for students to complete.

---

PROMPT FOR STUDENTS:

Before beginning the evaluation, please take a moment to reflect on the following:

Think about a value, quality, or strength that is important to you — something that contributes positively to who you are. This might be creativity, loyalty, humor, intellectual curiosity, perseverance, kindness, or any other quality you value in yourself.

Take 30 seconds to think about why this quality matters to you and how it has shown up in your life recently.

When you're ready, please proceed to the evaluation.`;
}
function generatePortfolioGuidance() {
	return `If your institution uses teaching portfolios, tenure files, or annual review processes that include student evaluation data, you may wish to include a brief statement contextualizing your evaluation results. This is consistent with the American Sociological Association's recommendation that evaluation data be interpreted within the broader context of an instructor's teaching practice and with awareness of documented biases.

TEMPLATE LANGUAGE:

In accordance with best practices identified in the peer-reviewed literature on student evaluation of teaching, I have incorporated evidence-based strategies to promote the accuracy and fairness of student feedback in my courses. These strategies — including informational language about evaluation bias — are grounded in experimental research published in journals including PLoS ONE and the Journal of Public Economics, and are consistent with the recommendations of the American Sociological Association's 2019 Statement on Student Evaluations of Teaching.

I include this context not to discount student feedback, which I take seriously as one important lens on my teaching, but to note that evaluation scores should be interpreted alongside other evidence of teaching effectiveness — including peer observation, course materials, and evidence of student learning — and with awareness of the well-documented influence of course characteristics (class size, level, discipline, required status) and unconscious bias on evaluation scores.`;
}
function generateColleagueSummary() {
	return `I've incorporated evidence-based language into my course evaluation process to promote the accuracy and fairness of student feedback. This practice is grounded in peer-reviewed research, including:

• Peterson et al. (2019), who found in a randomized experiment that informational language about evaluation bias significantly improved the accuracy of evaluations, with effects of approximately half a point on a five-point scale (published in PLoS ONE).

• Genetin et al. (2022), who replicated and extended this finding across 800+ classes at Ohio State University, finding that similar language improved evaluation accuracy for racial and ethnic minority instructors (published in Applied Economic Perspectives and Policy).

• Boring and Philippe (2021), who found in a field experiment at a French university that informational messaging about bias was effective while normative "don't discriminate" messaging was not (published in the Journal of Public Economics).

These strategies are consistent with the recommendations of the American Sociological Association's 2019 Statement on Student Evaluations of Teaching, endorsed by nearly two dozen scholarly organizations, which recommends that institutions use student evaluations as one component of a holistic assessment of teaching rather than as a standalone metric.

For more information, visit The Fair Feedback Project.`;
}
var EVIDENCE_NOTES = {
	preamble: "This language is modeled on the intervention that Peterson et al. (2019) found to improve evaluation accuracy for female instructors by approximately half a point on a five-point scale, with no effect on male instructor ratings. Genetin et al. (2022) found similar effects for racial and ethnic minority instructors. The informational framing used here is consistent with approaches shown to be effective; normative \"don't discriminate\" framing and explicitly gendered language have been shown to be ineffective or counterproductive (Boring & Philippe, 2021; Ayllón & Zamora, 2025).",
	script: "This script extends the evaluation preamble into a conversational format. While the experimental research primarily tested written preambles, the pedagogical case for transparency about evaluation bias is supported by practitioner literature. The core elements preserved here — informational framing, high-stakes emphasis, and redirection toward course content — are drawn from the effective interventions in Peterson et al. (2019) and Genetin et al. (2022).",
	lms: "This announcement adapts the evidence-based messaging from Peterson et al. (2019) and Genetin et al. (2022) for asynchronous delivery. Boring and Philippe (2021) used email as their primary delivery mechanism and found the informational treatment effective in that format.",
	discussion: "Structured classroom discussions about evaluation bias have been recommended by practitioners and education scholars as a complement to written statements. While this approach has not been tested in the same rigorous experimental designs as the evaluation preamble, it is consistent with the broader pedagogical case for transparency and critical reflection in teaching.",
	selfAffirmation: "This prompt is based on Hoorens, Dekkers, and Deschrijver (2021), who found that self-affirmation exercises eliminated gender bias in evaluations by reducing inflated ratings for male professors. Note that this approach works through a different mechanism than the anti-bias statement — it is not a substitute but a complement.",
	portfolio: "Including a contextual statement about evaluation data in your teaching portfolio is consistent with the American Sociological Association's 2019 recommendations and with the broader movement toward holistic teaching evaluation documented in McCreary (2026) and Austin et al. (2025).",
	colleague: "This summary is designed to be shared with colleagues, department chairs, or committee members who may have questions about your use of anti-bias strategies. All citations refer to peer-reviewed, published research."
};
function getContextFlags(ctx) {
	const flags = [];
	if (ctx.discipline === "stem" && ctx.level === "intro") flags.push("Research suggests that STEM introductory courses may be particularly susceptible to evaluation bias, both because of discipline effects and because these courses are often large and required (Kreitzer & Sweet-Cushman, 2022; Kogan, 2014).");
	if (ctx.modality === "online") flags.push("Ayllón (2022) found that gender bias in evaluations was amplified in online teaching contexts. The strategies provided here are applicable to online courses, though the evidence base for online-specific interventions is more limited.");
	if (ctx.size === "very_large") flags.push("In very large courses, an in-class discussion may not be practical. The evaluation preamble and LMS announcement formats may be more effective for reaching all students.");
	if (ctx.hasExistingLanguage === "yes") flags.push("Since your institution already includes some contextual language in its evaluation instrument, the materials here are designed to complement that existing language. Review your institution's standard framing before deciding whether to use these materials as a supplement or share them with your evaluation coordinator.");
	if (ctx.canModifyEval === "no") flags.push("Since you may not be able to include custom language in your evaluation instrument, the in-class script and LMS announcement are your strongest options for reaching students directly. You may also wish to share the evaluation preamble language with your department chair or evaluation coordinator as a recommendation for institutional adoption.");
	return flags;
}
function OutputBlock({ title, text, evidence, accent }) {
	const [copied, setCopied] = useState(false);
	const [copyFailed, setCopyFailed] = useState(false);
	const copy = async () => {
		try {
			if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
			else {
				const ta = document.createElement("textarea");
				ta.value = text;
				ta.setAttribute("readonly", "");
				ta.style.position = "fixed";
				ta.style.left = "-9999px";
				document.body.appendChild(ta);
				ta.focus();
				ta.select();
				const ok = document.execCommand("copy");
				document.body.removeChild(ta);
				if (!ok) throw new Error("execCommand copy failed");
			}
			setCopyFailed(false);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
			setCopyFailed(true);
			setTimeout(() => setCopyFailed(false), 5e3);
		}
	};
	const buttonLabel = copied ? "Copied" : copyFailed ? "Press Ctrl/⌘ + C" : "Copy text";
	return /* @__PURE__ */ jsxs("div", {
		style: { margin: "0 0 2rem" },
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					margin: "0 0 8px"
				},
				children: [/* @__PURE__ */ jsx("h3", {
					style: {
						fontFamily: "'Source Serif 4', Georgia, serif",
						fontSize: 17,
						fontWeight: 600,
						color: COLORS.slate900,
						margin: 0
					},
					children: title
				}), /* @__PURE__ */ jsx("button", {
					onClick: copy,
					style: {
						background: copied ? COLORS.greenLight : "none",
						border: `1px solid ${copied ? COLORS.green : COLORS.slate200}`,
						borderRadius: 6,
						padding: "5px 14px",
						fontSize: 13,
						cursor: "pointer",
						color: copied ? COLORS.greenDark : COLORS.slate600,
						fontFamily: "'Source Sans 3', system-ui, sans-serif",
						transition: "all 0.15s"
					},
					children: buttonLabel
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					background: COLORS.white,
					border: `1px solid ${COLORS.slate200}`,
					borderRadius: 8,
					padding: "1.25rem 1.5rem",
					fontSize: 14.5,
					lineHeight: 1.7,
					color: COLORS.text,
					whiteSpace: "pre-wrap",
					fontFamily: "'Source Sans 3', system-ui, sans-serif"
				},
				children: text
			}),
			copyFailed && /* @__PURE__ */ jsx("p", {
				style: {
					fontSize: 13,
					color: COLORS.slate600,
					lineHeight: 1.6,
					margin: "8px 0 0"
				},
				children: "Copying isn't available in this browser. Select the text above and press Ctrl + C (or ⌘ + C) to copy it."
			}),
			/* @__PURE__ */ jsx("span", {
				"aria-live": "polite",
				style: SR_ONLY,
				children: copied ? "Copied to clipboard." : copyFailed ? "Copying isn't available in this browser. Select the text and press Control or Command plus C." : ""
			}),
			/* @__PURE__ */ jsx("p", {
				style: {
					fontSize: 13,
					color: COLORS.slate500,
					lineHeight: 1.6,
					margin: "8px 0 0",
					fontStyle: "italic"
				},
				children: evidence
			})
		]
	});
}
function RadioGroup({ label, options, value, onChange }) {
	const groupName = useId();
	return /* @__PURE__ */ jsxs("fieldset", {
		style: {
			margin: "0 0 1.5rem",
			border: "none",
			padding: 0,
			minInlineSize: "auto"
		},
		children: [label && /* @__PURE__ */ jsx("legend", {
			style: {
				display: "block",
				fontSize: 15,
				fontWeight: 500,
				color: COLORS.slate900,
				margin: "0 0 8px",
				padding: 0,
				fontFamily: "'Source Sans 3', system-ui, sans-serif"
			},
			children: label
		}), /* @__PURE__ */ jsx("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: 6
			},
			children: options.map((opt) => /* @__PURE__ */ jsxs("label", {
				style: {
					display: "flex",
					alignItems: "flex-start",
					gap: 10,
					cursor: "pointer",
					fontSize: 14.5,
					color: COLORS.slate700,
					lineHeight: 1.5,
					padding: "8px 0",
					minHeight: 40,
					boxSizing: "border-box"
				},
				children: [/* @__PURE__ */ jsx("input", {
					type: "radio",
					name: groupName,
					checked: value === opt.value,
					onChange: () => onChange(opt.value),
					style: {
						marginTop: 3,
						accentColor: COLORS.accent
					}
				}), /* @__PURE__ */ jsx("span", { children: opt.label })]
			}, opt.value))
		})]
	});
}
function CheckGroup({ label, options, values, onChange }) {
	const toggle = (v) => {
		if (v === "all") {
			onChange(["all"]);
			return;
		}
		let next = values.filter((x) => x !== "all");
		if (next.includes(v)) next = next.filter((x) => x !== v);
		else next.push(v);
		if (next.length === 0) next = ["all"];
		onChange(next);
	};
	return /* @__PURE__ */ jsxs("fieldset", {
		style: {
			margin: "0 0 1.5rem",
			border: "none",
			padding: 0,
			minInlineSize: "auto"
		},
		children: [label && /* @__PURE__ */ jsx("legend", {
			style: {
				display: "block",
				fontSize: 15,
				fontWeight: 500,
				color: COLORS.slate900,
				margin: "0 0 8px",
				padding: 0,
				fontFamily: "'Source Sans 3', system-ui, sans-serif"
			},
			children: label
		}), /* @__PURE__ */ jsx("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: 6
			},
			children: options.map((opt) => /* @__PURE__ */ jsxs("label", {
				style: {
					display: "flex",
					alignItems: "flex-start",
					gap: 10,
					cursor: "pointer",
					fontSize: 14.5,
					color: COLORS.slate700,
					lineHeight: 1.5,
					padding: "8px 0",
					minHeight: 40,
					boxSizing: "border-box"
				},
				children: [/* @__PURE__ */ jsx("input", {
					type: "checkbox",
					checked: values.includes(opt.value),
					onChange: () => toggle(opt.value),
					style: {
						marginTop: 3,
						accentColor: COLORS.accent
					}
				}), /* @__PURE__ */ jsx("span", { children: opt.label })]
			}, opt.value))
		})]
	});
}
function InstructorTrack() {
	const [step, setStep] = useState(0);
	const [deployment, setDeployment] = useState(["all"]);
	const [discipline, setDiscipline] = useState("");
	const [level, setLevel] = useState("");
	const [size, setSize] = useState("");
	const [showExtra, setShowExtra] = useState(false);
	const [modality, setModality] = useState("");
	const [required, setRequired] = useState("");
	const [canModify, setCanModify] = useState("");
	const [hasExisting, setHasExisting] = useState("");
	const [scope, setScope] = useState("");
	const headingRef = useRef(null);
	const firstStepRender = useRef(true);
	useEffect(() => {
		if (firstStepRender.current) {
			firstStepRender.current = false;
			return;
		}
		headingRef.current?.focus();
	}, [step]);
	const canProceed = () => {
		if (step === 1) return deployment.length > 0;
		if (step === 2) return discipline && level && size;
		if (step === 3) return canModify || hasExisting;
		if (step === 4) return scope;
		return true;
	};
	const ctx = {
		discipline,
		level,
		size,
		modality: modality || "in_person",
		required: required || "no",
		canModifyEval: canModify,
		hasExistingLanguage: hasExisting
	};
	const showPreamble = deployment.includes("all") || deployment.includes("preamble");
	const showScript = deployment.includes("all") || deployment.includes("script");
	const showLMS = deployment.includes("all") || deployment.includes("lms");
	const showBroad = scope === "broad";
	const flags = step === 5 ? getContextFlags(ctx) : [];
	return /* @__PURE__ */ jsxs("div", {
		style: {
			maxWidth: 680,
			margin: "0 auto",
			padding: "3rem 1.25rem 5rem",
			fontFamily: "'Source Sans 3', system-ui, sans-serif"
		},
		children: [
			step === 0 && /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					style: {
						display: "inline-block",
						fontSize: 12,
						fontWeight: 500,
						color: COLORS.accent,
						background: COLORS.accentLight,
						padding: "3px 10px",
						borderRadius: 4,
						marginBottom: 16,
						textTransform: "uppercase",
						letterSpacing: "0.04em"
					},
					children: "Instructor Track"
				}),
				/* @__PURE__ */ jsx("h1", {
					ref: headingRef,
					tabIndex: -1,
					style: {
						fontFamily: "'Source Serif 4', Georgia, serif",
						fontSize: 30,
						fontWeight: 600,
						color: COLORS.slate900,
						margin: "0 0 1rem",
						lineHeight: 1.2,
						outline: "none"
					},
					children: "Generate evidence-based materials"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: 16,
						color: COLORS.slate600,
						lineHeight: 1.7,
						margin: "0 0 1rem"
					},
					children: "The Instructor Track helps you generate evidence-based materials to promote fairer student evaluations in your courses. You'll answer a few questions about your course and how you'd like to use these materials. The process takes about two minutes."
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: 14,
						color: COLORS.slate500,
						lineHeight: 1.6,
						margin: "0 0 2rem"
					},
					children: "Nothing you enter is saved, logged, or transmitted. All materials are generated in your browser and exist only in your session."
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setStep(1),
					style: {
						background: COLORS.accent,
						color: COLORS.white,
						border: "none",
						borderRadius: 8,
						padding: "12px 28px",
						fontSize: 15,
						fontWeight: 500,
						cursor: "pointer",
						fontFamily: "'Source Sans 3', system-ui, sans-serif"
					},
					children: "Get started"
				})
			] }),
			step === 1 && /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(StepHeader, {
					step: 1,
					total: 4,
					title: "How do you plan to use these materials?",
					headingRef
				}),
				/* @__PURE__ */ jsx(CheckGroup, {
					label: "",
					options: [
						{
							value: "preamble",
							label: "As introductory language for the course evaluation instrument"
						},
						{
							value: "script",
							label: "As a script or talking points for an in-class conversation before evaluations"
						},
						{
							value: "lms",
							label: "As an announcement via email or learning management system"
						},
						{
							value: "all",
							label: "I'm not sure yet — show me all options"
						}
					],
					values: deployment,
					onChange: setDeployment
				}),
				/* @__PURE__ */ jsx(StepNav, {
					step: 1,
					canProceed: canProceed(),
					onBack: () => setStep(0),
					onNext: () => setStep(2)
				})
			] }),
			step === 2 && /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(StepHeader, {
					step: 2,
					total: 4,
					title: "Tell us about your course",
					headingRef
				}),
				/* @__PURE__ */ jsx(RadioGroup, {
					label: "Discipline area",
					value: discipline,
					onChange: setDiscipline,
					options: [
						{
							value: "stem",
							label: "STEM (science, technology, engineering, mathematics)"
						},
						{
							value: "social_sciences",
							label: "Social sciences"
						},
						{
							value: "humanities",
							label: "Humanities"
						},
						{
							value: "arts",
							label: "Arts and design"
						},
						{
							value: "professional",
							label: "Professional programs (business, law, education, health sciences, etc.)"
						},
						{
							value: "other",
							label: "Other / interdisciplinary"
						}
					]
				}),
				/* @__PURE__ */ jsx(RadioGroup, {
					label: "Course level",
					value: level,
					onChange: setLevel,
					options: [
						{
							value: "intro",
							label: "Introductory / first-year"
						},
						{
							value: "intermediate",
							label: "Intermediate / second or third year"
						},
						{
							value: "upper",
							label: "Upper-level / advanced"
						},
						{
							value: "graduate",
							label: "Graduate"
						}
					]
				}),
				/* @__PURE__ */ jsx(RadioGroup, {
					label: "Class size",
					value: size,
					onChange: setSize,
					options: [
						{
							value: "small",
							label: "Small (fewer than 25 students)"
						},
						{
							value: "medium",
							label: "Medium (25–75 students)"
						},
						{
							value: "large",
							label: "Large (76–150 students)"
						},
						{
							value: "very_large",
							label: "Very large (more than 150 students)"
						}
					]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setShowExtra(!showExtra),
					"aria-expanded": showExtra,
					"aria-controls": "course-extra-detail",
					style: {
						background: "none",
						border: "none",
						cursor: "pointer",
						fontSize: 14,
						color: COLORS.accent,
						padding: "4px 0",
						margin: "0 0 1rem",
						fontFamily: "'Source Sans 3', system-ui, sans-serif"
					},
					children: showExtra ? "Hide additional detail" : "Add more detail about your course"
				}),
				showExtra && /* @__PURE__ */ jsxs("div", {
					id: "course-extra-detail",
					style: {
						borderLeft: `2px solid ${COLORS.accentLight}`,
						paddingLeft: 20,
						margin: "0 0 1rem"
					},
					children: [/* @__PURE__ */ jsx(RadioGroup, {
						label: "Modality",
						value: modality,
						onChange: setModality,
						options: [
							{
								value: "in_person",
								label: "In-person"
							},
							{
								value: "online",
								label: "Online (synchronous or asynchronous)"
							},
							{
								value: "hybrid",
								label: "Hybrid"
							}
						]
					}), /* @__PURE__ */ jsx(RadioGroup, {
						label: "Is this course required for most students taking it?",
						value: required,
						onChange: setRequired,
						options: [
							{
								value: "yes",
								label: "Yes, required"
							},
							{
								value: "no",
								label: "No, elective"
							},
							{
								value: "mix",
								label: "Mix of both"
							}
						]
					})]
				}),
				/* @__PURE__ */ jsx(StepNav, {
					step: 2,
					canProceed: canProceed(),
					onBack: () => setStep(1),
					onNext: () => setStep(3),
					hint: "Please answer all three questions to continue."
				})
			] }),
			step === 3 && /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(StepHeader, {
					step: 3,
					total: 4,
					title: "Your institutional context",
					headingRef
				}),
				/* @__PURE__ */ jsx(RadioGroup, {
					label: "Can you include custom introductory language in your course evaluation instrument?",
					value: canModify,
					onChange: setCanModify,
					options: [
						{
							value: "yes",
							label: "Yes"
						},
						{
							value: "no",
							label: "No"
						},
						{
							value: "unsure",
							label: "I'm not sure"
						}
					]
				}),
				/* @__PURE__ */ jsx(RadioGroup, {
					label: "Does your institution already include any language about bias or evaluation context in its standard evaluation instrument?",
					value: hasExisting,
					onChange: setHasExisting,
					options: [
						{
							value: "yes",
							label: "Yes"
						},
						{
							value: "no",
							label: "No"
						},
						{
							value: "unsure",
							label: "I'm not sure"
						}
					]
				}),
				/* @__PURE__ */ jsx(StepNav, {
					step: 3,
					canProceed: canProceed(),
					onBack: () => setStep(2),
					onNext: () => setStep(4),
					hint: "Please answer at least one question to continue."
				})
			] }),
			step === 4 && /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(StepHeader, {
					step: 4,
					total: 4,
					title: "What would you like to generate?",
					headingRef
				}),
				/* @__PURE__ */ jsx(RadioGroup, {
					label: "",
					value: scope,
					onChange: setScope,
					options: [{
						value: "focused",
						label: "Just the anti-bias statement — focused and ready to use"
					}, {
						value: "broad",
						label: "A broader set of strategies — the statement plus a discussion guide, a self-affirmation prompt, and guidance on contextualizing your evaluations"
					}]
				}),
				/* @__PURE__ */ jsx(StepNav, {
					step: 4,
					canProceed: canProceed(),
					onBack: () => setStep(3),
					onNext: () => setStep(5),
					nextLabel: "Generate materials"
				})
			] }),
			step === 5 && /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					style: {
						display: "inline-block",
						fontSize: 12,
						fontWeight: 500,
						color: COLORS.accent,
						background: COLORS.accentLight,
						padding: "3px 10px",
						borderRadius: 4,
						marginBottom: 16,
						textTransform: "uppercase",
						letterSpacing: "0.04em"
					},
					children: "Your materials"
				}),
				/* @__PURE__ */ jsx("h1", {
					ref: headingRef,
					tabIndex: -1,
					style: {
						fontFamily: "'Source Serif 4', Georgia, serif",
						fontSize: 28,
						fontWeight: 600,
						color: COLORS.slate900,
						margin: "0 0 1rem",
						lineHeight: 1.25,
						outline: "none"
					},
					children: "Generated materials"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: 15,
						color: COLORS.slate600,
						lineHeight: 1.65,
						margin: "0 0 1.5rem"
					},
					children: "Below are your evidence-based materials, tailored to your course context. Each includes the text you can use directly, along with the research basis for the approach. Use the copy button to grab any section."
				}),
				flags.length > 0 && /* @__PURE__ */ jsxs("div", {
					style: {
						background: COLORS.accentLight,
						border: `1px solid ${COLORS.accent}33`,
						borderRadius: 8,
						padding: "1rem 1.25rem",
						margin: "0 0 2rem"
					},
					children: [/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: 13,
							fontWeight: 500,
							color: COLORS.accentDark,
							margin: "0 0 6px"
						},
						children: "Context notes for your course"
					}), flags.map((f, i) => /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: 13.5,
							color: COLORS.slate700,
							lineHeight: 1.6,
							margin: "0 0 4px"
						},
						children: f
					}, i))]
				}),
				showPreamble && /* @__PURE__ */ jsx(OutputBlock, {
					title: "Evaluation preamble",
					text: generatePreamble(ctx),
					evidence: EVIDENCE_NOTES.preamble
				}),
				showScript && /* @__PURE__ */ jsx(OutputBlock, {
					title: "In-class script",
					text: generateScript(ctx),
					evidence: EVIDENCE_NOTES.script
				}),
				showLMS && /* @__PURE__ */ jsx(OutputBlock, {
					title: "LMS / email announcement",
					text: generateLMS(ctx),
					evidence: EVIDENCE_NOTES.lms
				}),
				showBroad && /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							borderTop: `1px solid ${COLORS.slate200}`,
							margin: "2rem 0",
							paddingTop: "2rem"
						},
						children: /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: 13,
								fontWeight: 500,
								color: COLORS.accent,
								textTransform: "uppercase",
								letterSpacing: "0.06em",
								margin: "0 0 1rem"
							},
							children: "Additional strategies"
						})
					}),
					/* @__PURE__ */ jsx(OutputBlock, {
						title: "Discussion guide",
						text: generateDiscussionGuide(),
						evidence: EVIDENCE_NOTES.discussion
					}),
					/* @__PURE__ */ jsx(OutputBlock, {
						title: "Self-affirmation prompt",
						text: generateSelfAffirmation(),
						evidence: EVIDENCE_NOTES.selfAffirmation
					}),
					/* @__PURE__ */ jsx(OutputBlock, {
						title: "Portfolio contextualization guidance",
						text: generatePortfolioGuidance(),
						evidence: EVIDENCE_NOTES.portfolio
					})
				] }),
				/* @__PURE__ */ jsx("div", {
					style: {
						borderTop: `1px solid ${COLORS.slate200}`,
						margin: "2rem 0",
						paddingTop: "2rem"
					},
					children: /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: 13,
							fontWeight: 500,
							color: COLORS.accent,
							textTransform: "uppercase",
							letterSpacing: "0.06em",
							margin: "0 0 1rem"
						},
						children: "For sharing"
					})
				}),
				/* @__PURE__ */ jsx(OutputBlock, {
					title: "What to share with a colleague",
					text: generateColleagueSummary(),
					evidence: EVIDENCE_NOTES.colleague
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						borderTop: `1px solid ${COLORS.slate200}`,
						margin: "2.5rem 0 0",
						paddingTop: "1.5rem",
						display: "flex",
						gap: 12,
						flexWrap: "wrap"
					},
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							setStep(0);
							setDeployment(["all"]);
							setDiscipline("");
							setLevel("");
							setSize("");
							setModality("");
							setRequired("");
							setCanModify("");
							setHasExisting("");
							setScope("");
							setShowExtra(false);
						},
						style: {
							background: "none",
							border: `1px solid ${COLORS.slate200}`,
							borderRadius: 6,
							padding: "8px 20px",
							fontSize: 14,
							color: COLORS.slate700,
							cursor: "pointer",
							fontFamily: "'Source Sans 3', system-ui, sans-serif"
						},
						children: "Start over"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/",
						style: {
							background: "none",
							border: `1px solid ${COLORS.slate200}`,
							borderRadius: 6,
							padding: "8px 20px",
							fontSize: 14,
							color: COLORS.slate700,
							cursor: "pointer",
							textDecoration: "none",
							fontFamily: "'Source Sans 3', system-ui, sans-serif"
						},
						children: "Return home"
					})]
				})
			] })
		]
	});
}
function StepHeader({ step, total, title, headingRef }) {
	return /* @__PURE__ */ jsxs("div", {
		style: { margin: "0 0 1.5rem" },
		children: [/* @__PURE__ */ jsxs("p", {
			style: {
				fontSize: 13,
				color: COLORS.slate500,
				margin: "0 0 6px"
			},
			children: [
				"Step ",
				step,
				" of ",
				total
			]
		}), /* @__PURE__ */ jsx("h1", {
			ref: headingRef,
			tabIndex: -1,
			style: {
				fontFamily: "'Source Serif 4', Georgia, serif",
				fontSize: 22,
				fontWeight: 600,
				color: COLORS.slate900,
				margin: 0,
				lineHeight: 1.3,
				outline: "none"
			},
			children: title
		})]
	});
}
function StepNav({ step, canProceed, onBack, onNext, nextLabel, hint }) {
	const showHint = hint && !canProceed;
	return /* @__PURE__ */ jsxs("div", {
		style: { margin: "2rem 0 0" },
		children: [/* @__PURE__ */ jsx("p", {
			"aria-live": "polite",
			style: {
				margin: showHint ? "0 0 0.75rem" : 0,
				height: showHint ? "auto" : 0,
				overflow: "hidden",
				fontSize: 14,
				color: COLORS.slate600,
				textAlign: "right",
				fontFamily: "'Source Sans 3', system-ui, sans-serif"
			},
			children: showHint ? hint : ""
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				justifyContent: "space-between"
			},
			children: [/* @__PURE__ */ jsx("button", {
				onClick: onBack,
				style: {
					background: "none",
					border: `1px solid ${COLORS.slate200}`,
					borderRadius: 6,
					padding: "8px 20px",
					fontSize: 14,
					color: COLORS.slate700,
					cursor: "pointer",
					fontFamily: "'Source Sans 3', system-ui, sans-serif"
				},
				children: "Back"
			}), /* @__PURE__ */ jsx("button", {
				onClick: onNext,
				disabled: !canProceed,
				style: {
					background: canProceed ? COLORS.accent : COLORS.slate200,
					color: canProceed ? COLORS.white : COLORS.slate400,
					border: "none",
					borderRadius: 6,
					padding: "8px 24px",
					fontSize: 14,
					fontWeight: 500,
					cursor: canProceed ? "pointer" : "default",
					fontFamily: "'Source Sans 3', system-ui, sans-serif",
					transition: "all 0.15s"
				},
				children: nextLabel || "Continue"
			})]
		})]
	});
}
//#endregion
//#region src/routes/home.jsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$4
});
function meta$4() {
	return [{ title: "The Fair Feedback Project" }];
}
var home_default = UNSAFE_withComponentProps(function HomeRoute() {
	return /* @__PURE__ */ jsx(Landing, {});
});
//#endregion
//#region src/routes/about.jsx
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => about_default,
	meta: () => meta$3
});
function meta$3() {
	return [{ title: "About — The Fair Feedback Project" }];
}
var about_default = UNSAFE_withComponentProps(function AboutRoute() {
	return /* @__PURE__ */ jsx(AboutPage, {});
});
//#endregion
//#region src/routes/principles.jsx
var principles_exports = /* @__PURE__ */ __exportAll({
	default: () => principles_default,
	meta: () => meta$2
});
function meta$2() {
	return [{ title: "Principles — The Fair Feedback Project" }];
}
var principles_default = UNSAFE_withComponentProps(function PrinciplesRoute() {
	return /* @__PURE__ */ jsx(PrinciplesPage, {});
});
//#endregion
//#region src/routes/faq.jsx
var faq_exports = /* @__PURE__ */ __exportAll({
	default: () => faq_default,
	meta: () => meta$1
});
function meta$1() {
	return [{ title: "Frequently Asked Questions — The Fair Feedback Project" }];
}
var faq_default = UNSAFE_withComponentProps(function FAQRoute() {
	return /* @__PURE__ */ jsx(FAQPage, {});
});
//#endregion
//#region src/routes/instructor.jsx
var instructor_exports = /* @__PURE__ */ __exportAll({
	default: () => instructor_default,
	meta: () => meta
});
function meta() {
	return [{ title: "Instructor Track — The Fair Feedback Project" }];
}
var instructor_default = UNSAFE_withComponentProps(function InstructorRoute() {
	return /* @__PURE__ */ jsx(InstructorTrack, {});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-DTboUQl1.js",
		"imports": ["/assets/jsx-runtime-DbkiLxA9.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-BUHeEkV2.js",
			"imports": ["/assets/jsx-runtime-DbkiLxA9.js", "/assets/colors-DMFKdVN7.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-WU3D9GhJ.js",
			"imports": [
				"/assets/jsx-runtime-DbkiLxA9.js",
				"/assets/App-F5rd0yTs.js",
				"/assets/colors-DMFKdVN7.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/about": {
			"id": "routes/about",
			"parentId": "root",
			"path": "about",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/about-BoaA_W91.js",
			"imports": [
				"/assets/jsx-runtime-DbkiLxA9.js",
				"/assets/App-F5rd0yTs.js",
				"/assets/colors-DMFKdVN7.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/principles": {
			"id": "routes/principles",
			"parentId": "root",
			"path": "principles",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/principles-pju-c6mh.js",
			"imports": [
				"/assets/jsx-runtime-DbkiLxA9.js",
				"/assets/App-F5rd0yTs.js",
				"/assets/colors-DMFKdVN7.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/faq": {
			"id": "routes/faq",
			"parentId": "root",
			"path": "faq",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/faq-DcpZnzsu.js",
			"imports": [
				"/assets/jsx-runtime-DbkiLxA9.js",
				"/assets/App-F5rd0yTs.js",
				"/assets/colors-DMFKdVN7.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/instructor": {
			"id": "routes/instructor",
			"parentId": "root",
			"path": "instructor",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/instructor-D1r6m66h.js",
			"imports": [
				"/assets/jsx-runtime-DbkiLxA9.js",
				"/assets/App-F5rd0yTs.js",
				"/assets/colors-DMFKdVN7.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-3493383b.js",
	"version": "3493383b",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = { "unstable_optimizeDeps": false };
var ssr = false;
var isSpaMode = false;
var prerender = [
	"/",
	"/about",
	"/principles",
	"/faq",
	"/instructor"
];
var routeDiscovery = { "mode": "initial" };
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/about": {
		id: "routes/about",
		parentId: "root",
		path: "about",
		index: void 0,
		caseSensitive: void 0,
		module: about_exports
	},
	"routes/principles": {
		id: "routes/principles",
		parentId: "root",
		path: "principles",
		index: void 0,
		caseSensitive: void 0,
		module: principles_exports
	},
	"routes/faq": {
		id: "routes/faq",
		parentId: "root",
		path: "faq",
		index: void 0,
		caseSensitive: void 0,
		module: faq_exports
	},
	"routes/instructor": {
		id: "routes/instructor",
		parentId: "root",
		path: "instructor",
		index: void 0,
		caseSensitive: void 0,
		module: instructor_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };

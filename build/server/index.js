import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: COLORS.bg,
			minHeight: "100vh",
			fontFamily: "'Source Sans 3', system-ui, sans-serif"
		},
		children: [
			/* @__PURE__ */ jsx(SkipLink, {}),
			/* @__PURE__ */ jsx("main", {
				id: "main-content",
				tabIndex: -1,
				style: { outline: "none" },
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
});
//#endregion
//#region src/home.jsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta
});
function meta() {
	return [{ title: "The Fair Feedback Project" }];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs("div", {
		style: {
			maxWidth: 680,
			margin: "0 auto",
			padding: "3rem 1.25rem 5rem"
		},
		children: [/* @__PURE__ */ jsx("h1", {
			style: {
				fontFamily: "'Source Serif 4', Georgia, serif",
				fontWeight: 600,
				fontSize: 32,
				color: COLORS.slate900,
				lineHeight: 1.2
			},
			children: "Batch 2 · step 1 — shell migrated"
		}), /* @__PURE__ */ jsx("p", {
			style: {
				fontFamily: "'Source Sans 3', system-ui, sans-serif",
				color: COLORS.slate600,
				lineHeight: 1.6,
				fontSize: 17
			},
			children: "The document head (self-hosted fonts, social tags, icons, canonical, theme-color) and the route-independent chrome (skip link, footer) now live in root.jsx, with the COLORS tokens in a shared module. If this heading renders in Source Serif 4 and this paragraph in Source Sans 3 on the paper background, with the footer below, the head and shell migration is good. The five real views get wired to routes in step 2."
		})]
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-DkNchoB-.js",
		"imports": ["/assets/jsx-runtime-HyxAWq3q.js", "/assets/errorBoundaries-D6ABEuBX.js"],
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
			"module": "/assets/root-Y2rje8XP.js",
			"imports": [
				"/assets/jsx-runtime-HyxAWq3q.js",
				"/assets/errorBoundaries-D6ABEuBX.js",
				"/assets/colors-CNDScsDG.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"home": {
			"id": "home",
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
			"module": "/assets/home-CFBnQ4wI.js",
			"imports": ["/assets/jsx-runtime-HyxAWq3q.js", "/assets/colors-CNDScsDG.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-dc8927a8.js",
	"version": "dc8927a8",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = { "unstable_optimizeDeps": false };
var ssr = false;
var isSpaMode = false;
var prerender = ["/"];
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
	"home": {
		id: "home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };

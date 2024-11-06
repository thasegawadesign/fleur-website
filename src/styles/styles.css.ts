import { createGlobalTheme, style } from "@vanilla-extract/css";

export const breakpoints = {
  sm: "screen and (width < 640px)",
  md: "screen and (640px <= width < 768px)",
  lg: "screen and (768px <= width < 1024px)",
  xl: "screen and (1024px <= width < 1280px)",
  "2xl": "screen and (1280px <= width)",
} as const;

export const vars = createGlobalTheme(":root", {
  color: {
    textPrimary: "#44361c",
    bgPrimary: "#fffaea",
    linePrimary: "#beb599",
    accent: "#ff6d15",
  },
});

export const sectionTitle = style({
  fontSize: "3.2rem",
  fontWeight: 400,
  letterSpacing: "0.04em",
  color: vars.color.textPrimary,
  textAlign: "center",
});

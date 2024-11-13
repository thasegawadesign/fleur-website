import { createGlobalTheme, style } from "@vanilla-extract/css";

export const breakpoints = {
  sm: "screen and (width < 640px)",
  md: "screen and (640px <= width)",
  lg: "screen and (768px <= width)",
  xl: "screen and (1024px <= width)",
  "2xl": "screen and (1280px <= width)",
  "3xl": "screen and (1560px <= width)",
} as const;

export const vars = createGlobalTheme(":root", {
  color: {
    textPrimary: "#44361c",
    bgPrimary: "#fffaea",
    linePrimary: "#beb599",
    accent: "#ff6d15",
  },
});

export const sectionTitleBox = style({
  marginBottom: 4,
  "@media": {
    [breakpoints["md"]]: {
      marginBottom: 8,
    },
  },
});
export const sectionTitle = style({
  fontSize: "3.2rem",
  fontWeight: 400,
  letterSpacing: "0.04em",
  color: vars.color.textPrimary,
  textAlign: "center",
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "4.0rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "5.2rem",
    },
  },
});
export const subTitleBox = style({
  textAlign: "center",
});
export const subTitle = style({
  position: "relative",
  display: "inline-block",
  fontSize: "1.2rem",
  letterSpacing: "0.06em",
  color: vars.color.textPrimary,
  ":before": {
    content: "",
    position: "absolute",
    top: 3,
    left: -12,
    width: 6,
    height: 6,
    backgroundColor: vars.color.accent,
    borderRadius: "50%",
  },
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "1.4rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "1.6rem",
    },
  },
});

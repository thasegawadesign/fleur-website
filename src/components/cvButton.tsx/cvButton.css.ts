import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const cvButton = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  padding: "20px 40px 20px 20px",
  backgroundColor: vars.color.bgPrimary,
  border: `solid 1px ${vars.color.textPrimary}`,
  borderRadius: 40,
  "@media": {
    [breakpoints["md"]]: {
      padding: "24px",
    },
  },
});
export const cvLabel = style({
  fontSize: "1.6rem",
  color: vars.color.textPrimary,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "1.8rem",
    },
    [breakpoints["2xl"]]: {
      fontSize: "1.9rem",
    },
    [breakpoints["3xl"]]: {
      fontSize: "2.0rem",
    },
  },
});

export const arrowBox = style({
  position: "absolute",
  right: 12,
  display: "grid",
  placeItems: "center",
  width: 32,
  height: 32,
  color: vars.color.bgPrimary,
  background: vars.color.textPrimary,
  borderRadius: "100%",
  overflowX: "hidden",
  transition: "scale 0.3s ease",
  "@media": {
    [breakpoints["md"]]: {
      right: 24,
      width: 36,
      height: 36,
    },
    [breakpoints["2xl"]]: {
      right: 32,
      width: 40,
      height: 40,
    },
  },
  selectors: {
    [`${cvButton}:hover &`]: {
      scale: 1.1,
    },
  },
});
const slideIn = keyframes({
  from: {
    transform: "translateX(-150%)",
  },
  to: {
    transform: "translateX(0)",
  },
});
export const arrow = style({
  fontSize: "1.6rem",
  selectors: {
    [`${cvButton}:hover &`]: {
      animation: `${slideIn} 0.2s ease`,
    },
  },
});

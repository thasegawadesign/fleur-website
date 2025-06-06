import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

const slideIn = keyframes({
  from: {
    transform: "translateX(-150%)",
  },
  to: {
    transform: "translateX(0)",
  },
});
export const moreButtonBox = style({
  width: "fit-content",
  marginLeft: "auto",
  borderRadius: "50%",
});
export const moreButton = style({
  position: "relative",
  display: "grid",
  width: 44,
  height: 44,
  backgroundColor: "transparent",
  marginLeft: "auto",
  border: `solid 1px ${vars.color.textPrimary}`,
  borderRadius: "50%",
  overflowX: "hidden",
  cursor: "pointer",
  transition: "scale 0.3s ease",
  ":hover": {
    scale: 1.1,
  },
  "@media": {
    [breakpoints["md"]]: {
      width: 52,
      height: 52,
    },
  },
});

export const arrow = style({
  position: "absolute",
  margin: "auto",
  inset: 0,
  fontSize: "2.0rem",
  color: vars.color.textPrimary,
  selectors: {
    [`${moreButton}:hover &`]: {
      animation: `${slideIn} 0.2s ease`,
    },
  },
});

import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const cvButton = style({
  display: "flex",
  gap: 20,
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  padding: "10px 20px",
  backgroundColor: vars.color.bgPrimary,
  border: `solid 1px ${vars.color.textPrimary}`,
  borderRadius: 40,
  "@media": {
    [breakpoints["md"]]: {
      padding: "12px 20px",
    },
    [breakpoints["2xl"]]: {
      padding: "20px 40px",
    },
  },
});
export const cvLabel = style({
  fontSize: "1.4rem",
  color: vars.color.textPrimary,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "1.6rem",
    },
    [breakpoints["2xl"]]: {
      fontSize: "1.8rem",
    },
  },
});

export const arrowBox = style({
  display: "grid",
  placeItems: "center",
  width: 32,
  height: 32,
  color: vars.color.bgPrimary,
  background: vars.color.textPrimary,
  borderRadius: "100%",
});
export const arrow = style({
  fontSize: "1.6rem",
});

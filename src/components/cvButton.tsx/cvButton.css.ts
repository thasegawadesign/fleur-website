import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const cvButton = style({
  display: "flex",
  gap: 20,
  alignItems: "center",
  textDecoration: "none",
  padding: "10px 20px",
  border: `solid 1px ${vars.color.textPrimary}`,
  borderRadius: 40,
});
export const cvLabel = style({
  fontSize: "1.4rem",
  color: vars.color.textPrimary,
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

import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const moreButton = style({
  display: "grid",
  placeItems: "center",
  width: 40,
  height: 40,
  backgroundColor: "transparent",
  marginLeft: "auto",
  border: `solid 1px ${vars.color.textPrimary}`,
  borderRadius: "50%",
  cursor: "pointer",
});
export const arrow = style({
  fontSize: "2.0rem",
  color: vars.color.textPrimary,
});

import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const logoBox = style({
  textDecoration: "none",
});
export const logo = style({
  fontSize: "3.6rem",
  color: vars.color.textPrimary,
});

export const hamburgerBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  backgroundColor: "transparent",
  border: "transparent",
  cursor: "pointer",
});
export const toggle = style({
  selectors: {
    [`${hamburgerBox} > &:nth-child(1)`]: {
      transform: "rotate(45deg) translate(6px, 6px)",
    },
    [`${hamburgerBox} > &:nth-child(2)`]: { opacity: 0 },
    [`${hamburgerBox} > &:nth-child(3)`]: {
      transform: "rotate(-45deg) translate(5px, -5px)",
    },
  },
});
export const hamburger = style({
  width: 24,
  height: 2,
  backgroundColor: vars.color.textPrimary,
  transition: "transform 0.2s ease",
});

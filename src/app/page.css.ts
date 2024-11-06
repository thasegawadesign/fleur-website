import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  position: "sticky",
  top: 0,
  zIndex: 100,
});
export const mobileHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 28px",
  background: "#fff",
});

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

export const mobileNavLinksHidden = style({
  display: "none",
});
export const mobileNavLinksVisible = style({
  position: "absolute",
  left: 0,
  top: 60,
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: "48px 0px 0px",
  width: "100%",
  height: "calc(100vh - 48px)",
  background: vars.color.bgPrimary,
});
export const mobileNavLink = style({
  textDecoration: "none",
  margin: "0 60px",
  fontSize: "1.6rem",
  color: vars.color.textPrimary,
});

export const cvButtonBox = style({
  margin: "12px 48px",
});

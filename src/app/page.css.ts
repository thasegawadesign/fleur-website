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
  gap: 24,
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

export const cvButtonWrap = style({
  width: "75%",
  margin: "0 auto",
});
export const cvButtonBox = style({
  margin: "12px 48px",
});

export const heroSection = style({
  display: "flex",
  flexDirection: "column-reverse",
  marginBottom: 80,
});
export const catchCopy = style({
  fontSize: "2.0rem",
  fontWeight: 400,
  letterSpacing: "0.2em",
  lineHeight: "1.28em",
  color: vars.color.textPrimary,
  margin: "24px 20px 0",
});
export const macaronsBox = style({
  textAlign: "center",
  margin: "24px 0 28px",
});
export const macarons = style({
  width: "75%",
  height: "100%",
});
export const heroDescription = style({
  width: "75%",
  margin: "0 20px 0 auto",
  fontSize: "1.4rem",
  color: vars.color.textPrimary,
  letterSpacing: "0.2em",
  lineHeight: "1.28em",
});
export const mainVisualBox = style({
  paddingLeft: 20,
});
export const mainVisual = style({
  width: "100%",
  height: "100%",
  borderRadius: "0 0 0 28px",
});

export const pickUpSection = style({
  position: "relative",
  marginBottom: 80,
  zIndex: 0,
});
export const pickUpSectionBg = style({
  position: "relative",
  backgroundColor: vars.color.bgPrimary,
  marginTop: -20,
  padding: "60px 0 40px",
  zIndex: -100,
  ":before": {
    content: "",
    position: "absolute",
    top: -20,
    width: "100%",
    height: 20,
    background: "no-repeat url('/pickup-bg-top.png')",
    backgroundSize: "contain",
    backgroundPosition: "bottom",
    zIndex: -100,
  },
  ":after": {
    content: "",
    position: "absolute",
    bottom: -20,
    width: "100%",
    height: 20,
    background: "no-repeat url('/pickup-bg-bottom.png')",
    backgroundSize: "contain",
    backgroundPosition: "top",
    zIndex: -100,
  },
});
export const recommendedProductBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 28,
  marginBottom: 40,
});
export const recommendedProductNameBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  alignItems: "center",
});
export const recommendedProductName = style({
  fontSize: "1.6rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.06em",
});
export const recommendedProductDescription = style({
  fontSize: "1.2rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.06em",
  lineHeight: "1.28em",
  width: "69%",
  textAlign: "center",
});
export const recommendedProductImageBox = style({
  display: "flex",
  justifyContent: "center",
});
export const recommendedProductImage = style({
  width: "72%",
  height: "100%",
});
export const pickupDecoration = style({
  width: 60,
  height: 90,
  marginTop: -20,
  marginLeft: -30,
});

export const topicSection = style({
  marginBottom: 80,
});
export const topicSectionItemBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 28,
  marginTop: 40,
});
export const topicSectionItem = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 24,
  width: "85%",
  margin: "0 auto",
});
export const topicTitle = style({
  fontSize: "1.6rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.06em",
  marginBottom: 12,
});
export const topicDescription = style({
  fontSize: "1.2rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.06em",
  lineHeight: "1.28em",
  marginBottom: 8,
});
export const topicImage = style({
  width: "100%",
  height: "100%",
});

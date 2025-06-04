import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const body = style({
  fontFamily: "YakuHanJP, Noto Sans JP, sans-serif",
});
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
  "@media": {
    [breakpoints["md"]]: {
      padding: "20px 32px",
    },
    [breakpoints["2xl"]]: {
      padding: "24px 80px",
    },
    [breakpoints["3xl"]]: {
      padding: "36px 140px",
    },
  },
});

export const logoBox = style({
  textDecoration: "none",
});
export const logo = style({
  fontSize: "3.6rem",
  color: vars.color.textPrimary,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "4.8rem",
    },
  },
});

export const hamburgerBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  backgroundColor: "transparent",
  border: "transparent",
  cursor: "pointer",
  "@media": {
    [breakpoints["md"]]: {
      gap: 8,
    },
    [breakpoints["2xl"]]: {
      display: "none",
    },
  },
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
  "@media": {
    [breakpoints["md"]]: {
      selectors: {
        [`${hamburgerBox} > &:nth-child(1)`]: {
          transform: "rotate(45deg) translate(8px, 8px)",
        },
        [`${hamburgerBox} > &:nth-child(2)`]: { opacity: 0 },
        [`${hamburgerBox} > &:nth-child(3)`]: {
          transform: "rotate(-45deg) translate(6px, -6px)",
        },
      },
    },
  },
});
export const hamburger = style({
  width: 24,
  height: 2,
  backgroundColor: vars.color.textPrimary,
  transition: "transform 0.2s ease",
  "@media": {
    [breakpoints["md"]]: {
      width: 32,
    },
  },
});

export const desktopNav = style({
  display: "none",
  "@media": {
    [breakpoints["2xl"]]: {
      display: "block",
    },
  },
});
export const desktopNavUl = style({
  display: "flex",
  gap: 40,
  "@media": {
    [breakpoints["3xl"]]: {
      gap: 56,
    },
  },
});
export const desktopNavLink = style({
  fontSize: "1.6rem",
  color: vars.color.textPrimary,
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});
export const desktopNavOnlineShop = style({
  fontSize: "1.6rem",
  color: vars.color.textPrimary,
  letterSpacing: "0.04em",
  textDecoration: "none",
  padding: "0 18px",
  borderLeft: `solid 1px ${vars.color.textPrimary}`,
  borderRight: `solid 1px ${vars.color.textPrimary}`,
  ":hover": {
    textDecoration: "underline",
  },
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
  gap: 32,
  padding: "10vw 0px 0px",
  width: "100%",
  height: "calc(100vh - 48px)",
  background: vars.color.bgPrimary,
  "@media": {
    [breakpoints["md"]]: {
      top: 88,
      gap: 40,
      padding: "6vw 0px 0px",
    },
  },
});
export const mobileNavLink = style({
  position: "relative",
  textDecoration: "none",
  margin: "0 10vw",
  fontSize: "1.6rem",
  color: vars.color.textPrimary,
  transition: "margin 0.3s ease",
  ":hover": {
    margin: "0 13vw",
  },
  selectors: {
    "&:hover::before": {
      content: '""',
      position: "absolute",
      margin: "auto 0",
      inset: "0 0 0 -12px",
      width: 8,
      height: 8,
      background: vars.color.accent,
      borderRadius: "50%",
    },
  },
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "1.8rem",
      margin: "0 9vw",
      ":hover": {
        margin: "0 11vw",
      },
    },
  },
});

export const cvButtonWrap = style({
  width: "calc(100% - 40px)",
  margin: "0 auto",
  "@media": {
    [breakpoints["md"]]: {
      width: "80vw",
    },
    [breakpoints["lg"]]: {
      maxWidth: 480,
    },
    [breakpoints["xl"]]: {
      maxWidth: 520,
    },
    [breakpoints["2xl"]]: {
      maxWidth: 640,
    },
  },
});
export const cvButtonInnerWrap = style({
  borderRadius: "50%",
});
export const cvButtonBox = style({
  margin: "12px 6vw",
  "@media": {
    [breakpoints["md"]]: {
      margin: "12px 8vw",
    },
  },
});

export const main = style({
  backgroundColor: "#fff",
});

export const heroSection = style({
  display: "flex",
  flexDirection: "column-reverse",
  marginBottom: 80,
  "@media": {
    [breakpoints["md"]]: {
      marginBottom: 120,
    },
    [breakpoints["lg"]]: {
      flexDirection: "row",
    },
    [breakpoints["2xl"]]: {
      marginTop: -120,
      marginBottom: 160,
      justifyContent: "flex-end",
    },
    [breakpoints["3xl"]]: {
      marginTop: -240,
    },
  },
});
export const heroSectionInnerLeft = style({
  width: "100%",
  "@media": {
    [breakpoints["lg"]]: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      justifyContent: "flex-end",
    },
    [breakpoints["xl"]]: {
      width: "60vw",
    },
    [breakpoints["2xl"]]: {
      width: "48vw",
      gap: 20,
    },
    [breakpoints["3xl"]]: {
      width: "36vw",
      gap: 40,
    },
  },
});
export const catchMacaronsBox = style({
  "@media": {
    [breakpoints["lg"]]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
    [breakpoints["3xl"]]: {
      gap: 20,
    },
  },
});
export const catchCopy = style({
  fontSize: "2.4rem",
  fontWeight: 400,
  letterSpacing: "0.2em",
  lineHeight: "1.7em",
  color: vars.color.textPrimary,
  margin: "24px 20px 0",
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "3.0rem",
      margin: "32px 28px 0",
    },
    [breakpoints["lg"]]: {
      margin: "0 0 0 28px",
    },
    [breakpoints["xl"]]: {
      fontSize: "3.0rem",
      maxWidth: 840,
      margin: "0 0 0 60px",
    },
    [breakpoints["2xl"]]: {
      fontSize: "3.4rem",
      margin: "0 0 0 80px",
    },
    [breakpoints["3xl"]]: {
      fontSize: "3.6rem",
    },
  },
});
export const catchCopyBr = style({
  "@media": {
    [breakpoints["lg"]]: {
      display: "none",
    },
  },
});
export const macaronsBox = style({
  textAlign: "center",
  margin: "24px 0 28px",
  "@media": {
    [breakpoints["md"]]: {
      margin: "28px 0 48px",
    },
    [breakpoints["lg"]]: {
      margin: "160px 0 20px",
    },
    [breakpoints["xl"]]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
});
export const macarons = style({
  width: "75%",
  height: "100%",
  pointerEvents: "none",
  userSelect: "none",
  "@media": {
    [breakpoints["lg"]]: {
      width: "100%",
    },
    [breakpoints["xl"]]: {
      maxWidth: 840,
    },
  },
});
export const heroDescription = style({
  width: "75%",
  margin: "0 20px 0 auto",
  fontSize: "1.8rem",
  color: vars.color.textPrimary,
  letterSpacing: "0.2em",
  lineHeight: "1.8em",
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "2.2rem",
      margin: "0 28px 0 auto",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.8rem",
      margin: "0 0 0 28px",
      width: "auto",
    },
    [breakpoints["xl"]]: {
      maxWidth: 840,
      margin: "0 0 40px 60px",
    },
    [breakpoints["2xl"]]: {
      margin: "0 0 40px 80px",
      letterSpacing: "0.33em",
    },
    [breakpoints["3xl"]]: {
      fontSize: "2.0rem",
      letterSpacing: "0.27em",
      lineHeight: "2.0em",
      margin: "0 0 80px 80px",
    },
  },
});
export const heroDescriptionDesktopBr = style({
  display: "none",
  "@media": {
    [breakpoints["2xl"]]: {
      display: "block",
    },
  },
});
export const mainVisualBox = style({
  paddingLeft: 20,
  "@media": {
    [breakpoints["md"]]: {
      paddingLeft: 28,
    },
    [breakpoints["xl"]]: {
      paddingLeft: 36,
    },
    [breakpoints["2xl"]]: {
      paddingLeft: 40,
    },
    [breakpoints["3xl"]]: {
      paddingLeft: 80,
    },
  },
});
export const mainVisual = style({
  width: "100%",
  height: "100%",
  borderRadius: "0 0 0 28px",
  pointerEvents: "none",
  userSelect: "none",
  "@media": {
    [breakpoints["xl"]]: {
      maxWidth: 1080,
      borderRadius: "0 0 0 60px",
    },
  },
});

export const pickUpSection = style({
  position: "relative",
  marginBottom: 80,
  zIndex: 0,
  "@media": {
    [breakpoints["md"]]: {
      marginBottom: 100,
    },
    [breakpoints["lg"]]: {
      marginBottom: 160,
    },
    [breakpoints["xl"]]: {
      marginBottom: 180,
    },
  },
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
  "@media": {
    [breakpoints["md"]]: {
      padding: "80px 0 60px",
    },
    [breakpoints["xl"]]: {
      marginTop: -4,
      padding: "100px 0 80px",
      ":before": {
        top: -52,
        height: 52,
      },
      ":after": {
        bottom: -52,
        height: 52,
      },
    },
  },
});
export const recommendedProductBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 32,
  marginBottom: 32,
  "@media": {
    [breakpoints["md"]]: {
      gap: 40,
      marginBottom: 40,
    },
    [breakpoints["lg"]]: {
      gap: 40,
      marginBottom: 40,
    },
    [breakpoints["xl"]]: {
      gap: 48,
      marginBottom: 48,
    },
  },
});
export const recommendedProductNameBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  alignItems: "center",
  "@media": {
    [breakpoints["lg"]]: {
      gap: 24,
    },
    [breakpoints["xl"]]: {
      gap: 28,
    },
  },
});
export const recommendedProductName = style({
  fontSize: "2.1rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.08em",
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "2.6rem",
    },
    [breakpoints["2xl"]]: {
      fontSize: "2.8rem",
    },
    [breakpoints["3xl"]]: {
      fontSize: "3.0rem",
    },
  },
});
export const recommendedProductDescription = style({
  fontSize: "1.6rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.06em",
  lineHeight: "2.0em",
  width: "calc(100% - 40px)",
  textAlign: "center",
  "@media": {
    [breakpoints["md"]]: {
      width: "80vw",
      fontSize: "2.0rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.8rem",
      width: 480,
    },
    [breakpoints["xl"]]: {
      width: 540,
    },
    [breakpoints["2xl"]]: {
      fontSize: "1.9rem",
      width: 660,
    },
    [breakpoints["3xl"]]: {
      fontSize: "2.0rem",
    },
  },
});
export const recommendedProductImageBox = style({
  display: "flex",
  justifyContent: "center",
});
export const recommendedProductImageInner = style({
  border: `solid 1px ${vars.color.textPrimary}`,
  overflow: "hidden",
});
export const recommendedProductImage = style({
  width: "86vw",
  height: "100%",
  transition: "scale 0.3s ease",
  "@media": {
    [breakpoints["lg"]]: {
      width: 480,
    },
    [breakpoints["xl"]]: {
      width: 520,
    },
    [breakpoints["2xl"]]: {
      width: 640,
    },
    [breakpoints["3xl"]]: {
      width: 672,
    },
  },
});
export const recommendedProductImageHovered = style({
  scale: 1.05,
  transition: "scale 0.3s ease",
});
export const pickupDecoration = style({
  width: 60,
  height: 90,
  marginTop: -20,
  marginLeft: -30,
  borderRadius: "20%",
  backdropFilter: "blur(18px)",
  "@media": {
    [breakpoints["md"]]: {
      width: 90,
      height: 135,
      marginTop: -40,
      marginLeft: -60,
    },
  },
});

export const topicSection = style({
  marginBottom: 80,
  "@media": {
    [breakpoints["lg"]]: {
      marginBottom: 160,
    },
    [breakpoints["xl"]]: {
      marginBottom: 180,
    },
  },
});
export const topicSectionItemBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  margin: "40px auto 0",
  "@media": {
    [breakpoints["md"]]: {
      gap: 60,
      marginTop: 60,
    },
    [breakpoints["lg"]]: {
      maxWidth: 1200,
      gap: 60,
      marginTop: 80,
      padding: "0 40px",
    },
    [breakpoints["xl"]]: {
      marginTop: 100,
      gap: 64,
    },
  },
});
export const topicSectionItem = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 28,
  width: "calc(100% - 40px)",
  margin: "0 auto",
  "@media": {
    [breakpoints["md"]]: {
      gap: 28,
      width: "80vw",
    },
    [breakpoints["lg"]]: {
      flexDirection: "row-reverse",
      alignItems: "flex-end",
      width: "auto",
    },
    [breakpoints["xl"]]: {
      gap: 40,
    },
    [breakpoints["2xl"]]: {
      gap: 64,
    },
  },
});
export const topicTitle = style({
  fontSize: "2.1rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.08em",
  lineHeight: "1.4em",
  marginBottom: 16,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "2.6rem",
      marginBottom: 20,
    },
    [breakpoints["2xl"]]: {
      marginBottom: 24,
    },
    [breakpoints["3xl"]]: {
      fontSize: "2.7rem",
    },
  },
});
export const topicDescription = style({
  fontSize: "1.6rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.06em",
  lineHeight: "2.0em",
  marginBottom: 28,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "2.0rem",
      marginBottom: 28,
    },
    [breakpoints["lg"]]: {
      fontSize: "1.8rem",
      marginBottom: 20,
    },
    [breakpoints["xl"]]: {
      marginBottom: 80,
    },
    [breakpoints["2xl"]]: {
      fontSize: "1.9rem",
      marginBottom: 96,
    },
  },
});
export const topicImageBox = style({
  display: "block",
  width: "100%",
  height: "auto",
  flexShrink: 0,
  overflow: "hidden",
  "@media": {
    [breakpoints["lg"]]: {
      width: "48vw",
      maxWidth: 560,
    },
  },
});
export const topicImage = style({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  transition: "scale 0.3s ease",
});
export const imageHovered = style({
  scale: 1.05,
});

export const newsSection = style({
  backgroundColor: vars.color.bgPrimary,
  marginBottom: 60,
  padding: "40px 0 60px",
  "@media": {
    [breakpoints["md"]]: {
      marginBottom: 100,
      padding: "80px 0 92px",
    },
    [breakpoints["lg"]]: {
      marginBottom: 120,
    },
    [breakpoints["xl"]]: {
      display: "flex",
      justifyContent: "center",
      gap: 80,
      marginBottom: 160,
    },
    [breakpoints["2xl"]]: {
      gap: 140,
      padding: "120px 0 140px",
    },
    [breakpoints["3xl"]]: {
      gap: 180,
    },
  },
});
export const newsTitleGroupBox = style({});
export const newsItemBox = style({
  marginTop: 20,
  "@media": {
    [breakpoints["md"]]: {
      marginTop: 28,
    },
    [breakpoints["xl"]]: {
      width: 600,
      marginTop: 16,
    },
    [breakpoints["2xl"]]: {
      width: 760,
    },
  },
});
export const newsItem = style({
  width: "calc(100% - 40px)",
  margin: "0 auto",
  borderBottom: `solid 1px ${vars.color.textPrimary}`,
  "@media": {
    [breakpoints["md"]]: {
      width: "80vw",
    },
    [breakpoints["xl"]]: {
      width: "100%",
    },
  },
});
export const newsLink = style({
  display: "flex",
  alignItems: "flex-start",
  gap: 28,
  padding: "20px 24px 20px 16px",
  textDecoration: "none",
  transition: "gap 0.3s ease",
  "@media": {
    [breakpoints["md"]]: {
      padding: "32px 28px",
    },
    [breakpoints["lg"]]: {
      gap: 80,
    },
    [breakpoints["xl"]]: {
      selectors: {
        [`${newsItem}:hover &`]: {
          gap: 88,
        },
      },
    },
    [breakpoints["2xl"]]: {
      gap: 48,
      selectors: {
        [`${newsItem}:hover &`]: {
          gap: 56,
        },
      },
    },
  },
});
export const time = style({
  fontSize: "1.2rem",
  color: vars.color.textPrimary,
  marginTop: 4,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "1.4rem",
    },
  },
});
export const newsText = style({
  fontSize: "1.7rem",
  color: vars.color.textPrimary,
  letterSpacing: "0.08em",
  lineHeight: "1.8em",
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "2.0rem",
    },
    [breakpoints["lg"]]: {
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

export const accessSection = style({
  display: "flex",
  flexDirection: "column-reverse",
  marginBottom: 60,
  "@media": {
    [breakpoints["md"]]: {
      marginBottom: 100,
    },
    [breakpoints["lg"]]: {
      marginBottom: 120,
    },
    [breakpoints["xl"]]: {
      flexDirection: "row-reverse",
      justifyContent: "center",
      marginBottom: 160,
    },
  },
});
export const accessItemBox = style({
  position: "relative",
  margin: "-120px 20px 0",
  padding: "40px 40px 60px",
  backgroundColor: vars.color.bgPrimary,
  "@media": {
    [breakpoints["md"]]: {
      margin: "-160px 10vw 0",
      padding: "80px 100px 100px",
    },
    [breakpoints["lg"]]: {
      margin: "-360px 10vw 0",
    },
    [breakpoints["xl"]]: {
      margin: 0,
      padding: "40px 72px",
      backgroundColor: "transparent",
    },
    [breakpoints["2xl"]]: {
      padding: "20px 200px 20px 80px",
    },
    [breakpoints["3xl"]]: {
      paddingRight: 320,
      paddingLeft: 100,
    },
  },
});
export const accessTitleLeft = style({
  "@media": {
    [breakpoints["xl"]]: {
      textAlign: "left",
    },
  },
});
export const accessSubTitle = style({
  paddingLeft: 20,
});
export const shopName = style({
  fontSize: "2.0rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.08em",
  marginTop: 40,
  marginBottom: 24,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "2.6rem",
      marginTop: 64,
      marginBottom: 48,
    },
    [breakpoints["lg"]]: {
      fontSize: "2.4rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "2.0rem",
      marginTop: 40,
      marginBottom: 40,
    },
    [breakpoints["2xl"]]: {
      fontSize: "2.2rem",
    },
  },
});
export const accessDl = style({});
export const accessDt = style({
  fontSize: "1.7rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.06em",
  marginBottom: 12,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "2.2rem",
      marginBottom: 16,
    },
    [breakpoints["lg"]]: {
      fontSize: "2.0rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "1.8rem",
    },
    [breakpoints["2xl"]]: {
      fontSize: "2.0rem",
    },
  },
});
export const accessDd = style({
  fontSize: "1.4rem",
  fontWeight: 400,
  color: vars.color.textPrimary,
  letterSpacing: "0.06em",
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "1.8rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.6rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "1.4rem",
    },
    [breakpoints["2xl"]]: {
      fontSize: "1.7rem",
    },
  },
});
export const accessGap = style({
  marginBottom: 24,
  "@media": {
    [breakpoints["md"]]: {
      marginBottom: 32,
    },
    [breakpoints["lg"]]: {
      marginBottom: 40,
    },
    [breakpoints["xl"]]: {
      marginBottom: 28,
    },
    [breakpoints["2xl"]]: {
      marginBottom: 32,
    },
  },
});
export const shopImage = style({
  width: "100%",
  height: "100%",
  "@media": {
    [breakpoints["xl"]]: {
      maxWidth: 600,
    },
  },
});

export const onlineShopSection = style({
  position: "relative",
  zIndex: 0,
  "@media": {
    [breakpoints["md"]]: {
      ":before": {
        content: "",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        width: "calc(100% - 40px)",
        height: "calc(100% - 40px)",
        border: `solid 1px ${vars.color.bgPrimary}`,
        zIndex: -20,
      },
    },
    [breakpoints["xl"]]: {
      ":before": {
        width: "calc(100% - 80px)",
        height: "calc(100% - 80px)",
      },
    },
  },
});
export const onlineShopItemBox = style({
  padding: "40px 0 60px",
  "@media": {
    [breakpoints["md"]]: {
      padding: "80px 0 100px",
    },
    [breakpoints["xl"]]: {
      padding: "100px 0 120px",
    },
  },
});
export const onlineShop = style({
  fontSize: "3.2rem",
  fontWeight: 400,
  color: vars.color.bgPrimary,
  letterSpacing: "0.06em",
  textAlign: "center",
  marginBottom: 28,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "4.0rem",
      marginBottom: 40,
    },
    [breakpoints["lg"]]: {
      fontSize: "4.8rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "5.2rem",
    },
  },
});
export const onlineShopDescription = style({
  fontSize: "1.8rem",
  fontWeight: 400,
  color: vars.color.bgPrimary,
  letterSpacing: "0.04em",
  textAlign: "center",
  marginBottom: 16,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "2.0rem",
      marginBottom: 24,
    },
    [breakpoints["lg"]]: {
      fontSize: "2.0rem",
      marginBottom: 32,
    },
    [breakpoints["2xl"]]: {
      fontSize: "2.2rem",
    },
    [breakpoints["3xl"]]: {
      fontSize: "2.3rem",
    },
  },
});
export const onlineShopImageBox = style({
  ":before": {
    content: "",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(37, 32, 18, 0.7)",
    zIndex: -50,
  },
});
export const onlineShopImage = style({
  position: "absolute",
  top: 0,
  objectFit: "cover",
  zIndex: -100,
});

export const footer = style({
  padding: "0 28px",
  backgroundColor: vars.color.bgPrimary,
  "@media": {
    [breakpoints["md"]]: {
      padding: "0 40px",
    },
    [breakpoints["lg"]]: {
      padding: "0 60px",
    },
  },
});
export const footerItemBox = style({
  "@media": {
    [breakpoints["xl"]]: {
      display: "flex",
      justifyContent: "space-between",
      gap: 120,
      maxWidth: 1440,
      margin: "0 auto",
      padding: "128px 0px",
      borderBottom: `solid 1px ${vars.color.linePrimary}`,
    },
    [breakpoints["2xl"]]: {
      padding: "144px 0px",
    },
    [breakpoints["3xl"]]: {
      padding: "160px 0px",
    },
  },
});
export const footerLogo = style({
  display: "inline-block",
  fontSize: "4.0rem",
  color: vars.color.textPrimary,
  textDecoration: "none",
  marginTop: 60,
  marginBottom: 40,
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "5.2rem",
      marginTop: 80,
      marginBottom: 48,
    },
    [breakpoints["xl"]]: {
      fontSize: "5.6rem",
      margin: 0,
    },
    [breakpoints["2xl"]]: {
      fontSize: "6.4rem",
    },
  },
});
export const footerUl = style({
  display: "flex",
  flexDirection: "column",
  gap: 28,
  paddingBottom: 60,
  borderBottom: `solid 1px ${vars.color.textPrimary}`,
  "@media": {
    [breakpoints["md"]]: {
      paddingBottom: 80,
    },
    [breakpoints["xl"]]: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      borderBottom: "none",
      paddingBottom: 0,
    },
    [breakpoints["2xl"]]: {
      gap: 40,
    },
  },
});
export const footerLink = style({
  fontSize: "1.6rem",
  color: vars.color.textPrimary,
  textDecoration: "none",
  "@media": {
    [breakpoints["md"]]: {
      fontSize: "2.0rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.8rem",
    },
    [breakpoints["xl"]]: {
      ":hover": {
        textDecoration: "underline",
      },
    },
  },
});
export const copyRightBox = style({
  padding: "20px 0 120px",
  textAlign: "center",
  "@media": {
    [breakpoints["md"]]: {
      padding: "28px 0 200px",
    },
    [breakpoints["xl"]]: {
      padding: "28px 0 240px",
    },
    [breakpoints["3xl"]]: {
      padding: "28px 0 280px",
    },
  },
});
export const copyRight = style({
  fontSize: "1.0rem",
  color: vars.color.textPrimary,
  letterSpacing: "0.06em",
  "@media": {
    [breakpoints["xl"]]: {
      fontSize: "1.2rem",
    },
  },
});

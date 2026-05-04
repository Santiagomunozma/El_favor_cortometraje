export const colors = {
  bgBase: "#0D0D0D",
  bgCard: "#1A1A1A",
  bgCardAlt: "#2C2C2C",
  bgSectionMuted: "#111111",
  bgInset: "#111",
  bgFooter: "#080808",
  border: "#2C2C2C",
  borderMuted: "#4A4A4A",
  textPrimary: "#F5F0EB",
  textMuted: "#4A4A4A",
  accent: "#C0392B",
  accentDark: "#8B0000",
  highlight: "#B8860B",
  light: "#E8E0D5",
  accentAlpha08: "rgba(192,57,43,0.08)",
  accentAlpha90: "rgba(192,57,43,0.9)",
  overlayDark: "rgba(13,13,13,0.85)",
  overlayButton: "rgba(13,13,13,0.9)",
} as const;

export const fonts = {
  heading: "'Bebas Neue', sans-serif",
  body: "'Inter', sans-serif",
  serif: "'Playfair Display', serif",
} as const;

export const borders = {
  subtle: "0.5px solid",
} as const;

/** Espaciado en px (strings listas para inline styles). */
export const space = {
  px: "1px",
  xxs: "3px",
  xs: "4px",
  sm: "6px",
  /** Esquinas internas en thumbs (fecha sobre video). */
  cardInset: "10px",
  md: "8px",
  lg: "12px",
  /** Separación bajo email / metadatos en tarjetas. */
  copyMd: "14px",
  /** Botón “Ver reel” (altura cómoda). */
  reelPadY: "7px",
  xl: "16px",
  "2xl": "18px",
  "3xl": "20px",
  "4xl": "24px",
  "5xl": "32px",
  "6xl": "40px",
  "7xl": "48px",
  "8xl": "64px",
  "9xl": "80px",
  "10xl": "96px",
  "11xl": "100px",
} as const;

export const radius = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "12px",
  pill: "20px",
  full: "50%",
} as const;

export const fontSize = {
  xxs: "9px",
  xs: "10px",
  sm: "11px",
  md: "12px",
  base: "13px",
  lg: "15px",
  xl: "16px",
  "2xl": "18px",
  "3xl": "20px",
  "4xl": "22px",
  "5xl": "24px",
  "6xl": "32px",
  displaySm: "48px",
  heroTitleMobile: "72px",
  heroTitle: "clamp(72px, 15vw, 120px)",
  sectionTitle: "clamp(40px, 6vw, 72px)",
} as const;

export const letterSpacing = {
  tight: "1px",
  normal: "2px",
  wide: "4px",
} as const;

export const lineHeight = {
  none: 1,
  snug: 1.7,
  relaxed: 1.8,
} as const;

export const layout = {
  maxContent: "1100px",
  heroTextMax: "520px",
  sectionDescMax: "480px",
  gridMinCard: "300px",
  carouselItemCast: "200px",
  carouselItemTeam: "280px",
} as const;

export const size = {
  castCardHeight: "512px",
  castPhotoHeight: "280px",
  playButton: "52px",
  dividerAccentW: "48px",
  dividerAccentH: "1px",
  dividerVerticalW: "1px",
  dividerVerticalH: "40px",
  carouselArrow: "40px",
  progressBarH: "3px",
} as const;

export const duration = {
  fast: "0.2s",
  normal: "0.3s",
  slow: "0.4s",
} as const;

export const transition = {
  border: `border-color ${duration.normal} ease`,
  borderFast: `border-color ${duration.fast} ease`,
  transform: `transform ${duration.slow} ease`,
  background: `background-color ${duration.normal} ease`,
  reelLink: `border-color ${duration.fast}, color ${duration.fast}`,
  allFast: `all ${duration.fast} ease`,
  opacityBorder: `opacity ${duration.fast} ease, border-color ${duration.fast} ease`,
} as const;

export const section = {
  paddingY: `${space["11xl"]} 0`,
  paddingPage: `${space["11xl"]} ${space["5xl"]}`,
  contentPaddingX: `0 ${space["5xl"]}`,
} as const;

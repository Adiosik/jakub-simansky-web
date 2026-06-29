import type { SxProps, Theme } from "@mui/material/styles";

export const eyebrow: SxProps<Theme> = {
  fontSize: "0.72rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "var(--akcent)",
  m: "0 0 1.1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  "&::before": { content: '""', width: "34px", height: "1.5px", background: "var(--saze)", display: "inline-block" },
};

export const name: SxProps<Theme> = {
  fontFamily: "var(--font-display)",
  fontWeight: 900,
  lineHeight: 0.86,
  textTransform: "uppercase",
  letterSpacing: "0.005em",
  m: 0,
  "& .ln": { display: "block", position: "relative" },
  "& .ln + .ln": { mt: "clamp(.6rem,1.8vw,1.3rem)" },
  "& .ln span": { display: "block" },
  "& .sim-jakub": { fontSize: "clamp(4.2rem,14vw,7.4rem)" },
  "& .sim-surname": { fontSize: "clamp(3.4rem,12vw,5.6rem)" },
  "& .sim-ghost": { position: "absolute", inset: 0, zIndex: -1 },
  "& .sim-ghost.a": { color: "var(--obili)", transform: "translate(-4px,3px)", mixBlendMode: "multiply" },
  "& .sim-ghost.b": { color: "var(--stroj)", transform: "translate(5px,-2px)", mixBlendMode: "multiply" },
};

export const lede: SxProps<Theme> = {
  maxWidth: "34ch",
  m: "1.5rem 0 0",
  fontSize: "0.96rem",
  lineHeight: 1.55,
};

export const nav: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.6rem",
  mt: "1.6rem",
};

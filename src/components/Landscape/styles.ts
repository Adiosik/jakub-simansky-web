import type { SxProps, Theme } from "@mui/material/styles";

export const figure: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  m: 0,
  "& svg": { width: "100%", height: "auto", display: "block" },
  "& .sim-plate": { mixBlendMode: "multiply" },
  "& .sim-river-band": { transition: "transform .12s ease-out" },
};

export const caption: SxProps<Theme> = {
  mt: "0.7rem",
  fontSize: "0.68rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(28,24,20,.6)",
  display: "flex",
  justifyContent: "flex-end",
  borderTop: "1px solid var(--linka)",
  pt: "0.5rem",
};

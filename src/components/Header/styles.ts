import type { SxProps, Theme } from "@mui/material/styles";

export const header: SxProps<Theme> = {
  position: "sticky",
  top: 0,
  zIndex: 40,
  background: "var(--bar)",
  backdropFilter: "blur(6px)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  flexWrap: "wrap",
  p: "1.1rem clamp(1rem,4vw,3rem) .9rem",
  borderBottom: "1.5px solid var(--saze)",
  fontSize: "0.72rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
};

export const right: SxProps<Theme> = {
  color: "var(--akcent)",
  display: "flex",
  alignItems: "center",
  gap: "1.4rem",
  flexWrap: "wrap",
};

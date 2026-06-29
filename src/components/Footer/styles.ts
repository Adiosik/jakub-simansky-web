import type { SxProps, Theme } from "@mui/material/styles";

export const footer: SxProps<Theme> = {
  position: "sticky",
  bottom: 0,
  zIndex: 40,
  background: "var(--bar)",
  backdropFilter: "blur(6px)",
  borderTop: "1.5px solid var(--saze)",
  p: "0.85rem clamp(1rem,4vw,3rem)",
  fontSize: "0.68rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "0.8rem 1.5rem",
  alignItems: "center",
  color: "rgba(28,24,20,.7)",
};

export const social: SxProps<Theme> = { display: "flex", gap: "1.15rem", alignItems: "center" };

export const contact: SxProps<Theme> = { display: "flex", alignItems: "center", gap: "0.55rem" };

export const email: SxProps<Theme> = {
  color: "var(--saze)",
  textDecoration: "none",
  textTransform: "none",
  letterSpacing: "0.04em",
  borderBottom: "1px solid var(--linka)",
  transition: "border-color .15s ease",
  "&:hover": { borderBottomColor: "var(--saze)" },
};

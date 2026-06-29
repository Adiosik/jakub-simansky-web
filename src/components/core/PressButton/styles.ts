import type { SxProps, Theme } from "@mui/material/styles";

export const root = (active: boolean): SxProps<Theme> => ({
  fontFamily: "var(--font-mono)",
  fontSize: "0.82rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  background: active ? "var(--saze)" : "var(--papir-2)",
  color: active ? "var(--papir)" : "var(--saze)",
  cursor: "pointer",
  border: "1.5px solid var(--saze)",
  p: "0.7rem 1.1rem",
  boxShadow: "var(--stin)",
  transition: "background .18s ease, color .18s ease, transform .18s ease",
  "&:hover": { background: "var(--saze)", color: "var(--papir)", transform: "translate(-2px,-2px)" },
  "&:focus-visible": { outline: "3px solid var(--stroj)", outlineOffset: "2px" },
});

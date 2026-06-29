import type { SxProps, Theme } from "@mui/material/styles";

export const wrap: SxProps<Theme> = {
  display: "inline-flex",
  // mobil: svisle (CZ / EN pod sebou), desktop: vodorovně
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "center",
  gap: { xs: "0.2rem", sm: "0.45rem" },
  border: "1px solid var(--saze)",
  p: { xs: "0.35rem 0.45rem", sm: "0.22rem 0.55rem" },
};

export const button = (on: boolean): SxProps<Theme> => ({
  background: "none",
  border: "none",
  p: 0,
  cursor: "pointer",
  font: "inherit",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontWeight: on ? 600 : 400,
  color: on ? "var(--saze)" : "rgba(28,24,20,.45)",
  transition: "color .15s ease",
  "&:hover": { color: "var(--saze)" },
  "&:focus-visible": { outline: "2px solid var(--stroj)", outlineOffset: "2px" },
});

// na desktopu „/", na mobilu (svisle) pomlčka „–"
export const sep: SxProps<Theme> = {
  color: "rgba(28,24,20,.3)",
  lineHeight: 1,
  "&::before": { content: { xs: '"—"', sm: '"/"' } },
};

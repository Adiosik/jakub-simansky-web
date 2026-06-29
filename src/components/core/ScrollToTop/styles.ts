import type { SxProps, Theme } from "@mui/material/styles";

export const button = (visible: boolean, lift: number): SxProps<Theme> => ({
  position: "fixed",
  right: { xs: "1rem", sm: "1.5rem" },
  // základ dole + dynamické zvednutí nad footer, jakmile je footer ve viewportu
  bottom: `calc(1.2rem + ${lift}px)`,
  zIndex: 60,
  width: 44,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1.5px solid var(--saze)",
  background: "var(--papir-2)",
  color: "var(--saze)",
  cursor: "pointer",
  boxShadow: "var(--stin)",
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(8px)",
  pointerEvents: visible ? "auto" : "none",
  transition: "opacity .25s ease, transform .25s ease, bottom .2s ease, background .15s ease, color .15s ease",
  "&:hover": { background: "var(--saze)", color: "var(--papir)" },
  "&:focus-visible": { outline: "3px solid var(--stroj)", outlineOffset: "2px" },
  "& svg": { width: 16, height: 16, display: "block" },
});

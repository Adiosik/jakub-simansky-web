import type { SxProps, Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";

const tipBase: CSSProperties = {
  position: "absolute",
  bottom: "155%",
  left: "50%",
  transform: "translateX(-50%) translateY(4px)",
  background: "var(--saze)",
  color: "var(--papir)",
  fontSize: "0.58rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  padding: "0.22rem 0.45rem",
  whiteSpace: "nowrap",
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity .15s ease, transform .15s ease",
};
const tipShow = { opacity: 1, transform: "translateX(-50%) translateY(0)" };

export const button = (copied: boolean): SxProps<Theme> => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 20,
  height: 20,
  p: 0,
  background: "none",
  border: "none",
  color: copied ? "var(--zelena)" : "rgba(28,24,20,.55)",
  cursor: "pointer",
  transition: "color .15s ease, transform .15s ease",
  "& svg": { width: 15, height: 15, display: "block" },
  "&:hover": { color: copied ? "var(--zelena)" : "var(--saze)", transform: "translateY(-1px)" },
  "&:focus-visible": { outline: "2px solid var(--stroj)", outlineOffset: "2px" },
  "& .sim-tip": copied ? { ...tipBase, ...tipShow } : tipBase,
  "&:hover .sim-tip, &:focus-visible .sim-tip": tipShow,
});

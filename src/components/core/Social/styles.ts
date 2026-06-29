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

export const link = (contact: boolean): SxProps<Theme> => ({
  position: "relative",
  color: "var(--saze)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: contact ? "0.5rem" : "0.34rem",
  height: contact ? "auto" : "20px",
  textDecoration: "none",
  transition: "transform .15s ease",
  "& svg": { width: contact ? 32 : 18, height: contact ? 32 : 18, display: "block", fill: "currentColor", flex: "0 0 auto" },
  "&:hover": { transform: "translateY(-2px)" },
  "&:focus-visible": { outline: "2px solid var(--stroj)", outlineOffset: "3px" },
  "& .sim-tip": tipBase,
  "&:hover .sim-tip, &:focus-visible .sim-tip": tipShow,
});

export const watermark = (contact: boolean): SxProps<Theme> => ({
  fontSize: contact ? "0.82rem" : "0.62rem",
  letterSpacing: contact ? "0.04em" : "0.05em",
  textTransform: "uppercase",
  fontWeight: contact ? 500 : 600,
  lineHeight: 1,
});

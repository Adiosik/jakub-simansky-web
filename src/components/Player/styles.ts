import type { SxProps, Theme } from "@mui/material/styles";

export const player: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  mt: "1.2rem",
  border: "1.5px solid var(--saze)",
  p: "0.7rem 0.9rem",
  maxWidth: 600,
  background: "var(--papir-2)",
  boxShadow: "var(--stin)",
};

// mobil: play + obal + přepínač na 1. řádku, název se zalomí na 2. řádek; desktop: jeden řádek
export const top: SxProps<Theme> = { display: "flex", flexWrap: "wrap", alignItems: "center", columnGap: "0.7rem", rowGap: "0.6rem" };

export const playBtn: SxProps<Theme> = {
  flex: "0 0 auto",
  width: 84,
  height: 84,
  border: "none",
  background: "none",
  cursor: "pointer",
  p: 0,
  borderRadius: "50%",
  transition: "transform .18s ease",
  "&:hover": { transform: "scale(1.04)" },
  "&:focus-visible": { outline: "3px solid var(--stroj)", outlineOffset: "3px" },
  "& svg": { width: "100%", height: "100%", display: "block" },
};

export const cover: SxProps<Theme> = { width: 64, height: 64, flex: "0 0 auto", border: "1px solid var(--saze)", overflow: "hidden" };
// na mobilu se název přesune na celý 2. řádek (order + flex-basis 100 %)
export const titles: SxProps<Theme> = {
  minWidth: 0,
  flex: "1 1 auto",
  maxWidth: { sm: 360 },
  order: { xs: 2, sm: 0 },
  flexBasis: { xs: "100%", sm: "auto" },
};
export const title: SxProps<Theme> = { fontSize: "0.84rem", fontWeight: 600, lineHeight: 1.18 };
export const sub: SxProps<Theme> = { fontSize: "0.63rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(28,24,20,.55)", mt: "0.12rem" };

// celý sloupec šipek odsazený úplně doprava
export const navs: SxProps<Theme> = { flex: "0 0 auto", ml: "auto", display: "flex", flexDirection: "column", gap: { xs: "0.4rem", sm: "0.25rem" } };
export const nav: SxProps<Theme> = {
  flex: "0 0 auto",
  // na mobilu větší (lepší klikání), na desktopu kompaktní
  width: { xs: 44, sm: 26 },
  height: { xs: 36, sm: 22 },
  p: 0,
  border: "1.5px solid var(--saze)",
  background: "none",
  cursor: "pointer",
  color: "var(--saze)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background .15s ease, color .15s ease",
  "&:hover": { background: "var(--saze)", color: "var(--papir)" },
  "&:focus-visible": { outline: "3px solid var(--stroj)", outlineOffset: "2px" },
  "& svg": { width: { xs: 16, sm: 12 }, height: { xs: 16, sm: 12 }, display: "block" },
};

// Dva nezávislé sloupce (každý vlastní výšky řádků => žádné sdílené mezery).
// PEVNÁ výška + overflow: karta i okolí mají vždy stejnou velikost, nejdelší album se odscrolluje uvnitř.
export const tracklist: SxProps<Theme> = {
  m: 0,
  p: "0.45rem 0.2rem 0 0",
  borderTop: "1px solid var(--linka)",
  height: "12rem",
  overflowY: "auto",
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  // na mobilu (sloupce pod sebou) malá mezera jako mezi řádky, na desktopu sloupcová mezera
  gap: { xs: "0.05rem", sm: "0.6rem" },
  alignItems: "flex-start",
};
export const trackCol: SxProps<Theme> = {
  listStyle: "none",
  m: 0,
  p: 0,
  flex: 1,
  minWidth: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.05rem",
};

export const track = (active: boolean): SxProps<Theme> => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  font: "inherit",
  color: active ? "var(--akcent)" : "var(--saze)",
  textAlign: "left",
  p: "0.28rem 0.35rem",
  transition: "background .15s ease, color .15s ease",
  "&:hover": { background: "var(--papir)" },
  "&:focus-visible": { outline: "2px solid var(--stroj)", outlineOffset: "-2px" },
  "& .sim-track-state": { opacity: active ? 1 : 0 },
  "&:hover .sim-track-state": { opacity: 1 },
  "& .dot": { color: "var(--zelena)" },
});

export const trackIx = (active: boolean): SxProps<Theme> => ({
  flex: "0 0 auto",
  width: "1.7em",
  fontSize: "0.7rem",
  color: active ? "var(--zelena)" : "rgba(28,24,20,.45)",
  fontVariantNumeric: "tabular-nums",
  textAlign: "center",
});

export const trackName = (active: boolean): SxProps<Theme> => ({
  flex: 1,
  minWidth: 0,
  fontSize: "0.82rem",
  fontWeight: active ? 600 : 400,
  lineHeight: 1.2,
  // zalomí dlouhý název na max 2 řádky (žádné ořezání tečkami)
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

export const trackState = (active: boolean): SxProps<Theme> => ({
  flex: "0 0 auto",
  fontSize: "0.58rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: active ? "var(--akcent)" : "rgba(28,24,20,.45)",
  transition: "opacity .15s ease",
});

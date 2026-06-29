import type { SxProps, Theme } from "@mui/material/styles";

// Rozbalení: animace výšky přes grid-template-rows 0fr -> 1fr (zvládne neznámou výšku obsahu).
export const panel = (open: boolean): SxProps<Theme> => ({
  display: "grid",
  gridTemplateRows: open ? "1fr" : "0fr",
  // otevření svižné, zavření plynulejší
  transition: `grid-template-rows ${open ? ".15s" : ".34s"} cubic-bezier(.2,.8,.2,1)`,
});
export const inner: SxProps<Theme> = { overflow: "hidden", minHeight: 0 };
export const card = (open: boolean): SxProps<Theme> => ({
  position: "relative",
  maxWidth: 1320, width: "100%", mx: "auto",
  // zastaví scroll pod sticky headerem, ať je vidět i nadpis sekce (header je na mobilu vyšší)
  scrollMarginTop: { xs: "7rem", sm: "4.5rem" },
  mt: "1.73rem", // vzduch mezi tlačítky a rozdělovačem (linka je na horní hraně karty)
  p: "clamp(1.6rem,4vw,3rem) clamp(1rem,4vw,3rem)",
  // rozdělovač se „nakreslí" zleva doprava (progress bar) až po sjetí dolů
  "&::before": {
    content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "1px",
    background: "var(--saze)", transformOrigin: "left center",
    transform: open ? "scaleX(1)" : "scaleX(0)",
    transition: "transform .85s ease",
    transitionDelay: open ? ".18s" : "0s",
  },
});
export const head: SxProps<Theme> = { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1.5rem", mb: "1.8rem" };
export const title: SxProps<Theme> = { fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", fontSize: "clamp(1.7rem,4vw,2.8rem)", lineHeight: 1, m: 0 };
export const intro: SxProps<Theme> = { m: "0.6rem 0 0", fontSize: "0.86rem", color: "rgba(28,24,20,.7)", maxWidth: "94ch" };
export const empty: SxProps<Theme> = { fontSize: "0.9rem", color: "rgba(28,24,20,.7)" };
export const close: SxProps<Theme> = {
  flex: "0 0 auto", fontFamily: "inherit", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
  background: "none", color: "var(--saze)", cursor: "pointer", border: "1.5px solid var(--saze)", p: "0.5rem 0.8rem",
  transition: "background .18s ease, color .18s ease",
  "&:hover": { background: "var(--saze)", color: "var(--papir)" },
  "&:focus-visible": { outline: "3px solid var(--stroj)", outlineOffset: "2px" },
};

/* O mně */
export const about: SxProps<Theme> = { display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: "1.4rem", sm: "2.4rem" }, alignItems: "flex-start" };
export const aboutPhoto: SxProps<Theme> = {
  flex: "0 0 auto", width: { xs: "100%", sm: "40%" }, maxWidth: 320, aspectRatio: "1 / 1",
  display: "block", border: "1px solid var(--saze)", overflow: "hidden",
  boxShadow: "0 16px 30px -14px rgba(28,24,20,.45)",
  "& > *": { width: "100%", height: "100%", objectFit: "cover", display: "block" },
};
export const aboutText: SxProps<Theme> = { fontSize: "0.95rem", lineHeight: 1.65, maxWidth: "70ch", whiteSpace: "pre-line" };

/* Koncerty */
export const gigs: SxProps<Theme> = { listStyle: "none", m: 0, p: 0 };
export const gig: SxProps<Theme> = {
  display: "grid", gridTemplateColumns: "minmax(9rem,auto) 1fr auto", gap: "1rem", alignItems: "baseline",
  p: "0.95rem 0", borderTop: "1px solid var(--linka)", "&:last-of-type": { borderBottom: "1px solid var(--linka)" },
};
export const gigDate: SxProps<Theme> = { fontSize: "0.74rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--akcent)", fontWeight: 600 };
export const gigPlace: SxProps<Theme> = { fontSize: "0.92rem", "& strong": { fontWeight: 600 } };
export const gigTag: SxProps<Theme> = { fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--papir)", background: "var(--saze)", p: "0.2rem 0.45rem", justifySelf: "end", minHeight: "1px" };

/* Desky — každé album na vlastním řádku (stoh) */
export const discs: SxProps<Theme> = { display: "flex", flexDirection: "column", gap: "1.4rem" };
export const disc = (active: boolean): SxProps<Theme> => ({
  display: "flex", gap: { xs: "1.2rem", sm: "2.4rem" }, alignItems: "flex-start", textAlign: "left", p: "1.3rem", cursor: "pointer", font: "inherit",
  color: active ? "var(--papir)" : "var(--saze)", background: active ? "var(--saze)" : "var(--papir-2)", border: "1.5px solid var(--saze)",
  boxShadow: "var(--stin)",
  transition: "transform .15s ease",
  "&:hover": { transform: "translate(-3px,-3px)" },
  "&:focus-visible": { outline: "3px solid var(--stroj)", outlineOffset: "2px" },
  flexDirection: { xs: "column", sm: "row" },
});
// velký čtvercový obal (~půlka šířky karty), drží poměr 1:1
export const discCover: SxProps<Theme> = {
  flex: "0 0 auto", width: { xs: "100%", sm: "45%" }, maxWidth: 360, aspectRatio: "1 / 1",
  display: "block", border: "1px solid currentColor", overflow: "hidden",
  boxShadow: "0 16px 30px -14px rgba(28,24,20,.45)",
  "& > *": { width: "100%", height: "100%", objectFit: "cover", display: "block" },
};
export const discMeta: SxProps<Theme> = { minWidth: 0, display: "flex", flexDirection: "column", gap: "0.25rem", flex: 1 };
export const discTitle: SxProps<Theme> = { fontSize: "1rem", fontWeight: 600, lineHeight: 1.2 };
export const discSub: SxProps<Theme> = { fontSize: "0.64rem", letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7 };
export const discDesc: SxProps<Theme> = { fontSize: "0.82rem", lineHeight: 1.5, mt: "0.5rem", opacity: 0.9, whiteSpace: "pre-line" };
export const discTracks: SxProps<Theme> = { fontSize: "0.7rem", mt: "0.6rem", lineHeight: 1.4, opacity: 0.6 };
export const discPlay = (active: boolean): SxProps<Theme> => ({ mt: "0.7rem", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: active ? "var(--papir-2)" : "var(--akcent)" });

/* Kontakt */
export const contactGrid: SxProps<Theme> = { display: "flex", flexWrap: "wrap", gap: "2rem 5rem", alignItems: "flex-start" };
export const contactLabel: SxProps<Theme> = { fontSize: "0.66rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--akcent)", mb: "0.7rem" };
export const contactMailrow: SxProps<Theme> = { display: "flex", alignItems: "center", gap: "0.55rem" };
export const contactSocials: SxProps<Theme> = { display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.4rem 2rem" };
export const email: SxProps<Theme> = {
  color: "var(--saze)", textDecoration: "none", letterSpacing: "0.04em", borderBottom: "1px solid var(--linka)",
  transition: "border-color .15s ease", "&:hover": { borderBottomColor: "var(--saze)" },
};

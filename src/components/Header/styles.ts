import type { SxProps, Theme } from "@mui/material/styles";

export const header: SxProps<Theme> = {
  position: "sticky",
  top: 0,
  zIndex: 40,
  background: "var(--bar)",
  backdropFilter: "blur(6px)",
  p: "1.1rem clamp(1rem,4vw,3rem) .9rem",
  borderBottom: "1.5px solid var(--saze)",
  fontSize: "0.72rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  // mobil: tagline + lokace vlevo pod sebou, jazyk vpravo svisle; desktop: jeden řádek
  display: { xs: "grid", sm: "flex" },
  gridTemplateColumns: { xs: "1fr auto" },
  gridTemplateAreas: { xs: '"tag lang" "loc lang"' },
  columnGap: { xs: "1rem" },
  rowGap: { xs: "0.45rem" },
  alignItems: { xs: "start", sm: "center" },
  gap: { sm: "1.4rem" },
  flexWrap: { sm: "wrap" },
};

export const tagline: SxProps<Theme> = { gridArea: { xs: "tag" } };

export const location: SxProps<Theme> = {
  gridArea: { xs: "loc" },
  color: "var(--akcent)",
  ml: { sm: "auto" }, // na desktopu odsadí lokaci + jazyk doprava
};

export const langCell: SxProps<Theme> = {
  gridArea: { xs: "lang" },
  justifySelf: { xs: "end" },
  alignSelf: { xs: "start" },
};

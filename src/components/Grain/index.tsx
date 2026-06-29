/**
 * Grain — jemný šum přes celou plochu (mix-blend multiply) pro „tiskový" nádech.
 */
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

const sx: SxProps<Theme> = {
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  pointerEvents: "none",
  zIndex: 50,
  opacity: 0.5,
  mixBlendMode: "multiply",
};

export default function Grain() {
  return (
    <Box component="svg" sx={sx} xmlns="http://www.w3.org/2000/svg">
      <filter id="simNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#simNoise)" />
    </Box>
  );
}

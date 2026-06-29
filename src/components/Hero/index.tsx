/**
 * Hero — textový blok: eyebrow, jméno (se soutiskovými „ghost" vrstvami) a lede.
 */
import Box from "@mui/material/Box";
import type { Translation } from "../../language";
import * as styles from "./styles";

export default function Hero({ texts }: { texts: Translation }) {
  return (
    <>
      <Box component="p" className="sim-anim d2" sx={styles.eyebrow}>{texts.eyebrow}</Box>
      <Box component="h1" className="sim-anim d2" sx={styles.name}>
        <span className="ln">
          <span className="sim-jakub">Jakub</span>
          <span className="sim-ghost a" aria-hidden="true"><span className="sim-jakub">Jakub</span></span>
          <span className="sim-ghost b" aria-hidden="true"><span className="sim-jakub">Jakub</span></span>
        </span>
        <span className="ln">
          <span className="sim-surname">Šimanský</span>
          <span className="sim-ghost a" aria-hidden="true"><span className="sim-surname">Šimanský</span></span>
          <span className="sim-ghost b" aria-hidden="true"><span className="sim-surname">Šimanský</span></span>
        </span>
      </Box>
      <Box component="p" className="sim-anim d3" sx={styles.lede}>{texts.lede}</Box>
    </>
  );
}

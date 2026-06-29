/**
 * Header — horní lišta: tagline vlevo, lokace + přepínač jazyka vpravo.
 */
import Box from "@mui/material/Box";
import type { Translation, Lang } from "../../language";
import LangToggle from "../core/LangToggle";
import * as styles from "./styles";

type Props = { texts: Translation; lang: Lang; onLang: (lang: Lang) => void };

export default function Header({ texts, lang, onLang }: Props) {
  return (
    <Box component="header" className="sim-anim d1" sx={styles.header}>
      <Box component="div" sx={styles.tagline}>{texts.head.tagline}</Box>
      <Box component="div" sx={styles.location}>{texts.head.location}</Box>
      <Box sx={styles.langCell}><LangToggle lang={lang} onChange={onLang} /></Box>
    </Box>
  );
}

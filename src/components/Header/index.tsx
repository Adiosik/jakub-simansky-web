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
      <Box component="div">{texts.head.tagline}</Box>
      <Box sx={styles.right}>
        <Box component="span">{texts.head.location}</Box>
        <LangToggle lang={lang} onChange={onLang} />
      </Box>
    </Box>
  );
}

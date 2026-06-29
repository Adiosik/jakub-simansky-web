/**
 * Footer — zápatí: sociální sítě vlevo, e-mail + kopírování vpravo.
 */
import Box from "@mui/material/Box";
import type { Translation } from "../../language";
import { SOCIALS } from "../../data/socials";
import { EMAIL } from "../../data/site";
import SocialLink from "../core/Social";
import CopyButton from "../core/CopyButton";
import * as styles from "./styles";

export default function Footer({ texts }: { texts: Translation }) {
  return (
    <Box component="footer" className="sim-anim d5" sx={styles.footer}>
      <Box sx={styles.social}>
        {SOCIALS.map((s) => <SocialLink key={s.name} social={s} variant="footer" />)}
      </Box>
      <Box sx={styles.contact}>
        <Box component="a" href={`mailto:${EMAIL}`} sx={styles.email}>{EMAIL}</Box>
        <CopyButton value={EMAIL} labelCopy={texts.footer.copy} labelCopied={texts.footer.copied} ariaLabel={texts.footer.copyAria} />
      </Box>
    </Box>
  );
}

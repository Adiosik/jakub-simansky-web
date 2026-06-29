/**
 * SectionNav — tlačítka Koncerty / Desky / Kontakt, otevírají rozbalovací sekci.
 */
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { Translation } from "../../language";
import type { PanelKey } from "../Panels";
import PressButton from "../core/PressButton";

const nav: SxProps<Theme> = { display: "flex", flexWrap: "wrap", gap: "0.6rem", mt: "1.6rem" };

type Props = { texts: Translation; openPanel: PanelKey | null; onOpen: (key: PanelKey) => void };

export default function SectionNav({ texts, openPanel, onOpen }: Props) {
  return (
    <Box component="nav" className="sim-anim d4" sx={nav}>
      <PressButton active={openPanel === "about"} ariaExpanded={openPanel === "about"} onClick={() => onOpen("about")}>{texts.nav.about}</PressButton>
      <PressButton active={openPanel === "concerts"} ariaExpanded={openPanel === "concerts"} onClick={() => onOpen("concerts")}>{texts.nav.concerts}</PressButton>
      <PressButton active={openPanel === "records"} ariaExpanded={openPanel === "records"} onClick={() => onOpen("records")}>{texts.nav.records}</PressButton>
      <PressButton active={openPanel === "contact"} ariaExpanded={openPanel === "contact"} onClick={() => onOpen("contact")}>{texts.nav.contact}</PressButton>
    </Box>
  );
}

/**
 * SimanskyHero — kořenová kompozice stránky. Drží jen sdílený stav
 * (jazyk, otevřená sekce, přehrávač) a skládá jednotlivé komponenty.
 * Styling a logika jsou v komponentách pod src/components/*.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

import { translations, type Lang } from "./language";
import { useArpeggioPlayer } from "./components/Player/useArpeggioPlayer";
import Grain from "./components/Grain";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Player from "./components/Player";
import SectionNav from "./components/SectionNav";
import Landscape from "./components/Landscape";
import Panels, { type PanelKey } from "./components/Panels";
import Footer from "./components/Footer";
import ScrollToTop from "./components/core/ScrollToTop";

const rootSx: SxProps<Theme> = {
  background: "var(--papir)",
  color: "var(--saze)",
  minHeight: "100vh",
  position: "relative",
  // overflow-x: clip ořízne vodorovně bez vytvoření scroll-kontejneru => sticky header funguje
  overflowX: "clip",
  display: "flex",
  flexDirection: "column",
  fontFamily: "var(--font-mono)",
};

const mainSx: SxProps<Theme> = {
  flex: 1,
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1.05fr .95fr" },
  gap: "clamp(1rem,3vw,2.5rem)",
  alignItems: "center",
  p: "clamp(0.75rem,2.5vw,1.75rem) clamp(1rem,4vw,3rem)",
  maxWidth: 1320,
  width: "100%",
  mx: "auto",
};

export default function SimanskyHero() {
  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState<Lang>("csCZ");
  const [openPanel, setOpenPanel] = useState<PanelKey | null>(null);
  const player = useArpeggioPlayer();

  const lastPanelRef = useRef<PanelKey>("concerts");
  const panelCardRef = useRef<HTMLDivElement | null>(null);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const openSection = useCallback((key: PanelKey) => {
    setOpenPanel((cur) => (cur === key ? null : key));
  }, []);

  useEffect(() => {
    if (!openPanel) return;
    // Počkáme, až se panel rozbalí (animace výšky ~.5s), jinak stránka ještě
    // není dost vysoká a scroll nemá kam dojet.
    const id = window.setTimeout(() => {
      panelCardRef.current?.scrollIntoView({ behavior: reduce.current ? "auto" : "smooth", block: "start" });
    }, reduce.current ? 0 : 120);
    return () => clearTimeout(id);
  }, [openPanel]);

  const texts = translations[lang];
  // Drží poslední otevřenou sekci, aby měl obsah co zobrazovat během zavírání.
  if (openPanel) lastPanelRef.current = openPanel;
  const shownPanel = openPanel ?? lastPanelRef.current;

  return (
    <Box className={"sim-root" + (ready ? " is-ready" : "") + (player.playing ? " playing" : "")} sx={rootSx}>
      <Grain />
      <Header texts={texts} lang={lang} onLang={setLang} />

      <Box component="main" sx={mainSx}>
        <Box component="section">
          <Hero texts={texts} />
          <Player texts={texts} player={player} />
          <SectionNav texts={texts} openPanel={openPanel} onOpen={openSection} />
        </Box>
        <Landscape caption={texts.print.caption} alt={texts.print.alt} />
      </Box>

      <Panels openPanel={openPanel} shownPanel={shownPanel} onClose={() => setOpenPanel(null)}
        texts={texts} lang={lang} player={player} cardRef={panelCardRef} />

      <Footer texts={texts} />
      <ScrollToTop />
    </Box>
  );
}

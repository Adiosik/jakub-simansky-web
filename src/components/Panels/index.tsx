/**
 * Panels — rozbalovací sekce pod heroem (Koncerty / Desky / Kontakt).
 * Drží poslední zobrazený obsah i během zavírací animace (shownPanel).
 */
import Box from "@mui/material/Box";
import type { RefObject } from "react";
import type { Translation, Lang } from "../../language";
import { ALBUMS } from "../../data/albums";
import { CONCERTS } from "../../data/concerts";
import { SOCIALS } from "../../data/socials";
import { EMAIL, PROFILE_PHOTO } from "../../data/site";
import { asset } from "../../asset";
import type { ArpeggioPlayer } from "../Player/useArpeggioPlayer";
import AlbumCover from "../Player/AlbumCover";
import SocialLink from "../core/Social";
import CopyButton from "../core/CopyButton";
import * as styles from "./styles";

export type PanelKey = "concerts" | "records" | "contact" | "about";

type Props = {
  openPanel: PanelKey | null;
  shownPanel: PanelKey;
  onClose: () => void;
  texts: Translation;
  lang: Lang;
  player: ArpeggioPlayer;
  cardRef: RefObject<HTMLDivElement | null>;
};

export default function Panels({ openPanel, shownPanel, onClose, texts, lang, player, cardRef }: Props) {
  const locale = lang === "enUS" ? "en-US" : "cs-CZ";
  const fmtDate = (iso: string) =>
    new Date(iso + "T00:00:00").toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });

  const title = texts.panels[shownPanel].title;
  const intro = texts.panels[shownPanel].intro;

  return (
    <Box component="section" sx={styles.panel(!!openPanel)} aria-hidden={!openPanel}>
      <Box sx={styles.inner}>
        <Box ref={cardRef} sx={styles.card(!!openPanel)}>
          <Box sx={styles.head}>
            <Box>
              <Box component="h2" sx={styles.title}>{title}</Box>
              <Box component="p" sx={styles.intro}>{intro}</Box>
            </Box>
            <Box component="button" type="button" sx={styles.close} onClick={onClose} aria-label={texts.panels.close}>
              {texts.panels.close} ✕
            </Box>
          </Box>

          {shownPanel === "concerts" && (
            CONCERTS.length === 0
              ? <Box component="p" sx={styles.empty}>{texts.panels.concerts.empty}</Box>
              : <Box component="ul" sx={styles.gigs}>
                  {CONCERTS.map((gig) => (
                    <Box component="li" key={gig.date + gig.city} sx={styles.gig}>
                      <Box component="span" sx={styles.gigDate}>{fmtDate(gig.date)}</Box>
                      <Box component="span" sx={styles.gigPlace}><strong>{gig.city}</strong> · {gig.venue}</Box>
                      {gig.soldOut
                        ? <Box component="span" sx={styles.gigTag}>{texts.panels.concerts.soldOut}</Box>
                        : <span />}
                    </Box>
                  ))}
                </Box>
          )}

          {shownPanel === "records" && (
            <Box sx={styles.discs}>
              {ALBUMS.map((album, i) => {
                const isActive = i === player.albumIdx && player.playing;
                return (
                  <Box component="button" type="button" key={album.title} sx={styles.disc(isActive)}
                    onClick={() => { player.selectAlbum(i); window.scrollTo({ top: 0, behavior: "smooth" }); }} aria-pressed={isActive}>
                    <Box component="span" sx={styles.discCover}><AlbumCover album={album} index={i} /></Box>
                    <Box component="span" sx={styles.discMeta}>
                      <Box component="span" sx={styles.discTitle}>{album.artist ? album.artist + " — " : ""}{album.title}</Box>
                      <Box component="span" sx={styles.discSub}>{album.year} · {album.label}</Box>
                      {album.description && <Box component="span" sx={styles.discDesc}>{album.description[lang]}</Box>}
                      <Box component="span" sx={styles.discTracks}>{album.tracks.join(" · ")}</Box>
                      <Box component="span" sx={styles.discPlay(isActive)}>
                        {isActive ? "● " + texts.panels.records.playing : "▶ " + texts.panels.records.play}
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          )}

          {shownPanel === "about" && (
            <Box sx={styles.about}>
              <Box sx={styles.aboutPhoto}><img src={asset(PROFILE_PHOTO)} alt="Jakub Šimanský" loading="lazy" /></Box>
              <Box sx={styles.aboutText}>{texts.panels.about.body}</Box>
            </Box>
          )}

          {shownPanel === "contact" && (
            <Box sx={styles.contactGrid}>
              <Box>
                <Box sx={styles.contactLabel}>{texts.panels.contact.bookingLabel}</Box>
                <Box sx={styles.contactMailrow}>
                  <Box component="a" href={`mailto:${EMAIL}`} sx={styles.email}>{EMAIL}</Box>
                  <CopyButton value={EMAIL} labelCopy={texts.footer.copy} labelCopied={texts.footer.copied} ariaLabel={texts.footer.copyAria} />
                </Box>
              </Box>
              <Box>
                <Box sx={styles.contactLabel}>{texts.panels.contact.followLabel}</Box>
                <Box sx={styles.contactSocials}>
                  {SOCIALS.map((s) => <SocialLink key={s.name} social={s} variant="contact" />)}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

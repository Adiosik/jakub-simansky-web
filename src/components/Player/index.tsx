/**
 * Player — karta přehrávače: nahoře play tlačítko + obal + přepínání alb
 * (chevron nahoru/dolů), pod tím seznam skladeb daného alba ve dvou sloupcích.
 */
import Box from "@mui/material/Box";
import { ALBUMS } from "../../data/albums";
import type { Translation } from "../../language";
import type { ArpeggioPlayer } from "./useArpeggioPlayer";
import SoundholeButton from "./SoundholeButton";
import AlbumCover from "./AlbumCover";
import * as styles from "./styles";

type Props = { texts: Translation; player: ArpeggioPlayer };

export default function Player({ texts, player }: Props) {
  const { playing, albumIdx, trackIdx, toggle, selectTrack, prev, next } = player;
  const album = ALBUMS[albumIdx];

  // rozdělení skladeb do dvou nezávislých sloupců (1…k vlevo, zbytek vpravo)
  const items = album.tracks.map((track, i) => ({ track, i }));
  const mid = Math.ceil(items.length / 2);
  const columns = [items.slice(0, mid), items.slice(mid)];

  return (
    <Box className="sim-anim d3" sx={styles.player}>
      <Box sx={styles.top}>
        <Box component="button" type="button" className="sim-playbtn" sx={styles.playBtn}
          onClick={toggle} aria-pressed={playing} aria-label={playing ? texts.player.stop : texts.player.play}>
          <SoundholeButton playing={playing} />
        </Box>
        <Box sx={styles.cover}><AlbumCover album={album} index={albumIdx} /></Box>
        <Box sx={styles.titles}>
          <Box sx={styles.title}>{album.artist ? album.artist + " — " : ""}{album.title}</Box>
          <Box sx={styles.sub}>{album.year} · {album.label}</Box>
        </Box>
        <Box sx={styles.navs}>
          <Box component="button" type="button" sx={styles.nav} onClick={prev} aria-label={texts.player.prevAlbum}>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10l4-4 4 4" /></svg>
          </Box>
          <Box component="button" type="button" sx={styles.nav} onClick={next} aria-label={texts.player.nextAlbum}>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.tracklist}>
        {columns.map((col, c) => (
          <Box component="ol" sx={styles.trackCol} key={c}>
            {col.map(({ track, i }) => {
              const active = i === trackIdx;
              const isPlaying = active && playing;
              return (
                <li key={track + i}>
                  <Box component="button" type="button" sx={styles.track(active)}
                    onClick={() => selectTrack(i)} aria-pressed={isPlaying}>
                    <Box component="span" sx={styles.trackIx(active)}>
                      {isPlaying ? <span className="dot">●</span> : String(i + 1).padStart(2, "0")}
                    </Box>
                    <Box component="span" sx={styles.trackName(active)}>{track}</Box>
                    <Box component="span" className="sim-track-state" sx={styles.trackState(active)}>
                      {isPlaying ? texts.player.nowPlaying : texts.player.playLabel}
                    </Box>
                  </Box>
                </li>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

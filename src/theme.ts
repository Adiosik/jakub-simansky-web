import { createTheme } from "@mui/material/styles";

/**
 * Minimální MUI theme. Barvy řešíme primárně přes CSS proměnné (viz index.css),
 * theme drží jen font a vypnutí defaultních zaoblení/ripple, ať MUI komponenty
 * sednou k „linoryt" stylu (ostré hrany, mono font).
 */
export const theme = createTheme({
  typography: {
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
  },
  shape: { borderRadius: 0 },
  palette: {
    primary: { main: "#2C5660" },   // --stroj
    text: { primary: "#1C1814" },   // --saze
  },
  components: {
    MuiButtonBase: { defaultProps: { disableRipple: true } },
  },
});

/**
 * PressButton — orámované uppercase tlačítko v „linoryt" stylu (nav, jazyk…).
 * Aktivní stav = invertované barvy. Bez MUI ripple, drží ostré hrany.
 */
import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import * as styles from "./styles";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  ariaExpanded?: boolean;
  ariaLabel?: string;
};

export default function PressButton({ children, onClick, active = false, ariaExpanded, ariaLabel }: Props) {
  return (
    <Box component="button" type="button" sx={styles.root(active)}
      onClick={onClick} aria-expanded={ariaExpanded} aria-label={ariaLabel}>
      {children}
    </Box>
  );
}

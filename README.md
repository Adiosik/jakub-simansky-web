# Jakub Šimanský — web

Osobní web kytaristy **Jakuba Šimanského** (fingerstyle / americký primitivismus,
z Přerova do Brna). Jednostránkový hero web s animovaným linorytem hanácké
krajiny, ukázkovým přehrávačem, diskografií, koncerty a kontaktem — dvojjazyčně
(CZ/EN).

## Co to umí
- **Animovaná krajina** (SVG soutisk „dva tisky") s parallaxem na pohyb myši —
  pole, řeka, ptáci, kouř z komína i brácha na nafukovacím člunu.
- **Přehrávač** se seznamem skladeb a přepínáním alb (ukázkový web-audio zvuk;
  připravený na reálné nahrávky).
- Rozbalovací sekce **O mně / Koncerty / Desky / Kontakt**.
- **CZ/EN** přepínač, kopírování e-mailu, lepkavá hlavička i zápatí.

## Technologie
- React 19 + TypeScript
- Vite
- MUI (Material UI) + Emotion — styling po komponentách v `styles.ts`
- Web Audio API (ukázkový přehrávač)

## Vývoj
```bash
npm install
npm run dev      # vývojový server (Vite)
npm run build    # produkční build
npm run preview  # náhled buildu
```

## Struktura
- `src/components/*` — komponenty, každá má `index.tsx` + `styles.ts`
- `src/data/*` — obsah (alba, koncerty, sítě, kontakt)
- `src/language/*` — překlady CZ/EN
- `src/index.css` — design tokeny (barvy), reset a CSS animace
- `public/` — obrázky (`covers/`, `photos/`)

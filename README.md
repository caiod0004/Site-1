# Landing "Sito in 7 giorni a 197 €" – Caio Machado

Sito statico fatto con **Astro** + **Tailwind CSS**. Nessun backend, nessun PHP, nessun tracciamento attivo.

## Avviare in locale

Serve Node.js 20 o più recente.

```bash
npm install
npm run dev        # apre http://localhost:4321
```

## Build per la pubblicazione

```bash
npm run build      # crea la cartella dist/
npm run preview    # controlla la build in locale
```

Carica **il contenuto di `dist/`** su qualsiasi hosting (il tuo hosting via FTP, Netlify, Vercel…).
Su Netlify/Vercel: comando di build `npm run build`, cartella di pubblicazione `dist`.

## Dove cambiare link e segnaposto

Quasi tutto è in **`src/config.ts`**:

| Costante | A cosa serve | Ora |
|---|---|---|
| `SITE_URL` | dominio definitivo (canonical, sitemap, Open Graph, robots) | `https://dominio-da-inserire.it` |
| `QUESTIONARIO_URL` | tutti i bottoni "Richiedi il tuo sito" | `#richiedi` (mostra `[LINK AL QUESTIONARIO DA INSERIRE]`) |
| `WHATSAPP_URL` | link WhatsApp nel footer | vuoto → `[WHATSAPP]` |
| `EMAIL` | email nel footer | vuoto → `[EMAIL]` |
| `STUDIO_LEGALE_URL` | link al sito dello Studio Legale | vuoto → "In pubblicazione", nessun link |
| `PREZZO_CANONE` | prezzo del canone hosting (FAQ) | vuoto → `[PREZZO DEL CANONE]` |
| `IUBENDA`, `GOOGLE_ANALYTICS` | banner cookie e statistiche | spenti |

Altri punti:

- **Testi** della pagina: un file per sezione in `src/components/`. FAQ e striscia dei vantaggi in `src/data/content.ts` (le FAQ alimentano anche i dati strutturati per Google).
- **Foto di Caio**: `src/assets/caio_pensieroso.jpg` e `src/assets/caio_sushi.jpg` (prese dal progetto Canva "Fede Sale e Pepe"). Per cambiarle sostituisci i file mantenendo il nome.
- **Logo TocStory**: `src/assets/tocstory_logo.png` (dal progetto Canva "LOGO TOC STORY").
- **Colori**: in `src/styles/global.css`, blocco `@theme` (lime, crema, scuro caldo, celeste, corallo, taupe dal brand).
- **Privacy e cookie**: `src/pages/privacy.astro` e `src/pages/cookie.astro` (testo da Iubenda).
- **Immagine per i social**: `public/og-image.jpg` (1200×630).

## Privacy: come accendere Iubenda e Google Analytics

1. In `src/config.ts` metti `IUBENDA.enabled = true` con `siteId` e `cookiePolicyId`.
2. Solo dopo, se vuoi le statistiche: `GOOGLE_ANALYTICS.enabled = true` e `measurementId`.
   Google Analytics viene caricato bloccato e lo attiva Iubenda **solo dopo il consenso** (finalità "misurazione").

I font sono ospitati sul sito stesso (nessuna chiamata a Google Fonts).

## Note

- Le immagini in `src/assets/` vengono convertite in AVIF/WebP durante la build.
- Animazioni disattivate automaticamente con "riduci movimento" del sistema.
- Nessuna immagine Envato: gli sfondi a seta/onda dorata sono stati tolti e lo strappo di carta è disegnato in codice (`src/components/TearEdge.astro`), quindi non ci sono licenze di terzi da verificare.
- Materiale di partenza (brief, copy, ricerca, bozza): `docs/` e `riferimento/`. Screenshot: `docs/screenshot/`.

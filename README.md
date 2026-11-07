# caiomachado.it

Sito completo di Caio Machado, fatto con **Astro** + **Tailwind CSS** (build statica, niente backend).

| Percorso | Pagina | Tema |
|---|---|---|
| `/` | Home: storia, strumenti, libro, Analisi del tuo caso | avorio + azzurro (`home`) |
| `/sito/` | Sito in 7 giorni – 197 € | scuro + oro (`sito`) |
| `/diagnosi-food-cost/` | Diagnosi Food Cost – 197 € | avorio + lime (`diagnosi`) |
| `/consulenza/` | Consulenza su misura + candidatura | blu notte (`consulenza`) |
| `/sessione/` | Sessione strategica di avvio (250 €) + modulo dati | blu notte (`consulenza`) |
| `/analisi/gestione/` · `/analisi/online/` · `/analisi/vendite/` | I tre moduli dell'Analisi | home |
| `/analisi/grazie/` | Conferma dopo l'invio (non indicizzata) | home |
| `/bio/` | Link hub di Instagram: home, Diagnosi, Sito, Caterinho (link con `utm_source=instagram&utm_medium=bio`) | proprio |
| `/blog/` · `/blog/<articolo>/` · `/blog/categoria/<cat>/` · `/blog/rss.xml` | Diario dal laboratorio | home |
| `/privacy/` · `/cookie/` | Testo da Iubenda (segnaposto) | – |

**Regola di navigazione:** nessun menu. Le pagine sono indipendenti: l'unico ponte tra le landing è la home (sezione strumenti → Diagnosi e Sito) e la /bio. Ogni landing porta solo al suo link di vendita o prenotazione. Il libro (Amazon, ebook diretto, lista d'attesa) è una sola sezione della home; `/risorse` reindirizza a `/#libro`.

## Avviare e pubblicare

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # crea dist/
npm run preview    # controlla la build
```

## Dove si cambia cosa

- **Link, prezzi, endpoint, stato degli strumenti**: `src/config.ts` (un valore vuoto mostra un `[SEGNAPOSTO]`).
- **Testi**: `src/data/*.ts` (home, diagnosi, consulenza, content = sito) e le pagine in `src/pages/`.
- **Domande dei moduli**: `src/data/forms.ts`.
- **Colori**: `src/styles/global.css` → blocco `@theme` (default = Diagnosi) e i blocchi `html[data-theme='home' | 'sito' | 'consulenza']`.
- **Componenti condivisi**: `src/components/ui/` (header, footer, timeline, FAQ, cornice browser, libro 3D, badge, barra mobile, strappo di carta) e `src/components/forms/StepForm.astro`. Componenti della pagina Sito: `src/components/sito/`.
- **Immagini**: `src/assets/` (ottimizzate in automatico). Loghi delle aziende: `src/assets/loghi/`. Copertina e logo Italian Method anche in `public/img/`.
- **Immagini per i social**: `public/og-home.jpg`, `og-image.jpg` (sito), `og-diagnosi.jpg`, `og-consulenza.jpg`.

## Blog

Un articolo = un file Markdown in `src/content/blog/`. Campi: `title`, `description`, `date`, `categoria` (`gestione-e-numeri`, `presenza-online`, `vendite`, `dietro-le-quinte`), `porta` (`gestione`, `online`, `vendite`: dove porta il bottone finale), `draft`. Con `draft: true` l'articolo non viene pubblicato. Il file di esempio è una bozza.

## Moduli (Google Apps Script)

1. Segui le istruzioni in `docs/apps-script/Code.gs` (foglio Google + Apps Script + "App web").
2. Incolla l'URL `/exec` in `src/config.ts`: `FORM_ENDPOINT_GESTIONE`, `FORM_ENDPOINT_ONLINE`, `FORM_ENDPOINT_VENDITE`, `FORM_ENDPOINT_CANDIDATURA`, `FORM_ENDPOINT_SESSIONE`, `WAITLIST_ENDPOINT` (può essere lo stesso per tutti). La guida gratuita usa `WAITLIST_ENDPOINT`.
3. Ogni invio finisce in una scheda del foglio (una per modulo) e arriva via email a `caio.d0004@gmail.com`.

Finché un endpoint è vuoto il modulo lo dice chiaramente e propone di inviare le risposte via email (già compilate), senza perdere i dati. Anti-spam: campo trappola invisibile e blocco degli invii più veloci di 3 secondi. Ogni invio porta con sé porta d'ingresso, pagina, provenienza e utm.

**Prima di collegare i moduli serve l'informativa privacy vera (Iubenda)**: i moduli raccolgono dati personali.

## Pubblicazione su Cloudflare Pages + dominio Register.it

1. Cloudflare → Workers & Pages → Crea → Pages → collega il repository GitHub `caiod0004/Site-1`, branch `sito-completo` (o `main` dopo il merge).
2. Impostazioni di build: comando `npm run build`, cartella `dist`, variabile `NODE_VERSION = 22`.
3. **Dominio caiomachado.it** (consigliato): aggiungi il dominio a Cloudflare (piano gratuito) → Cloudflare ti dà due nameserver → su Register.it, *Gestione dominio → DNS e nameserver → Modifica nameserver*, inserisci quelli di Cloudflare. Poi in Pages → *Domini personalizzati* aggiungi `caiomachado.it` e `www.caiomachado.it`.
   - In alternativa, senza cambiare nameserver: su Register.it crea un record `CNAME www → <progetto>.pages.dev` e un redirect della radice verso `www` (la radice nuda richiede i nameserver Cloudflare).
4. **Redirect tra domini** (si fanno lato dominio, non nel codice):
   - `caiomachado.eu` e `caiomachado.online` → **301** su `https://caiomachado.it` (Cloudflare: *Regole → Redirect Rules*, oppure il redirect di Register.it).
   - `tocstory.it` e `tocstory.com` → per ora **302** su `https://caiomachado.it/#strumenti`.
5. Redirect interni: `public/_redirects` (oggi: `/link → /bio/`).

## Fase successiva (non in questo sprint)

- **Report web per il cliente**: pagina personale con analisi, proposta, tempi, garanzie, scadenza dell'offerta e link di pagamento, generata dal CRM.

## Privacy

Niente tracciamento attivo. Iubenda e Google Analytics sono predisposti e spenti (`IUBENDA`, `GOOGLE_ANALYTICS` in `src/config.ts`): GA parte solo dopo il consenso. Font ospitati sul sito.

## Materiale di partenza

`docs/pacchetto-v2/` (prompt, brief, copy, ricerca), `docs/` (pacchetto della prima landing), `riferimento/`. Screenshot: `docs/screenshot/sito-completo/`.

## Foto

Solo foto in cui c'è solo Caio. Le foto con altre persone si aggiungono solo con il loro consenso scritto.

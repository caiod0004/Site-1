# Prompt per Claude Code / Codex – Sito completo caiomachado.it (v2, 6/11/2026)

> Incolla questo messaggio nella chat di sviluppo **dentro il repository della landing già costruita** (quella del Sito a 197 €). Metti nella cartella del progetto il contenuto di questo pacchetto: `copy/`, `00_BRIEF_ECOSISTEMA.md`, `03_RICERCA_KEYWORD.md`, `riferimento/`. Sotto incollo io i link alle referenze grafiche di Canva e la copertina del libro.

**Referenze Canva (stile):** https://canva.link/lujd7kdjp4hfa4q (onboarding "SITO WEB" di Caio) + [EVENTUALI ALTRI LINK]
**File in `assets/`:** `libro-copertina.png` (copertina del libro), `logo-italian-method.png` (logo della collana; la versione senza sfondo la esporta Caio da Canva).

## Palette di marca (ricavata dai file di Caio)

| Ruolo | Colore | Codice |
|---|---|---|
| Fondo | Avorio | #F1F1DB |
| Testo | Inchiostro | #2A2A26 |
| Accento 1 | Lime Italian Method | #D8E64E |
| Accento 2 | Azzurro copertina | #5FB1D1 |
| Accento 3 | Corallo | #E4606C |
| Neutro caldo | Tortora | #8A7F6E |

Direzione per pagina (stesso sistema di componenti, look diversi: il sito stesso deve dimostrare che esistono stili diversi):
- **Home**: istituzionale ed editoriale, sulla linea di un sito di studio professionale. Avorio + inchiostro, azzurro come colore principale, corallo solo nei dettagli, titoli serif eleganti, effetti sobri (rivelazioni morbide, linee sottili). Monogramma: la "I" con il puntino del logo Italian Method.
- **/diagnosi-food-cost**: avorio + lime, foto più serie di Caio cuoco e dei piatti.
- **/sito**: resta scuro e oro, com'è oggi.
- **/consulenza**: variante scura dell'azzurro.
Verifica il contrasto WCAG AA: il lime e l'azzurro su avorio non bastano per il testo piccolo, usali per fondi, bottoni con testo inchiostro e decorazioni.

---

## Obiettivo

Il dominio **caiomachado.it** è stato acquistato (Register.it). Lo trasformiamo in un unico sito: la home costruisce **autorità** (chi è Caio e perché può offrire sia la consulenza sulla ristorazione sia il sito web), e le pagine prodotto vivono come percorsi dello stesso dominio, così il SEO si somma.

## Struttura (un solo progetto Astro)

| Percorso | Contenuto | Copy |
|---|---|---|
| `/` | Home autorità + "Analisi del tuo caso" | `copy/COPY_0_home_caiomachado.md` |
| `/sito` | La landing che esiste già (spostala qui dalla root) | `copy/COPY_1_sito_197.md` |
| `/diagnosi-food-cost` | Diagnosi Food Cost 197 € | `copy/COPY_2_diagnosi_food_cost.md` |
| `/consulenza` | Consulenza su misura con preventivo | `copy/COPY_3_consulenza_su_misura.md` |
| `/analisi/gestione`, `/analisi/online`, `/analisi/vendite` | I tre moduli, con le domande del file home | `COPY_0`, sezione 6 |
| `/analisi/grazie` | Messaggio di conferma | `COPY_0`, sezione 6 |
| `/blog` + `/blog/[slug]` | "Diario dal laboratorio" con Astro Content Collections (Markdown), categorie, RSS, Open Graph per articolo | `COPY_0`, sezione 8 |
| `/risorse` | Libro e guida Food Cost: copia in portoghese + lista d'attesa italiana | `COPY_0`, sezione 4b |
| `/bio` | Link hub per la bio di Instagram (sostituisce il vecchio `/link`) | `COPY_0`, sezione 13 |
| `/privacy`, `/cookie` | Pagine legali (testo da Iubenda: per ora segnaposto) | – |

**Redirect** (file `_redirects` per Cloudflare Pages, oppure da fare sul pannello DNS): caiomachado.eu e caiomachado.online → 301 su caiomachado.it. tocstory.it e tocstory.com → per ora 302 su `caiomachado.it/#strumenti`. Mettili nel README come istruzioni, perché si configurano lato dominio.

## Moduli "Analisi del tuo caso"

- Tre pagine modulo con le domande esatte del file home: campi comuni + campi specifici, una domanda per schermata o a gruppi, barra di avanzamento, salvataggio delle risposte nel browser se l'utente esce.
- Invio dei dati: endpoint configurabile in `src/config.ts` (`FORM_ENDPOINT_GESTIONE`, `FORM_ENDPOINT_ONLINE`, `FORM_ENDPOINT_VENDITE`). Prevedi un webhook (Make) oppure Google Apps Script. Finché sono vuoti, il modulo mostra un messaggio chiaro e non perde i dati (mailto come piano B).
- Campo nascosto con la porta d'ingresso e la pagina di provenienza (utm_source compresi), per capire da dove arrivano i contatti.
- Dopo l'invio → `/analisi/grazie` con il messaggio della copy. **Nessuna promessa automatica di prezzo o risultato.**
- Consenso privacy obbligatorio. Protezione anti-spam con honeypot (niente captcha invasivi).

## Home – note di design

- Stesso sistema di design della landing esistente (griglia, tipografia, componenti, animazioni, qualità), ma con una **palette istituzionale propria**, ricavata dalle referenze Canva. Ogni pagina prodotto mantiene la sua palette (Sito = scuro e oro; Food Cost = avorio e lime; Consulenza e Home = da proporre). Tutto in token.
- La storia va resa come **timeline** (5 tappe: 2009 Londra/San Paolo → 2013 Milano → Roma → locali avviati da zero e Covid → Caterinho oggi).
- Le tre "porte" dell'analisi sono il cuore della pagina: card grandi, una frase-problema in corsivo, un solo bottone ciascuna.
- Sezione libro: copertina in mockup 3D, testo, bottone verso Amazon (link esterno, `rel="noopener"`). Nessuna stella o recensione.
- Card strumenti con **badge di stato** (IN USO / IN SVILUPPO / IN TEST) presi da `src/config.ts`.
- Sezione blog: mostra gli ultimi 3 articoli pubblicati; se non ce ne sono, "Primi articoli in arrivo" + link a Instagram.
- Foto di Caio: usa quelle già presenti nel repository (caio_pensieroso, caio_sushi). Nessuna foto di altre persone senza il loro consenso.

## Pagina /bio

Mobile first, caricamento istantaneo (niente JS non necessario): foto, nome, una riga, 3 bottoni grandi (Consulenza per ristoranti → `/diagnosi-food-cost`, La tua presenza online → `/sito`, Consulenza 1:1 / su misura → `/#analisi`), poi link piccoli (Blog, Il libro, Caterinho, WhatsApp). Aggiungi `?utm_source=instagram&utm_medium=bio` a tutti i link interni.

## Configurazione (`src/config.ts`)

```ts
export const SITE_URL = "https://caiomachado.it";
export const FOODCOST_PRENOTAZIONE_URL = "https://calendar.app.google/A2JaK7UYtX5Naox18"; // chiamata gratuita del martedì
export const SITO_PRENOTAZIONE_URL = ""; // pagina di prenotazione separata per il sito: la crea Caio
export const SESSIONE_1A1_URL = "";
export const LIBRO_AMAZON_URL = "https://www.amazon.com.br/dp/B0DYYJLXW6";
export const INSTAGRAM_URL = "https://instagram.com/chef.caiomachado";
export const INSTAGRAM_CATERINHO_URL = "https://instagram.com/caterinho.it";
export const WAITLIST_ENDPOINT = ""; // lista d'attesa edizioni italiane (webhook)
export const LINKEDIN_URL = ""; // da confermare: probabile linkedin.com/in/caio-machado-275b82b3
export const CATERINHO_URL = "https://caterinho.it";
export const WHATSAPP_URL = ""; // da confermare
export const STATO_STRUMENTI = { gestionale: "IN USO A CATERINHO", crm: "IN SVILUPPO", tocstory: "IN TEST" };
```
Il link di pagamento Stripe della Diagnosi **non va mai in pagina**: si manda solo dopo la chiamata.

## Regole sui contenuti (non negoziabili)

- Usa **solo** il testo delle copy. Dove c'è un [SEGNAPOSTO], lascialo visibile e mettilo nell'elenco finale. Non inventare titoli, numeri, recensioni, loghi di clienti o testimonianze.
- Nessuna cifra sul valore di vendita di Temakinho o di altre aziende.
- Temakinho, Cacau Temakeria e Poke Samba compaiono solo come testo nella storia, mai come loghi o "clienti".
- Nessun indirizzo di casa. Solo "da Caterinho, a Bergamo, su appuntamento".
- Scarsità solo vera (un profilo a settimana per la diagnosi; pochi casi alla volta). Niente timer o contatori.

## SEO e qualità

- Title, meta description, H1, canonical e immagine OG per ogni pagina. JSON-LD: `Person` + `ProfessionalService` in home, `Book` nella sezione libro, `Service` per Sito e Diagnosi (197 EUR), `FAQPage` dove ci sono FAQ, `BlogPosting` per gli articoli. Niente `AggregateRating`.
- Le pagine non competono sulle stesse keyword: Home = nome + "consulente ristorazione"; Sito = "sito web per attività / quanto costa un sito"; Food Cost = "food cost / consulenza ristorazione"; Consulenza = "consulenza aziendale / controllo di gestione".
- `sitemap.xml`, `robots.txt`, link interni tra tutte le pagine.
- Lighthouse mobile ≥ 95 su ogni pagina; perfetta da 360 a 1440 px; accessibile da tastiera; `prefers-reduced-motion` rispettato.
- Deploy pensato per **Cloudflare Pages** (build statica). Nel README: come collegare il dominio caiomachado.it da Register.it (record DNS) e i redirect.

## Come lavorare

1. Leggi tutte le copy e le referenze. Poi mandami in 10 righe: le palette che proponi per Home e Consulenza (con codici colore), la struttura dei componenti condivisi e come gestisci i moduli. **Aspetta il mio ok.**
2. Costruisci in quest'ordine: Home → `/risorse` → `/bio` → sposta il Sito su `/sito` → `/diagnosi-food-cost` → moduli `/analisi/*` → `/blog` (con 1 articolo di esempio marcato come bozza, non pubblicato) → `/consulenza`.
3. Dopo ogni pagina controlla tu stesso: screenshot a 390 e 1440 px, Lighthouse, navigazione da tastiera. Correggi prima di passare alla pagina successiva.
4. Alla fine: screenshot di ogni pagina, punteggi Lighthouse, elenco completo dei segnaposto rimasti, istruzioni per DNS e redirect.

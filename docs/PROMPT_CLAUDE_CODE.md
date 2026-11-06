# Prompt per Claude Code – Landing "Sito in 7 giorni a 197 €" (Caio Machado)

> Incolla tutto questo messaggio nella nuova chat di Claude Code e allega (o metti nella cartella del progetto) il contenuto di questo pacchetto: `01_BRIEF_PROGETTO.md`, `02_COPY_v7.md`, `03_RICERCA_KEYWORD.md`, `04_TOCSTORY.md`, la cartella `assets/` e la cartella `riferimento/`.

---

## Chi sei e cosa devi fare

Sei un design engineer senior (art direction + frontend). Devi costruire **una landing page di livello premium**, pronta per andare online, che vende il primo prodotto di Caio Machado: **un sito di una pagina per piccole attività, online in 7 giorni lavorativi, a 197 €**.

Tutto il contenuto è già deciso: la copy è in `02_COPY_v7.md`, il contesto e le decisioni in `01_BRIEF_PROGETTO.md`, i dati di ricerca in `03_RICERCA_KEYWORD.md`. Il tuo lavoro è la **forma**: design, interazione, qualità tecnica. Se un testo non regge nel layout puoi accorciarlo, ma non puoi cambiarne il significato né aggiungere promesse.

C'è già una bozza fatta in un altro strumento (`riferimento/bozza_v7_canvas.html`): usala solo per capire struttura e tono. **Il livello che voglio è molto più alto**: deve sembrare un sito di uno studio digitale serio, non un template e non una pagina "fatta con l'AI".

Rispondi e scrivi sempre in **italiano**.

## Regole che non si toccano (valori e onestà)

1. **Niente inventato.** Nessuna testimonianza, recensione, logo cliente, numero, statistica, contatore ("già 120 siti consegnati"), badge o premio che non sia nei file. Dove manca un dato metti un segnaposto visibile tra parentesi quadre, per esempio `[FOTO DI CAIO]`.
2. **Scarsità solo vera:** "un sito a settimana" è reale (Caio ha poco tempo). Niente timer, conti alla rovescia o "ultimi 2 posti".
3. **Il mockup di telefono nella hero è un esempio di struttura**, e deve essere scritto in pagina ("Esempio di struttura"): non deve sembrare il sito di un'azienda reale.
4. **Portfolio:** solo i due lavori veri (Caterinho, Studio Legale De Moura Machado). Lo Studio è "in pubblicazione": niente link finché non c'è l'indirizzo.
5. **Indirizzo:** in pagina solo "di persona da Caterinho, a Bergamo, su appuntamento". Mai l'indirizzo di casa.
6. Il template "e-consulting" che Caio aveva caricato **non va usato** (contiene una versione vulnerabile di PHPMailer). Niente PHP, niente backend.

## Stack e consegna

- **Astro** (output statico) + **Tailwind CSS**. Niente framework pesanti lato client. Se serve animazione avanzata: **GSAP** (con ScrollTrigger) e/o **Lenis** per lo scroll morbido, caricati solo dove servono. Sempre rispettando `prefers-reduced-motion`.
- Una sola pagina `/` + pagine `/privacy` e `/cookie` con testo segnaposto `[INFORMATIVA DA INSERIRE – Iubenda]`.
- Build statica in `dist/`, deployabile su qualsiasi hosting (Caio potrebbe usare il suo hosting o Netlify/Vercel). Aggiungi un `README.md` con: come avviare in locale, come fare la build, dove cambiare link e segnaposto.
- Tutti i link "Richiedi il tuo sito" puntano a **una sola costante** in un file di configurazione (`src/config.ts`): `QUESTIONARIO_URL` (per ora `#richiedi`). Nello stesso file: `WHATSAPP_URL`, `EMAIL`, `STUDIO_LEGALE_URL` (vuoto), `PREZZO_CANONE` (vuoto → mostra `[PREZZO DEL CANONE]`).

## Direzione artistica ("di livello superiore")

Parti dalla direzione della bozza e alzala: **scuro profondo + oro caldo, editoriale e tecnologico insieme**.

- **Colori:** fondo quasi nero caldo (circa `#0B0A10`), avorio per il testo (`#F3EEE4`), oro come unico accento (`#D6B26A`, con varianti chiare e scure), sezioni di respiro avorio chiaro (`#F4EFE6`). Contrasto testo almeno 4.5:1 ovunque.
- **Tipografia:** titoli grandi e stretti in un grotesk moderno (es. Space Grotesk o simile di qualità superiore su Google Fonts), parole chiave in corsivo serif (es. Instrument Serif), corpo in Inter. Scala tipografica fluida (`clamp`), titoli hero intorno a 80–110 px su desktop.
- **Immagini fornite** (cartella `assets/`, già ottimizzate in jpg/png: convertile in AVIF/WebP con `astro:assets`):
  - `hero_silk.jpg`, `silk2.jpg`, `silk3.jpg`: drappeggi di seta su fondo scuro → hero e sezioni scure, con leggero movimento (parallax o lento zoom).
  - `gold_wave.jpg`: onda di particelle dorate su fondo chiaro → sezione prezzo.
  - `tear.png`, `ripped_01/05/08.png`: strappi di carta → transizioni tra sezione scura e chiara (usali con misura, uno o due in tutta la pagina).
  - `portfolio_caterinho.jpg`, `portfolio_studio_legale.jpg`: schermate reali dei due siti → dentro cornici di browser.
- **Momenti "wow" (scegline 3-4, fatti bene, non tutti):** hero con il telefono che si inclina leggermente seguendo il mouse e le sezioni del sito d'esempio che si "costruiscono" una dopo l'altra; testo oro con riflesso che scorre; sezione "Come funziona" con una linea del tempo che si riempie allo scroll; card "cosa ricevi" in griglia bento con hover morbido; portfolio con le schermate che scorrono dentro la cornice; numeri "197 €" e "7 giorni" con tipografia monumentale.
- **Da evitare:** sfumature viola/blu da "sito AI", emoji, bordo colorato a sinistra delle card, icone da clip-art, animazioni che saltano o rallentano lo scroll, effetti che coprono il testo.
- Icone: un set lineare coerente (Lucide o Phosphor), stroke sottile, colore oro o avorio.

## Struttura (segui `02_COPY_v7.md`, sezione per sezione)

Header fisso con effetto vetro → Hero → striscia scorrevole dei vantaggi → Ti riconosci? (chiaro) → Il vero problema (scuro) → Cosa ricevi a 197 € (bento) + "A parte" + "Cosa mi serve da te" → Come funziona (4 passi) → Lavori già fatti → E dopo il sito? (Sito / TocStory / CRM) → Chi sono → Per chi è / per chi non è → Prezzo e garanzie → Dove trovarmi → FAQ (accordion accessibile) → Chiusura con CTA → Footer legale → Barra CTA fissa in basso solo su telefono.

## Qualità tecnica (criteri di accettazione)

- **Mobile first:** perfetta a 360, 390, 768, 1024, 1440 px. Touch target ≥ 44 px. Nessuno scroll orizzontale.
- **Prestazioni:** Lighthouse mobile ≥ 95 in Performance, Accessibility, Best Practices, SEO. LCP < 2,5 s, CLS < 0,05. Immagini responsive con `srcset`, font con `display=swap` e preload del solo font del titolo.
- **Accessibilità:** HTML semantico, un solo `h1`, gerarchia dei titoli corretta, `alt` sensati (decorative con `alt=""`), focus visibile, FAQ con `<details>/<summary>` o pattern ARIA corretto, tutto usabile da tastiera, animazioni disattivate con `prefers-reduced-motion`.
- **SEO** (dati in `03_RICERCA_KEYWORD.md`):
  - `<title>`: `Sito web per la tua attività in 7 giorni a 197 € | Caio Machado`
  - meta description: `Un sito di una pagina, chiaro e veloce da telefono, online in 7 giorni lavorativi. 197 €, prezzo finale. Seguito di persona, anche a Bergamo.`
  - `lang="it"`, Open Graph e Twitter card (crea un'immagine OG 1200×630 coerente con il design), `canonical` con segnaposto dominio, `sitemap.xml`, `robots.txt`.
  - JSON-LD: `ProfessionalService` (nome Caio Machado / Proverbi 123, area servita Italia, luogo Bergamo, prezzo 197 EUR) + `FAQPage` con le FAQ della copy. Niente `AggregateRating` (non ci sono recensioni).
  - "Bergamo" NON nel titolo grande della hero (decisione di Caio: non deve sembrare limitante); sì nel title, nella sezione "Dove trovarmi", in una FAQ e nel JSON-LD.
- **Privacy:** niente tracciamento attivo finché non c'è il banner cookie. Prepara il punto dove inserire Iubenda e Google Analytics, spenti di default.
- Footer legale esatto: `Servizio erogato da Proverbi 123 di Freitas de Moura Machado Caio · P.IVA 04668830161`.

## Come lavorare

1. Leggi tutti i file del pacchetto. Poi scrivimi in 10-15 righe la **direzione di design** che scegli (palette, font, i 3-4 momenti wow, come usi gli asset) e **aspetta il mio ok**.
2. Costruisci la pagina sezione per sezione.
3. Controlla da solo il risultato: avvia il sito in locale, fai screenshot con Playwright a 390 px e 1440 px di ogni sezione, guardali, correggi quello che non è all'altezza. Lancia Lighthouse e riporta i punteggi.
4. Alla fine dammi: gli screenshot finali (telefono e desktop), i punteggi Lighthouse, l'elenco dei segnaposto rimasti e cosa serve da me per toglierli.

Se nel tuo ambiente ci sono skill di design frontend (per esempio "frontend-design" o "website-design"), usale.

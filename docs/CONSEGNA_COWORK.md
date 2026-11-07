# Consegna a Claude Cowork – sito caiomachado.it

Ciao. Ti passo il lavoro fatto in Claude Code sul sito di Caio Machado. Ti chiedo un'analisi critica e onesta prima di qualsiasi modifica.

## 1. Dove trovi tutto

**Repository GitHub:** https://github.com/caiod0004/Site-1
- Ramo di lavoro: `sito-completo` → https://github.com/caiod0004/Site-1/tree/sito-completo
- Ultime modifiche: https://github.com/caiod0004/Site-1/commits/sito-completo
- Il ramo `main` NON contiene ancora questo lavoro. Il sito non è online e non è stata aperta nessuna pull request.

**Anteprima navigabile** (privata: Caio deve condividerla con te):
- Home: https://claude.ai/artifact/Gz8revayBxMfkrJmAGxZWe
- Bio Instagram: https://claude.ai/artifact/Gz8revayBxMfkrJmAGxZWe#bio
- Sito in 7 giorni: https://claude.ai/artifact/Gz8revayBxMfkrJmAGxZWe#sito
- Diagnosi Food Cost: https://claude.ai/artifact/Gz8revayBxMfkrJmAGxZWe#diagnosi
- Consulenza: https://claude.ai/artifact/Gz8revayBxMfkrJmAGxZWe#consulenza
- Sessione strategica: https://claude.ai/artifact/Gz8revayBxMfkrJmAGxZWe#sessione
- Blog: https://claude.ai/artifact/Gz8revayBxMfkrJmAGxZWe#blog

Se il link con `#` apre la home invece della pagina giusta, apri la pagina dal codice o segnalalo.

**File da leggere per primi nel repository:**
- `README.md`: regola di navigazione, tabella delle pagine, pubblicazione su Cloudflare Pages, redirect.
- `src/config.ts`: tutti i link, i prezzi e i segnaposto in un solo posto.
- `docs/02_COPY_v7.md` e `docs/pacchetto-v2/`: le copy approvate. Sono l'unica fonte dei testi.
- `docs/DOMANDE_PER_CHAT_MADRE.md`: domande già fatte e risposte.
- `docs/apps-script/Code.gs`: lo script che riceverà i moduli (Google Sheet + email).
- `docs/screenshot/sito-completo/`: screenshot delle pagine.

## 2. Cosa è stato costruito

- **Tecnologia:** Astro 7 (sito statico) + Tailwind 4. Niente PHP e niente backend. Pubblicazione prevista su Cloudflare Pages.
- **Pagine:** sono indipendenti, senza menu, e non si collegano tra loro.

| Pagina | Percorso | A cosa serve |
|---|---|---|
| Home istituzionale | `/` | Storia, Caterinho, strumenti, libro, 3 porte di analisi, diario, FAQ |
| Bio Instagram | `/bio/` (anche `/link`) | 4 link: home, Food Cost, Sito, Caterinho |
| Sito in 7 giorni | `/sito/` | Offerta a 197 € per piccole attività |
| Diagnosi Food Cost | `/diagnosi-food-cost/` | Offerta a 197 € per ristoranti, prenotazione Google Calendar |
| Consulenza | `/consulenza/` | Solo con il link diretto |
| Sessione strategica | `/sessione/` | 250 €, il lunedì pomeriggio. Solo con il link diretto |
| Analisi | `/analisi/gestione|online|vendite/` | Moduli a passi |
| Blog | `/blog/` | Articoli, categorie, RSS |

- **Collegamenti:** dalla home partono solo i link a `/diagnosi-food-cost/` e `/sito/`, nella sezione "Gli strumenti che costruisco".
- **Punteggi Lighthouse da telefono:** 98–100 su tutte le pagine controllate.

## 3. Regole che non si toccano

1. Usare solo i testi delle copy. I `[SEGNAPOSTO]` restano visibili finché manca il dato vero.
2. Non inventare numeri, recensioni, clienti o testimonianze. Niente stelle o valutazioni finte.
3. Niente indirizzo di casa. Si scrive solo "da Caterinho, a Bergamo, su appuntamento". Via Sant'Alessandro va bene come punto d'incontro.
4. Il link di pagamento Stripe della Diagnosi non va mai in pagina.
5. La scarsità deve essere vera: niente timer e niente contatori.
6. Niente foto con altre persone senza il loro consenso scritto.
7. Proverbi 123 è in regime forfettario. Mai scrivere "+ IVA". Si scrive "Regime forfettario: IVA non applicata.".
8. Niente tracciamento (GA, pixel) prima del banner cookie.
9. Non usare il template "e-consulting": contiene PHPMailer vulnerabile.

## 4. Cosa ti chiedo

1. **Analizza tutto**: apri l'anteprima e leggi il codice. Dimmi cosa funziona, cosa è debole e cosa toglieresti. Controlla soprattutto:
   - chiarezza dell'offerta;
   - coerenza tra le pagine e il percorso del cliente;
   - testi (sono veri e nella voce di Caio?);
   - versione da telefono;
   - accessibilità;
   - SEO.
2. **Verifica le regole del punto 3** pagina per pagina. Segnala qualsiasi violazione.
3. **Elenca i dati mancanti**: cerca `SEGNAPOSTO`, `DA CONFERMARE` e i valori vuoti in `src/config.ts`. Ordinali per priorità prima della pubblicazione. Esempi:
   - endpoint dei moduli;
   - link e prezzo dell'ebook;
   - pagina di prenotazione del lunedì;
   - WhatsApp;
   - canone di manutenzione e gestione.
4. **Testi nuovi da approvare**, scritti in Claude Code e non presi dalle copy:
   - le descrizioni dei 4 link della bio;
   - il titolo "Le cucine che mi hanno formato.";
   - le descrizioni dei marchi;
   - il testo del libro;
   - la nota "Ebook e copia Amazon per ora solo in portoghese.".
5. **Proponi i passi** per andare online: Cloudflare Pages, DNS di caiomachado.it, Apps Script per i moduli, banner cookie.

## 5. Se vuoi fare modifiche

- Lavora sul ramo `sito-completo`, oppure apri un ramo nuovo partendo da lì. Non lavorare su `main`.
- Testi, link e prezzi si cambiano in `src/data/*.ts` e `src/config.ts`. Le pagine sono in `src/pages/`.
- Per controllare: `npm install`, poi `npm run build`. Prima di confermare, il build deve finire senza errori.
- Scrivi messaggi di commit chiari, in italiano.
- Prima di cambiare struttura o testi approvati, chiedi a Caio.

Rispondi con: 1) analisi sintetica, 2) problemi in ordine di gravità, 3) elenco dati mancanti, 4) prossimi passi consigliati.

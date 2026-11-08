# Stato del progetto e decisioni aperte – 8 novembre 2026

Documento di consegna per storyteller, copywriter e coordinatore dei contenuti.
Regola di base: **niente numeri, testimonianze, prezzi o titoli inventati.** Se un dato manca, si lascia un segnaposto `[DA CONFERMARE]` e si chiede a Caio.

---

## 1. Dove si trova cosa

| Cosa | Dove |
|---|---|
| Codice del sito caiomachado.it | GitHub `caiod0004/Site-1`, ramo **`sito-completo`** (ogni push va online da solo su Cloudflare Pages) |
| Documenti di lavoro nel repository | cartella `docs/` e `docs/pacchetto-v2/` (brief, copy, ricerca) |
| Costanti del sito (prezzi, link, email) | `src/config.ts` |
| **Ricerca di mercato canonica (dati completi)** | Foglio Google **"FSP – Potenziale di mercato BR vs IT (03-11-2026)"**: https://docs.google.com/spreadsheets/d/1x-_gQw_J6W-OAkk9wQkvjrwDemxOQkVq8EfzfpyqgWI/edit — tab METODO, DOMANDA_BR, DOMANDA_IT, PREZZI, CONCORRENTI, IPOTESI, POTENZIALE, DECISIONI, NICCHIE_IT_360 |
| Note della ricerca (SEMrush, AnswerThePublic, Ubersuggest, AdSpy via SEOPACK) | `RICERCA_SEMRUSH_2026-11-03` (copia nella cartella Drive) |
| Sintesi keyword usata per le pagine del sito | `docs/pacchetto-v2/03_RICERCA_KEYWORD.md` (identico a `docs/03_RICERCA_KEYWORD.md`) |
| Backup dei documenti canonici | Cartella Drive "Caio Machado – File canonici (backup 08-11-2026)": https://drive.google.com/drive/folders/1TUy5MGfvjL2IHaUtVx808ujk7SYYSxOd |

Il sito è online: https://caiomachado.it — pagine: home, /bio, /sito, /diagnosi-food-cost, /consulenza, /sessione, /analisi/*, /blog, /privacy, /cookie.

---

## 2. Le due architetture (non confonderle)

- **Chef Caio Machado** vende conoscenza. Contenuti per l'avatar **João** (BR, in portoghese): vuole guadagnare con il cibo ma è bloccato da paura, poca conoscenza, poco capitale. Funnel: libro / esca Food Cost-CMV → prodotto → consulenza.
- **Caterinho** vende esperienze. Avatar **Molly** (IT, 35–55, professionista, poco tempo). Obiettivo n.1: più eventi; poi omakase, menu degustazione, eventi nel laboratorio di Bergamo (spazio su invito, non ristorante aperto al pubblico).
- **caiomachado.it** (Italia) posiziona Caio come **"hospitality tech": ristorazione + tecnologia, implementa sistemi per ottimizzare i processi** (non "social media manager"). Caterinho è il laboratorio dove i sistemi sono nati, **non** una vetrina di risultati economici.

---

## 3. Cosa è DECISO (fatti confermati da Caio)

### Storia (in ordine, come nella pagina /bio)
1. **Temakinho 2013–2018** – da capo bar a executive chef (Milano, Roma, apertura Londra Soho). Episodio della Rocinha (lezione appresa in quel periodo).
2. **Cacau 2018**.
3. **Poke Samba fine 2018 – 2021** – avviamento da zero.
4. **Dicembre 2019, il matrimonio con Raffaella** – il momento in cui nasce l'idea di Caterinho.
5. **Novembre 2020, in pieno Covid** – la sushi cake: primo servizio Caterinho, dalla cucina di casa.
6. **2020–2024** – pochi follower, clienti veri; il fratello entra come socio.
7. **Il Marino di Puntaldia (Sardegna) 2021–2022** – ristorante sul mare, servizio di altissimo livello: "il livello a cui puntiamo". ⚠️ Non scrivere "stellato" (fa pensare a una stella Michelin).
8. **2024, Bergamo – il bivio**: apertura del locale/laboratorio Caterinho (prima si lavorava dalla cucina di casa). ⚠️ Caterinho non è un "ristorante": è smart catering con laboratorio su invito.
9. **Il libro** "Sal, Pimenta & Planilha: 07 erros que você deve evitar antes de abrir um restaurante" (Amazon BR): **iniziato durante il Covid, finito dopo l'apertura del locale nel 2024, pubblicato nel 2025**. Angolo narrativo: scritto da chi l'ha appena fatto, partendo da zero (non teoria).
10. **Oggi, Amazon (settore logistico)** – approvvigionamenti, alti volumi, tecnologia. Paragone usato: dal garage/cucina di casa ai processi su larga scala. ⚠️ Niente logo Amazon, niente "numero uno al mondo", nulla che sembri parlare a nome di Amazon.

### Offerte sul sito (Italia)
- **Sito in 7 giorni – 197 €** (tutte le piccole attività). Garanzie: online in tempo o rimborso; soddisfatto o rimborsato 7 giorni.
- **Diagnosi Food Cost – 197 €** (ristoratori): chiamata gratuita 20 min (martedì 16:30) → report in 5 giorni lavorativi, garanzia 7 giorni.
- **Consulenza su misura**: candidatura → **Sessione strategica 250 €** (6 ore: 2 insieme + 4 di Caio) → proposta scritta in 5 giorni lavorativi → lavoro a **150 €/ora**. 1 percorso alla volta.
- Regime forfettario (Proverbi 123): **IVA non applicata**.
- **Libro, edizione italiana in prevendita: 45 €**, solo PDF, oltre 200 pagine, **bonus: manuale del Food Cost in italiano**. Consegna del PDF via email entro 24 ore dal pagamento (Stripe, invio manuale di Caio).
- Contatto pubblico: **info@caiomachado.it** (e chef@caiomachado.it). WhatsApp NON pubblicato.

### Cose che il sito NON dice (scelte di Caio)
- Non si nominano gli strumenti tecnici (n8n, ecc.): si parla di "CRM" e "sistema per i social aziendali".
- TocStory: "in sviluppo", solo come prova per chi è già cliente; nessun prezzo pubblico.

---

## 4. Cosa dice la ricerca (sintesi per chi scrive)

- **Italia, "food cost"** è il termine giusto (~3.000–3.500 ricerche/mese di intenzione reale). Blog di venditori in prima pagina, **nessun chef/consulente con volto** → spazio libero per "persona + metodo + foglio".
- **Brasile: si cerca "CMV"**, non "food cost" (cmv restaurante 880, planilha de CMV…). Titoli/SEO per João devono usare **"CMV"** (es. "Food Cost / CMV").
- **Nessuno cerca "AI per ristoranti"** (né IT né BR): l'AI è il *come*, non il *cosa*. Si vende controllo dei costi, più clienti, meno ore.
- **"Consulenza ristorazione" in Italia**: ~1.000/mese di domanda diretta, concorrenza SEO bassissima (siti piccoli in top 3).
- **"Piccolo ristorante" in Italia non esiste come domanda imprenditoriale** (sono nomi di locali). Il cluster "aprire con poco capitale" è forte in Brasile, non in Italia.
- Domanda gestione/consulenza: **Italia ≈ 2× Brasile** con molti meno locali (modello nel foglio; conversioni = ipotesi).
- Format che funziona nei due paesi (AdSpy): **masterclass/evento gratuito o a basso prezzo → diagnosi → consulenza**. Messaggio vincente: "lavoro tutto il giorno e non mi resta niente".
- Modello più vicino da "copiare come un artista": **ristoratoretop.com** – portfolio clienti (Caterinho = cliente zero), indagini originali tra ristoratori, guide definitive (food cost, controllo di gestione), rubrica numerata.
- Reel e profili Instagram entrano nella SERP di Google (BR): un @ e una didascalia con la keyword contano.

---

## 5. DECISIONI APERTE (da chiedere a Caio, non da inventare)

### Strategia
1. **Priorità di mercato per Chef Caio**: le istruzioni del progetto dicono Brasile/portoghese (João), ma il sito e la ricerca recente spingono l'Italia (consulenza). Quale canale e lingua hanno la priorità nei prossimi 90 giorni? Quanti contenuti per lingua?
2. **Titolo dei prodotti BR**: allineare "Método Italiano: os 8 erros…" con il libro "07 erros" (Amazon). Quale numero resta? Il prodotto principale cambia nome?
3. **Esca BR**: rinominare "Food Cost" in "CMV" nel titolo (come dice la ricerca)?
4. **Format masterclass/evento**: lo facciamo? Gratis o a basso prezzo? Quando?

### Prevendita libro italiano (obbligatorio prima di attivare il pagamento)
5. **Data di consegna** dell'edizione italiana.
6. **Politica di rimborso** della prevendita.
7. Il **manuale del Food Cost in italiano** (bonus) esiste già o va scritto/tradotto?
8. Link **Stripe** della prevendita (45 €) e del **PDF in portoghese** (prezzo ancora da decidere; verificare che il libro non sia in KDP Select).

### Sito e operatività
9. Link mancanti: questionario del Sito, prenotazione della prima videochiamata, prenotazione della Sessione strategica, endpoint dei moduli e della lista d'attesa, guida gratuita Food Cost.
10. **Canone di hosting/manutenzione** del Sito (prezzo).
11. Pagina privacy: indirizzo, PEC, servizio email.
12. La guida gratuita promette "una mail utile alla settimana": c'è tempo/strumento per mantenerla? Altrimenti si riscrive la promessa.
13. Caterinho: consenso scritto per le foto con altre persone (per la vetrina c'è il consenso di moglie e fratello; per le colleghe di Temakinho i volti sono sfocati).

---

## 6. Regole di scrittura (valori)
- Onestà assoluta: nessuna scarsità finta, nessun "95% esaurito", nessun prima/dopo non verificabile.
- "Skin in the game": Caio racconta la sua vita reale (lavoro notturno, famiglia, fede, errori). Ma niente indirizzo di casa e niente dettagli privati di altre persone senza consenso.
- Struttura delle storie: situazione iniziale → conflitto → decisione → trasformazione → lezione.
- Valori cristiani: se un contenuto spinge a esagerare, manipolare o promettere ciò che non si può mantenere, si ferma e si chiede.

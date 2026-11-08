// ─────────────────────────────────────────────────────────────
//  CONFIGURAZIONE DEL SITO caiomachado.it — cambia qui link e segnaposto.
//  Un valore vuoto ('') mostra in pagina un segnaposto [TRA PARENTESI]
//  oppure nasconde il link, come indicato accanto.
// ─────────────────────────────────────────────────────────────

/** Dominio definitivo (senza / finale). Canonical, sitemap, Open Graph. */
export const SITE_URL = 'https://caiomachado.it';

// ── Prenotazioni e pagamenti (il link Stripe NON va mai in pagina) ──
/** Chiamata gratuita del martedì (Diagnosi Food Cost). */
export const FOODCOST_PRENOTAZIONE_URL = 'https://calendar.app.google/A2JaK7UYtX5Naox18';
/** Prima videochiamata del Sito: pagina di prenotazione separata, la crea Caio. */
export const SITO_PRENOTAZIONE_URL = '';
/** Questionario del Sito (Moduli Google). Tutti i bottoni "Richiedi il tuo sito" puntano qui. Vuoto = '#richiedi' + segnaposto. */
export const SITO_QUESTIONARIO_URL = '';
export const QUESTIONARIO_URL = SITO_QUESTIONARIO_URL || '#richiedi';
/** Prenotazione della Sessione strategica del lunedì (la pagina la crea Caio). Vuoto = segnaposto. Il pagamento Stripe si collega dopo. */
export const SESSIONE_1A1_URL = '';

// ── Prezzi della consulenza (decisi da Caio il 6/11/2026) ──
export const PREZZO_ORA = '150 €';                   // lavoro a ore, dopo la sessione
export const PREZZO_SESSIONE_1A1 = PREZZO_ORA;       // compatibilità
export const PREZZO_SESSIONE_STRATEGICA = '250 €';   // sessione strategica di avvio
export const DURATA_SESSIONE_STRATEGICA = '6 ore di lavoro: 2 insieme + 4 mie';
/** Proverbi 123 è in regime forfettario: niente IVA. Non scrivere mai "+ IVA". */
export const NOTA_IVA = 'Regime forfettario: IVA non applicata.';
export const NOTA_IVA_COMPLETA = 'Operazione effettuata ai sensi dell’art. 1, commi 54–89, Legge 190/2014 (regime forfettario): IVA non applicata.';
export const NOTA_IVA_CONSULENZA = NOTA_IVA;
/** Tempi e capacità della consulenza (da confermare con Caio) */
export const GIORNI_PROPOSTA = '5 giorni lavorativi';
export const PERCORSI_CONTEMPORANEA = '1';

// ── Link esterni ──
export const LIBRO_AMAZON_URL = 'https://www.amazon.com.br/dp/B0DYYJLXW6';
/** Manuale digitale (PDF, leggibile anche su Kindle) in portoghese venduto direttamente da Caio (es. link Stripe). Vuoto = segnaposto. Prima di attivarlo: verificare che il libro NON sia in KDP Select (esclusiva Amazon sull'ebook). */
export const EBOOK_DIRETTO_URL = '';
/** Prezzo del manuale digitale venduto direttamente, es. '9,90 €'. Vuoto = segnaposto. */
export const PREZZO_EBOOK = '';
export const INSTAGRAM_URL = 'https://instagram.com/chef.caiomachado';
export const INSTAGRAM_CATERINHO_URL = 'https://instagram.com/caterinho.it';
export const CATERINHO_URL = 'https://caterinho.it';
/** Da confermare: probabile linkedin.com/in/caio-machado-275b82b3. Vuoto = segnaposto. */
export const LINKEDIN_URL = 'https://www.linkedin.com/in/caio-machado-275b82b3/';
/** Link WhatsApp, es. 'https://wa.me/39XXXXXXXXXX'. Vuoto = segnaposto. */
export const WHATSAPP_URL = '';
/** Sito dello Studio Legale: vuoto finché non è pubblicato (niente link). */
export const STUDIO_LEGALE_URL = '';
/** Prevendita dell'edizione italiana in PDF (decisa da Caio l'8/11/2026). Link di pagamento: vuoto = il bottone porta alla lista d'attesa. */
export const PREVENDITA_IT_URL = '';
export const PREZZO_PREVENDITA_IT = '45 €';
/** Guida Food Cost in portoghese (risorse). Vuoto = segnaposto. */
export const GUIDA_FOODCOST_URL = '';

// ── Moduli: un'unica Web App di Google Apps Script può servire tutti i moduli ──
// (codice pronto in docs/apps-script/Code.gs). Finché un endpoint è vuoto,
// il modulo lo dice chiaramente e propone l'invio via email come piano B.
export const FORM_ENDPOINT_GESTIONE = '';
export const FORM_ENDPOINT_ONLINE = '';
export const FORM_ENDPOINT_VENDITE = '';
export const FORM_ENDPOINT_CANDIDATURA = '';
export const WAITLIST_ENDPOINT = '';   // lista d'attesa edizioni italiane
export const FORM_ENDPOINT_SESSIONE = ''; // modulo della Sessione strategica
export const GUIDA_ENDPOINT = WAITLIST_ENDPOINT; // la guida gratuita usa lo stesso endpoint della lista d'attesa
/** Email di contatto del sito (inoltrata a chef.caiomachado@gmail.com con Cloudflare Email Routing). */
export const EMAIL = 'info@caiomachado.it';

// ── Stato degli strumenti (badge in home) ──
export const STATO_STRUMENTI = { gestionale: 'IN USO A CATERINHO', crm: 'IN USO A CATERINHO', tocstory: 'IN SVILUPPO' };

/** Tempo di risposta ai moduli. */
export const TEMPO_RISPOSTA = '2 giorni lavorativi';

// Vecchia landing del sito
/** Prezzo del canone di manutenzione e gestione, es. '15 € al mese'. Vuoto = segnaposto. */
export const PREZZO_CANONE = '';

// Privacy: tutto spento finché non c'è il banner cookie (Iubenda).
export const IUBENDA = { enabled: false, siteId: '', cookiePolicyId: '' };
export const GOOGLE_ANALYTICS = { enabled: false, measurementId: '' };

export const LEGALE = 'Servizio erogato da Proverbi 123 di Freitas de Moura Machado Caio · P.IVA 04668830161';

export const isPlaceholderUrl = (u: string) => !u || u.startsWith('#');
/** Aggiunge i parametri utm a un link interno (per /bio). */
export const withUtm = (u: string, source = 'instagram', medium = 'bio') => {
  const [path, hash] = u.split('#');
  return `${path}${path.includes('?') ? '&' : '?'}utm_source=${source}&utm_medium=${medium}${hash ? '#' + hash : ''}`;
};

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
/** Questionario del Sito (Moduli Google). Tutti i bottoni "Richiedi il tuo sito" puntano qui. */
export const QUESTIONARIO_URL = '#richiedi';
/** Prenotazione della sessione 1:1. Vuoto = segnaposto. */
export const SESSIONE_1A1_URL = '';

// ── Prezzi della consulenza (decisi da Caio il 6/11/2026) ──
export const PREZZO_SESSIONE_1A1 = '150 €';          // un'ora
export const PREZZO_SESSIONE_STRATEGICA = '250 €';   // start: 6 ore di lavoro insieme
export const DURATA_SESSIONE_STRATEGICA = '6 ore';
/** Nota IVA: in regime forfettario non si applica. Da confermare con il commercialista. */
export const NOTA_IVA_CONSULENZA = '[IVA: DA CONFERMARE – in regime forfettario non si applica]';

// ── Link esterni ──
export const LIBRO_AMAZON_URL = 'https://www.amazon.com.br/dp/B0DYYJLXW6';
export const INSTAGRAM_URL = 'https://instagram.com/chef.caiomachado';
export const INSTAGRAM_CATERINHO_URL = 'https://instagram.com/caterinho.it';
export const CATERINHO_URL = 'https://caterinho.it';
/** Da confermare: probabile linkedin.com/in/caio-machado-275b82b3. Vuoto = segnaposto. */
export const LINKEDIN_URL = 'https://www.linkedin.com/in/caio-machado-275b82b3/';
/** Link WhatsApp, es. 'https://wa.me/39XXXXXXXXXX'. Vuoto = segnaposto. */
export const WHATSAPP_URL = '';
/** Sito dello Studio Legale: vuoto finché non è pubblicato (niente link). */
export const STUDIO_LEGALE_URL = '';
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
export const GUIDA_ENDPOINT = '';      // richiesta della guida gratuita (Diagnosi)
/** Email del piano B (mailto). Diventerà l'email istituzionale. */
export const EMAIL = 'caio.d0004@gmail.com';

// ── Stato degli strumenti (badge in home) ──
export const STATO_STRUMENTI = { gestionale: 'IN USO A CATERINHO', crm: 'IN SVILUPPO', tocstory: 'IN TEST' };

/** Tempo di risposta ai moduli. */
export const TEMPO_RISPOSTA = '2 giorni lavorativi';

// Vecchia landing del sito
/** Prezzo del canone hosting + manutenzione, es. '15 € al mese'. Vuoto = segnaposto. */
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

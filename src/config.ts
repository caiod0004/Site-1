// ─────────────────────────────────────────────────────────────
//  CONFIGURAZIONE DEL SITO — cambia qui link e segnaposto.
//  Un valore vuoto ('') mostra in pagina un segnaposto [TRA PARENTESI].
// ─────────────────────────────────────────────────────────────

/** Dominio definitivo (senza / finale). Usato per canonical, sitemap, Open Graph. */
export const SITE_URL = 'https://caiomachado.it';

/** Tutti i bottoni "Richiedi il tuo sito" puntano qui (Moduli Google). */
export const QUESTIONARIO_URL = '#richiedi';

/** Link WhatsApp, es. 'https://wa.me/39XXXXXXXXXX'. Vuoto = segnaposto. */
export const WHATSAPP_URL = '';

/** Email di contatto. Vuoto = segnaposto. */
export const EMAIL = '';

/** Sito dello Studio Legale: vuoto finché non è pubblicato (niente link). */
export const STUDIO_LEGALE_URL = '';

/** Prezzo del canone hosting + manutenzione, es. '15 € al mese'. Vuoto = segnaposto. */
export const PREZZO_CANONE = '';

// Privacy: tutto spento finché non c'è il banner cookie (Iubenda).
export const IUBENDA = {
  enabled: false,
  siteId: '', // es. 1234567
  cookiePolicyId: '', // es. 12345678
};
export const GOOGLE_ANALYTICS = {
  enabled: false, // si attiva solo se anche IUBENDA.enabled è true
  measurementId: '', // es. 'G-XXXXXXXXXX'
};

// Dati legali (non cambiarli senza motivo)
export const LEGALE = 'Servizio erogato da Proverbi 123 di Freitas de Moura Machado Caio · P.IVA 04668830161';

export const isPlaceholderUrl = (u: string) => !u || u.startsWith('#');

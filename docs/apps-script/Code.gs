/**
 * Ricevitore unico dei moduli di caiomachado.it (Google Apps Script).
 * - Salva ogni invio in un foglio Google (una scheda per modulo).
 * - Manda un'email di riepilogo a Caio.
 * - Scarta i robot (campo trappola "sito_web" e invii troppo veloci).
 *
 * Installazione (5 minuti):
 * 1. Crea un Foglio Google vuoto → Estensioni → Apps Script → incolla questo file.
 * 2. Cambia EMAIL_DESTINATARIO se serve.
 * 3. Esegui una volta la funzione "prova" e autorizza (Gmail + Fogli).
 * 4. Distribuisci → Nuova distribuzione → Tipo: App web.
 *    Esegui come: Me. Chi ha accesso: Chiunque.
 * 5. Copia l'URL che finisce con /exec e incollalo in src/config.ts
 *    in FORM_ENDPOINT_GESTIONE, FORM_ENDPOINT_ONLINE, FORM_ENDPOINT_VENDITE,
 *    FORM_ENDPOINT_CANDIDATURA, WAITLIST_ENDPOINT e GUIDA_ENDPOINT (può essere lo stesso).
 * Ogni volta che modifichi il codice: Distribuisci → Gestisci distribuzioni → Modifica → Nuova versione.
 */
const EMAIL_DESTINATARIO = 'caio.d0004@gmail.com';

function doPost(e) {
  try {
    const raw = e.postData && e.postData.contents ? e.postData.contents : '{}';
    let data;
    try { data = JSON.parse(raw); } catch (err) { data = e.parameter || {}; }

    // anti-spam
    if (data.sito_web) return json({ ok: true });
    const secondi = (Date.now() - Number(data.inizio || 0)) / 1000;
    if (data.inizio && secondi < 3) return json({ ok: true });
    if (data.consenso_privacy !== 'sì') return json({ ok: false, errore: 'consenso mancante' });

    delete data.sito_web;
    const modulo = String(data.modulo || 'senza-nome').slice(0, 60);
    data.ricevuto = new Date().toISOString();

    salvaNelFoglio(modulo, data);
    MailApp.sendEmail({
      to: EMAIL_DESTINATARIO,
      replyTo: data.email || EMAIL_DESTINATARIO,
      subject: `Nuovo modulo: ${modulo}${data.nome ? ' – ' + data.nome : ''}`,
      body: Object.keys(data).map(function (k) { return k + ': ' + data[k]; }).join('\n'),
    });
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, errore: String(err) });
  }
}

function salvaNelFoglio(modulo, data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName(modulo) || ss.insertSheet(modulo);
  let header = sh.getLastRow() > 0 ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0] : [];
  Object.keys(data).forEach(function (k) { if (header.indexOf(k) === -1) header.push(k); });
  sh.getRange(1, 1, 1, header.length).setValues([header]);
  sh.appendRow(header.map(function (k) { return data[k] !== undefined ? data[k] : ''; }));
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

/** Esegui questa funzione una volta dall'editor per autorizzare e provare. */
function prova() {
  doPost({ postData: { contents: JSON.stringify({ modulo: 'prova', nome: 'Prova', email: EMAIL_DESTINATARIO, consenso_privacy: 'sì', inizio: 0 }) } });
}

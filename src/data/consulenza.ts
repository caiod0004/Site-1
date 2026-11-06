// Testi da docs/pacchetto-v2/copy/COPY_3_consulenza_su_misura.md (+ prezzi decisi da Caio il 6/11)
import { PREZZO_SESSIONE_STRATEGICA, GIORNI_PROPOSTA } from '../config';
export const SEO_CONSULENZA = {
  title: 'Consulenza aziendale su misura per ristoranti e PMI | Caio Machado',
  description: 'Numeri, clienti e tecnologia che lavorano insieme: un percorso su misura per la tua attività, con preventivo scritto. Online in Italia, di persona a Bergamo.',
};
export const RICONOSCI_C = [
  'L’attività dipende da te: se ti fermi una settimana, si ferma tutto.',
  'Decidi prezzi, acquisti e promozioni a sensazione, perché i numeri arrivano tardi o non arrivano.',
  'Hai provato un gestionale, poi un’app, poi un’agenzia. Ognuno fa un pezzo, nessuno vede il quadro.',
  'I contatti dei clienti sono sparsi tra telefono, chat e quaderni. Chi è venuto una volta, non lo richiama nessuno.',
  'Sai che “dovresti fare qualcosa online”, ma non sai da dove partire senza buttare soldi.',
];
export const AREE = [
  { t: 'Gestione e numeri', icon: 'calculator', punti: ['Food cost e margini (se hai un locale), prezzi, spese fisse: quanto devi incassare per stare in piedi.', 'Processi interni: ordini, magazzino, turni, chi fa cosa.', 'Un gestionale leggero e una dashboard con i numeri che contano, collegati agli strumenti che usi già.'] },
  { t: 'Vendite e marketing', icon: 'users', punti: ['Da dove arrivano i clienti, dove li perdi, come farli tornare.', 'Un percorso di vendita che parte dal sito e arriva alla prenotazione o al preventivo.', 'Contenuti e social organizzati con TocStory, il sistema che uso nella mia attività.'] },
  { t: 'Tecnologia e presenza online', icon: 'globe', punti: ['Sito, scheda Google, profili: messi in piedi o rimessi a posto.', 'CRM per non perdere più un contatto: richieste, clienti, richiami.', 'Automazioni dove fanno risparmiare tempo davvero, e l’intelligenza artificiale solo dove serve.'] },
];
export const PASSI_C = [
  { title: 'Ti candidi (10 minuti).', body: '<p>Mi racconti la tua attività, i numeri che conosci e dove vuoi arrivare. Leggo ogni risposta io.</p>' },
  { title: `Sessione strategica 1:1 (${PREZZO_SESSIONE_STRATEGICA}).`, body: '<p>Guardiamo insieme la tua attività e decidiamo se ha senso lavorare insieme. Se non ha senso, te lo dico e ti indico la strada più adatta. Due ore insieme, il lunedì pomeriggio, e quattro ore di lavoro mio. <a href="/sessione/" class="underline underline-offset-4">Come funziona la sessione</a>.</p>' },
  { title: 'Proposta su misura, scritta.', body: `<p>Entro ${GIORNI_PROPOSTA} [DA CONFERMARE] ricevi cosa faremo, in che ordine, in quanto tempo e a quale prezzo. Nessuna sorpresa dopo.</p>` },
  { title: 'Implementazione.', body: '<p>Costruiamo il sistema, un’area alla volta, con te dentro: alla fine sai usarlo da solo.</p>' },
  { title: 'Accompagnamento mensile (se vuoi).', body: '<p>Controllo, aggiustamenti e supporto, con un canone e condizioni scritte.</p>' },
];
export const CAMBIA = [
  'Sai quanto guadagni davvero e cosa ti costa ogni scelta.',
  'Hai un posto solo dove guardare per sapere cosa fare oggi.',
  'I clienti hanno un modo chiaro per trovarti, contattarti e tornare.',
  'Una parte del lavoro ripetitivo non passa più da te.',
];
export const FIT_SI_C = [
  'hai un’attività avviata (un locale, uno studio, un negozio, un servizio) e vuoi farla crescere senza aggiungere ore;',
  'sei disposto a mettere tempo e soldi in un progetto con un inizio e una fine;',
  'vuoi capire come funziona il sistema, non solo riceverlo.',
];
export const FIT_NO_C = [
  'cerchi un risultato garantito in fatturato;',
  'vuoi “solo qualcuno che ti gestisca i social”;',
  'stai ancora decidendo se aprire: in quel caso parti dalla Diagnosi Food Cost o da una sessione 1:1.',
];
export const FAQ_CONSULENZA = [
  { q: 'Quanto costa una consulenza aziendale?', a: 'Dipende da cosa serve e da quanto lavoro richiede: per questo faccio un preventivo scritto dopo la sessione strategica, mai un listino uguale per tutti.' },
  { q: 'Lavori solo con i ristoranti?', a: 'No. Con i ristoranti ho l’esperienza più lunga, ma il metodo vale per ogni attività che vende servizi o prodotti a clienti locali.' },
  { q: 'Quanto dura un percorso?', a: 'Lo scriviamo nella proposta. Dipende da quante aree tocchiamo e da quanto tempo puoi metterci tu.' },
  { q: 'Devo cambiare tutti i miei programmi?', a: 'No. Partiamo da quelli che usi e cambiamo solo quello che non funziona.' },
  { q: 'Cos’è TocStory?', a: 'È il sistema che ho costruito per gestire contenuti, social e Google in un posto solo. Nel percorso lo usiamo se ti serve.' },
  { q: 'Sei un consulente del controllo di gestione?', a: 'Mi occupo di numeri e processi di gestione dal punto di vista di chi l’attività la fa funzionare ogni giorno. Per bilanci, tasse e adempimenti resta fondamentale il tuo commercialista.' },
  { q: 'Lavori solo a Bergamo?', a: 'No: online in tutta Italia. A Bergamo e provincia possiamo vederci di persona, da Caterinho, su appuntamento.' },
];

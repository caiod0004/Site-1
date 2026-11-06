import { PREZZO_CANONE } from '../config';

export const SEO = {
  title: 'Sito web per la tua attività in 7 giorni a 197 € | Caio Machado',
  description:
    'Un sito di una pagina, chiaro e veloce da telefono, online in 7 giorni lavorativi. 197 €, prezzo finale. Seguito di persona, anche a Bergamo.',
};

export const VANTAGGI = [
  'Online in 7 giorni',
  'Pensato per il telefono',
  'Pulsante WhatsApp e chiamata',
  'Collegato a Google',
  'Dominio intestato a te',
  '197 € prezzo finale',
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Quanto costa un sito web per una piccola attività?',
    a: 'In Italia le cifre pubbliche vanno da qualche centinaio di euro a diverse migliaia, a seconda di pagine e funzioni. Il mio sito di una pagina costa 197 €, più il dominio.',
  },
  {
    q: 'Perché così poco?',
    a: 'Perché è una pagina sola, su un modello che conosco bene, con un lavoro organizzato. Non taglio sulla qualità: taglio su tutto quello che a una piccola attività all’inizio non serve.',
  },
  { q: 'Il sito è mio?', a: 'Sì. Il dominio è intestato a te e il sito puoi portarlo via quando vuoi.' },
  {
    q: 'E l’hosting?',
    a: `Puoi usare un hosting tuo, oppure il mio: in quel caso c’è un canone mensile che comprende anche la manutenzione. ${PREZZO_CANONE ? `Il canone è di ${PREZZO_CANONE}.` : '[PREZZO DEL CANONE]'}`,
  },
  {
    q: 'Da quando partono i 7 giorni?',
    a: 'Da quando ho tutto il materiale: testi, foto, logo e accesso al dominio. Il tempo che ti serve per mandarmelo non è compreso.',
  },
  { q: 'Posso aggiungere pagine dopo?', a: 'Sì. Si parte da una pagina e si cresce quando serve, con un preventivo scritto.' },
  {
    q: 'Mi aiuti anche con Google e i social?',
    a: 'Il sito viene collegato alla tua scheda Google e ha titolo e descrizione scritti per farti trovare. Gestire Google e i social nel tempo è il secondo passo, con TocStory, che chi ha già il sito può provare gratis.',
  },
  {
    q: 'Lavori solo a Bergamo?',
    a: 'No, lavoro online in tutta Italia. A Bergamo e provincia possiamo anche vederci di persona.',
  },
];

// Moduli del sito — domande esatte da COPY_0 (sezione 6), COPY_2 e COPY_3.
import {
  FORM_ENDPOINT_GESTIONE, FORM_ENDPOINT_ONLINE, FORM_ENDPOINT_VENDITE,
  FORM_ENDPOINT_CANDIDATURA, FORM_ENDPOINT_SESSIONE, WAITLIST_ENDPOINT, GUIDA_ENDPOINT,
} from '../config';

export type FieldType = 'text' | 'email' | 'tel' | 'textarea' | 'radio' | 'checkbox';
export interface Field {
  name: string;
  label: string;
  type: FieldType;
  options?: string[];
  required?: boolean;
  /** Opzione che apre un campo di testo "quale?" */
  other?: string;
  placeholder?: string;
  autocomplete?: string;
  /** Mostra l'elemento con questo id quando è scelta l'opzione indicata */
  reveal?: { value: string; target: string };
}
export interface Step { title: string; fields: Field[] }
export interface FormDef {
  id: string;
  porta: string;
  endpoint: string;
  steps: Step[];
  submit: string;
  success?: string; // pagina dopo l'invio
  successMessage?: string; // messaggio in pagina (se nessuna pagina)
}

const budget = ['Meno di 200 €', '200–1.000 €', 'Oltre 1.000 €', 'Non lo so'];

const chiSei: Step = {
  title: 'La tua attività',
  fields: [
    { name: 'nome', label: 'Nome e cognome', type: 'text', required: true, autocomplete: 'name' },
    { name: 'attivita_citta', label: 'Nome dell’attività e città', type: 'text', required: true, autocomplete: 'organization' },
    { name: 'settore', label: 'Settore', type: 'radio', options: ['Ristorazione', 'Altro'], other: 'Altro', required: true },
    { name: 'apertura', label: 'Da quanto è aperta?', type: 'radio', options: ['Non ancora aperta', 'Meno di 1 anno', '1–3 anni', 'Più di 3'], required: true },
  ],
};
const contatti: Step = {
  title: 'Come ti ricontatto',
  fields: [
    { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
    { name: 'whatsapp', label: 'WhatsApp', type: 'tel', required: true, autocomplete: 'tel' },
    { name: 'fonte', label: 'Come mi hai conosciuto?', type: 'radio', options: ['Instagram', 'LinkedIn', 'Google', 'Passaparola', 'Altro'], other: 'Altro' },
  ],
};

export const FORMS: Record<string, FormDef> = {
  gestione: {
    id: 'analisi-gestione', porta: 'gestione', endpoint: FORM_ENDPOINT_GESTIONE, submit: 'Invia la mia analisi', success: '/analisi/grazie/',
    steps: [
      chiSei,
      { title: 'Il tuo locale', fields: [
        { name: 'tipo_attivita', label: 'Che tipo di attività hai?', type: 'radio', options: ['Ristorante', 'Pizzeria', 'Bar', 'Delivery', 'Catering', 'Laboratorio', 'Altro'], other: 'Altro', required: true },
        { name: 'coperti', label: 'Quanti coperti o ordini fai in media al giorno?', type: 'text', required: true },
        { name: 'conosci_food_cost', label: 'Conosci il food cost dei tuoi piatti?', type: 'radio', options: ['Sì, di tutti', 'Di alcuni', 'No'], required: true },
      ] },
      { title: 'Come lavori oggi', fields: [
        { name: 'ricette_costi', label: 'Dove tieni ricette e costi?', type: 'radio', options: ['A mente', 'Quaderno', 'Excel', 'Gestionale'], other: 'Gestionale', required: true },
        { name: 'cassa', label: 'Che sistema di cassa usi?', type: 'text', required: true },
        { name: 'canali', label: 'Su quali canali vendi?', type: 'checkbox', options: ['Sala', 'Asporto', 'Delivery con piattaforme', 'Eventi'] },
      ] },
      { title: 'Il problema', fields: [
        { name: 'problema', label: 'Qual è il problema più urgente, in una frase?', type: 'textarea', required: true },
        { name: 'budget', label: 'Budget per sistemarlo', type: 'radio', options: budget, required: true },
      ] },
      contatti,
    ],
  },
  online: {
    id: 'analisi-online', porta: 'online', endpoint: FORM_ENDPOINT_ONLINE, submit: 'Invia la mia analisi', success: '/analisi/grazie/',
    steps: [
      chiSei,
      { title: 'Cosa hai già', fields: [
        { name: 'sito', label: 'Hai un sito?', type: 'radio', options: ['No', 'Sì'], other: 'Sì', required: true },
        { name: 'dominio', label: 'Hai un dominio tuo?', type: 'radio', options: ['Sì', 'No', 'Non lo so'], required: true },
        { name: 'scheda_google', label: 'Hai la scheda Google Business?', type: 'radio', options: ['Sì', 'No', 'Non lo so'], required: true },
      ] },
      { title: 'Social e gestione', fields: [
        { name: 'social', label: 'Quali profili social usi e quanto spesso pubblichi?', type: 'textarea', required: true },
        { name: 'chi_se_ne_occupa', label: 'Chi se ne occupa oggi?', type: 'radio', options: ['Io', 'Un collaboratore', 'Un’agenzia', 'Nessuno'], required: true },
      ] },
      { title: 'Cosa ti serve', fields: [
        { name: 'obiettivo', label: 'Cosa vuoi che faccia chi ti trova online?', type: 'checkbox', options: ['Chiamare', 'Prenotare', 'Scriverti', 'Comprare', 'Venire in negozio'] },
        { name: 'materiale', label: 'Hai già logo, foto e testi?', type: 'radio', options: ['Sì', 'In parte', 'No'], required: true },
        { name: 'quando', label: 'Entro quando ti serve?', type: 'text', required: true },
      ] },
      contatti,
    ],
  },
  vendite: {
    id: 'analisi-vendite', porta: 'vendite', endpoint: FORM_ENDPOINT_VENDITE, submit: 'Invia la mia analisi', success: '/analisi/grazie/',
    steps: [
      chiSei,
      { title: 'Le richieste', fields: [
        { name: 'provenienza', label: 'Da dove arrivano oggi le richieste?', type: 'checkbox', options: ['WhatsApp', 'Telefono', 'Email', 'Sito', 'Social', 'Piattaforme'] },
        { name: 'richieste_mese', label: 'Quante richieste ricevi in media al mese?', type: 'text', required: true },
        { name: 'dove_segni', label: 'Dove le segni?', type: 'radio', options: ['Da nessuna parte', 'Chat', 'Excel', 'CRM'], other: 'CRM', required: true },
      ] },
      { title: 'Preventivi e clienti', fields: [
        { name: 'preventivi', label: 'Fai preventivi? Come li prepari e quanto tempo ti richiedono?', type: 'textarea', required: true },
        { name: 'ricontatti', label: 'Ricontatti i clienti dopo la prima vendita?', type: 'radio', options: ['Sempre', 'A volte', 'Mai'], required: true },
      ] },
      { title: 'Dove si perdono', fields: [
        { name: 'dove_perdi', label: 'Quale parte della vendita ti fa perdere più clienti, secondo te?', type: 'textarea', required: true },
        { name: 'quanti_siete', label: 'Quanti siete a gestire clienti e vendite?', type: 'text', required: true },
        { name: 'budget', label: 'Budget indicativo', type: 'radio', options: budget, required: true },
      ] },
      contatti,
    ],
  },
  candidatura: {
    id: 'candidatura-consulenza', porta: 'consulenza', endpoint: FORM_ENDPOINT_CANDIDATURA, submit: 'Invia la candidatura', success: '/analisi/grazie/',
    steps: [
      { title: 'La tua attività', fields: [
        { name: 'attivita', label: 'Nome e tipo di attività, città', type: 'text', required: true, autocomplete: 'organization' },
        { name: 'anni', label: 'Da quanti anni è aperta?', type: 'text', required: true },
        { name: 'persone', label: 'Quante persone ci lavorano?', type: 'text', required: true },
        { name: 'fatturato', label: 'Fatturato annuo indicativo (facoltativo)', type: 'radio', options: ['Non ancora aperta', 'Meno di 150.000 €', '150.000–400.000 €', '400.000 €–1 milione', 'Oltre 1 milione', 'Preferisco non dirlo'] },
      ] },
      { title: 'Dove fa male', fields: [
        { name: 'area', label: 'Quale area ti fa più male?', type: 'radio', options: ['Gestione e numeri', 'Vendite e marketing', 'Tecnologia e presenza online', 'Non lo so'], required: true },
        { name: 'sei_mesi', label: 'Cosa vorresti diverso tra 6 mesi?', type: 'textarea', required: true },
        { name: 'gia_provato', label: 'Cosa hai già provato?', type: 'textarea' },
      ] },
      { title: 'Strumenti e tempo', fields: [
        { name: 'strumenti', label: 'Quali strumenti usi oggi?', type: 'textarea' },
        { name: 'tempo', label: 'Quanto tempo a settimana puoi dedicare al percorso?', type: 'text', required: true },
        { name: 'pronto', label: 'Sei pronto a investire in un percorso?', type: 'radio', options: ['Sì', 'Dipende', 'Non ancora'], required: true, reveal: { value: 'Non ancora', target: 'tre-porte-form' } },
      ] },
      { title: 'I tuoi contatti', fields: [
        { name: 'nome', label: 'Nome e cognome', type: 'text', required: true, autocomplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
        { name: 'whatsapp', label: 'WhatsApp o telefono', type: 'tel', required: true, autocomplete: 'tel' },
      ] },
    ],
  },
  sessione: {
    id: 'sessione-strategica', porta: 'sessione', endpoint: FORM_ENDPOINT_SESSIONE, submit: 'Invia i miei dati', success: '/analisi/grazie/',
    steps: [
      { title: 'La tua attività', fields: [
        { name: 'nome', label: 'Nome e cognome', type: 'text', required: true, autocomplete: 'name' },
        { name: 'attivita', label: 'Nome e tipo di attività, città', type: 'text', required: true, autocomplete: 'organization' },
      ] },
      { title: 'I tuoi dati', fields: [
        { name: 'numeri', label: 'Numeri indicativi (incassi, coperti o clienti, costi che conosci)', type: 'textarea' },
        { name: 'canali', label: 'Canali di vendita', type: 'textarea' },
        { name: 'strumenti', label: 'Strumenti che usi', type: 'textarea' },
      ] },
      { title: 'Come ti ricontatto', fields: [
        { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
        { name: 'whatsapp', label: 'WhatsApp o telefono', type: 'tel', required: true, autocomplete: 'tel' },
      ] },
    ],
  },
  waitlist: {
    id: 'lista-attesa', porta: 'risorse', endpoint: WAITLIST_ENDPOINT, submit: 'Entra in lista d’attesa',
    successMessage: 'Fatto. Riceverai una sola email quando l’edizione italiana sarà pronta.',
    steps: [{ title: 'Lista d’attesa', fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true, autocomplete: 'given-name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
      { name: 'prodotto', label: 'Per quale edizione italiana?', type: 'radio', options: ['Il libro (08 Erros)', 'La guida Food Cost', 'Entrambi'], required: true },
    ] }],
  },
  guida: {
    id: 'guida-food-cost', porta: 'diagnosi', endpoint: GUIDA_ENDPOINT, submit: 'Mandami la guida',
    successMessage: 'Ricevuto. Ti scrivo all’indirizzo che mi hai lasciato.',
    steps: [{ title: 'La guida gratuita', fields: [
      { name: 'email', label: 'La tua email', type: 'email', required: true, autocomplete: 'email' },
    ] }],
  },
};

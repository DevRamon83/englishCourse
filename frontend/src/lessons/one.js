const one = [
  {
    type: `title`,
    text: `Singolari/Plurali e Articoli`,
  },
  {
    type: `paragraph`,
    text: `In inglese abbiamo solo tre articoli, l'articolo determinativo %THE% (in italiano "la, lo, gli" etc) e i due articoli indeterminativi %A e AN% (in italiano "un, uno, una"); vediamo come usarli:`,
  },
  {
    type: `list`,
    li: [
      `%THE%: l'inglese non adatta l'articolo indeterminativo al genere e al numero del sostantivo`,
      `%A/AN%: questi articoli indeterminativi sono uguali, semplicemente quando la parola successiva inizia con un suono vocalico allora si usa AN`,
    ],
  },
  {
    type: `paragraph`,
    text: `£A differenza dell'italiano in inglese ci sono contesti per i quali l'uso dell'articolo va omesso£, ecco quando: `,
  },
  {
    type: `list`,
    li: [
      `Per riferirsi a nazioni, lingue e luoghi geografici`,
      `Davanti ad aggettivi e pronomi possessivi: per cui "il mio cane" si traduce "my dog" non "#the my dog#"`,
      `Per parlare di cose astratte (come l'amore, o la vita) e di titoli di cortesia o nobiliari`,
      `Quando parliamo di cose non specifiche: per cui se dico che "i cani abbaiano" dovrò omettere l'articolo, perché tutti i cani abbaiano`,
      `Davanti a giochi e sport: per cui "mi piace il calcio" si traduce "i like football" e non "#i like the football#"`,
      `Quando parliamo di pasti: cene, colazioni, pranzi, aperitivi, etc.`,
      `"la televisione" si traduce sempre "television" e mai "#the television#"`,
    ],
  },
  {
    type: `paragraph`,
    text: `£In inglese i plurali si formano aggiungendo una -S alla fine della parola£, per cui "book" (libro) si dira al plurale "books" (libri); fai però attenzione alle seguenti eccezioni:`,
  },
  {
    type: `list`,
    li: [
      `Parole che finiscono con [-s, -ss, -ch, -sh, -z, -x] formano il plurale col suffisso %-ES% (per cui si aggiunge una E al suffisso normalmente usato per formare il plurale).`,
      `Parole che finisco con -y formano il plurale trasformando la -y in -i e usano il suffisso %-ES% (invece che la sola -S) per cui "baby" al plurale diventa "babies".`,
      `Parole che finiscono con [-f, -fe] formano il plurale col suffisso -VES (la -F si trasforma in -V e la -E, se non già presente, si aggiunge); per cui, ad esempio, "coltello" si traduce "knife" e diventa "knives" mentre invece la parola "vitello", che si traduce "calf", diventa "calves"`,
      `Vi sono anche delle parole i cui plurali sono irregolari, le trovi nella tabella denominata "plurali irregolari".`,
    ],
  },
  {
    type: `recommended`,
    title: [`'THE' in Inglese. QUANDO si usa?`, "prova"],
    author: [`JoEnglish`, "salcazzo"],
    link: [`https://www.youtube.com/watch?v=-f6WCsBLo8E`, "http://google.com"],
  },
  {
    type: `vocabulary`,
    set: [
      {
        type: "articoli",
        ita: ["il-lo-la-gli-le", "un-uno-una"],
        eng: ["the", "a-an"],
      },
      {
        type: "plurali irregolari",
        ita: [
          "diagnosi",
          "analisi",
          "uomo",
          "donna",
          "persona",
          "piede",
          "dente",
          "bambino",
          "topo",
          "imbarcazione",
          "pesce",
          "foglia",
          "oca",
          "crisi",
          "dato",
          "serie",
        ],
        eng: [
          "diagnosis - diagnoses",
          "analysis - analyses",
          "man - men",
          "woman - women",
          "person - people",
          "foot - feet",
          "tooth - teeth",
          "child - children",
          "mouse - mice",
          "sheep - sheep",
          "fish - fish",
          "leaf - leaves",
          "goose - geese",
          "crisis - crises",
          "datum - data",
          "series - series",
        ],
      },
    ],
  },
  {
    type: `note`,
    text: `Ci sono molti altri plurali irregolari, tuttavia l'elenco che trovi nel vocabolario è relativo a quelli che sono i più frequenti, che dovresti perciò imparare a memoria; cliccando sulle parole in italiano apparirà la traduzione inglese nella forma:
    singolare - plurale`,
  },
];

export { one };

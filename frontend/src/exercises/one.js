const one = [
  {
    type: "boolean",
    question:
      "Quando parliamo di lingue (l'italiano, il tedesco, etc) dobbiamo omettere l'articolo",
    answer: true,
  },
  {
    type: "flashCard",
    src: "/dati.png",
    ita: "dato",
    placeholder: ["singolare", "plurale"],
    answer: ["datum", "data"],
    flashCard: "singolare/plurale",
  },
  {
    type: "multiple",
    question:
      "Che suffisso è utilizzato per formare i plurali delle parole che terminano in -s, -ss, -ch, -sh, -z, -x?",
    options: ["ES", "S", "IES", "YES", "VES"],
    answer: 0,
  },
  {
    type: "input",
    question: "Qual è l'articolo determinativo in inglese?",
    answer: "the",
    placeholder: "risposta",
  },
  {
    type: "multiple",
    question:
      "Che suffisso è utilizzato per formare i plurali delle parole che terminano in -y?",
    options: [
      "ES",
      "S, ma si rimuove la y",
      "IES, ma si rimuove la y",
      "YES",
      "VES",
    ],
    answer: 2,
  },
  {
    type: "multiple",
    question:
      "Che suffisso è utilizzato per formare i plurali delle parole che terminano in -f, -fe?",
    options: [
      "ES",
      "S",
      "IES, ma si rimuove la f finale",
      "YES, ma si rimuove la f finale",
      "VES, ma si rimuove la f finale",
    ],
    answer: 4,
  },
  {
    type: "multiple",
    question: "Quanti articoli esistono in inglese?",
    options: [1, 2, 3, 4, 5],
    answer: 2,
  },
  {
    type: "multiple",
    question: "Quanti sono gli articoli indeterminativi in inglese?",
    options: [1, 2, 3, 4, 5],
    answer: 1,
  },
  {
    type: "input",
    question:
      "Che articolo indeterminativo si usa per le prima delle parole che iniziano con una consonante?",
    answer: "a",
    placeholder: "risposta",
  },
  {
    type: "input",
    question:
      "Che articolo indeterminativo si usa per le prima delle parole che iniziano con un suono vocalico?",
    answer: "an",
    placeholder: "risposta",
  },
  {
    type: "boolean",
    question:
      "Prima dei nomi delle nazioni è necessario usare l'articolo indeterminativo",
    answer: false,
  },
  {
    type: "boolean",
    question:
      "Quando ci riferiamo a luoghi geografici non è necessario usare alcun articolo",
    answer: true,
  },
  {
    type: "boolean",
    question:
      "Prima degli aggettivi è sempre necessario utilizzare l'articolo indeterminativo",
    answer: false,
  },
  {
    type: "boolean",
    question:
      "Dobbiamo sempre usare l'articolo determinativo coi pronomi possessivi",
    answer: false,
  },
  {
    type: "boolean",
    question:
      "Se parliamo di cose astratte o di carattere generale dobbiamo omettere l'articolo",
    answer: true,
  },
  {
    type: "boolean",
    question:
      "Se parliamo di sport e giochi l'articolo va omesso sempre, mentre se parliamo di pasti (colazione, pranzo, etc) è necessario",
    answer: false,
  },
  {
    type: "input",
    question:
      "Quale lettera si aggiunge alla fine della parola per formare i plurali regolari?",
    answer: "s",
    placeholder: "risposta",
  },
  {
    type: "flashCard",
    src: "/uomo.png",
    ita: "uomo",
    placeholder: ["singolare", "plurale"],
    answer: ["man", "men"],
  },
  {
    type: "flashCard",
    src: "/donna.png",
    ita: "donna",
    placeholder: ["singolare", "plurale"],
    answer: ["woman", "women"],
  },
  {
    type: "flashCard",
    src: "/persone.png",
    ita: "persona",
    placeholder: ["singolare", "plurale"],
    answer: ["person", "people"],
  },
  {
    type: "flashCard",
    src: "/piede.png",
    ita: "piede",
    placeholder: ["singolare", "plurale"],
    answer: ["foot", "feet"],
  },
  {
    type: "flashCard",
    src: "/dente.png",
    ita: "dente",
    placeholder: ["singolare", "plurale"],
    answer: ["tooth", "teeth"],
  },
  {
    type: "flashCard",
    src: "/bambino.png",
    ita: "bambino",
    placeholder: ["singolare", "plurale"],
    answer: ["child", "children"],
  },
  {
    type: "flashCard",
    src: "/topo.png",
    ita: "topo",
    placeholder: ["singolare", "plurale"],
    answer: ["mouse", "mice"],
  },
  {
    type: "flashCard",
    src: "/pesce.png",
    ita: "pesce",
    placeholder: ["singolare", "plurale"],
    answer: ["fish", "fish"],
  },
  {
    type: "flashCard",
    src: "/foglia.png",
    ita: "foglia",
    placeholder: ["singolare", "plurale"],
    answer: ["leaf", "leaves"],
  },
];

export { one };

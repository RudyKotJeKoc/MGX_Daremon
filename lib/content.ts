export const hero = {
  title: "Daremon – Bureau voor Systeem- en Narratieve Analyse",
  subtitle:
    "Wij onderzoeken techniek, instituties en verhalen alsof het complexe machines zijn.",
  ctas: ["Bekijk onze diensten", "Hoe wij werken"]
} as const;

export const homeGrid: string[] = [
  "Analyse van technische systemen",
  "Analyse van instituties en procedures",
  "Narratieve en belangenanalyse"
];

export const diensten = [
  {
    title: "Analyse van technische systemen",
    description:
      "Ontleding van architectuur, interfaces, failure modes en onderhoudslogica. Modelleren van afhankelijkheden, drempels en faalpunten."
  },
  {
    title: "Analyse van instituties & regelgeving",
    description:
      "Procedures en bevoegdheden gelezen als systeem. Detectie van asymmetrieën, fricties en impliciete aannames in beleid en uitvoering."
  },
  {
    title: "Narratieve analyse & belangenmapping",
    description:
      "Inventarisatie van actoren, frames en belangen. Herkenning van tacit rules, framing en stilzwijgende dealstructuren."
  },
  {
    title: "Strategisch advies & rapportage",
    description:
      "Heldere conclusies, scenario’s en aanbevelingen. Rapportage die prioriteiten, risico’s en trade-offs expliciteert."
  }
] as const;

export const casussen = [
  {
    title: "Fabrieksluiting & onderhoudsstrategie",
    summary:
      "Analyse van end-of-life scenario’s, reservedelen, en besluitlogica. Vergelijking van onderhoudsvensters versus productierisico."
  },
  {
    title: "Schadeclaim, verzekeraar & procedurele asymmetrie",
    summary:
      "Kaart van termijnen, bewijsstandaarden en informatiestromen. Identificatie van asymmetrie tussen dossierdragers."
  },
  {
    title: "AZC, huisvesting, weerstand & narratieve structuren",
    summary:
      "Analyse van frames, belangen en lokale regels. Ontvlechting van publieke versus procedurele doelstellingen."
  },
  {
    title: "Interne processen in technische bedrijven",
    summary:
      "Doorlichting van overdrachtsmomenten, bottlenecks en KPI-paradoxen. Herstel van causale ketens in besluitvorming."
  }
] as const;

export const methodiek = [
  {
    title: "Modelering van systemen",
    description: "Functionele blokken, interfaces, toestanden, storingen."
  },
  {
    title: "Narratieve mapping",
    description: "Actoren, claims, bewijslijnen, tegenframes."
  },
  {
    title: "Documentanalyse",
    description: "Selectie, annotatie, extractie, consistentie-checks."
  },
  {
    title: "LLM en AI voor extractie",
    description:
      "Gerichte extractie, clustering en samenvatting — met toetsing en traceerbaarheid."
  },
  {
    title: "Techniek, recht en psychologie",
    description: "Procedurele logica, technische beperkingen en gedrag."
  }
] as const;

export const over = {
  title: "Waarom dit bureau bestaat",
  paragraphs: [
    "Dit bureau is ontstaan uit de behoefte om systemen te behandelen zoals ze ontworpen zijn: als logische machines — maar met echte fricties, uitzonderingen en impliciete regels.",
    "Onze benadering is sober en controleerbaar: we modelleren techniek, proces en narratief, en leggen beslislogica bloot.",
    "We combineren systematisch lezen van documenten met veldlogica en menselijke motieven, zonder marketingtaal of vage claims."
  ],
  timeline: [
    "Ervaring in techniek en onderhoud",
    "Systeemdenken toegepast op beleid en uitvoering",
    "Exposeren van inconsistenties en procedurele absurditeiten",
    "Ontwikkeling van methodiek voor analyse en rapportage"
  ]
} as const;

export const contact = {
  intro:
    "Korte beschrijving van uw dossier of systeem. Wij nemen contact op voor een eerste analyse.",
  labels: {
    name: "Naam",
    email: "E-mailadres",
    subject: "Onderwerp",
    message: "Uw vraag of situatie",
    submit: "Verstuur bericht"
  }
} as const;
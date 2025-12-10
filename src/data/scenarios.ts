import { ScenarioDefinition, ValueLabels } from "../types";

// Labels voor de drie waarden: Care, Empathy, Accountability
export const valueLabels: ValueLabels = {
  value1: "Care",
  value2: "Empathy",
  value3: "Accountability",
};

// Scenario's per continent - Flip the Future
export const scenarios: ScenarioDefinition[] = [
  // Afrika - 4 scenarios
  {
    id: "afrika-scenario-1",
    name: "Het Vaccinvenster – Ethiopië",
    description: "Een mazelenuitbraak in Ethiopië escaleert. De overheid heeft hulp nodig bij vaccinaties.",
    continent: "Afrika",
    scores: {
      A: { value1: 3, value2: -1, value3: 0 },
      B: { value1: 0, value2: 2, value3: -1 },
      C: { value1: 2, value2: 2, value3: 1 },
    },
  },
  {
    id: "afrika-scenario-2",
    name: "Persoonsgegevens – Kenia",
    description: "Privacykwesties bij digitale gezondheidszorg in Kenia.",
    continent: "Afrika",
    scores: {
      A: { value1: 3, value2: 1, value3: 1 },
      B: { value1: 1, value2: 2, value3: 0 },
      C: { value1: 2, value2: -2, value3: 0 },
    },
  },
  {
    id: "afrika-scenario-3",
    name: "Digitalisering & risico's jongeren – Tanzania",
    description: "Jonge generatie in Tanzania en digitale gezondheidsrisico's.",
    continent: "Afrika",
    scores: {
      A: { value1: 2, value2: 1, value3: 0 },
      B: { value1: 1, value2: 2, value3: 1 },
      C: { value1: 0, value2: 1, value3: 2 },
    },
  },
  {
    id: "afrika-scenario-4",
    name: "Gezondheidszorg in de Sahel – Niger",
    description: "Uitdagingen in de gezondheidszorg in de Sahel-regio.",
    continent: "Afrika",
    scores: {
      A: { value1: 3, value2: 1, value3: 1 },
      B: { value1: 1, value2: 3, value3: 1 },
      C: { value1: 1, value2: 1, value3: 3 },
    },
  },
  // Azië - 3 scenarios
  {
    id: "azie-scenario-1",
    name: "De Digitale Brug – Indonesië",
    description: "Digitale gezondheidszorg overbrugt afstanden in Indonesië.",
    continent: "Azië",
    scores: {
      A: { value1: 3, value2: 1, value3: 0 },
      B: { value1: 1, value2: 3, value3: 0 },
      C: { value1: 3, value2: 2, value3: 1 },
    },
  },
  {
    id: "azie-scenario-2",
    name: "De Goedkope Handschoen – Maleisië",
    description: "Kwaliteit versus betaalbaarheid in medische voorzieningen.",
    continent: "Azië",
    scores: {
      A: { value1: 3, value2: 1, value3: 1 },
      B: { value1: 2, value2: 3, value3: 2 },
      C: { value1: 1, value2: 2, value3: 3 },
    },
  },
  {
    id: "azie-scenario-3",
    name: "De Lege Medicijnkast – India",
    description: "Tekorten in medicijnvoorraad treffen kwetsbare gemeenschappen.",
    continent: "Azië",
    scores: {
      A: { value1: 3, value2: -1, value3: 0 },
      B: { value1: 1, value2: 2, value3: 0 },
      C: { value1: 2, value2: 3, value3: 1 },
    },
  },
  // Europa - 6 scenarios
  {
    id: "europa-scenario-1",
    name: "Onbegrepen gedrag",
    description: "Culturele misverstanden in de gezondheidszorg.",
    continent: "Europa",
    scores: {
      A: { value1: -1, value2: 0, value3: 0 },
      B: { value1: 2, value2: 2, value3: 0 },
      C: { value1: 1, value2: 3, value3: 0 },
    },
  },
  {
    id: "europa-scenario-2",
    name: "De Mantelzorgbalans",
    description: "Balanceren tussen professionele zorg en mantelzorg.",
    continent: "Europa",
    scores: {
      A: { value1: 2, value2: 1, value3: 2 },
      B: { value1: 1, value2: 3, value3: 0 },
      C: { value1: 2, value2: 2, value3: 1 },
    },
  },
  {
    id: "europa-scenario-3",
    name: "Het Team in Taal",
    description: "Taalbarrières in multiculturele zorgteams.",
    continent: "Europa",
    scores: {
      A: { value1: 2, value2: 1, value3: 0 },
      B: { value1: 2, value2: 2, value3: 1 },
      C: { value1: 2, value2: 2, value3: 0 },
    },
  },
  {
    id: "europa-scenario-4",
    name: "De Overbelaste Vluchtelingenkliniek – Duitsland",
    description: "Gezondheidszorg onder druk door vluchtelingeninstroom.",
    continent: "Europa",
    scores: {
      A: { value1: -1, value2: -1, value3: 2 },
      B: { value1: 2, value2: 2, value3: 1 },
      C: { value1: 1, value2: 3, value3: 0 },
    },
  },
  {
    id: "europa-scenario-5",
    name: "De Genderbalans in de Kliniek – Zweden",
    description: "Gendergelijkheid in gezondheidszorg teams.",
    continent: "Europa",
    scores: {
      A: { value1: 2, value2: 2, value3: 0 },
      B: { value1: 1, value2: 2, value3: 1 },
      C: { value1: 2, value2: 3, value3: 1 },
    },
  },
  {
    id: "europa-scenario-6",
    name: "Signalen bij een jong kind – Nederland (International Week)",
    description: "Vroegtijdige signalering bij kinderen in de zorg.",
    continent: "Europa",
    scores: {
      A: { value1: 2, value2: 0, value3: 1 },
      B: { value1: 1, value2: 2, value3: 0 },
      C: { value1: 0, value2: 1, value3: 2 },
    },
  },
  // Noord-Amerika - 4 scenarios
  {
    id: "noord-amerika-scenario-1",
    name: "De Data-deal – Verenigde Staten",
    description: "Patiëntgegevens en commerciële belangen.",
    continent: "Noord-Amerika",
    scores: {
      A: { value1: 3, value2: -2, value3: 0 },
      B: { value1: 0, value2: 3, value3: 1 },
      C: { value1: 1, value2: 2, value3: 2 },
    },
  },
  {
    id: "noord-amerika-scenario-2",
    name: "De Toegangskloof – Canada",
    description: "Ongelijke toegang tot gezondheidszorg in afgelegen gebieden.",
    continent: "Noord-Amerika",
    scores: {
      A: { value1: 3, value2: -1, value3: -1 },
      B: { value1: 0, value2: 2, value3: 1 },
      C: { value1: 1, value2: 3, value3: 2 },
    },
  },
  {
    id: "noord-amerika-scenario-3",
    name: "De Digitale Kloof – Verenigde Staten",
    description: "Technologische ongelijkheid in de gezondheidszorg.",
    continent: "Noord-Amerika",
    scores: {
      A: { value1: -1, value2: 0, value3: 3 },
      B: { value1: 3, value2: 2, value3: 1 },
      C: { value1: 1, value2: 3, value3: 0 },
    },
  },
  {
    id: "noord-amerika-scenario-4",
    name: "Jeugdzorg & Privacy – Canada",
    description: "Privacy van jongeren in digitale gezondheidszorg.",
    continent: "Noord-Amerika",
    scores: {
      A: { value1: 3, value2: 1, value3: 1 },
      B: { value1: 1, value2: 3, value3: 1 },
      C: { value1: 1, value2: 1, value3: 3 },
    },
  },
  // Zuid-Amerika - 4 scenarios
  {
    id: "zuid-amerika-scenario-1",
    name: "De Patagonië-Noodpost – Argentinië",
    description: "Gezondheidszorg in afgelegen gebieden van Patagonië.",
    continent: "Zuid-Amerika",
    scores: {
      A: { value1: 3, value2: 1, value3: 1 },
      B: { value1: 1, value2: 2, value3: 2 },
      C: { value1: 2, value2: -1, value3: 0 },
    },
  },
  {
    id: "zuid-amerika-scenario-2",
    name: "De Mijn van Hoop – Peru",
    description: "Gezondheidszorg voor mijnwerkersgemeenschappen.",
    continent: "Zuid-Amerika",
    scores: {
      A: { value1: 2, value2: -1, value3: -1 },
      B: { value1: 1, value2: 3, value3: 2 },
      C: { value1: 2, value2: 2, value3: 3 },
    },
  },
  {
    id: "zuid-amerika-scenario-3",
    name: "De Vaccinlijn – Brazilië",
    description: "Vaccinatieprogramma's in uitgestrekte gebieden.",
    continent: "Zuid-Amerika",
    scores: {
      A: { value1: 2, value2: -2, value3: 0 },
      B: { value1: 1, value2: 3, value3: 1 },
      C: { value1: 2, value2: 2, value3: 2 },
    },
  },
  {
    id: "zuid-amerika-scenario-4",
    name: "Energiearmoede – Bolivia",
    description: "Gezondheidsuitdagingen door energieschaarste.",
    continent: "Zuid-Amerika",
    scores: {
      A: { value1: 3, value2: 0, value3: -1 },
      B: { value1: 1, value2: 1, value3: 2 },
      C: { value1: 1, value2: 1, value3: 2 },
    },
  },
  // Oceanië - 3 scenarios
  {
    id: "oceanie-scenario-1",
    name: "De Eilandbrug – Kiribati",
    description: "Gezondheidszorg tussen afgelegen eilanden.",
    continent: "Oceanië",
    scores: {
      A: { value1: 3, value2: 1, value3: 1 },
      B: { value1: 1, value2: 2, value3: 2 },
      C: { value1: 2, value2: -1, value3: 0 },
    },
  },
  {
    id: "oceanie-scenario-2",
    name: "De Stem van het Land – Australië",
    description: "Inheemse gezondheid en culturele gevoeligheid.",
    continent: "Oceanië",
    scores: {
      A: { value1: 1, value2: -2, value3: 0 },
      B: { value1: 1, value2: 3, value3: 1 },
      C: { value1: 2, value2: 2, value3: 3 },
    },
  },
  {
    id: "oceanie-scenario-3",
    name: "De Klimaatvluchtelingenkliniek – Nieuw-Zeeland",
    description: "Zorg voor klimaatvluchtelingen uit de Pacific.",
    continent: "Oceanië",
    scores: {
      A: { value1: 3, value2: 1, value3: 0 },
      B: { value1: 2, value2: 0, value3: 2 },
      C: { value1: 1, value2: 2, value3: 1 },
    },
  },
];

// Reality Cards bibliotheek
export interface RealityCard {
  id: string;
  title: string;
  content: string;
}

export const realityCards: RealityCard[] = [
  {
    id: "card-1",
    title: "Klimaatverandering Impact",
    content: "Wereldwijd stijgen de temperaturen met gemiddeld 1,1°C sinds de industriële revolutie, met ernstige gevolgen voor kwetsbare regio's.",
  },
  {
    id: "card-2",
    title: "Gezondheidszorg Toegang",
    content: "Meer dan 400 miljoen mensen wereldwijd hebben geen toegang tot essentiële gezondheidszorg.",
  },
  {
    id: "card-3",
    title: "Onderwijs voor Allen",
    content: "263 miljoen kinderen en jongeren wereldwijd gaan niet naar school, vooral in ontwikkelingslanden.",
  },
  {
    id: "card-4",
    title: "Watercrisis",
    content: "2,2 miljard mensen hebben geen toegang tot veilig drinkwater. Dit leidt tot vele gezondheidsproblemen.",
  },
  {
    id: "card-5",
    title: "Voedselzekerheid",
    content: "828 miljoen mensen lijden honger. Klimaatverandering en conflicten verergeren dit probleem.",
  },
];

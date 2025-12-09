import { ScenarioDefinition, ValueLabels } from "../types";

// Labels voor de drie waarden: Care, Empathy, Accountability
export const valueLabels: ValueLabels = {
  value1: "Care",
  value2: "Empathy",
  value3: "Accountability",
};

// Scenario's per continent (3 per continent volgens specificatie)
export const scenarios: ScenarioDefinition[] = [
  // Afrika - 3 scenarios
  {
    id: "afrika-scenario-1",
    name: "Het Vaccinvenster – Ethiopië",
    description: "Een mazelenuitbraak in Ethiopië escaleert. De overheid heeft hulp nodig bij vaccinaties.",
    continent: "Afrika",
    scores: {
      A: { value1: 3, value2: 1, value3: 2 },
      B: { value1: 1, value2: 3, value3: 1 },
      C: { value1: 2, value2: 2, value3: 3 },
    },
  },
  {
    id: "afrika-scenario-2",
    name: "Onderwijs voor Iedereen – Oeganda",
    description: "Veel kinderen in Oeganda hebben geen toegang tot kwalitatief onderwijs.",
    continent: "Afrika",
    scores: {
      A: { value1: 2, value2: 2, value3: 3 },
      B: { value1: 1, value2: 3, value3: 1 },
      C: { value1: 3, value2: 1, value3: 2 },
    },
  },
  {
    id: "afrika-scenario-3",
    name: "Watercrisis – Kenia",
    description: "Langdurige droogte bedreigt de drinkwatervoorziening in Kenia.",
    continent: "Afrika",
    scores: {
      A: { value1: 3, value2: 2, value3: 1 },
      B: { value1: 2, value2: 1, value3: 3 },
      C: { value1: 1, value2: 3, value3: 2 },
    },
  },
  // Azië - 3 scenarios
  {
    id: "azie-scenario-1",
    name: "Klimaatadaptatie – Bangladesh",
    description: "Bangladesh moet zich voorbereiden op toekomstige klimaatveranderingen.",
    continent: "Azië",
    scores: {
      A: { value1: 2, value2: 3, value3: 2 },
      B: { value1: 3, value2: 1, value3: 3 },
      C: { value1: 1, value2: 2, value3: 1 },
    },
  },
  {
    id: "azie-scenario-2",
    name: "Duurzame Energie – Indonesië",
    description: "Indonesië wil overstappen naar duurzame energie maar heeft financiering nodig.",
    continent: "Azië",
    scores: {
      A: { value1: 1, value2: 3, value3: 2 },
      B: { value1: 3, value2: 2, value3: 1 },
      C: { value1: 2, value2: 1, value3: 3 },
    },
  },
  {
    id: "azie-scenario-3",
    name: "Gezondheidscrisis – Myanmar",
    description: "Een uitbraak van een infectieziekte bedreigt de gezondheidszorg in Myanmar.",
    continent: "Azië",
    scores: {
      A: { value1: 3, value2: 2, value3: 2 },
      B: { value1: 2, value2: 3, value3: 1 },
      C: { value1: 1, value2: 1, value3: 3 },
    },
  },
  // Europa - 3 scenarios
  {
    id: "europa-scenario-1",
    name: "Vluchtelingencrisis – Griekenland",
    description: "Grote aantallen vluchtelingen komen aan in Griekenland en hebben ondersteuning nodig.",
    continent: "Europa",
    scores: {
      A: { value1: 3, value2: 3, value3: 1 },
      B: { value1: 2, value2: 2, value3: 2 },
      C: { value1: 1, value2: 1, value3: 3 },
    },
  },
  {
    id: "europa-scenario-2",
    name: "Klimaatbeleid – Nederland",
    description: "Nederland moet kiezen tussen economische groei en strikte klimaatmaatregelen.",
    continent: "Europa",
    scores: {
      A: { value1: 2, value2: 1, value3: 3 },
      B: { value1: 1, value2: 3, value3: 2 },
      C: { value1: 3, value2: 2, value3: 1 },
    },
  },
  {
    id: "europa-scenario-3",
    name: "Sociale Ongelijkheid – Italië",
    description: "Toenemende ongelijkheid in Italië vraagt om maatregelen.",
    continent: "Europa",
    scores: {
      A: { value1: 1, value2: 3, value3: 3 },
      B: { value1: 3, value2: 1, value3: 2 },
      C: { value1: 2, value2: 2, value3: 1 },
    },
  },
  // Noord-Amerika - 3 scenarios
  {
    id: "noord-amerika-scenario-1",
    name: "Gezondheidszorg – Verenigde Staten",
    description: "Debat over toegankelijke gezondheidszorg voor iedereen in de VS.",
    continent: "Noord-Amerika",
    scores: {
      A: { value1: 3, value2: 2, value3: 2 },
      B: { value1: 2, value2: 3, value3: 1 },
      C: { value1: 1, value2: 1, value3: 3 },
    },
  },
  {
    id: "noord-amerika-scenario-2",
    name: "Inheemse Volkeren – Canada",
    description: "Rechten en welzijn van inheemse volkeren in Canada vragen om aandacht.",
    continent: "Noord-Amerika",
    scores: {
      A: { value1: 2, value2: 3, value3: 3 },
      B: { value1: 3, value2: 1, value3: 2 },
      C: { value1: 1, value2: 2, value3: 1 },
    },
  },
  {
    id: "noord-amerika-scenario-3",
    name: "Natuurrampen – Mexico",
    description: "Mexico moet omgaan met gevolgen van orkanen en aardbevingen.",
    continent: "Noord-Amerika",
    scores: {
      A: { value1: 3, value2: 1, value3: 2 },
      B: { value1: 1, value2: 3, value3: 3 },
      C: { value1: 2, value2: 2, value3: 1 },
    },
  },
  // Zuid-Amerika - 3 scenarios
  {
    id: "zuid-amerika-scenario-1",
    name: "Ontbossing – Brazilië",
    description: "Het Amazonewoud wordt bedreigd door ontbossing voor landbouw.",
    continent: "Zuid-Amerika",
    scores: {
      A: { value1: 1, value2: 3, value3: 2 },
      B: { value1: 3, value2: 1, value3: 3 },
      C: { value1: 2, value2: 2, value3: 1 },
    },
  },
  {
    id: "zuid-amerika-scenario-2",
    name: "Voedselzekerheid – Haïti",
    description: "Na natuurrampen kampt Haïti met voedseltekorten.",
    continent: "Zuid-Amerika",
    scores: {
      A: { value1: 3, value2: 2, value3: 1 },
      B: { value1: 2, value2: 1, value3: 3 },
      C: { value1: 1, value2: 3, value3: 2 },
    },
  },
  {
    id: "zuid-amerika-scenario-3",
    name: "Economische Crisis – Venezuela",
    description: "Venezuela kampt met een diepe economische crisis die impact heeft op de bevolking.",
    continent: "Zuid-Amerika",
    scores: {
      A: { value1: 2, value2: 3, value3: 2 },
      B: { value1: 3, value2: 2, value3: 1 },
      C: { value1: 1, value2: 1, value3: 3 },
    },
  },
  // Oceanië - 3 scenarios
  {
    id: "oceanie-scenario-1",
    name: "Zeespiegelstijging – Tuvalu",
    description: "Tuvalu wordt bedreigd door stijgende zeespiegel door klimaatverandering.",
    continent: "Oceanië",
    scores: {
      A: { value1: 3, value2: 3, value3: 2 },
      B: { value1: 2, value2: 2, value3: 3 },
      C: { value1: 1, value2: 1, value3: 1 },
    },
  },
  {
    id: "oceanie-scenario-2",
    name: "Inheemse Cultuur – Australië",
    description: "Bescherming van inheemse cultuur en rechten in Australië.",
    continent: "Oceanië",
    scores: {
      A: { value1: 2, value2: 3, value3: 3 },
      B: { value1: 3, value2: 1, value3: 2 },
      C: { value1: 1, value2: 2, value3: 1 },
    },
  },
  {
    id: "oceanie-scenario-3",
    name: "Toerisme vs Natuur – Nieuw-Zeeland",
    description: "Balanceren tussen toerisme en natuurbescherming in Nieuw-Zeeland.",
    continent: "Oceanië",
    scores: {
      A: { value1: 1, value2: 2, value3: 3 },
      B: { value1: 3, value2: 3, value3: 1 },
      C: { value1: 2, value2: 1, value3: 2 },
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

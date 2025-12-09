// Type definities voor het Wereldburgerschap Speldashboard

export type ValueKey = "value1" | "value2" | "value3";

export interface ValueLabels {
  value1: string;
  value2: string;
  value3: string;
}

export type AnswerOption = "A" | "B" | "C";

export interface AnswerScore {
  A: Record<ValueKey, number>;
  B: Record<ValueKey, number>;
  C: Record<ValueKey, number>;
}

export interface ScenarioDefinition {
  id: string;          // unieke id, bv. "vaccinvenster-ethiopie"
  name: string;        // korte naam/titel
  description: string; // volledige tekst
  continent?: string;  // optioneel: "Afrika", "Europa", etc.
  scores: AnswerScore; // A/B/C → scores op 3 waarden
}

export interface Team {
  id: string;    // bv. "team-a"
  name: string;  // "Team A"
  color: string; // HEX kleur voor team identificatie
}

export interface RoundScore {
  round: number;       // 1, 2, 3
  teamId: string;
  scenarioId: string;
  answer: AnswerOption;
  values: Record<ValueKey, number>;
}

export interface GameState {
  numTeams: number;
  teams: Team[];
  maxRounds: number;      // bv. 3
  activeRound: number;    // 1..maxRounds
  roundScores: RoundScore[]; // één entry per (team, ronde)
  selectedRealityCardId: string; // ID van geselecteerde Reality Card
  qrCodeUrl: string;      // URL voor reflectie QR-code
}

export type ViewMode = "start" | "teacher" | "display" | "scores";

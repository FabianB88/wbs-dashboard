import { RoundScore, ValueKey } from "./types";

/**
 * Berekent de scores voor een team in een specifieke ronde
 */
export function computeTeamValuesForRound(
  roundScores: RoundScore[],
  teamId: string,
  round: number
): Record<ValueKey, number> {
  const base: Record<ValueKey, number> = { value1: 0, value2: 0, value3: 0 };

  return roundScores
    .filter(rs => rs.teamId === teamId && rs.round === round)
    .reduce((acc, rs) => {
      (["value1", "value2", "value3"] as ValueKey[]).forEach(key => {
        acc[key] += rs.values[key];
      });
      return acc;
    }, base);
}

/**
 * Berekent de totale WGI (som van alle teams) voor een specifieke ronde
 */
export function computeWGIForRound(
  roundScores: RoundScore[],
  round: number
): Record<ValueKey, number> {
  const base: Record<ValueKey, number> = { value1: 0, value2: 0, value3: 0 };

  return roundScores
    .filter(rs => rs.round === round)
    .reduce((acc, rs) => {
      (["value1", "value2", "value3"] as ValueKey[]).forEach(key => {
        acc[key] += rs.values[key];
      });
      return acc;
    }, base);
}

/**
 * Berekent de cumulatieve scores voor een team over alle rondes tot en met de opgegeven ronde
 */
export function computeTeamCumulativeValues(
  roundScores: RoundScore[],
  teamId: string,
  upToRound: number
): Record<ValueKey, number> {
  const base: Record<ValueKey, number> = { value1: 0, value2: 0, value3: 0 };

  return roundScores
    .filter(rs => rs.teamId === teamId && rs.round <= upToRound)
    .reduce((acc, rs) => {
      (["value1", "value2", "value3"] as ValueKey[]).forEach(key => {
        acc[key] += rs.values[key];
      });
      return acc;
    }, base);
}

/**
 * Berekent de balans-score voor een set waarden
 * Balans = verschil tussen hoogste en laagste waarde (spread)
 * Hoe lager, hoe beter de balans
 */
export function computeBalanceScore(
  values: Record<ValueKey, number>
): number {
  const arr = Object.values(values);
  return Math.max(...arr) - Math.min(...arr);
}

/**
 * Genereert team IDs, namen en kleuren op basis van aantal teams
 */
export function generateTeams(numTeams: number) {
  const teamLetters = ["A", "B", "C", "D", "E", "F"];
  const teamColors = [
    "#E50055", // HAN magenta
    "#131A82", // HAN dark blue
    "#00A651", // groen
    "#FF8C00", // oranje
    "#9B59B6", // paars
    "#E74C3C", // rood
  ];
  return Array.from({ length: numTeams }, (_, i) => ({
    id: `team-${teamLetters[i].toLowerCase()}`,
    name: `Team ${teamLetters[i]}`,
    color: teamColors[i],
  }));
}

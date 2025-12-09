import { Team, ScenarioDefinition, ValueLabels, RoundScore } from "../types";
import { computeTeamCumulativeValues, computeBalanceScore } from "../utils";
import TeamCard from "./TeamCard";
import "../styles/TeacherView.css";

interface TeacherViewProps {
  teams: Team[];
  activeRound: number;
  maxRounds: number;
  scenarios: ScenarioDefinition[];
  valueLabels: ValueLabels;
  roundScores: RoundScore[];
  onUpdateRoundScore: (updated: RoundScore) => void;
  onChangeActiveRound: (round: number) => void;
  onSwitchToDisplay: () => void;
}

export default function TeacherView({
  teams,
  activeRound,
  maxRounds,
  scenarios,
  valueLabels,
  roundScores,
  onUpdateRoundScore,
  onChangeActiveRound,
  onSwitchToDisplay,
}: TeacherViewProps) {
  return (
    <div className="teacher-view">
      {/* Header */}
      <div className="teacher-header">
        <div className="teacher-header-left">
          <h1>Docentscherm</h1>
          <div className="round-selector">
            <label htmlFor="round-select">Actieve ronde:</label>
            <select
              id="round-select"
              value={activeRound}
              onChange={(e) => onChangeActiveRound(Number(e.target.value))}
            >
              {Array.from({ length: maxRounds }, (_, i) => i + 1).map((round) => (
                <option key={round} value={round}>
                  Ronde {round}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="teacher-header-right">
          <button onClick={onSwitchToDisplay} className="btn-primary btn-large">
            📺 Projectiescherm openen
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="teacher-content">
        <div className="teacher-teams-grid">
          {teams.map((team) => {
            // Zoek bestaande roundScore voor dit team in deze ronde
            const existingScore = roundScores.find(
              (rs) => rs.teamId === team.id && rs.round === activeRound
            );

            // Bereken cumulatieve scores tot deze ronde
            const cumulativeValues = computeTeamCumulativeValues(
              roundScores,
              team.id,
              activeRound
            );
            const balanceScore = computeBalanceScore(cumulativeValues);

            return (
              <TeamCard
                key={team.id}
                team={team}
                round={activeRound}
                scenarios={scenarios}
                valueLabels={valueLabels}
                existingScore={existingScore}
                cumulativeValues={cumulativeValues}
                balanceScore={balanceScore}
                onUpdateScore={onUpdateRoundScore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

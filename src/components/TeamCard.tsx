import { useState, useEffect } from "react";
import { Team, ScenarioDefinition, AnswerOption, ValueLabels, RoundScore, ValueKey } from "../types";
import "../styles/TeamCard.css";

interface TeamCardProps {
  team: Team;
  round: number;
  scenarios: ScenarioDefinition[];
  valueLabels: ValueLabels;
  existingScore?: RoundScore;
  cumulativeValues: Record<ValueKey, number>;
  balanceScore: number;
  onUpdateScore: (updated: RoundScore) => void;
}

export default function TeamCard({
  team,
  round,
  scenarios,
  valueLabels,
  existingScore,
  cumulativeValues,
  balanceScore,
  onUpdateScore,
}: TeamCardProps) {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    existingScore?.scenarioId || ""
  );
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerOption | "">(
    existingScore?.answer || ""
  );

  // Groepeer scenarios per continent
  const scenariosByContinent = scenarios.reduce((acc, scenario) => {
    const continent = scenario.continent || "Overig";
    if (!acc[continent]) acc[continent] = [];
    acc[continent].push(scenario);
    return acc;
  }, {} as Record<string, ScenarioDefinition[]>);

  // Update state als existingScore verandert
  useEffect(() => {
    setSelectedScenarioId(existingScore?.scenarioId || "");
    setSelectedAnswer(existingScore?.answer || "");
  }, [existingScore]);

  // Wanneer scenario of answer verandert, update de score
  useEffect(() => {
    if (selectedScenarioId && selectedAnswer) {
      const scenario = scenarios.find((s) => s.id === selectedScenarioId);
      if (scenario) {
        const values = scenario.scores[selectedAnswer];
        onUpdateScore({
          round,
          teamId: team.id,
          scenarioId: selectedScenarioId,
          answer: selectedAnswer,
          values,
        });
      }
    }
  }, [selectedScenarioId, selectedAnswer]);

  const handleScenarioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedScenarioId(e.target.value);
  };

  const handleAnswerChange = (answer: AnswerOption) => {
    setSelectedAnswer(answer);
  };

  // Bereken huidige ronde scores (alleen deze ronde)
  const currentScenario = scenarios.find((s) => s.id === selectedScenarioId);
  const currentValues = currentScenario && selectedAnswer
    ? currentScenario.scores[selectedAnswer]
    : null;

  // Bereken max waarde voor normalisatie in mini-chart
  const maxValue = Math.max(
    ...Object.values(cumulativeValues).map(Math.abs),
    1
  );

  const getBarWidth = (value: number) => {
    return (Math.abs(value) / maxValue) * 100;
  };

  const getBarColor = (key: ValueKey): string => {
    const colors = {
      value1: "var(--han-magenta)",
      value2: "#00A651",
      value3: "#FF8C00",
    };
    return colors[key];
  };

  return (
    <div className="team-card">
      <div className="team-card-header">
        <h2>{team.name}</h2>
        <div className="balance-indicator">
          <span className="balance-label">Balans:</span>
          <span className={`balance-value ${balanceScore <= 3 ? "good" : balanceScore <= 6 ? "medium" : "poor"}`}>
            {balanceScore}
          </span>
        </div>
      </div>

      <div className="team-card-body">
        {/* Scenario selectie */}
        <div className="input-group">
          <label htmlFor={`scenario-${team.id}`}>Scenario:</label>
          <select
            id={`scenario-${team.id}`}
            value={selectedScenarioId}
            onChange={handleScenarioChange}
          >
            <option value="">-- Kies een scenario --</option>
            {Object.entries(scenariosByContinent).map(([continent, scenarioList]) => (
              <optgroup key={continent} label={continent}>
                {scenarioList.map((scenario) => (
                  <option key={scenario.id} value={scenario.id}>
                    {scenario.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Antwoordkeuze */}
        <div className="input-group">
          <label>Antwoordkeuze:</label>
          <div className="answer-buttons">
            {(["A", "B", "C"] as AnswerOption[]).map((option) => (
              <button
                key={option}
                className={`answer-button ${selectedAnswer === option ? "selected" : ""}`}
                onClick={() => handleAnswerChange(option)}
                disabled={!selectedScenarioId}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Scores deze ronde */}
        {currentValues && (
          <div className="current-scores">
            <h4>Scores deze ronde:</h4>
            <div className="score-list">
              {(["value1", "value2", "value3"] as ValueKey[]).map((key) => (
                <div key={key} className="score-item">
                  <span>{valueLabels[key]}:</span>
                  <span className={currentValues[key] >= 0 ? "positive" : "negative"}>
                    {currentValues[key] >= 0 ? "+" : ""}{currentValues[key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cumulatieve scores (staafdiagram) */}
        <div className="cumulative-scores">
          <h4>Cumulatieve scores (t/m ronde {round}):</h4>
          <div className="mini-chart">
            {(["value1", "value2", "value3"] as ValueKey[]).map((key) => (
              <div key={key} className="mini-chart-row">
                <span className="mini-chart-label">{valueLabels[key]}</span>
                <div className="mini-chart-bar-wrapper">
                  <div
                    className="mini-chart-bar"
                    style={{
                      width: `${getBarWidth(cumulativeValues[key])}%`,
                      backgroundColor: getBarColor(key),
                    }}
                  >
                    <span className="mini-chart-value">{cumulativeValues[key]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

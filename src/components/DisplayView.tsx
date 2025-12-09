import { RoundScore, ValueLabels } from "../types";
import Timer from "./Timer";
import QRCodeDisplay from "./QRCodeDisplay";
import "../styles/DisplayView.css";

interface DisplayViewProps {
  activeRound: number;
  maxRounds: number;
  roundScores: RoundScore[];
  valueLabels: ValueLabels;
  realityCardTitle?: string;
  realityCardContent?: string;
  qrCodeUrl?: string;
  onSwitchToTeacher: () => void;
}

export default function DisplayView({
  activeRound,
  maxRounds,
  roundScores,
  realityCardTitle,
  realityCardContent,
  qrCodeUrl,
  onSwitchToTeacher,
}: DisplayViewProps) {
  // Bereken CUMULATIEVE WGI: alle rondes tot en met activeRound
  const cumulativeWGI = roundScores
    .filter(rs => rs.round <= activeRound)
    .reduce((sum, rs) => {
      return sum + rs.values.value1 + rs.values.value2 + rs.values.value3;
    }, 0);

  const totalWGI = cumulativeWGI;

  // Bepaal target score op basis van aantal teams (uit roundScores)
  const numTeams = new Set(roundScores.map(rs => rs.teamId)).size || 4; // fallback 4
  const targetScores: Record<number, number> = {
    4: 83,
    5: 103,
    6: 124,
  };
  const targetScore = targetScores[numTeams] || 83;

  // Bereken percentage naar target (0-100%)
  const percentage = Math.min((totalWGI / targetScore) * 100, 100);

  // Bereken kleur: rood (0%) → groen (100%)
  // HSL: rood=0, geel=60, groen=120
  const hue = (percentage / 100) * 120; // 0 = rood, 120 = groen
  const barColor = `hsl(${hue}, 80%, 45%)`;

  return (
    <div className="display-view">
      {/* Header */}
      <div className="display-header">
        <div className="display-header-content">
          <h1>Flip the Future – Ronde {activeRound} van {maxRounds}</h1>
          <div className="display-tagline">HAN University of Applied Sciences</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="display-content">
        {/* Timer */}
        <div className="display-section">
          <Timer initialSeconds={480} />
        </div>

        {/* WGI - Alleen totaalcijfer met groene balk */}
        <div className="display-section wgi-total-section">
          <h2 className="wgi-total-title">WereldGezondheidsIndex (WGI)</h2>

          {/* Groei-balk met kleurverloop rood→groen */}
          <div className="wgi-bar-container">
            <div
              className="wgi-bar-fill"
              style={{
                width: `${percentage}%`,
                backgroundColor: barColor,
              }}
            >
              <span className="wgi-bar-label">{totalWGI}</span>
            </div>
          </div>
          <p className="wgi-target-info">Target: {targetScore} punten ({numTeams} teams)</p>

          <p className="wgi-total-subtitle">Gezamenlijke score van alle teams</p>
        </div>

        {/* Reality Card (optioneel) */}
        {realityCardContent && (
          <div className="display-section reality-card">
            <h3>{realityCardTitle || "Reality Card"}</h3>
            <p>{realityCardContent}</p>
          </div>
        )}

        {/* QR Code (optioneel) */}
        {qrCodeUrl && (
          <div className="display-section qr-section">
            <QRCodeDisplay url={qrCodeUrl} />
          </div>
        )}
      </div>

      {/* Footer met switch knop */}
      <div className="display-footer">
        <button onClick={onSwitchToTeacher} className="btn-secondary btn-large">
          → Naar docentscherm
        </button>
        <p className="display-hint">Druk op Esc of gebruik de knop om terug te gaan</p>
      </div>
    </div>
  );
}

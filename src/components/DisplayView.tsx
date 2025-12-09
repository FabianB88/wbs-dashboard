import { RoundScore, ValueLabels } from "../types";
import { computeWGIForRound } from "../utils";
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
  const wgiValues = computeWGIForRound(roundScores, activeRound);

  // Bereken totaal WGI (som van alle 3 waarden) - studenten zien alleen dit!
  const totalWGI = wgiValues.value1 + wgiValues.value2 + wgiValues.value3;

  return (
    <div className="display-view">
      {/* Header */}
      <div className="display-header">
        <div className="display-header-content">
          <h1>Wereldburgerschap – Ronde {activeRound} van {maxRounds}</h1>
          <div className="display-tagline">HAN University of Applied Sciences</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="display-content">
        {/* Timer */}
        <div className="display-section">
          <Timer initialSeconds={180} />
        </div>

        {/* WGI - Alleen totaalcijfer met groene balk */}
        <div className="display-section wgi-total-section">
          <h2 className="wgi-total-title">WereldGezondheidsIndex (WGI)</h2>

          {/* Groene groei-balk */}
          <div className="wgi-bar-container">
            <div
              className="wgi-bar-fill"
              style={{ width: `${Math.min(totalWGI * 2, 100)}%` }}
            >
              <span className="wgi-bar-label">{totalWGI}</span>
            </div>
          </div>

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

import "../styles/StartScreen.css";

interface StartScreenProps {
  onStart: (numTeams: number) => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const teamOptions = [3, 4, 5, 6];

  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="start-title">Wereldburgerschap Speldashboard</h1>
        <p className="start-subtitle">HAN University of Applied Sciences</p>

        <div className="start-question">
          <h2>Hoeveel teams spelen er mee?</h2>
        </div>

        <div className="team-buttons">
          {teamOptions.map((num) => (
            <button
              key={num}
              onClick={() => onStart(num)}
              className="btn-primary btn-large team-button"
            >
              {num} teams
            </button>
          ))}
        </div>

        <div className="start-footer">
          <p>Kies het aantal teams om het spel te starten</p>
        </div>
      </div>
    </div>
  );
}

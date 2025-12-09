import { useState } from "react";
import { GameState, ViewMode, RoundScore } from "./types";
import { generateTeams } from "./utils";
import { scenarios, valueLabels, realityCards } from "./data/scenarios";
import StartScreen from "./components/StartScreen";
import DisplayView from "./components/DisplayView";
import TeacherView from "./components/TeacherView";

const INITIAL_ROUNDS = 3;

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("start");
  const [gameState, setGameState] = useState<GameState>({
    numTeams: 0,
    teams: [],
    maxRounds: INITIAL_ROUNDS,
    activeRound: 1,
    roundScores: [],
    selectedRealityCardId: "",
    qrCodeUrl: "",
  });

  // Handler: Start spel met gekozen aantal teams
  const handleStartGame = (numTeams: number) => {
    const teams = generateTeams(numTeams);
    setGameState({
      ...gameState,
      numTeams,
      teams,
      roundScores: [],
    });
    // Na start direct naar display mode (projectiescherm)
    setViewMode("display");
  };

  // Handler: Update of voeg RoundScore toe
  const handleUpdateRoundScore = (updated: RoundScore) => {
    setGameState((prev) => {
      // Zoek bestaande score voor dit team + ronde
      const existingIndex = prev.roundScores.findIndex(
        (rs) => rs.teamId === updated.teamId && rs.round === updated.round
      );

      let newRoundScores: RoundScore[];
      if (existingIndex >= 0) {
        // Update bestaande
        newRoundScores = [...prev.roundScores];
        newRoundScores[existingIndex] = updated;
      } else {
        // Voeg nieuwe toe
        newRoundScores = [...prev.roundScores, updated];
      }

      return {
        ...prev,
        roundScores: newRoundScores,
      };
    });
  };

  // Handler: Verander actieve ronde
  const handleChangeActiveRound = (round: number) => {
    setGameState((prev) => ({
      ...prev,
      activeRound: round,
    }));
  };

  // Handler: Switch naar display mode
  const handleSwitchToDisplay = () => {
    setViewMode("display");
  };

  // Handler: Switch naar teacher mode
  const handleSwitchToTeacher = () => {
    setViewMode("teacher");
  };

  return (
    <div className="app">
      {viewMode === "start" && <StartScreen onStart={handleStartGame} />}

      {viewMode === "display" && (
        <DisplayView
          activeRound={gameState.activeRound}
          maxRounds={gameState.maxRounds}
          roundScores={gameState.roundScores}
          valueLabels={valueLabels}
          realityCardTitle={realityCards.find(rc => rc.id === gameState.selectedRealityCardId)?.title}
          realityCardContent={realityCards.find(rc => rc.id === gameState.selectedRealityCardId)?.content}
          qrCodeUrl={gameState.qrCodeUrl || undefined}
          onSwitchToTeacher={handleSwitchToTeacher}
        />
      )}

      {viewMode === "teacher" && (
        <TeacherView
          teams={gameState.teams}
          activeRound={gameState.activeRound}
          maxRounds={gameState.maxRounds}
          scenarios={scenarios}
          valueLabels={valueLabels}
          roundScores={gameState.roundScores}
          onUpdateRoundScore={handleUpdateRoundScore}
          onChangeActiveRound={handleChangeActiveRound}
          onSwitchToDisplay={handleSwitchToDisplay}
        />
      )}
    </div>
  );
}

export default App;

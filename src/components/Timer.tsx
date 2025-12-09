import { useState, useEffect } from "react";
import "../styles/Timer.css";

interface TimerProps {
  initialSeconds?: number; // default 180 (3 minuten)
}

export default function Timer({ initialSeconds = 180 }: TimerProps) {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning && remainingSeconds > 0) {
      interval = window.setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            // Speel geluid bij 0:00
            playSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, remainingSeconds]);

  const playSound = () => {
    // Simpel beep geluid via Web Audio API
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
      console.warn("Audio niet ondersteund", e);
    }
  };

  const toggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setIsRunning(false);
    setRemainingSeconds(initialSeconds);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const isWarning = remainingSeconds <= 30 && remainingSeconds > 0;
  const isExpired = remainingSeconds === 0;

  return (
    <div className="timer-container">
      <div className={`timer-display ${isWarning ? "warning" : ""} ${isExpired ? "expired" : ""}`}>
        {formatTime(remainingSeconds)}
      </div>
      <div className="timer-controls">
        <button onClick={toggleRunning} className="btn-secondary btn-large">
          {isRunning ? "⏸ Pauze" : "▶ Start"}
        </button>
        <button onClick={reset} className="btn-secondary btn-large">
          ↻ Reset
        </button>
      </div>
    </div>
  );
}

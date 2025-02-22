"use client";

interface ErrorCounterProps {
  errors: number;
  difficulty: string;
  time: number;
}

export function ErrorCounter({ errors, difficulty, time }: ErrorCounterProps) {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const translateDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "Einfach";
      case "medium":
        return "Mittel";
      case "hard":
        return "Schwer";
      case "expert":
        return "Experte";
      default:
        return "Unbekannt";
    }
  };

  return (
    <div className="relative flex mb-4 h-12 text-center bg-blue-500 rounded-md items-center justify-between px-4">
      <p className="text-white font-medium">
        {translateDifficulty(difficulty)}
      </p>
      <p className="absolute left-1/2 transform -translate-x-1/2 text-white font-medium">
        Fehler: {errors} / 3
      </p>
      <p className="text-white font-medium">{formatTime(time)}</p>
    </div>
  );
}

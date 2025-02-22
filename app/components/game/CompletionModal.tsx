"use client";
import Link from "next/link";

interface CompletionModalProps {
  isOpen: boolean;
  difficulty: string;
  time: string;
  onClose: () => void;
}

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

export function CompletionModal({
  isOpen,
  difficulty,
  time,
}: CompletionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Herzlichen Glückwunsch!</h2>
        <p className="mb-4">
          Schwierigkeit: <strong>{translateDifficulty(difficulty)}</strong>
          <br />
          Zeit: <strong>{time}</strong>
        </p>
        <Link href="/">
          <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-neutral-800">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

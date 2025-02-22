"use client";
import Link from "next/link";
import { Home } from "lucide-react";

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
        <h2 className="text-2xl font-semibold mb-3">Herzlichen Glückwunsch!</h2>
        <p className="mb-3">
          Schwierigkeit: <strong>{translateDifficulty(difficulty)}</strong>
          <br />
          Zeit: <strong>{time}</strong>
        </p>
        <Link href="/">
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-neutral-800 flex items-center justify-center gap-2">
              <Home className="h-5 w-5" />
              <span className="text-center">Home</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

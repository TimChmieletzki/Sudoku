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
      <div className="bg-white p-8 rounded-xl shadow-xl text-center w-full max-w-sm border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Herzlichen Glückwunsch!
        </h2>
        <p className="mb-5 text-gray-700">
          Schwierigkeit:{" "}
          <strong className="text-black">
            {translateDifficulty(difficulty)}
          </strong>
          <br />
          Zeit: <strong className="text-black">{time}</strong>
        </p>
        <Link href="/">
          <div className="flex justify-center">
            <button className="px-5 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 flex items-center justify-center gap-2 transition-transform transform hover:scale-110 shadow-md">
              <span className="text-center font-medium">Startseite</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

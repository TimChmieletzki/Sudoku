"use client";
import { Button } from "../ui/button";
import { Trash2, RotateCcw, Lightbulb } from "lucide-react";

interface SudokuControlsProps {
  handleDelete: () => void;
  resetGame: () => void;
  handleHint: () => void;
}

export function SudokuControls({
  handleDelete,
  resetGame,
  handleHint,
}: SudokuControlsProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        onClick={handleDelete}
        className="w-full h-12 bg-red-500 hover:bg-red-600 text-white"
      >
        <Trash2 className="h-5 w-5 mr-2" />
        Löschen
      </Button>
      <Button
        onClick={resetGame}
        className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white"
      >
        <RotateCcw className="h-5 w-5 mr-2" />
        Zurücksetzen
      </Button>
      <Button
        onClick={handleHint}
        className="w-full h-12 bg-green-500 hover:bg-green-600 text-white"
      >
        <Lightbulb className="h-5 w-5 mr-2" />
        Hinweis
      </Button>
    </div>
  );
}

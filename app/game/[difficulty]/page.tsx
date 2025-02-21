"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { sudokus, Difficulty } from "@/app/data/sudokus";
import { Navigation } from "@/app/components/home/Navigation";
import { SudokuBoard } from "@/app/components/game/SudokuBoard";
import { NumberPad } from "@/app/components/game/NumberPad";
import { SudokuControls } from "@/app/components/game/SudokuControls";
import { ErrorCounter } from "@/app/components/game/ErrorCounter";
import { Footer } from "@/app/components/home/Footer";
import { useCallback } from "react";

export default function SudokuGame() {
  const { difficulty } = useParams();
  const [board, setBoard] = useState<number[][]>([]);
  const [solution, setSolution] = useState<number[][]>([]);
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(
    null,
  );
  const [errors, setErrors] = useState(0);

  const resetGame = useCallback(() => {
    if (
      difficulty &&
      ["easy", "medium", "hard", "expert"].includes(difficulty as string)
    ) {
      const typedDifficulty = difficulty as Difficulty;
      const puzzles = sudokus[typedDifficulty];
      const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
      setBoard(randomPuzzle.puzzle);
      setSolution(randomPuzzle.solution);
      setSelectedCell(null);
      setErrors(0);
    }
  }, [difficulty]);

  useEffect(() => {
    if (errors === 3) {
      resetGame();
    }
  }, [errors, resetGame]);

  const handleCellClick = (row: number, col: number) => {
    if (board[row][col] === 0) {
      setSelectedCell([row, col]);
    }
  };

  const handleNumberClick = (num: number) => {
    if (selectedCell) {
      const [row, col] = selectedCell;
      if (board[row][col] === 0) {
        const newBoard = board.map((row) => [...row]);
        newBoard[row][col] = num;
        setBoard(newBoard);

        if (num !== solution[row][col]) {
          setErrors((prev) => prev + 1);
        }
      }
    }
  };

  const handleDelete = () => {
    if (selectedCell) {
      const [row, col] = selectedCell;
      const newBoard = board.map((row) => [...row]);
      newBoard[row][col] = 0;
      setBoard(newBoard);
    }
  };

  const handleHint = () => {
    if (selectedCell) {
      const [row, col] = selectedCell;
      if (board[row][col] === 0) {
        const newBoard = board.map((row) => [...row]);
        newBoard[row][col] = solution[row][col];
        setBoard(newBoard);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white text-gray-900">
      <Navigation />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <ErrorCounter errors={errors} />
          <SudokuBoard
            board={board}
            selectedCell={selectedCell}
            initialPuzzle={board}
            handleCellClick={handleCellClick}
          />
          <NumberPad handleNumberClick={handleNumberClick} />
          <SudokuControls
            handleDelete={handleDelete}
            resetGame={resetGame}
            handleHint={handleHint}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

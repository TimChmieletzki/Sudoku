"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { CompletionModal } from "@/app/components/game/CompletionModal";
import { sudokus, Difficulty } from "@/app/data/sudokus";
import { Navigation } from "@/app/components/home/Navigation";
import { SudokuBoard } from "@/app/components/game/SudokuBoard";
import { NumberPad } from "@/app/components/game/NumberPad";
import { SudokuControls } from "@/app/components/game/SudokuControls";
import { ErrorCounter } from "@/app/components/game/ErrorCounter";
import { Footer } from "@/app/components/home/Footer";

export default function SudokuGame() {
  const { difficulty } = useParams();
  const [board, setBoard] = useState<number[][]>([]);
  const [solution, setSolution] = useState<number[][]>([]);
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(
    null,
  );
  const [errors, setErrors] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [initialBoard, setInitialBoard] = useState<number[][]>([]);

  const restartTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTime(0);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  useEffect(() => {
    if (
      difficulty &&
      ["easy", "medium", "hard", "expert"].includes(difficulty as string)
    ) {
      const typedDifficulty = difficulty as Difficulty;
      const puzzles = sudokus[typedDifficulty];
      const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];

      setBoard(randomPuzzle.puzzle);
      setInitialBoard(randomPuzzle.puzzle.map((row) => [...row]));
      setSolution(randomPuzzle.solution);
    }
  }, [difficulty]);

  useEffect(() => {
    if (errors === 3) {
      resetGame();
    }
  }, [errors]);

  useEffect(() => {
    const isSolved = board.every((row, rowIndex) =>
      row.every((cell, colIndex) => cell === solution[rowIndex][colIndex]),
    );

    if (isSolved && board.length > 0) {
      setIsCompleted(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [board]);

  const handleCellClick = (row: number, col: number) => {
    if (initialBoard[row][col] === 0) {
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

  const resetGame = () => {
    if (
      difficulty &&
      ["easy", "medium", "hard", "expert"].includes(difficulty as string)
    ) {
      const typedDifficulty = difficulty as Difficulty;
      const puzzles = sudokus[typedDifficulty];
      const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
      setBoard(randomPuzzle.puzzle);
      setInitialBoard(randomPuzzle.puzzle.map((row) => [...row]));
      setBoard(randomPuzzle.puzzle);
      setSolution(randomPuzzle.solution);
      setSelectedCell(null);
      setErrors(0);
      setIsCompleted(false);
      restartTimer();
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

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col h-screen bg-white text-gray-900">
      <Navigation />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <ErrorCounter
            errors={errors}
            difficulty={difficulty as string}
            time={time}
          />
          <SudokuBoard
            board={board}
            selectedCell={selectedCell}
            initialPuzzle={initialBoard}
            solution={solution} // Neue Prop
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
      <CompletionModal
        isOpen={isCompleted}
        difficulty={difficulty as string}
        time={formatTime(time)}
        onClose={() => setIsCompleted(false)}
      />
    </div>
  );
}

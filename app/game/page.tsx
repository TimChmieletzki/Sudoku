"use client";

import { useState, useEffect } from "react";
import { Navigation } from "../components/home/Navigation";
import { SudokuBoard } from "../components/game/SudokuBoard";
import { NumberPad } from "../components/game/NumberPad";
import { SudokuControls } from "../components/game/SudokuControls";
import { ErrorCounter } from "../components/game/ErrorCounter";
import { Footer } from "../components/home/Footer";

// Helper function to create an empty 9x9 Sudoku grid
const createEmptyGrid = () =>
  Array(9)
    .fill(null)
    .map(() => Array(9).fill(0));

// Pre-defined Sudoku puzzle (0 represents empty cells)
const initialPuzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

// Solution to the puzzle
const solution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

export default function SudokuGame() {
  const [board, setBoard] = useState(initialPuzzle);
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(
    null,
  );
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    if (errors === 3) {
      resetGame();
    }
  }, [errors]);

  const handleCellClick = (row: number, col: number) => {
    if (initialPuzzle[row][col] === 0) {
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
      if (initialPuzzle[row][col] === 0) {
        const newBoard = board.map((row) => [...row]);
        newBoard[row][col] = 0;
        setBoard(newBoard);
      }
    }
  };

  const resetGame = () => {
    setBoard(initialPuzzle);
    setSelectedCell(null);
    setErrors(0);
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
            initialPuzzle={initialPuzzle}
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

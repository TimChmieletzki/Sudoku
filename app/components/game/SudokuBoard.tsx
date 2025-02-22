"use client";
interface SudokuBoardProps {
  board: number[][];
  selectedCell: [number, number] | null;
  initialPuzzle: number[][];
  solution: number[][];
  handleCellClick: (row: number, col: number) => void;
}

export function SudokuBoard({
  board,
  selectedCell,
  initialPuzzle,
  solution, // Neue Prop
  handleCellClick,
}: SudokuBoardProps) {
  return (
    <div className="grid grid-cols-9 gap-0 mb-4 aspect-square">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            className={`w-full h-full text-center border ${
              selectedCell &&
              selectedCell[0] === rowIndex &&
              selectedCell[1] === colIndex
                ? "bg-gray-200"
                : "bg-white"
            } ${
              initialPuzzle[rowIndex][colIndex] !== 0
                ? "text-gray-600 font-semibold text-xl"
                : cell !== 0 && cell !== solution[rowIndex][colIndex]
                  ? "text-red-600 font-semibold text-xl"
                  : "text-gray-400 font-semibold text-xl"
            } ${(rowIndex + 1) % 3 === 0 && rowIndex < 8 ? "border-b-2 border-b-gray-400" : ""} ${
              (colIndex + 1) % 3 === 0 && colIndex < 8
                ? "border-r-2 border-r-gray-400"
                : ""
            }`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            disabled={initialPuzzle[rowIndex][colIndex] !== 0}
          >
            {cell !== 0 ? cell : "\u00A0"}
          </button>
        )),
      )}
    </div>
  );
}

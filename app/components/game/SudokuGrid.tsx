"use client";

export function SudokuGrid() {
  return (
    <div className="grid grid-cols-9 gap-[1px] bg-neutral-200 p-[1px]">
      {Array(81)
        .fill(null)
        .map((_, index) => {
          const row = Math.floor(index / 9);
          const col = index % 9;
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);

          return (
            <div
              key={index}
              className={`
              flex h-10 w-10 items-center justify-center bg-white text-lg font-mono
              ${col === 8 ? "" : "border-r"}
              ${row === 8 ? "" : "border-b"}
              ${boxCol === 2 ? "border-r-2" : ""}
              ${boxRow === 2 ? "border-b-2" : ""}
              ${boxCol === 0 ? "border-l-2" : ""}
              ${boxRow === 0 ? "border-t-2" : ""}
              hover:bg-neutral-50 focus:bg-neutral-100
            `}
              tabIndex={0}
            >
              {/* Zahl wird hier später dynamisch eingefügt */}
            </div>
          );
        })}
    </div>
  );
}

import { DifficultyButton } from "./DifficultyButton";

export function MainContent() {
  return (
    <main className="flex flex-1 flex-col items-center px-6">
      <div className="mx-auto max-w-screen-xl text-center py-32">
        <h1 className="mb-4 text-6xl font-semibold tracking-tight">Sudoku</h1>
        <p className="mb-8 text-xl text-neutral-600">
          Trainiere dein Gehirn mit dem klassischen Zahlenrätsel
        </p>
        <DifficultyButton />
      </div>
    </main>
  );
}

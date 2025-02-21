import { DifficultyButton } from "./DifficultyButton";

export function MainContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-16 pb-8">
      <div className="mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-6xl font-bold tracking-tight">Sudoku</h1>
        <p className="mb-8 text-xl text-neutral-600">
          Trainiere dein Gehirn mit dem klassischen Zahlenrätsel
        </p>
        <DifficultyButton />
      </div>
    </main>
  );
}

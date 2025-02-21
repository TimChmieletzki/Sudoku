import { SudokuGrid } from "../components/game/SudokuGrid";
import { NumberPad } from "../components/game/NumberPad";
import { ControlButtons } from "../components/game/ControllButtons";

export default function GamePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <SudokuGrid />
      <div className="flex flex-col gap-4">
        <NumberPad />
        <div className="flex justify-center">
          <ControlButtons />
        </div>
      </div>
    </main>
  );
}

"use client";
import { Button } from "../ui/Button";

interface NumberPadProps {
  handleNumberClick: (num: number) => void;
}

export function NumberPad({ handleNumberClick }: NumberPadProps) {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <Button
          key={num}
          onClick={() => handleNumberClick(num)}
          className="w-full h-12 text-xl font-medium bg-white border border-neutral-200 hover:bg-neutral-200 text-neutral-600"
        >
          {num}
        </Button>
      ))}
    </div>
  );
}

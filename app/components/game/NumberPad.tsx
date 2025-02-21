import { Button } from "@/app/components/ui/button";

export function NumberPad() {
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-9 gap-2">
      {numbers.map((number) => (
        <Button
          key={number}
          variant="outline"
          size="icon"
          className="font-mono text-lg"
        >
          {number}
        </Button>
      ))}
    </div>
  );
}

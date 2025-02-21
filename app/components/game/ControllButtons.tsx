// components/game/ControlButtons.tsx
import { Button } from "@/app/components/ui/button";
import { Eraser, Undo2, Lightbulb } from "lucide-react";

export function ControlButtons() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon">
        <Eraser className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon">
        <Undo2 className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon">
        <Lightbulb className="h-5 w-5" />
      </Button>
    </div>
  );
}

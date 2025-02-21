"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function DifficultyButton() {
  const router = useRouter();

  const difficulties = [
    { name: "Einfach", value: "easy" },
    { name: "Mittel", value: "medium" },
    { name: "Schwer", value: "hard" },
    { name: "Experte", value: "expert" },
  ];

  const handleDifficultySelect = (difficulty: string) => {
    router.push(`/game/${difficulty}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-black text-white hover:bg-neutral-800">
          Spielen
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {difficulties.map((diff) => (
          <DropdownMenuItem
            key={diff.value}
            onClick={() => handleDifficultySelect(diff.value)}
          >
            {diff.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { ChevronDown, Trophy } from "lucide-react";

export function DifficultyButton() {
  const router = useRouter();

  const difficulties = [
    {
      name: "Einfach",
      value: "easy",
      description: "Perfekt zum Einstieg",
      color: "text-blue-600",
    },
    {
      name: "Mittel",
      value: "medium",
      description: "Für Fortgeschrittene",
      color: "text-green-600",
    },
    {
      name: "Schwer",
      value: "hard",
      description: "Echte Herausforderung",
      color: "text-yellow-600",
    },
    {
      name: "Experte",
      value: "expert",
      description: "Nur für Profis",
      color: "text-red-600",
    },
  ];

  const handleDifficultySelect = (difficulty: string) => {
    router.push(`/game/${difficulty}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-black text-white hover:bg-neutral-800 px-6 py-2">
          <Trophy className="mr-2 h-4 w-4" />
          Spielen
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {difficulties.map((diff, index) => (
          <div key={diff.value}>
            <DropdownMenuItem
              onClick={() => handleDifficultySelect(diff.value)}
              className="py-3 px-4 cursor-pointer hover:bg-neutral-100 flex flex-col items-start"
            >
              <span className={`font-medium ${diff.color}`}>{diff.name}</span>
              <span className="text-xs text-neutral-500">
                {diff.description}
              </span>
            </DropdownMenuItem>
            {index < difficulties.length - 1 && (
              <div className="h-px bg-neutral-200" />
            )}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

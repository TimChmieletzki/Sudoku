"use client";
import Link from "next/link";
import { useState } from "react";
import { Trophy, Star, Target, Shield, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DifficultyButton() {
  const [isOpen, setIsOpen] = useState(false);

  const difficulties = [
    {
      level: "easy",
      label: "Einfach",
      description: "Perfekt zum Einstieg",
      color: "text-blue-500",
      icon: <Star />,
    },
    {
      level: "medium",
      label: "Mittel",
      description: "Für Fortgeschrittene",
      color: "text-green-500",
      icon: <Target />,
    },
    {
      level: "hard",
      label: "Schwer",
      description: "Echte Herausforderung",
      color: "text-yellow-600",
      icon: <Shield />,
    },
    {
      level: "expert",
      label: "Experte",
      description: "Nur für Profis",
      color: "text-red-500",
      icon: <Award />,
    },
  ];

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-3 rounded-lg bg-black text-white font-medium shadow-lg hover:bg-neutral-800 hover:shadow-2xl flex items-center gap-2 transition-transform transform hover:scale-105"
      >
        <Trophy className="h-5 w-5" />
        Spielen
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 w-64 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
          >
            {difficulties.map((diff, index) => (
              <Link
                key={index}
                href={`/game/${diff.level}`}
                className="block px-4 py-3 hover:bg-neutral-100 transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className={`text-lg ${diff.color}`}>{diff.icon}</div>
                  <div>
                    <h3 className={`font-semibold text-left ${diff.color}`}>
                      {diff.label}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";
interface ErrorCounterProps {
  errors: number;
}

export function ErrorCounter({ errors }: ErrorCounterProps) {
  return (
    <div className="flex mb-4 h-12 text-center bg-blue-500 rounded-md items-center justify-center">
      <p className="text-white font-medium">Fehler: {errors} / 3</p>
    </div>
  );
}

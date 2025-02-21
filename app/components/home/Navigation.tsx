import Image from "next/image";

export function Navigation() {
  return (
    <header className="fixed top-0 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.svg"
            alt="Sudoku Logo"
            width={32}
            height={32}
            priority={true}
          />
          <span className="font-mono text-xl font-bold">Sudoku v0.7</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/TimChmieletzki/Sudoku"
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            Codebase
          </a>
        </div>
      </nav>
    </header>
  );
}

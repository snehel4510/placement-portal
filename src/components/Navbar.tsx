import { ModeToggle } from "./theme";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <div className="text-2xl font-bold tracking-tight">
          Placement Portal
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

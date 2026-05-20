import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <header className="relative z-10 bg-white/20 backdrop-blur-md border-b border-white/30 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
        <a href="/" className="text-lg font-semibold text-white shrink-0 drop-shadow hover:text-white/80 transition-colors">Pregnancy Planner</a>
        <NavLinks />
      </div>
    </header>
  );
}

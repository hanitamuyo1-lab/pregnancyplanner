import Link from "next/link";
import { Suspense } from "react";
import NavLinks from "./NavLinks";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/journal", label: "Journal" },
  { href: "/baby-shower", label: "Baby Shower" },
  { href: "/appointments", label: "Appointments" },
  { href: "/wellness", label: "Wellness" },
  { href: "/todo", label: "To-Do" },
  { href: "/budget", label: "Budget" },
  { href: "/activities", label: "Activities" },
  { href: "/about", label: "About" },
];

function NavFallback() {
  return (
    <nav className="flex flex-wrap gap-1">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="px-3 py-1 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default function Nav() {
  return (
    <header className="relative z-10 bg-white/20 backdrop-blur-md border-b border-white/30 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
        <span className="text-lg font-semibold text-white shrink-0 drop-shadow">Pregnancy Planner</span>
        <Suspense fallback={<NavFallback />}>
          <NavLinks />
        </Suspense>
      </div>
    </header>
  );
}

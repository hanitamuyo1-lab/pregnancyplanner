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
];

function NavFallback() {
  return (
    <nav className="flex flex-wrap gap-1">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="px-3 py-1 rounded-full text-sm text-pink-700 hover:bg-pink-100 transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default function Nav() {
  return (
    <header className="bg-pink-50 border-b border-pink-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
        <span className="text-lg font-semibold text-pink-700 shrink-0">Pregnancy Planner</span>
        <Suspense fallback={<NavFallback />}>
          <NavLinks />
        </Suspense>
      </div>
    </header>
  );
}

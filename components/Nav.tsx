"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="bg-pink-50 border-b border-pink-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
        <span className="text-lg font-semibold text-pink-700 shrink-0">Pregnancy Planner</span>
        <nav className="flex flex-wrap gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                pathname === href
                  ? "bg-pink-500 text-white"
                  : "text-pink-700 hover:bg-pink-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

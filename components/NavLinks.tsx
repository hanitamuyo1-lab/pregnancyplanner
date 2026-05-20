"use client";
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
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-wrap gap-1">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            pathname === href
              ? "bg-white text-pink-600 font-medium shadow-sm"
              : "text-white/90 hover:bg-white/20"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

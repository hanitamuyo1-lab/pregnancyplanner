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

export default function NavLinks() {
  const pathname = usePathname();
  return (
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
  );
}

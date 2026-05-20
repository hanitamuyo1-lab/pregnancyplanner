import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Pregnancy Planner Suite",
  description: "Your complete companion from bump to baby",
};

const sparkles = [
  { top: "8%",  left: "6%",  size: 14, opacity: 0.7 },
  { top: "15%", left: "82%", size: 12, opacity: 0.6 },
  { top: "28%", left: "44%", size: 10, opacity: 0.5 },
  { top: "38%", left: "91%", size: 13, opacity: 0.65 },
  { top: "52%", left: "18%", size: 11, opacity: 0.6 },
  { top: "61%", left: "67%", size: 14, opacity: 0.7 },
  { top: "72%", left: "35%", size: 10, opacity: 0.55 },
  { top: "80%", left: "55%", size: 12, opacity: 0.65 },
  { top: "88%", left: "10%", size: 13, opacity: 0.6 },
  { top: "93%", left: "78%", size: 11, opacity: 0.5 },
  { top: "5%",  left: "58%", size: 10, opacity: 0.45 },
  { top: "45%", left: "3%",  size: 12, opacity: 0.55 },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">

        {/* Sparkles */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
          {sparkles.map(({ top, left, size, opacity }, i) => (
            <svg
              key={i}
              style={{ position: "absolute", top, left, opacity, width: size, height: size }}
              viewBox="0 0 14 14"
              fill="none"
            >
              <line x1="7" y1="0" x2="7" y2="14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="0" y1="7" x2="14" y2="7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ))}
        </div>

        <Nav />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 relative z-10">{children}</main>
        <footer className="relative z-10 text-center text-xs text-black/60 py-5 space-y-1">
          <p className="font-medium text-black/80">Your complete companion from bump to baby</p>
          <p>
            <a href="/about" className="hover:text-black underline underline-offset-2 transition-colors">About</a>
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-black underline underline-offset-2 transition-colors">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="/terms" className="hover:text-black underline underline-offset-2 transition-colors">Terms & Conditions</a>
            <span className="mx-2">·</span>
            <a href="/faq" className="hover:text-black underline underline-offset-2 transition-colors">FAQ</a>
          </p>
        </footer>
      </body>
    </html>
  );
}

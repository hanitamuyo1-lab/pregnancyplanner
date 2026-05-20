import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Pregnancy Planner Suite",
  description: "Your complete companion from bump to baby",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#fff9fb] text-[#3d2a35]">
        <Nav />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">{children}</main>
        <footer className="text-center text-xs text-pink-300 py-4 space-y-1">
          <p>Your complete companion from bump to baby</p>
          <p>
            <a href="/about" className="hover:text-pink-500 underline underline-offset-2 transition-colors">About</a>
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-pink-500 underline underline-offset-2 transition-colors">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="/terms" className="hover:text-pink-500 underline underline-offset-2 transition-colors">Terms & Conditions</a>
            <span className="mx-2">·</span>
            <a href="/faq" className="hover:text-pink-500 underline underline-offset-2 transition-colors">FAQ</a>
          </p>
        </footer>
      </body>
    </html>
  );
}

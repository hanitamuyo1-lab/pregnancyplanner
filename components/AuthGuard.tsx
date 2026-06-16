"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

const PUBLIC_ROUTES = ["/sign-in", "/about", "/privacy", "/terms", "/faq", "/support"];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isPublic = PUBLIC_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/"));

  useEffect(() => {
    if (!loading && !user && !isPublic) {
      router.replace("/sign-in");
    }
  }, [user, loading, isPublic, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-pink-300 text-sm animate-pulse">Loading…</div>
      </div>
    );
  }

  if (!user && !isPublic) return null;

  return <>{children}</>;
}

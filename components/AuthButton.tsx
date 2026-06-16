"use client";
import { useAuth } from "@/lib/AuthContext";

export default function AuthButton() {
  const { user, loading, signOut } = useAuth();

  if (loading) return null;

  if (user) {
    return (
      <div className="flex items-center gap-2 ml-auto shrink-0">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName ?? ""}
            className="w-7 h-7 rounded-full border-2 border-white/40"
          />
        )}
        <span className="text-white/80 text-xs hidden sm:inline truncate max-w-[120px]">
          {user.displayName ?? user.email}
        </span>
        <button
          onClick={signOut}
          className="text-xs text-white/80 hover:text-white border border-white/30 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <a
      href="/sign-in"
      className="ml-auto shrink-0 text-xs bg-white text-pink-600 font-medium px-3 py-1.5 rounded-full shadow-sm hover:bg-pink-50 transition-colors"
    >
      Sign in
    </a>
  );
}

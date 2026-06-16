"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

type Mode = "signin" | "signup";

const firebaseErrorMessage = (code: string) => {
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Incorrect email or password.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    case "auth/popup-closed-by-user":
      return "";
    default:
      return "Something went wrong. Please try again.";
  }
};

export default function SignInPage() {
  const { user, loading, signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const router = useRouter();

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user) router.replace("/");
  }, [user, loading, router]);

  const clearError = () => setError("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setBusy(true);
    try {
      if (mode === "signin") {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password);
      }
      router.replace("/");
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? "";
      setError(firebaseErrorMessage(code));
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setBusy(true);
    try {
      await signInWithGoogle();
      router.replace("/");
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? "";
      const msg = firebaseErrorMessage(code);
      if (msg) setError(msg);
    } finally {
      setBusy(false);
    }
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setError("");
    setPassword("");
    setConfirmPassword("");
  };

  if (loading) return null;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🌸</div>
          <h1 className="text-3xl font-bold text-pink-900">Pregnancy Planner</h1>
          <p className="text-pink-600 mt-1 text-sm">Your complete companion from bump to baby</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-pink-100 overflow-hidden">

          {/* Mode tabs */}
          <div className="flex border-b border-pink-100">
            {(["signin", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className={`flex-1 py-4 text-sm font-medium transition-colors ${
                  mode === m
                    ? "text-pink-700 border-b-2 border-pink-500 bg-pink-50/50"
                    : "text-gray-400 hover:text-pink-500"
                }`}
              >
                {m === "signin" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <div className="p-8 space-y-5">

            {/* Google button */}
            <button
              onClick={handleGoogle}
              disabled={busy}
              className="w-full flex items-center justify-center gap-2.5 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-pink-100" />
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 h-px bg-pink-100" />
            </div>

            {/* Email / password form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-pink-500 uppercase tracking-wider mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => { setEmail(e.target.value); clearError(); }}
                  placeholder="you@example.com"
                  className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-gray-300"
                />
              </div>

              <div>
                <label className="block text-xs text-pink-500 uppercase tracking-wider mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => { setPassword(e.target.value); clearError(); }}
                  placeholder="••••••••"
                  minLength={6}
                  className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-gray-300"
                />
              </div>

              {mode === "signup" && (
                <div>
                  <label className="block text-xs text-pink-500 uppercase tracking-wider mb-1.5">Confirm Password</label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={e => { setConfirmPassword(e.target.value); clearError(); }}
                    placeholder="••••••••"
                    minLength={6}
                    className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-gray-300"
                  />
                </div>
              )}

              {error && (
                <p className="text-xs text-rose-500 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={busy}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-xl py-3 text-sm font-semibold hover:from-pink-600 hover:to-rose-500 transition-all disabled:opacity-50 shadow-sm"
              >
                {busy
                  ? "Please wait…"
                  : mode === "signin"
                  ? "Sign In"
                  : "Create Account"}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400">
              {mode === "signin" ? (
                <>No account?{" "}
                  <button onClick={() => switchMode("signup")} className="text-pink-500 hover:underline font-medium">
                    Create one
                  </button>
                </>
              ) : (
                <>Already have an account?{" "}
                  <button onClick={() => switchMode("signin")} className="text-pink-500 hover:underline font-medium">
                    Sign in

                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

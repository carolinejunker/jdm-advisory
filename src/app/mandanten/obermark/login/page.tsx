"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ObermarkLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const res = await fetch("/api/mandanten/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, client: "obermark" }),
      });
      const data = await res.json();

      if (data.success) {
        router.push("/mandanten/obermark");
      } else {
        setError(true);
        setPassword("");
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mandantenbereich — JDM Advisory</title>
      </head>
      <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-cream font-inter text-sm tracking-[0.35em] uppercase">
            JDM
          </span>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-md text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream mb-3">
            Mandantenbereich
          </h1>
          <p className="text-gold text-xl md:text-2xl font-playfair mb-8">
            Obermark
          </p>
          <p className="text-slate text-sm leading-relaxed mb-12 max-w-sm mx-auto">
            Dieser Bereich wurde exklusiv für Sie eingerichtet.
            <br />
            Bitte geben Sie Ihren Zugangscode ein.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Zugangscode"
                autoFocus
                className="w-full max-w-xs mx-auto block bg-transparent border border-navy-lighter text-cream text-center text-sm tracking-widest py-3 px-4 rounded-none focus:border-gold focus:outline-none transition-colors placeholder:text-slate/50"
              />
              {error && (
                <p className="text-red-400/80 text-xs mt-3 tracking-wide">
                  Ungültiger Zugangscode. Bitte versuchen Sie es erneut.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="bg-gold text-navy text-xs font-semibold uppercase tracking-[0.25em] py-3 px-10 hover:bg-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "…" : "Zugang"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-center">
          <p className="text-slate/40 text-xs">
            © {new Date().getFullYear()} JDM Advisory. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </>
  );
}

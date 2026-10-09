"use client";

import "./globals.css";

// Replaces the root layout when it fails, so it renders its own <html>.
export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-sm font-bold text-accent">500</p>
            <h1 className="mt-3 text-3xl font-bold">Something went wrong.</h1>
            <button
              type="button"
              onClick={reset}
              className="mt-8 h-12 px-6 rounded-lg bg-navy text-on-navy font-bold hover:bg-navy-raised transition-colors"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}

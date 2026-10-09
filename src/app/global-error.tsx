"use client";

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0b] text-white font-sans antialiased">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-6xl font-medium mb-4">500</h1>
            <p className="text-xl text-zinc-400 mb-8">Something went wrong</p>
            <button
              type="button"
              onClick={reset}
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

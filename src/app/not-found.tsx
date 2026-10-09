import Link from "next/link";
import "./globals.css";

// Fallback for requests outside the [locale] segment (paths the proxy does
// not localize). Unknown paths under a locale hit [locale]/[...rest] and get
// the localized 404 instead. Renders its own <html>: no layout wraps it.
export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-sm font-bold text-accent">404</p>
            <h1 className="mt-3 text-3xl font-bold">Page not found.</h1>
            <Link
              href="/"
              className="mt-8 inline-flex h-12 items-center px-6 rounded-lg bg-navy text-on-navy font-bold"
            >
              Go home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}

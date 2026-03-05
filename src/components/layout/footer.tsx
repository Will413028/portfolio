"use client";

import { Link } from "@/i18n/navigation";

const generalLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/work" },
  { label: "Blog", href: "/blog" },
];

const specificsLinks = [
  { label: "Guest Book", href: "/guestbook" },
  { label: "Bucket List", href: "/bucket-list" },
  { label: "Uses", href: "/uses" },
  { label: "Attribution", href: "/attribution" },
];

const moreLinks = [
  { label: "Book a call", href: "/contact" },
  { label: "Links", href: "/links" },
  { label: "RSS", href: "/rss" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                <span className="text-lg font-bold">AB</span>
              </div>
            </div>
            <p className="text-sm text-zinc-500">
              I'm Aayush - a full-stack developer, freelancer & problem solver.
              Thanks for checking out my site!
            </p>
          </div>

          {/* General */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              General
            </h4>
            <ul className="space-y-2">
              {generalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifics */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Specifics
            </h4>
            <ul className="space-y-2">
              {specificsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              More
            </h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © 2026 <span className="text-zinc-300">Aayush Bharti</span>. All
            rights reserved
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

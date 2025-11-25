"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Start" },
  { href: "/diensten", label: "Diensten" },
  { href: "/casussen", label: "Casussen" },
  { href: "/methodiek-ai", label: "Methodiek & AI" },
  { href: "/over", label: "Over het bureau" },
  { href: "/contact", label: "Contact" }
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <nav
      className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-slate-800"
      aria-label="Hoofdnavigatie"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="flex items-baseline gap-2 font-semibold tracking-wide focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
            aria-label="Ga naar Start"
          >
            <span className="text-base">Daremon</span>
            <span className="text-xs text-text-muted">Analytisch bureau</span>
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "px-1 py-1 transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded",
                    isActive(l.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-text-muted hover:text-text-main"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded p-2 text-text-muted hover:text-text-main focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-14 bg-background/90 backdrop-blur-md border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block w-full py-2 text-base",
                      isActive(l.href) ? "text-primary" : "text-text-main"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
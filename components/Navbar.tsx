import Link from "next/link";

const links = [
  { href: "/", label: "Start" },
  { href: "/diensten", label: "Diensten" },
  { href: "/casussen", label: "Casussen" },
  { href: "/methodiek-ai", label: "Methodiek & AI" },
  { href: "/over", label: "Over het bureau" },
  { href: "/contact", label: "Contact" }
] as const;

export default function Navbar() {
  return (
    <nav
      className="w-full sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur"
      aria-label="Hoofdnavigatie"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-wide text-text hover:text-accent focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
            aria-label="Ga naar Start"
          >
            Daremon
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-textMuted hover:text-text focus-visible:ring-2 focus-visible:ring-accent rounded px-1 py-1 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            {/* Minimalistyczny wariant — bez ozdobników; można rozwinąć w Sheet przy potrzebie */}
            <span className="text-textMuted text-xs">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
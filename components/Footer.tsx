export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-sm">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between text-textMuted">
        <p>&copy; {new Date().getFullYear()} Daremon. Alle rechten voorbehouden.</p>
        <p className="hidden sm:block">Analyse van systemen, instituties en narratieven.</p>
      </div>
    </footer>
  );
}
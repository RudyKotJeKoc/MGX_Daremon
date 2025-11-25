export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10 pt-6 text-xs text-slate-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p>© {new Date().getFullYear()} Daremon – Bureau voor Systeem- en Narratieve Analyse.</p>
        <p>Geen juridisch advies, wel een analytische kaart van het systeem.</p>
      </div>
    </footer>
  );
}
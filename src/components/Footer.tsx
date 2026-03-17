export default function Footer() {
  return (
    <footer className="py-8 border-t border-navy-lighter">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate/50 text-xs">
          © {new Date().getFullYear()} Jens Druckenmüller. Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center gap-4">
          <a href="/blog" className="text-slate/40 text-xs hover:text-slate transition-colors">
            Blog
          </a>
          <a href="/impressum" className="text-slate/40 text-xs hover:text-slate transition-colors">
            Impressum
          </a>
          <a href="/datenschutz" className="text-slate/40 text-xs hover:text-slate transition-colors">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}

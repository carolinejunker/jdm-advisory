export default function FooterDe() {
  return (
    <footer className="py-8 border-t border-navy-lighter">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate/50 text-xs">
          © {new Date().getFullYear()} Jens Druckenmüller. Alle Rechte vorbehalten.
        </p>
        <p className="text-slate/30 text-xs">
          Luxemburg · Dubai
        </p>
      </div>
    </footer>
  );
}

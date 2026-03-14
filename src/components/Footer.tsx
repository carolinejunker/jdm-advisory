export default function Footer() {
  return (
    <footer className="py-8 border-t border-navy-lighter">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate/50 text-xs">
          © {new Date().getFullYear()} Jens Druckenmüller. All rights reserved.
        </p>
        <p className="text-slate/30 text-xs">
          Luxembourg · Dubai
        </p>
      </div>
    </footer>
  );
}

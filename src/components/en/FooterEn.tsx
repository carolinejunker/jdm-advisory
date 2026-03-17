export default function FooterEn() {
  return (
    <footer className="py-8 border-t border-navy-lighter">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate/50 text-xs">
          © {new Date().getFullYear()} Jens Druckenmüller. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="/en/blog" className="text-slate/40 text-xs hover:text-slate transition-colors">
            Insights
          </a>
          <a href="/en/imprint" className="text-slate/40 text-xs hover:text-slate transition-colors">
            Imprint
          </a>
          <a href="/en/privacy" className="text-slate/40 text-xs hover:text-slate transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

interface BlogAuthorBoxProps {
  lang: "de" | "en";
}

const text = {
  de: {
    name: "Jens Druckenmüller, LL.M.",
    role: "Unternehmer & unabhängiger Berater",
    bio: "20 Jahre Erfahrung in Boardrooms, Due Diligence und Unternehmensberatung. Heute als unabhängiger Berater in Luxemburg — mit wechselnden Themen, aber immer dem gleichen Anspruch.",
  },
  en: {
    name: "Jens Druckenmüller, LL.M.",
    role: "Entrepreneur & Independent Advisor",
    bio: "20 years of experience in boardrooms, due diligence and advisory. Today as an independent advisor based in Luxembourg — the topics change, but the standards never do.",
  },
};

export default function BlogAuthorBox({ lang }: BlogAuthorBoxProps) {
  const t = text[lang];

  return (
    <section className="mt-16 pt-12 border-t border-navy-lighter">
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-full bg-navy-lighter flex items-center justify-center shrink-0">
          <span className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold">
            JD
          </span>
        </div>
        <div>
          <p className="text-cream font-semibold">{t.name}</p>
          <p className="text-gold/70 text-sm mb-2">{t.role}</p>
          <p className="text-slate text-sm leading-relaxed">{t.bio}</p>
        </div>
      </div>
    </section>
  );
}

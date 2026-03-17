import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByLang } from "@/content/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — JDM Advisory | Jens Druckenmüller",
  description:
    "Insights zu Unternehmensberatung, Compliance, Due Diligence und aktuellen regulatorischen Entwicklungen in der EU.",
  openGraph: {
    title: "Blog — JDM Advisory",
    description:
      "Insights zu Unternehmensberatung, Compliance und regulatorischen Entwicklungen.",
    url: "https://jdm-advisory.com/blog",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://jdm-advisory.com/blog",
    languages: { en: "https://jdm-advisory.com/en/blog" },
  },
};

export default function BlogPage() {
  const posts = getPostsByLang("de");

  return (
    <>
      <Nav locale="de" />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-cream mb-4">
            Blog
          </h1>
          <p className="text-slate text-lg mb-12 max-w-2xl">
            Analysen, Einordnungen und Handlungsempfehlungen — zu den Themen,
            die Unternehmer und Entscheider bewegen.
          </p>

          {posts.length === 0 ? (
            <p className="text-slate/60">
              Noch keine Artikel vorhanden. Bald mehr.
            </p>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block border border-navy-lighter hover:border-gold/30 rounded-lg p-8 transition-all duration-300 hover:bg-navy-light/50"
                >
                  <time className="text-slate/60 text-sm tracking-wide">
                    {new Date(post.date).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mt-2 mb-3 group-hover:text-gold transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-slate leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.keywords.slice(0, 4).map((kw) => (
                      <span
                        key={kw}
                        className="text-xs text-gold/60 border border-gold/15 rounded-full px-3 py-1"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

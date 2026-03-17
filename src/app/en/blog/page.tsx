import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByLang } from "@/content/blog";
import Nav from "@/components/Nav";
import FooterEn from "@/components/en/FooterEn";

export const metadata: Metadata = {
  title: "Blog — JDM Advisory | Jens Druckenmüller",
  description:
    "Insights on advisory, compliance, due diligence and regulatory developments in the EU.",
  openGraph: {
    title: "Blog — JDM Advisory",
    description:
      "Insights on advisory, compliance and regulatory developments.",
    url: "https://jdm-advisory.com/en/blog",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://jdm-advisory.com/en/blog",
    languages: { de: "https://jdm-advisory.com/blog" },
  },
};

export default function BlogPageEn() {
  const posts = getPostsByLang("en");

  return (
    <>
      <Nav locale="en" />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-cream mb-4">
            Insights
          </h1>
          <p className="text-slate text-lg mb-12 max-w-2xl">
            Analysis, perspectives and actionable guidance — on the topics that
            matter to business leaders and decision-makers.
          </p>

          {posts.length === 0 ? (
            <p className="text-slate/60">No articles yet. More coming soon.</p>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/en/blog/${post.slug}`}
                  className="group block border border-navy-lighter hover:border-gold/30 rounded-lg p-8 transition-all duration-300 hover:bg-navy-light/50"
                >
                  <time className="text-slate/60 text-sm tracking-wide">
                    {new Date(post.date).toLocaleDateString("en-US", {
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
      <FooterEn />
    </>
  );
}

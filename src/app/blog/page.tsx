import type { Metadata } from "next";
import { getPostsByLang } from "@/content/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogFilter from "@/components/blog/BlogFilter";

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

          <BlogFilter
            posts={posts.map((p) => ({
              slug: p.slug,
              title: p.title,
              description: p.description,
              date: p.date,
              keywords: p.keywords,
              category: p.category,
              featured: p.featured,
            }))}
            locale="de"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { getPostsByLang } from "@/content/blog";
import Nav from "@/components/Nav";
import FooterEn from "@/components/en/FooterEn";
import BlogFilter from "@/components/blog/BlogFilter";

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
            locale="en"
          />
        </div>
      </main>
      <FooterEn />
    </>
  );
}

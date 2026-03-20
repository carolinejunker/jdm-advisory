"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "all" | "equal-pay" | "ai-act" | "second-opinion" | "insights";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  category: string;
  featured?: boolean;
}

interface Props {
  posts: BlogPost[];
  locale: "de" | "en";
}

const categoryLabels: Record<Category, { de: string; en: string }> = {
  all: { de: "Alle", en: "All" },
  "equal-pay": { de: "Equal Pay", en: "Equal Pay" },
  "ai-act": { de: "AI Act", en: "AI Act" },
  "second-opinion": { de: "Second Opinion", en: "Second Opinion" },
  insights: { de: "Insights", en: "Insights" },
};

export default function BlogFilter({ posts, locale }: Props) {
  const [active, setActive] = useState<Category>("all");

  // Only show categories that have posts
  const availableCategories = Object.keys(categoryLabels).filter(
    (cat) => cat === "all" || posts.some((p) => p.category === cat)
  ) as Category[];

  const featuredPost = posts.find((p) => p.featured);
  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active);

  const blogBase = locale === "de" ? "/blog" : "/en/blog";
  const dateLocale = locale === "de" ? "de-DE" : "en-US";

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {availableCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
              active === cat
                ? "border-gold text-gold bg-gold/10"
                : "border-navy-lighter text-slate/60 hover:border-gold/30 hover:text-slate"
            }`}
          >
            {categoryLabels[cat][locale]}
          </button>
        ))}
      </div>

      {/* Featured Post (only when "all" is active and featured exists) */}
      {active === "all" && featuredPost && (
        <Link
          href={`${blogBase}/${featuredPost.slug}`}
          className="group block border-2 border-gold/30 hover:border-gold/60 rounded-lg p-8 md:p-10 mb-10 transition-all duration-300 hover:bg-navy-light/50 relative"
        >
          <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] text-gold/80 border border-gold/30 px-2 py-0.5 rounded-sm">
            Featured
          </span>
          <time className="text-slate/60 text-sm tracking-wide">
            {new Date(featuredPost.date).toLocaleDateString(dateLocale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-cream mt-2 mb-3 group-hover:text-gold transition-colors duration-200">
            {featuredPost.title}
          </h2>
          <p className="text-slate leading-relaxed text-lg">
            {featuredPost.description}
          </p>
          <span className="inline-block mt-4 text-xs uppercase tracking-[0.15em] text-gold/60 border border-gold/15 rounded-full px-3 py-1">
            {categoryLabels[featuredPost.category as Category]?.[locale] ?? featuredPost.category}
          </span>
        </Link>
      )}

      {/* Post Grid */}
      <div className="grid gap-8">
        {filtered
          .filter((p) => !(active === "all" && p.featured))
          .map((post) => (
            <Link
              key={post.slug}
              href={`${blogBase}/${post.slug}`}
              className="group block border border-navy-lighter hover:border-gold/30 rounded-lg p-8 transition-all duration-300 hover:bg-navy-light/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <time className="text-slate/60 text-sm tracking-wide">
                  {new Date(post.date).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-xs uppercase tracking-[0.15em] text-gold/60 border border-gold/15 rounded-full px-3 py-1">
                  {categoryLabels[post.category as Category]?.[locale] ?? post.category}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mt-1 mb-3 group-hover:text-gold transition-colors duration-200">
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

      {filtered.length === 0 && (
        <p className="text-slate/60 text-center py-12">
          {locale === "de" ? "Keine Artikel in dieser Kategorie." : "No articles in this category."}
        </p>
      )}
    </>
  );
}

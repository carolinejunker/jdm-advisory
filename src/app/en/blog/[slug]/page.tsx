import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByLang } from "@/content/blog";
import Nav from "@/components/Nav";
import FooterEn from "@/components/en/FooterEn";
import BlogFAQ from "@/components/blog/BlogFAQ";
import BlogAuthorBox from "@/components/blog/BlogAuthorBox";
import BlogJsonLd from "@/components/blog/BlogJsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPostsByLang("en");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) return {};

  return {
    title: `${post.title} — JDM Advisory`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://jdm-advisory.com/en/blog/${post.slug}`,
      type: "article",
      locale: "en_US",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://jdm-advisory.com/en/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPageEn({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) notFound();

  return (
    <>
      <Nav locale="en" />
      <BlogJsonLd post={post} baseUrl="https://jdm-advisory.com" />
      <main className="min-h-screen pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/en/blog"
            className="inline-flex items-center gap-2 text-slate/60 text-sm hover:text-gold transition-colors duration-200 mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Insights
          </Link>

          {/* Header */}
          <header className="mb-12">
            <time className="text-slate/60 text-sm tracking-wide">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-cream mt-3 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              {post.description}
            </p>
          </header>

          {/* Content */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* FAQ */}
          {post.faqItems.length > 0 && (
            <section className="mt-16 pt-12 border-t border-navy-lighter">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-8">
                Frequently Asked Questions
              </h2>
              <BlogFAQ items={post.faqItems} />
            </section>
          )}

          {/* Author */}
          <BlogAuthorBox lang="en" />

          {/* CTA */}
          <section className="mt-16 pt-12 border-t border-navy-lighter text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">
              Ready to prepare?
            </h2>
            <p className="text-slate mb-8 max-w-lg mx-auto">
              In a complimentary initial consultation, we&apos;ll assess where your
              organization stands and identify the right next steps.
            </p>
            <a
              href="/en#contact"
              className="inline-block border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </section>
        </article>
      </main>
      <FooterEn />
    </>
  );
}

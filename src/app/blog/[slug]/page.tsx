import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByLang } from "@/content/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogFAQ from "@/components/blog/BlogFAQ";
import BlogAuthorBox from "@/components/blog/BlogAuthorBox";
import BlogJsonLd from "@/components/blog/BlogJsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPostsByLang("de");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "de");
  if (!post) return {};

  return {
    title: `${post.title} — JDM Advisory`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://jdm-advisory.com/blog/${post.slug}`,
      type: "article",
      locale: "de_DE",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://jdm-advisory.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "de");
  if (!post) notFound();

  return (
    <>
      <Nav locale="de" />
      <BlogJsonLd post={post} baseUrl="https://jdm-advisory.com" />
      <main className="min-h-screen pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
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
            Zurück zum Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <time className="text-slate/60 text-sm tracking-wide">
              {new Date(post.date).toLocaleDateString("de-DE", {
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
                Häufig gestellte Fragen
              </h2>
              <BlogFAQ items={post.faqItems} />
            </section>
          )}

          {/* Disclaimer */}
          <div className="mt-12 p-4 border border-navy-lighter/50 rounded-sm">
            <p className="text-slate/40 text-xs leading-relaxed">
              <strong className="text-slate/50">Hinweis:</strong> Die Inhalte dieses Artikels dienen
              der allgemeinen Information und stellen keine Rechtsberatung dar. Für
              eine verbindliche Einschätzung Ihrer individuellen Situation wenden Sie
              sich bitte an einen Rechtsanwalt.
            </p>
          </div>

          {/* Author */}
          <BlogAuthorBox lang="de" />

          {/* CTA */}
          <section className="mt-16 pt-12 border-t border-navy-lighter text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">
              Sie möchten sich vorbereiten?
            </h2>
            <p className="text-slate mb-8 max-w-lg mx-auto">
              In einem unverbindlichen Erstgespräch klären wir, wo Ihr
              Unternehmen steht und welche Schritte sinnvoll sind.
            </p>
            <a
              href="/#contact"
              className="inline-block border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Erstgespräch vereinbaren
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

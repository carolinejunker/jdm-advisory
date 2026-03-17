import type { BlogPost } from "@/content/blog";

interface BlogJsonLdProps {
  post: BlogPost;
  baseUrl: string;
}

export default function BlogJsonLd({ post, baseUrl }: BlogJsonLdProps) {
  const langPrefix = post.lang === "en" ? "/en" : "";
  const articleUrl = `${baseUrl}${langPrefix}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: baseUrl,
      jobTitle:
        post.lang === "de"
          ? "Unternehmer & unabhängiger Berater"
          : "Entrepreneur & Independent Advisor",
    },
    publisher: {
      "@type": "Organization",
      name: "JDM Advisory",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    keywords: post.keywords.join(", "),
    inLanguage: post.lang === "de" ? "de-DE" : "en-US",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schemas: Record<string, any>[] = [articleSchema];

  if (post.faqItems.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
    schemas.push(faqSchema);
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

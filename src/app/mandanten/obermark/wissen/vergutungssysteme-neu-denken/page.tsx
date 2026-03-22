import type { Metadata } from "next";
import { getPostBySlug } from "@/content/blog/posts";
import WissenArticleLayout from "../WissenArticleLayout";

export const metadata: Metadata = {
  title: "Vergütungssysteme neu denken — JDM Advisory",
  description: "Warum Equal Pay Compliance nicht reicht und wie kluge Unternehmen ihre Vergütungssysteme jetzt modernisieren.",
  robots: { index: false, follow: false },
};

export default function VergutungssystemeNeuDenkenPage() {
  const post = getPostBySlug("vergutungssysteme-neu-denken", "de");
  if (!post) return null;

  return (
    <WissenArticleLayout
      title={post.title}
      content={post.content}
    />
  );
}

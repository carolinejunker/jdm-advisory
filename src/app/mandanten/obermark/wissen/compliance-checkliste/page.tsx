import type { Metadata } from "next";
import { getPostBySlug } from "@/content/blog/posts";
import WissenArticleLayout from "../WissenArticleLayout";

export const metadata: Metadata = {
  title: "Equal Pay Compliance Checkliste — JDM Advisory",
  description: "Sieben Sofortmaßnahmen für Geschäftsführer zur Vorbereitung auf die EU-Entgelttransparenzrichtlinie.",
  robots: { index: false, follow: false },
};

export default function ComplianceChecklistePage() {
  const post = getPostBySlug("equal-pay-compliance-checkliste-geschaeftsfuehrer", "de");
  if (!post) return null;

  return (
    <WissenArticleLayout
      title={post.title}
      content={post.content}
    />
  );
}

import type { Metadata } from "next";
import { getPostBySlug } from "@/content/blog/posts";
import WissenArticleLayout from "../WissenArticleLayout";

export const metadata: Metadata = {
  title: "Entgelttransparenz für KMU — JDM Advisory",
  description: "Warum die Entgelttransparenzrichtlinie auch für kleine Unternehmen gilt und wie die pragmatische Umsetzung gelingt.",
  robots: { index: false, follow: false },
};

export default function EntgelttransparenzKmuPage() {
  const post = getPostBySlug("entgelttransparenz-kmu", "de");
  if (!post) return null;

  return (
    <WissenArticleLayout
      title={post.title}
      content={post.content}
    />
  );
}

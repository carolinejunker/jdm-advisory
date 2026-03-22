import type { Metadata } from "next";
import { getPostBySlug } from "@/content/blog/posts";
import WissenArticleLayout from "../WissenArticleLayout";

export const metadata: Metadata = {
  title: "EU-Entgelttransparenzrichtlinie 2026 — JDM Advisory",
  description: "Vollständiger Überblick über die EU-Entgelttransparenzrichtlinie: Pflichten, Fristen, Sanktionen und was Unternehmen jetzt tun müssen.",
  robots: { index: false, follow: false },
};

export default function EntgelttransparenzrichtliniePage() {
  const post = getPostBySlug("entgelttransparenzrichtlinie-2026", "de");
  if (!post) return null;

  return (
    <WissenArticleLayout
      title={post.title}
      content={post.content}
    />
  );
}

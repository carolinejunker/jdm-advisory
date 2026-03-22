import type { Metadata } from "next";
import { getPostBySlug } from "@/content/blog/posts";
import WissenArticleLayout from "../WissenArticleLayout";

export const metadata: Metadata = {
  title: "Entgelt-Gap-Assessment — JDM Advisory",
  description: "Wie Sie Gehaltsunterschiede systematisch analysieren, die 5%-Schwelle verstehen und Ihre Vergütungsdaten richtlinienkonform aufbereiten.",
  robots: { index: false, follow: false },
};

export default function GapAssessmentPage() {
  const post = getPostBySlug("gap-assessment-gehaltsunterschiede-aufdecken", "de");
  if (!post) return null;

  return (
    <WissenArticleLayout
      title={post.title}
      content={post.content}
    />
  );
}

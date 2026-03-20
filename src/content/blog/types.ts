export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string YYYY-MM-DD
  author: string;
  keywords: string[];
  content: string; // HTML string
  lang: "de" | "en";
  category: "equal-pay" | "ai-act" | "second-opinion" | "insights";
  featured?: boolean;
  faqItems: FAQItem[];
}

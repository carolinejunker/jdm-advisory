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
  faqItems: FAQItem[];
}

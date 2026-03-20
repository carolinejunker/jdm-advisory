"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps blog HTML content and dynamically replaces
 * `<span data-deadline="YYYY-MM-DD"></span>` placeholders
 * with a live day-countdown.
 *
 * Example placeholder in post HTML:
 *   <span data-deadline="2026-06-07"></span>
 * Renders as e.g. "79 Tage" or "Die Frist ist abgelaufen."
 */
export default function DynamicBlogContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const els = ref.current.querySelectorAll<HTMLSpanElement>(
      "span[data-deadline]"
    );

    els.forEach((el) => {
      const dateStr = el.getAttribute("data-deadline");
      if (!dateStr) return;

      const deadline = new Date(`${dateStr}T00:00:00+02:00`); // CEST
      const now = new Date();
      const diff = Math.ceil(
        (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diff <= 0) {
        // After deadline — use fallback from data attribute or default
        el.textContent =
          el.getAttribute("data-fallback") || "Die Frist ist abgelaufen.";
      } else {
        el.textContent = `${diff} Tage`;
      }
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="prose-blog"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

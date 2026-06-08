"use client";

import { useEffect } from "react";

interface CalendlyWidgetProps {
  url: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-sm overflow-hidden"
      data-url={`${url}?hide_gdpr_banner=1&background_color=0d1b2a&text_color=e8e0d0&primary_color=c9a84c`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

export default function CalendlyWidget({ url }: { url: string }) {
  const iframeSrc = `${url}?hide_gdpr_banner=1&background_color=0d1b2a&text_color=e8e0d0&primary_color=c9a84c`;

  return (
    <div className="w-full rounded-sm overflow-hidden">
      <iframe
        src={iframeSrc}
        width="100%"
        height="700"
        frameBorder="0"
        title="Termin buchen"
        style={{ border: "none", minWidth: "320px" }}
      />
    </div>
  );
}

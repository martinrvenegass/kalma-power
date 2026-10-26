import { WhatsAppIcon } from "@/components/icons";

// CTA a WhatsApp (vía /whatsapp, que registra el origen) y a cotización.
export function blogWaLink(slug: string, placement: string) {
  const q = new URLSearchParams({
    src: `blog_${placement}`,
    utm_source: "blog",
    utm_medium: "articulo",
    utm_campaign: slug,
  });
  return `/whatsapp?${q.toString()}`;
}

export default function PostCTA({ slug, placement }: { slug: string; placement: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={blogWaLink(slug, placement)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        <WhatsAppIcon />
        Cotizar por WhatsApp
      </a>
      <a href="/#cotizacion" className="btn-outline">
        Solicitar cotización
      </a>
    </div>
  );
}

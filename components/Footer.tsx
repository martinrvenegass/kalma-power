import Logo from "./Logo";
import { COMPANY, waLink, telLink, mailLink } from "@/lib/config";
import { WhatsAppIcon, PhoneIcon, MailIcon } from "./icons";

const LINKS = [
  {
    title: "Compañía",
    items: [
      { label: "Sobre Kalma", href: "#sobre" },
      { label: "Industrias", href: "#industrias" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Catálogo",
    items: [
      { label: "10 – 50 kW · Línea ligera", href: "#rango-ligera" },
      { label: "250 – 500 kW · Línea industrial", href: "#rango-industrial" },
      { label: "1000 – 2500 kW · Alta potencia", href: "#rango-alta-potencia" },
      { label: "Equipos especiales", href: "#equipos" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "Solicitar cotización", href: "#cotizacion" },
      { label: "Asistente de cotización", href: "#top" },
      { label: "Aviso de privacidad", href: "#" },
    ],
  },
];

/**
 * Redes sociales: solo se muestran las que tengan URL real.
 * Para activar una red, pega su URL (por ejemplo la página de Facebook de KALMA POWER).
 */
const SOCIALS = [
  {
    label: "LinkedIn",
    url: "",
    path: "M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z",
  },
  {
    label: "Instagram",
    url: "",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-.99.05-1.53.21-1.89.35-.47.18-.81.4-1.17.76-.36.36-.58.7-.76 1.17-.14.36-.3.9-.35 1.89C3.01 8.5 3 8.85 3 12s.01 3.5.07 4.74c.05.99.21 1.53.35 1.89.18.47.4.81.76 1.17.36.36.7.58 1.17.76.36.14.9.3 1.89.35 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.99-.05 1.53-.21 1.89-.35.47-.18.81-.4 1.17-.76.36-.36.58-.7.76-1.17.14-.36.3-.9.35-1.89.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-.99-.21-1.53-.35-1.89a3.15 3.15 0 0 0-.76-1.17 3.15 3.15 0 0 0-1.17-.76c-.36-.14-.9-.3-1.89-.35C15.5 4.01 15.15 4 12 4zm0 3.07a4.93 4.93 0 1 1 0 9.86 4.93 4.93 0 0 1 0-9.86zm0 1.8a3.13 3.13 0 1 0 0 6.26 3.13 3.13 0 0 0 0-6.26zm5.15-.87a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z",
  },
  {
    label: "Facebook",
    url: "",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.47-.13-2.44 0-4.11 1.49-4.11 4.23V9.9H7.7V13h2.72v8z",
  },
  {
    label: "YouTube",
    url: "",
    path: "M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.5.5-5.5s0-3.6-.5-5.5zM9.6 15.6V8.4l6.2 3.6z",
  },
];

function Social({ path, label, url }: { path: string; label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-lima hover:text-lima"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 pt-16 text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-lima" />
      <div className="container-lun">
        <div className="grid gap-10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Plantas eléctricas diésel de 10 a 2500 kW, de distintas marcas, para
              la industria, el comercio y el respaldo.
            </p>

            <h4 className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-lima">
              Contacto directo
            </h4>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={mailLink()}
                className="inline-flex items-center gap-2.5 text-sm text-white/80 transition hover:text-white"
              >
                <MailIcon className="h-4 w-4 shrink-0 text-lima" />
                {COMPANY.email}
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2.5 text-sm text-white/80 transition hover:text-white"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-lima" />
                {COMPANY.whatsappNumber}
              </a>
              <a
                href={waLink("Hola KALMA POWER, quiero más información.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-bold text-lima"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                WhatsApp: {COMPANY.whatsappNumber}
              </a>
            </div>
          </div>

          {LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-lima">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/12 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} KALMA POWER. Todos los derechos reservados.
          </p>
          {SOCIALS.some((sn) => sn.url) && (
            <div className="flex gap-3">
              {SOCIALS.filter((sn) => sn.url).map((sn) => (
                <Social key={sn.label} label={sn.label} path={sn.path} url={sn.url} />
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

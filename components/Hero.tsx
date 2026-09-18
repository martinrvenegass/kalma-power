import { WhatsAppIcon, BoltIcon, PhoneIcon } from "./icons";
import { waLink, telLink } from "@/lib/config";

const STATS = [
  { value: "10–2500", label: "kW por planta" },
  { value: "24/7", label: "Servicio en sitio" },
  { value: "<10 s", label: "Transferencia automática" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 pb-20 pt-[128px] text-white sm:pt-[150px]"
    >
      <span aria-hidden className="hero-deco hero-deco--left" />
      <span aria-hidden className="hero-deco hero-deco--right" />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle,#4a7fd6,transparent 70%)" }}
      />

      <div className="container-lun relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Texto */}
          <div className="animate-fade-up">
            <span className="section-eyebrow text-lima">
              <BoltIcon className="h-4 w-4" />
              Plantas eléctricas industriales
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              El futuro es <span className="text-lima">la energía</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Generadores diésel de 10 a 2500 kW. Respaldo confiable,
              instalación rápida y soporte 24/7 en todo México.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href={telLink()} className="btn-white">
                <PhoneIcon className="h-4 w-4" />
                Llamar ahora
              </a>
              <a
                href={waLink("Hola KALMA POWER, quiero información sobre generadores.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-extrabold text-lima">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-white/60">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Imagen */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1636867759143-c28c1e909bd3?w=900&q=80&fit=crop"
                alt="Planta eléctrica industrial en operación"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-navy-900/90 p-4 shadow-xl backdrop-blur sm:left-8">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lima text-navy-900">
                <BoltIcon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-white/85">
                Distribución en todo México.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

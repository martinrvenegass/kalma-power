import DiagonalLines from "./DiagonalLines";
import { ArrowIcon, WhatsAppIcon } from "./icons";
import { POWER_RANGES, ENGINE_BRANDS } from "@/lib/data";
import { COMPANY, waLink } from "@/lib/config";

// Imagen de portada por rango (por id de POWER_RANGES)
const RANGE_IMAGES: Record<string, string> = {
  ligera: "https://images.unsplash.com/photo-1658260867231-535a1f7c98b9?w=1200&q=80&fit=crop",
  industrial: "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?w=1200&q=80&fit=crop",
  "alta-potencia": "https://images.unsplash.com/photo-1731244426166-4d230492b61a?w=1200&q=80&fit=crop",
};

export default function Catalog() {
  return (
    <section id="catalogo" className="relative overflow-hidden bg-navy-900 py-24 text-white">
      <DiagonalLines variant="onDark" angle={-14} />
      <div className="container-lun relative">
        <div className="max-w-2xl">
          <span className="section-eyebrow text-lima">Catálogo</span>
          <h2 className="section-title text-white">
            Rangos de potencia para cada operación
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Potencias desde 10 kW hasta 2500 kW en motores{" "}
            {ENGINE_BRANDS.join(", ")}. Cada planta se entrega calibrada, con
            tablero de transferencia y plan de mantenimiento. ¿No sabes qué
            capacidad necesitas? Te ayudamos a dimensionarla.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16">
          {POWER_RANGES.map((range) => (
            <div key={range.id} id={`rango-${range.id}`}>
              {/* Imagen de portada */}
              {RANGE_IMAGES[range.id] && (
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/12">
                  <img
                    src={RANGE_IMAGES[range.id]}
                    alt={`Plantas eléctricas ${range.label} — ${range.name}`}
                    className="h-48 w-full object-cover sm:h-60"
                  />
                </div>
              )}

              {/* Encabezado del rango */}
              <div className="flex flex-col gap-5 border-b border-white/12 pb-7 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-3xl font-extrabold text-lima sm:text-4xl">
                    {range.label}
                  </p>
                  <p className="mt-2 text-lg font-bold">{range.name}</p>
                  <p className="mt-1 max-w-xl text-sm text-white/65">
                    {range.tagline}
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="text-[0.7rem] uppercase tracking-wide text-white/45">
                    Motores disponibles
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 md:justify-end">
                    {range.engines.map((e) => (
                      <span
                        key={e}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/85"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Potencias exactas del rango */}
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                <span className="text-[0.7rem] uppercase tracking-wide text-white/45">
                  Potencias:
                </span>
                {range.powers.map((p) => (
                  <span key={p} className="font-mono font-semibold text-white/80">
                    {p}
                  </span>
                ))}
                <span className="text-white/40">·</span>
                <span className="text-white/55">{range.note}</span>
              </div>

              {/* Modelos con ficha técnica */}
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {range.models.map((m) => (
                  <article
                    key={m.slug}
                    className={`group relative flex flex-col rounded-2xl border p-7 transition hover:-translate-y-1 ${
                      m.featured
                        ? "border-lima bg-white/10"
                        : "border-white/12 bg-white/5 hover:border-white/25"
                    }`}
                  >
                    {m.featured && (
                      <span className="absolute right-5 top-5 rounded-full bg-lima px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-navy-900">
                        Más solicitada
                      </span>
                    )}
                    <div className="flex items-baseline gap-3">
                      <p className="text-4xl font-extrabold text-lima">{m.power}</p>
                      <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        {m.fuel}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold">{m.title}</h3>
                    <p className="mt-3 text-sm text-white/70">{m.description}</p>

                    <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 border-t border-white/12 pt-5 text-xs sm:grid-cols-2">
                      {m.specs.map((s) => (
                        <div key={s.label} className="flex flex-col">
                          <dt className="text-white/45">{s.label}</dt>
                          <dd className="font-medium text-white/90">{s.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-5 text-[0.7rem] uppercase tracking-wide text-white/45">
                      {m.sectors}
                    </p>

                    <a
                      href={waLink(
                        `Hola KALMA POWER, me interesa la planta de ${m.power} (${m.title}). ¿Me comparten ficha técnica y cotización?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lima transition group-hover:gap-3"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Cotizar por WhatsApp
                      <ArrowIcon />
                    </a>
                    <p className="mt-1.5 text-xs text-white/40">{COMPANY.whatsappNumber}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/12 bg-white/5 p-7 sm:flex sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm text-white/70">
            Las plantas se configuran a la medida: voltaje, frecuencia, autonomía,
            caseta y auxiliares según tu instalación. Indícanos la potencia exacta
            o el rango.
          </p>
          <a href="#cotizacion" className="btn-primary mt-4 sm:mt-0">
            Comparar y cotizar en línea
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

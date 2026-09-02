import DiagonalLines from "./DiagonalLines";
import { ArrowIcon, WhatsAppIcon } from "./icons";
import { PLANTS } from "@/lib/data";
import { waLink } from "@/lib/config";

export default function Catalog() {
  return (
    <section id="catalogo" className="relative overflow-hidden bg-navy-900 py-24 text-white">
      <DiagonalLines variant="onDark" angle={-14} />
      <div className="container-lun relative">
        <div className="max-w-2xl">
          <span className="section-eyebrow text-lima">Catálogo</span>
          <h2 className="section-title text-white">
            Seis rangos de potencia para cada operación
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Cada planta se entrega calibrada, con tablero de transferencia y plan
            de mantenimiento. ¿No sabes qué capacidad necesitas? Te ayudamos a
            dimensionarla.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANTS.map((p) => (
            <article
              key={p.slug}
              className={`group relative flex flex-col rounded-2xl border p-7 transition hover:-translate-y-1 ${
                p.highlight
                  ? "border-lima bg-white/10"
                  : "border-white/12 bg-white/5 hover:border-white/25"
              }`}
            >
              {p.highlight && (
                <span className="absolute right-5 top-5 rounded-full bg-lima px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-navy-900">
                  Más solicitada
                </span>
              )}
              <p className="text-4xl font-extrabold text-lima">{p.power}</p>
              <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-white/70">{p.description}</p>

              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/12 pt-4 text-xs">
                {p.specs.map((s) => (
                  <div key={s.label}>
                    <dt className="text-white/45">{s.label}</dt>
                    <dd className="font-semibold text-white/90">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-[0.7rem] uppercase tracking-wide text-white/45">
                {p.uses}
              </p>

              <a
                href={waLink(
                  `Hola LUNAAN ENERGY, me interesa la planta de ${p.power} (${p.title}). ¿Me comparten cotización?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lima transition group-hover:gap-3"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Cotizar esta planta
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a href="#cotizacion" className="btn-primary">
            Comparar y cotizar en línea
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

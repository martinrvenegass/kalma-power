import DiagonalLines from "./DiagonalLines";
import { ArrowIcon, WhatsAppIcon } from "./icons";
import {
  PORTABLES_INTRO,
  PORTABLE_MODELS,
  PORTABLE_COMMON,
  PORTABLE_USES,
} from "@/lib/portables";
import { COMPANY, waLink } from "@/lib/config";

export default function PortableGenerators() {
  return (
    <section id="portatiles" className="relative overflow-hidden bg-sky-light py-24">
      <DiagonalLines angle={-14} />
      <div className="container-lun relative">
        <div className="max-w-3xl">
          <span className="section-eyebrow">{PORTABLES_INTRO.eyebrow}</span>
          <h2 className="section-title">{PORTABLES_INTRO.title}</h2>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-lima px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-navy-900">
              {PORTABLES_INTRO.badge}
            </span>
            <span className="text-sm font-semibold text-navy-900/70">
              {PORTABLES_INTRO.arrival}
            </span>
          </div>
          <p className="mt-5 text-lg text-navy-900/70">{PORTABLES_INTRO.text}</p>
          <p className="mt-4 rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900/70">
            {PORTABLES_INTRO.notice}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PORTABLE_MODELS.map((m) => (
            <article
              key={m.slug}
              id={`portatil-${m.slug}`}
              className="flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition hover:-translate-y-1 hover:border-navy-700/30 hover:shadow-xl hover:shadow-navy-900/5"
            >
              <figure className="m-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/portatiles/${m.slug}.webp`}
                  alt={`Imagen ilustrativa del generador portátil ${m.model}`}
                  loading="lazy"
                  className="h-48 w-full bg-white object-contain"
                />
              </figure>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-900/50">
                  Gasolina · Portátil
                </p>
                <h3 className="mt-1 text-xl font-bold text-navy-900">{m.model}</h3>
                <p className="mt-2 text-3xl font-extrabold text-navy-700">
                  {m.nominal}
                  <span className="ml-2 text-sm font-semibold text-navy-900/50">
                    nominal · {m.max} máx.
                  </span>
                </p>
                <p className="mt-2 text-sm text-navy-900/65">{m.highlights}</p>

                <dl className="mt-5 grid gap-y-2.5 border-t border-navy-900/10 pt-5 text-xs">
                  {m.specs.map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <dt className="text-navy-900/45">{s.label}</dt>
                      <dd className="font-medium text-navy-900/90">{s.value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={waLink("web_portatiles")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 justify-center"
                >
                  <WhatsAppIcon />
                  Solicitar información
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl border border-navy-900/10 bg-white p-8 md:grid-cols-2">
          <div>
            <h3 className="text-base font-bold text-navy-900">Toda la línea incluye</h3>
            <ul className="mt-3 space-y-2">
              {PORTABLE_COMMON.map((i) => (
                <li key={i} className="flex gap-2.5 text-sm text-navy-900/70">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-lima" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-navy-900">Aplicaciones</h3>
            <ul className="mt-3 space-y-2">
              {PORTABLE_USES.map((i) => (
                <li key={i} className="flex gap-2.5 text-sm text-navy-900/70">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-lima" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={waLink("web_portatiles")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon />
            Avísame cuando estén disponibles
            <ArrowIcon />
          </a>
          <p className="mt-2 text-xs text-navy-900/50">{COMPANY.whatsappNumber}</p>
        </div>
      </div>
    </section>
  );
}

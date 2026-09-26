import DiagonalLines from "./DiagonalLines";
import { IndustryIcon } from "./icons";
import { INDUSTRIES } from "@/lib/data";

export default function Industries() {
  return (
    <section id="industrias" className="relative overflow-hidden bg-sky-light py-24">
      <DiagonalLines angle={-12} />
      <div className="container-lun relative">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Industrias</span>
          <h2 className="section-title">Soluciones por sector</h2>
          <p className="mt-5 text-lg text-navy-900/70">
            Te asesoramos para elegir la capacidad, la caseta y la configuración
            adecuadas al contexto real de tu industria.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <article
              key={ind.slug}
              className="group flex flex-col rounded-2xl border border-navy-900/10 bg-white p-7 transition hover:-translate-y-1 hover:border-navy-700/30 hover:shadow-xl hover:shadow-navy-900/5"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-lima transition group-hover:bg-navy-700">
                <IndustryIcon name={ind.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{ind.name}</h3>
              <p className="mt-2 text-sm text-navy-900/65">{ind.description}</p>
              <div className="mt-5 h-1 w-10 rounded-full bg-lima transition group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

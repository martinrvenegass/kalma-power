import DiagonalLines from "./DiagonalLines";
import { CheckIcon } from "./icons";
import { DIFERENCIADORES } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-24">
      <DiagonalLines angle={-14} />
      <div className="container-lun relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="section-eyebrow">Sobre Lunaan</span>
            <h2 className="section-title">
              Energía confiable, ingeniería sin concesiones
            </h2>
            <p className="mt-6 text-lg text-navy-900/70">
              LUNAAN ENERGY es una compañía especializada en soluciones de
              generación eléctrica para la industria. Acompañamos a nuestros
              clientes desde el estudio de carga hasta la puesta en marcha y el
              servicio post-venta, con un enfoque premium y minimalista: lo
              esencial, hecho impecablemente.
            </p>
            <p className="mt-4 text-lg text-navy-900/70">
              Trabajamos con plantas de 10 kW a 2500 kW, en configuraciones de
              respaldo, continuas y en paralelo, adaptadas a cada sector.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {["+200 proyectos", "Cobertura nacional", "Refacciones garantizadas"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900"
                  >
                    <CheckIcon className="h-5 w-5 text-sky" />
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {DIFERENCIADORES.map((d, i) => (
              <div
                key={d.title}
                className={`rounded-2xl border border-navy-900/10 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5 ${
                  i % 2 === 0 ? "bg-sky-light" : "bg-white"
                }`}
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-lima" />
                <h3 className="text-base font-bold text-navy-900">{d.title}</h3>
                <p className="mt-2 text-sm text-navy-900/65">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

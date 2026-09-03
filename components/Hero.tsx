import { ArrowIcon, WhatsAppIcon, BoltIcon } from "./icons";
import { waLink } from "@/lib/config";

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
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <span className="section-eyebrow text-lima">
              <BoltIcon className="h-4 w-4" />
              Plantas eléctricas industriales
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              El futuro es <span className="text-lima">la energía</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              En LUNAAN ENERGY diseñamos, instalamos y damos servicio a plantas
              eléctricas de 10 kW a 2500 kW para que tu operación nunca se detenga.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#cotizacion" className="btn-primary">
                Solicitar cotización
                <ArrowIcon />
              </a>
              <a
                href={waLink("Hola LUNAAN ENERGY, quiero asesoría sobre una planta eléctrica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                <WhatsAppIcon />
                Hablar por WhatsApp
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

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
              <div className="absolute -left-3 top-8 h-16 w-1.5 rounded-full bg-lima" />
              <p className="text-sm uppercase tracking-[0.2em] text-lima">
                Energía continua
              </p>
              <p className="mt-3 text-2xl font-bold leading-snug">
                Respaldo y generación primaria para minería, salud, data centers e
                industria.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {[
                  "Dimensionamiento según tu curva de carga",
                  "Cabinas insonorizadas y bajas emisiones",
                  "Monitoreo remoto IoT y mantenimiento predictivo",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lima" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

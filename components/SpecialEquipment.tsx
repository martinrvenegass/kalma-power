import DiagonalLines from "./DiagonalLines";
import { SpecialIcon, ArrowIcon, WhatsAppIcon } from "./icons";
import { SPECIAL_EQUIPMENT } from "@/lib/data";
import { COMPANY, waLink } from "@/lib/config";

export default function SpecialEquipment() {
  const { intro, categories, closing } = SPECIAL_EQUIPMENT;

  return (
    <section id="equipos" className="relative overflow-hidden bg-white py-24">
      <DiagonalLines angle={-14} />
      <div className="container-lun relative">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Equipos especiales</span>
          <h2 className="section-title">
            Equipos especiales y soluciones a la medida
          </h2>
          <p className="mt-5 text-lg text-navy-900/70">{intro}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:border-navy-700/30 hover:shadow-xl hover:shadow-navy-900/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-lima">
                <SpecialIcon name={cat.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-900">
                {cat.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-snug text-navy-900/65"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-lima" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-navy-900/10 bg-sky-light p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-navy-900">{closing.title}</h3>
            <p className="mt-2 max-w-2xl text-sm text-navy-900/70">
              {closing.text}
            </p>
          </div>
          <div className="shrink-0 text-center">
            <a
              href={waLink(
                "Hola LUNAAN ENERGY, tengo un proyecto que requiere una configuración especial. ¿Podemos revisar los detalles?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon />
              Cotizar por WhatsApp
              <ArrowIcon />
            </a>
            <p className="mt-2 text-xs text-navy-900/50">{COMPANY.whatsappNumber}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

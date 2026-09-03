import DiagonalLines from "./DiagonalLines";
import QuoteForm from "./QuoteForm";
import { WhatsAppIcon, ArrowIcon } from "./icons";
import { COMPANY, waLink } from "@/lib/config";

export default function Contact() {
  return (
    <>
      {/* Cotización */}
      <section id="cotizacion" className="relative overflow-hidden bg-white py-24">
        <DiagonalLines angle={-14} corner="bottom-right" />
        <div className="container-lun relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">Cotización</span>
            <h2 className="section-title">Recibe tu propuesta en 24 horas</h2>
            <p className="mt-5 text-lg text-navy-900/70">
              Cuéntanos qué necesitas y un ingeniero de LUNAAN ENERGY preparará una
              cotización con la planta adecuada, tablero de transferencia y plan de
              servicio.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Asesoría técnica sin costo",
                "Opciones de compra, renta y renta con opción a compra",
                "Entrega e instalación en toda la república",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-navy-900/80">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lima" />
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* WhatsApp destacado */}
      <section
        id="contacto"
        className="relative overflow-hidden bg-navy-900 py-20 text-white"
      >
        <DiagonalLines variant="onDark" angle={-16} />
        <div className="container-lun relative">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-lima/40 bg-white/5 p-8 backdrop-blur md:flex-row md:items-center md:p-10">
            <div>
              <span className="section-eyebrow text-lima">Contacto directo</span>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Habla ahora con un asesor por WhatsApp
              </h2>
              <p className="mt-3 text-white/70">
                {COMPANY.whatsappNumber} · Lun a Sáb 8:00–19:00 · Respuesta inmediata
              </p>
            </div>
            <a
              href={waLink(
                "Hola LUNAAN ENERGY, quiero hablar con un asesor sobre plantas eléctricas."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              <WhatsAppIcon />
              Abrir WhatsApp
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

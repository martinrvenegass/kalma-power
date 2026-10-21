"use client";

import { useState } from "react";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/config";

type FormState = {
  necesidad: string;
  potencia: string;
};

const EMPTY: FormState = { necesidad: "", potencia: "" };

const withPeriod = (t: string) => (/[.!?]$/.test(t) ? t : `${t}.`);

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const update = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setError("");
  };

  // Mensaje que llega a WhatsApp: escrito como lo diría una persona.
  const buildMessage = () => {
    const necesidad = form.necesidad.trim();
    const potencia = form.potencia.trim().replace(/[.!?]$/, "");
    const base = `Hola KALMA POWER. ${withPeriod(necesidad)}`;
    // Si ya dijo la potencia en su texto, no se repite.
    return potencia && !necesidad.toLowerCase().includes(potencia.toLowerCase())
      ? `${base} La potencia que tengo en mente es ${potencia}.`
      : base;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.necesidad.trim()) {
      setError("Cuéntanos brevemente qué necesitas");
      return;
    }
    setSent(true);
    window.open(waLink("web_form", buildMessage()), "_blank", "noopener,noreferrer");
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-lima bg-white p-8 text-center shadow-xl shadow-navy-900/5">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-lima text-navy-900">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy-900">¡Gracias!</h3>
        <p className="mt-2 text-sm text-navy-900/65">
          Para continuar, envía el mensaje que se abrió en WhatsApp.
          Si no se abrió, usa el botón de abajo.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={waLink("web_form", buildMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon />
            Abrir WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setForm(EMPTY);
              setSent(false);
            }}
            className="btn-outline"
          >
            Escribir otro mensaje
          </button>
        </div>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-navy-900/40 focus:border-navy-700 focus:ring-2 focus:ring-navy-700/15";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-navy-900/10 bg-white p-7 shadow-xl shadow-navy-900/5 sm:p-9"
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-900/70">
            ¿Qué necesitas?
          </label>
          <textarea
            rows={4}
            maxLength={500}
            className={`${field} resize-none ${error ? "border-red-400" : "border-navy-900/15"}`}
            value={form.necesidad}
            onChange={(e) => update("necesidad", e.target.value)}
            placeholder="Ej. Necesito una planta de emergencia para mi negocio, o quiero respaldar bombas y refrigeración."
          />
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-900/70">
            Potencia que tienes en mente (opcional)
          </label>
          <input
            maxLength={60}
            className={`${field} border-navy-900/15`}
            value={form.potencia}
            onChange={(e) => update("potencia", e.target.value)}
            placeholder="Ej. 100 kW. Si no la sabes, déjalo en blanco"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Continuar en WhatsApp
        <ArrowIcon />
      </button>
      <p className="mt-3 text-xs text-navy-900/50">
        Se abrirá WhatsApp con tu mensaje. Revísalo y envíalo para continuar.
      </p>
    </form>
  );
}

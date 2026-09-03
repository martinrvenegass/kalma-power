"use client";

import { useState } from "react";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "./icons";
import { POWER_OPTIONS, INDUSTRIES } from "@/lib/data";
import { waLink } from "@/lib/config";

type FormState = {
  nombre: string;
  email: string;
  potencia: string;
  industria: string;
  mensaje: string;
};

const EMPTY: FormState = {
  nombre: "",
  email: "",
  potencia: "",
  industria: "",
  mensaje: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Correo no válido";
    if (!form.potencia) e.potencia = "Selecciona una potencia";
    if (!form.industria) e.industria = "Selecciona una industria";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildMessage = () =>
    `Solicitud de cotización — LUNAAN ENERGY\n\n` +
    `Nombre: ${form.nombre}\n` +
    `Email: ${form.email}\n` +
    `Potencia: ${form.potencia}\n` +
    `Industria: ${form.industria}\n` +
    (form.mensaje ? `Detalle: ${form.mensaje}\n` : "");

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer");
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-lima bg-white p-8 text-center shadow-xl shadow-navy-900/5">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-lima text-navy-900">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy-900">
          ¡Gracias, {form.nombre.split(" ")[0]}!
        </h3>
        <p className="mt-2 text-sm text-navy-900/65">
          Recibimos tu solicitud para una planta de {form.potencia} en el sector{" "}
          {form.industria}. Un asesor te contactará en breve. Si se abrió WhatsApp,
          puedes enviar el mensaje ya redactado.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={waLink(buildMessage())}
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
            Nueva cotización
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-900/70">
            Nombre completo
          </label>
          <input
            className={`${field} ${errors.nombre ? "border-red-400" : "border-navy-900/15"}`}
            value={form.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            placeholder="Tu nombre"
          />
          {errors.nombre && <p className="mt-1 text-xs text-red-500">{errors.nombre}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-900/70">
            Correo electrónico
          </label>
          <input
            type="email"
            className={`${field} ${errors.email ? "border-red-400" : "border-navy-900/15"}`}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="nombre@empresa.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-900/70">
            Potencia requerida
          </label>
          <select
            className={`${field} ${errors.potencia ? "border-red-400" : "border-navy-900/15"}`}
            value={form.potencia}
            onChange={(e) => update("potencia", e.target.value)}
          >
            <option value="">Selecciona…</option>
            {POWER_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.potencia && (
            <p className="mt-1 text-xs text-red-500">{errors.potencia}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-900/70">
            Industria
          </label>
          <select
            className={`${field} ${errors.industria ? "border-red-400" : "border-navy-900/15"}`}
            value={form.industria}
            onChange={(e) => update("industria", e.target.value)}
          >
            <option value="">Selecciona…</option>
            {INDUSTRIES.map((i) => (
              <option key={i.slug} value={i.name}>
                {i.name}
              </option>
            ))}
            <option value="Otra">Otra</option>
          </select>
          {errors.industria && (
            <p className="mt-1 text-xs text-red-500">{errors.industria}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-900/70">
            Detalle (opcional)
          </label>
          <textarea
            rows={3}
            className={`${field} border-navy-900/15 resize-none`}
            value={form.mensaje}
            onChange={(e) => update("mensaje", e.target.value)}
            placeholder="Uso continuo o respaldo, ubicación, plazo…"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Enviar solicitud
        <ArrowIcon />
      </button>
      <p className="mt-3 text-xs text-navy-900/50">
        Al enviar aceptas ser contactado por LUNAAN ENERGY. No compartimos tus datos.
      </p>
    </form>
  );
}

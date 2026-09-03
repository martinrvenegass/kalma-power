"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, WhatsAppIcon, ArrowIcon } from "./icons";
import Logo from "./Logo";
import { waLink } from "@/lib/config";

type Question = {
  id: string;
  text: string;
  options?: string[];
  freeText?: boolean;
  placeholder?: string;
};

// 8 preguntas de calificación de leads
const QUESTIONS: Question[] = [
  { id: "nombre", text: "¡Hola! Soy Luna, la asistente de LUNAAN ENERGY. ¿Con quién tengo el gusto?", freeText: true, placeholder: "Tu nombre" },
  { id: "empresa", text: "Un placer, {nombre}. ¿Para qué empresa u organización buscas la planta?", freeText: true, placeholder: "Nombre de la empresa" },
  {
    id: "industria",
    text: "¿A qué sector pertenece?",
    options: ["Minería", "Hotelería", "Data Center", "Construcción", "Hospital", "Manufactura", "Otro"],
  },
  {
    id: "potencia",
    text: "¿Qué rango de potencia necesitas? (o indícame la potencia exacta)",
    options: ["10 – 50 kW", "250 – 500 kW", "1000 – 2500 kW", "Potencia exacta (la indico)", "No estoy seguro"],
  },
  {
    id: "uso",
    text: "¿El uso será como energía principal (continua) o de respaldo (emergencia)?",
    options: ["Energía principal / continua", "Respaldo / emergencia", "Ambos"],
  },
  {
    id: "plazo",
    text: "¿En qué plazo necesitas tener la planta operando?",
    options: ["Inmediato (0–1 mes)", "1–3 meses", "3–6 meses", "Solo estoy cotizando"],
  },
  {
    id: "modalidad",
    text: "¿Qué modalidad te interesa?",
    options: ["Compra", "Renta", "Renta con opción a compra", "Aún no lo sé"],
  },
  { id: "contacto", text: "Por último, ¿a qué correo o teléfono te enviamos la propuesta?", freeText: true, placeholder: "correo@empresa.com / teléfono" },
];

type Msg = { from: "bot" | "user"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Inicializa el primer mensaje al abrir
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: QUESTIONS[0].text }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, done]);

  const current = QUESTIONS[step];

  const advance = (value: string) => {
    const q = QUESTIONS[step];
    const nextAnswers = { ...answers, [q.id]: value };
    setAnswers(nextAnswers);
    setMessages((m) => [...m, { from: "user", text: value }]);

    const nextStep = step + 1;
    if (nextStep < QUESTIONS.length) {
      const nextQ = QUESTIONS[nextStep];
      const text = nextQ.text.replace(
        "{nombre}",
        nextAnswers.nombre?.split(" ")[0] || ""
      );
      setTimeout(() => {
        setMessages((m) => [...m, { from: "bot", text }]);
        setStep(nextStep);
      }, 350);
    } else {
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          {
            from: "bot",
            text: `¡Gracias, ${nextAnswers.nombre?.split(" ")[0] || ""}! Con esta información un asesor de LUNAAN ENERGY preparará tu propuesta. Puedes enviarnos el resumen por WhatsApp ahora mismo:`,
          },
        ]);
        setStep(nextStep);
        setDone(true);
      }, 350);
    }
    setInput("");
  };

  const summary = () => {
    const a = answers;
    return (
      `Lead calificado — Chat LUNAAN ENERGY\n\n` +
      `Nombre: ${a.nombre || "-"}\n` +
      `Empresa: ${a.empresa || "-"}\n` +
      `Industria: ${a.industria || "-"}\n` +
      `Potencia: ${a.potencia || "-"}\n` +
      `Uso: ${a.uso || "-"}\n` +
      `Plazo: ${a.plazo || "-"}\n` +
      `Modalidad: ${a.modalidad || "-"}\n` +
      `Contacto: ${a.contacto || "-"}`
    );
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setMessages([{ from: "bot", text: QUESTIONS[0].text }]);
    setDone(false);
    setInput("");
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-lima text-navy-900 shadow-lg shadow-navy-900/25 transition hover:scale-105"
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
      >
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <span className="relative">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4V6a2 2 0 0 1 2-2Z" />
            </svg>
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-lima bg-navy-900" />
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[60] flex h-[560px] w-[calc(100vw-2.5rem)] max-w-[380px] animate-slide-in flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-2xl shadow-navy-900/20">
          {/* Header */}
          <div className="flex items-center justify-between bg-navy-900 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Logo variant="light" className="[&_span]:!leading-none" />
            </div>
            <button onClick={() => setOpen(false)} aria-label="Cerrar">
              <CloseIcon className="h-5 w-5 text-white/80 hover:text-white" />
            </button>
          </div>
          <div className="bg-lima px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide text-navy-900">
            Asistente IA · Calificación en 8 pasos
          </div>

          {/* Mensajes */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-sky-light/50 px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${
                    m.from === "user"
                      ? "bg-navy-700 text-white"
                      : "border border-navy-900/10 bg-white text-navy-900"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {done && (
              <div className="space-y-2 pt-1">
                <a
                  href={waLink(summary())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full !py-2.5 text-xs"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Enviar resumen por WhatsApp
                </a>
                <button
                  onClick={reset}
                  className="w-full rounded-full border border-navy-900/20 py-2 text-xs font-bold uppercase tracking-wide text-navy-900/70 hover:bg-white"
                >
                  Reiniciar
                </button>
              </div>
            )}
          </div>

          {/* Input / opciones */}
          {!done && current && (
            <div className="border-t border-navy-900/10 bg-white p-3">
              {current.options ? (
                <div className="flex flex-wrap gap-2">
                  {current.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => advance(opt)}
                      className="rounded-full border border-navy-700/30 bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 transition hover:bg-navy-700 hover:text-white"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (input.trim()) advance(input.trim());
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={current.placeholder || "Escribe tu respuesta…"}
                    className="flex-1 rounded-full border border-navy-900/15 px-4 py-2 text-sm outline-none focus:border-navy-700"
                  />
                  <button
                    type="submit"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-700 text-white disabled:opacity-40"
                    disabled={!input.trim()}
                    aria-label="Enviar"
                  >
                    <ArrowIcon />
                  </button>
                </form>
              )}
              <p className="mt-2 text-center text-[0.65rem] text-navy-900/40">
                Paso {Math.min(step + 1, QUESTIONS.length)} de {QUESTIONS.length}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

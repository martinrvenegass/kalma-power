"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, WhatsAppIcon, ArrowIcon, PhoneIcon, MailIcon } from "./icons";
import Logo from "./Logo";
import { COMPANY, waLink, telLink, mailLink } from "@/lib/config";

type Stage = "purpose" | "kind" | "detail" | "done";
type Kind = "potencia" | "cargas" | "no-se" | "cotizacion";

// Opciones que el cliente ve (la clasificación interna no se muestra).
const KINDS: { id: Kind; label: string }[] = [
  { id: "potencia", label: "Ya sé la potencia que necesito" },
  { id: "cargas", label: "Sé qué equipos quiero respaldar" },
  { id: "no-se", label: "No sé qué planta necesito" },
  { id: "cotizacion", label: "Ya tengo una cotización y quiero comparar" },
];

const GREETING =
  "¡Hola! Soy KALM, la asistente de KALMA POWER. Cuéntame, ¿para qué necesitas la planta?";

type Msg = { from: "bot" | "user"; text: string };

const withPeriod = (t: string) => (/[.!?]$/.test(t) ? t : `${t}.`);

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("purpose");
  const [purpose, setPurpose] = useState("");
  const [kind, setKind] = useState<Kind | null>(null);
  const [detail, setDetail] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Inicializa el primer mensaje al abrir
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: GREETING }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, stage]);

  const say = (from: Msg["from"], text: string) =>
    setMessages((m) => [...m, { from, text }]);

  const reply = (text: string, next: Stage) =>
    setTimeout(() => {
      say("bot", text);
      setStage(next);
    }, 350);

  const submitPurpose = (value: string) => {
    setPurpose(value);
    say("user", value);
    setInput("");
    reply("Gracias. ¿Cuál de estas opciones se parece más a tu caso?", "kind");
  };

  const chooseKind = (k: (typeof KINDS)[number]) => {
    setKind(k.id);
    say("user", k.label);
    if (k.id === "potencia") {
      reply("Perfecto. ¿Qué potencia necesitas? Escribe el valor, por ejemplo 100 kW.", "detail");
    } else if (k.id === "cargas") {
      reply("Entendido. ¿Qué equipos quieres respaldar? Por ejemplo bombas, refrigeración o un elevador.", "detail");
    } else if (k.id === "no-se") {
      reply("No te preocupes, eso lo vemos juntos por WhatsApp.", "done");
    } else {
      reply("Perfecto. Por WhatsApp podrás compartirla para revisarla.", "done");
    }
  };

  const submitDetail = (value: string) => {
    setDetail(value);
    say("user", value);
    setInput("");
    reply("Gracias. Continúa en WhatsApp para hablar con un asesor de KALMA POWER.", "done");
  };

  // Mensaje que llega a WhatsApp: escrito como lo diría una persona.
  // Si el cliente ya dijo el dato en su primera respuesta, no se repite.
  const summary = () => {
    const p = purpose.trim();
    const d = detail.trim().replace(/[.!?]$/, "");
    const mentioned = (t: string) => p.toLowerCase().includes(t.toLowerCase());
    const base = `Hola KALMA POWER. ${withPeriod(p)}`;
    if (kind === "potencia" && d) {
      return mentioned(d) ? base : `${base} La potencia que tengo en mente es ${d}.`;
    }
    if (kind === "cargas" && d) {
      return mentioned(d)
        ? `${base} Todavía no sé qué potencia necesito.`
        : `${base} Quiero respaldar ${d}, pero todavía no sé qué potencia necesito.`;
    }
    if (kind === "no-se") {
      return `${base} Todavía no sé qué planta necesito y me gustaría que me orienten.`;
    }
    if (kind === "cotizacion") {
      return /cotiz/i.test(p) ? base : `${base} Ya tengo una cotización y quiero compararla.`;
    }
    return base;
  };

  const reset = () => {
    setStage("purpose");
    setPurpose("");
    setKind(null);
    setDetail("");
    setMessages([{ from: "bot", text: GREETING }]);
    setInput("");
  };

  const done = stage === "done";
  const typing = stage === "purpose" || stage === "detail";

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

      {/* Mini botón de llamada, junto al botón de Kalma */}
      {!open && (
        <a
          href={telLink()}
          className="fixed bottom-24 right-5 z-[60] flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-2 text-xs font-bold text-navy-900 shadow-lg shadow-navy-900/20 transition hover:bg-sky-light"
          aria-label={`Llamar a KALMA POWER: ${COMPANY.whatsappNumber}`}
        >
          <PhoneIcon className="h-4 w-4" />
          {COMPANY.whatsappNumber}
        </a>
      )}

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
            Asistente virtual
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
              <div className="space-y-3 pt-1">
                <a
                  href={waLink(summary(), "web_chatbot")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full !py-2.5 text-xs"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Continuar en WhatsApp
                </a>

                <div className="rounded-xl border border-navy-900/10 bg-white p-3">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-navy-900/70">
                    <PhoneIcon className="h-3.5 w-3.5 text-sky" />
                    Contacta directamente: {COMPANY.whatsappNumber}
                  </p>
                  <div className="mt-2.5 grid grid-cols-3 gap-2">
                    <a
                      href={telLink()}
                      className="flex flex-col items-center gap-1 rounded-lg border border-navy-900/15 py-2 text-[0.65rem] font-bold uppercase tracking-wide text-navy-900 transition hover:bg-sky-light"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Llamar
                    </a>
                    <a
                      href={waLink(summary(), "web_chatbot")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 rounded-lg border border-navy-900/15 py-2 text-[0.65rem] font-bold uppercase tracking-wide text-navy-900 transition hover:bg-sky-light"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp
                    </a>
                    <a
                      href={mailLink("Cotización KALMA POWER")}
                      className="flex flex-col items-center gap-1 rounded-lg border border-navy-900/15 py-2 text-[0.65rem] font-bold uppercase tracking-wide text-navy-900 transition hover:bg-sky-light"
                    >
                      <MailIcon className="h-4 w-4" />
                      Email
                    </a>
                  </div>
                </div>

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
          {!done && (
            <div className="border-t border-navy-900/10 bg-white p-3">
              {stage === "kind" ? (
                <div className="flex flex-wrap gap-2">
                  {KINDS.map((k) => (
                    <button
                      key={k.id}
                      onClick={() => chooseKind(k)}
                      className="rounded-full border border-navy-700/30 bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 transition hover:bg-navy-700 hover:text-white"
                    >
                      {k.label}
                    </button>
                  ))}
                </div>
              ) : (
                typing && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const v = input.trim();
                      if (!v) return;
                      if (stage === "purpose") submitPurpose(v);
                      else submitDetail(v);
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      autoFocus
                      value={input}
                      maxLength={300}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={
                        stage === "purpose"
                          ? "Ej. Necesito una planta de emergencia para mi negocio"
                          : kind === "potencia"
                            ? "Ej. 100 kW"
                            : "Ej. bombas y refrigeración"
                      }
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
                )
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

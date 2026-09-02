"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./icons";
import { COMPANY, waLink } from "@/lib/config";

const NAV = [
  { label: "Sobre Lunaan", href: "#sobre" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Industrias", href: "#industrias" },
  { label: "Cotización", href: "#cotizacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="container-lun flex h-[72px] items-center justify-between">
        <a href="#top" aria-label={COMPANY.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-navy-900/80 transition hover:text-navy-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink("Hola LUNAAN ENERGY, quiero información sobre plantas eléctricas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-navy-900/15 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-navy-900 transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-navy-900 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-navy-900 transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-900/10 bg-white lg:hidden">
          <div className="container-lun flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-navy-900/80 hover:bg-sky-light"
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink("Hola LUNAAN ENERGY, quiero información sobre plantas eléctricas.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              <WhatsAppIcon />
              WhatsApp {COMPANY.whatsappNumber}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

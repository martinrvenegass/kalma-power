/* ============================================================
   Generadores portátiles a gasolina (próximamente)
   Datos tomados del catálogo técnico del fabricante (valores de fábrica).
   - Sin precios: se manejan internamente.
   - Sin garantía, disponibilidad ni fecha exacta (POR VALIDAR).
   - Fotografías: pendientes de autorización de uso.
   ============================================================ */

export const PORTABLES_INTRO = {
  eyebrow: "Nueva categoría",
  title: "Generadores portátiles a gasolina",
  badge: "Próximamente disponibles",
  arrival: "Llegada estimada a finales de 2026",
  text: "Equipos monofásicos de 110 / 220 V para hogar, comercio pequeño, obra, campo y eventos. Déjanos tus datos por WhatsApp y te avisamos cuando estén disponibles.",
  notice:
    "Son equipos portátiles de operación manual. No equivalen a una planta eléctrica diésel de respaldo automático.",
};

export type PortableSpec = { label: string; value: string };

export type PortableModel = {
  slug: string;
  model: string;
  nominal: string;
  max: string;
  highlights: string;
  specs: PortableSpec[];
};

export const PORTABLE_MODELS: PortableModel[] = [
  {
    slug: "ceg5500leb",
    model: "CEG5500LEB",
    nominal: "5.0 kW",
    max: "5.5 kW",
    highlights: "Para respaldo de hogar y comercio pequeño.",
    specs: [
      { label: "Potencia nominal / máxima", value: "5.0 kW / 5.5 kW" },
      { label: "Voltaje y frecuencia", value: "110 / 220 V · 60 Hz" },
      { label: "Fases", value: "Monofásico / bifásico" },
      { label: "Combustible", value: "Gasolina" },
      { label: "Motor", value: "4 tiempos, 1 cilindro, 420 cc · 15 HP" },
      { label: "Arranque", value: "Eléctrico con batería" },
      { label: "Tanque / autonomía", value: "25 L / 7.5 h al 100% de carga" },
      { label: "Ruido", value: "74 dB" },
      { label: "Peso neto", value: "82 kg" },
      { label: "Dimensiones (L × An × Al)", value: "695 × 525 × 550 mm" },
    ],
  },
  {
    slug: "ceg8300leb",
    model: "CEG8300LEB",
    nominal: "8.0 kW",
    max: "8.3 kW",
    highlights: "Para comercio, taller, obra y campo.",
    specs: [
      { label: "Potencia nominal / máxima", value: "8.0 kW / 8.3 kW" },
      { label: "Voltaje y frecuencia", value: "110 / 220 V · 60 Hz" },
      { label: "Fases", value: "Monofásico / bifásico" },
      { label: "Combustible", value: "Gasolina" },
      { label: "Motor", value: "4 tiempos, 1 cilindro, 459 cc · 18 HP" },
      { label: "Arranque", value: "Eléctrico con batería" },
      { label: "Tanque / autonomía", value: "25 L / 5.5 h al 100% de carga" },
      { label: "Ruido", value: "80 dB" },
      { label: "Peso neto", value: "88 kg" },
      { label: "Dimensiones (L × An × Al)", value: "700 × 580 × 560 mm" },
    ],
  },
  {
    slug: "ceg10000led",
    model: "CEG10000LED",
    nominal: "9.0 kW",
    max: "10.0 kW",
    highlights: "Mayor capacidad y tanque de 40 L.",
    specs: [
      { label: "Potencia nominal / máxima", value: "9.0 kW / 10.0 kW" },
      { label: "Voltaje y frecuencia", value: "110 / 220 V · 60 Hz" },
      { label: "Fases", value: "Monofásico / bifásico" },
      { label: "Combustible", value: "Gasolina" },
      { label: "Motor", value: "4 tiempos, 1 cilindro, 520 cc · 20 HP" },
      { label: "Arranque", value: "Eléctrico con batería" },
      { label: "Tanque / autonomía", value: "40 L / 7.5 h al 100% de carga" },
      { label: "Ruido", value: "80 dB" },
      { label: "Peso neto", value: "105 kg" },
      { label: "Dimensiones (L × An × Al)", value: "695 × 565 × 600 mm" },
    ],
  },
];

// Rasgos comunes a toda la línea (catálogo).
export const PORTABLE_COMMON = [
  "Regulación automática de voltaje (AVR)",
  "Ruedas y manija de traslado",
  "Salida de 12 V CD",
  "Batería incluida",
];

export const PORTABLE_USES = [
  "Hogar y residencia",
  "Comercio pequeño",
  "Obra y construcción",
  "Agro y áreas remotas",
  "Eventos y servicios móviles",
];

/* ============================================================
   Catálogo Lunaan Energy
   - 3 rangos de potencia (10–50 kW · 250–500 kW · 1000–2500 kW)
   - No se comercializa el rango 50–250 kW
   - Motores: Cummins · Baudouin · Weichai · FAWDE
   - Todas trifásicas y reconfigurables (208/220/440/480 V, 60 Hz).
     Solo 10–50 kW admiten opción monofásica 127 V.
   ============================================================ */

export const ENGINE_BRANDS = ["Cummins", "Baudouin", "Weichai", "FAWDE"];

export type Spec = { label: string; value: string };

export type PlantModel = {
  power: string;
  slug: string;
  title: string;
  fuel: string;
  description: string;
  sectors: string;
  featured?: boolean;
  specs: Spec[];
};

export type PowerRange = {
  id: string;
  label: string;
  name: string;
  tagline: string;
  note: string;
  engines: string[];
  powers: string[];
  models: PlantModel[];
};

export const POWER_RANGES: PowerRange[] = [
  {
    id: "ligera",
    label: "10 – 50 kW",
    name: "Línea ligera",
    tagline:
      "Respaldo silencioso para comercio, oficinas, clínicas y obra en fase inicial.",
    note: "Disponibles monofásicas (127 V) o trifásicas.",
    engines: ["Baudouin", "Weichai", "FAWDE", "Cummins"],
    powers: ["10 kW", "15 kW", "20 kW", "25 kW", "30 kW", "40 kW", "50 kW"],
    models: [
      {
        power: "10 kW",
        slug: "10kw",
        title: "Planta Compacta 10 kW",
        fuel: "Diésel",
        description:
          "Planta compacta para respaldo silencioso en comercios, oficinas y residencias. Disponible monofásica o trifásica.",
        sectors: "Comercio · Oficinas · Residencial",
        specs: [
          { label: "Potencia", value: "10 kW · ISO 8528" },
          { label: "Voltaje", value: "127 V monofásico / 220–480 V trifásico" },
          { label: "Frecuencia", value: "60 Hz" },
          { label: "Fases", value: "Monofásica o trifásica" },
          { label: "Motor", value: "Weichai / FAWDE" },
          { label: "Control", value: "Deep Sea Electronics DSE4520" },
          { label: "Interruptor", value: "2–4 polos, a pie de máquina" },
          { label: "ATS integrado", value: "Dentro de la caseta" },
          { label: "Autonomía", value: "8 h a plena carga (ampliable)" },
          { label: "Caseta", value: "Insonorizada · acero galvanizado" },
          { label: "Antivibración", value: "Amortiguadores motor–base" },
          { label: "Incluye", value: "Baterías, cargador y sistema de escape" },
          { label: "Garantía", value: "1 año o 1200 h de operación" },
        ],
      },
      {
        power: "50 kW",
        slug: "50kw",
        title: "Planta Ligera 50 kW",
        fuel: "Diésel",
        description:
          "Planta diésel de 50 kW, trifásica y reconfigurable, diseñada para respaldo confiable en instalaciones comerciales y de servicios.",
        sectors: "Hotelería · Salud · Construcción · Comercio",
        featured: true,
        specs: [
          { label: "Potencia", value: "50 kW · ISO 8528" },
          { label: "Voltaje", value: "208 / 220 / 440 / 480 V, reconfigurable" },
          { label: "Frecuencia", value: "60 Hz · Trifásica" },
          { label: "Fases", value: "Trifásica (monofásica 127 V opcional)" },
          { label: "Motor", value: "Baudouin / Weichai / FAWDE / Cummins" },
          { label: "Control", value: "Deep Sea Electronics DSE6120" },
          { label: "Interruptor", value: "4 polos, a pie de máquina" },
          { label: "ATS integrado", value: "10–200 kW, dentro de la caseta" },
          { label: "Autonomía", value: "8 h a plena carga (ampliable)" },
          { label: "Caseta", value: "Insonorizada · acero galvanizado" },
          { label: "Herrajes", value: "Acero galvanizado" },
          { label: "Antivibración", value: "Amortiguadores motor–base" },
          { label: "Incluye", value: "Baterías, cargador y sistema de escape" },
          { label: "Garantía", value: "1 año o 1200 h de operación" },
        ],
      },
    ],
  },
  {
    id: "industrial",
    label: "250 – 500 kW",
    name: "Línea industrial",
    tagline:
      "Continuidad operativa para industria, logística, hospitales y data centers regionales.",
    note: "Todas trifásicas y reconfigurables. Preparadas para operación en paralelo.",
    engines: ["Cummins", "Baudouin", "Weichai"],
    powers: ["250 kW", "300 kW", "350 kW", "400 kW", "450 kW", "500 kW"],
    models: [
      {
        power: "250 kW",
        slug: "250kw",
        title: "Planta Industrial 250 kW",
        fuel: "Diésel",
        description:
          "Planta diésel de 250 kW, trifásica y reconfigurable, para continuidad operativa en industria, logística y comercio de alto consumo.",
        sectors: "Manufactura · Logística · Retail",
        specs: [
          { label: "Potencia", value: "250 kW · ISO 8528" },
          { label: "Voltaje", value: "208 / 220 / 440 / 480 V, reconfigurable" },
          { label: "Frecuencia", value: "60 Hz · Trifásica" },
          { label: "Motor", value: "Cummins / Baudouin / Weichai" },
          { label: "Control", value: "Deep Sea Electronics DSE7320 (AMF)" },
          { label: "Interruptor", value: "3–4 polos, a pie de máquina" },
          { label: "Transferencia", value: "ATS integrado 10–200 kW o tablero remoto" },
          { label: "Autonomía", value: "8 h a plena carga · tanque ampliable" },
          { label: "Caseta", value: "Insonorizada · acero galvanizado" },
          { label: "Antivibración", value: "Amortiguadores motor–base" },
          { label: "Incluye", value: "Baterías, cargador, escape y precalentador" },
          { label: "Emisiones", value: "Compatible Tier 3" },
          { label: "Garantía", value: "1 año o 1200 h de operación" },
        ],
      },
      {
        power: "500 kW",
        slug: "500kw",
        title: "Planta Pesada 500 kW",
        fuel: "Diésel",
        description:
          "Planta diésel de 500 kW para hospitales, data centers y procesos críticos que no pueden detenerse. Preparada para operación en paralelo.",
        sectors: "Hospital · Data Center · Industria",
        specs: [
          { label: "Potencia", value: "500 kW · ISO 8528" },
          { label: "Voltaje", value: "220 / 440 / 480 V, reconfigurable" },
          { label: "Frecuencia", value: "60 Hz · Trifásica" },
          { label: "Motor", value: "Cummins / Baudouin" },
          { label: "Control", value: "Deep Sea Electronics DSE8610 (sincronización)" },
          { label: "Interruptor", value: "3P / 4P motorizado" },
          { label: "Transferencia", value: "ATS o tablero de sincronización / paralelo" },
          { label: "Autonomía", value: "8 h a plena carga · tanque de gran capacidad opcional" },
          { label: "Caseta", value: "Insonorizada · acero galvanizado o contenedor" },
          { label: "Antivibración", value: "Amortiguadores motor–base" },
          { label: "Incluye", value: "Baterías, cargador, precalentador y sistema de escape" },
          { label: "Emisiones", value: "Tier 3 / Stage IIIA" },
          { label: "Garantía", value: "1 año o 1200 h de operación" },
        ],
      },
    ],
  },
  {
    id: "alta-potencia",
    label: "1000 – 2500 kW",
    name: "Línea de alta potencia",
    tagline:
      "Misión crítica y generación primaria para minería, oil & gas, utilities y grandes data centers.",
    note: "Sincronización multi-unidad, load sharing y formato en contenedor.",
    engines: ["Cummins", "Baudouin"],
    powers: ["1000 kW", "1250 kW", "1500 kW", "1750 kW", "2000 kW", "2250 kW", "2500 kW"],
    models: [
      {
        power: "1000 kW",
        slug: "1000kw",
        title: "Planta Master 1000 kW",
        fuel: "Diésel",
        description:
          "Potencia de misión crítica de 1000 kW con sincronización en paralelo, load sharing y monitoreo remoto 24/7.",
        sectors: "Minería · Data Center · Utilities",
        specs: [
          { label: "Potencia", value: "1000 kW · ISO 8528" },
          { label: "Voltaje", value: "480 V / media tensión" },
          { label: "Frecuencia", value: "60 Hz · Trifásica" },
          { label: "Motor", value: "Cummins / Baudouin" },
          { label: "Control", value: "DSE8610 MkII · sincronía y load sharing" },
          { label: "Sincronización", value: "Hasta 8–32 unidades en paralelo" },
          { label: "Transferencia", value: "Abierta, cerrada o transición programada" },
          { label: "Autonomía", value: "8 h · tanque remoto de gran capacidad" },
          { label: "Formato", value: "Contenedor 20' / 40' o instalación interior" },
          { label: "Enfriamiento", value: "Radiador reforzado / remoto" },
          { label: "Monitoreo", value: "SCADA / Modbus / Ethernet" },
          { label: "Emisiones", value: "Tier 3 / Stage IIIA" },
          { label: "Garantía", value: "1 año o 1200 h de operación" },
        ],
      },
      {
        power: "2500 kW",
        slug: "2500kw",
        title: "Planta Titán 2500 kW",
        fuel: "Diésel",
        description:
          "Generación primaria de 2500 kW para minería, oil & gas y campamentos aislados de la red. Configuración N+1 y servicio in situ.",
        sectors: "Minería · Oil & Gas · Campamentos",
        specs: [
          { label: "Potencia", value: "2500 kW · ISO 8528" },
          { label: "Voltaje", value: "Media tensión (4.16 / 13.8 kV) o 480 V" },
          { label: "Frecuencia", value: "60 Hz · Trifásica" },
          { label: "Motor", value: "Cummins / Baudouin" },
          { label: "Control", value: "DSE8610 MkII / DSEE400 · sincronía" },
          { label: "Sincronización", value: "Planta multi-unidad, load sharing y red" },
          { label: "Formato", value: "Contenedor 40' · walk-in" },
          { label: "Autonomía", value: "Tanques de gran capacidad y transferencia automática" },
          { label: "Enfriamiento", value: "Radiador remoto / alta temperatura" },
          { label: "Redundancia", value: "N+1 configurable" },
          { label: "Monitoreo", value: "SCADA / BMS · alarmas remotas" },
          { label: "Servicio", value: "Mantenimiento in situ" },
          { label: "Garantía", value: "1 año o 1200 h de operación" },
        ],
      },
    ],
  },
];

/** Todos los modelos con ficha, en orden de potencia. */
export const PLANT_MODELS: PlantModel[] = POWER_RANGES.flatMap((r) => r.models);

/** Opciones de potencia para formularios y chatbot (rango exacto o rango). */
export const POWER_OPTIONS = [
  "10 – 50 kW",
  "250 – 500 kW",
  "1000 – 2500 kW",
  "Potencia exacta (la indico)",
  "No estoy seguro",
];

/* ============================================================
   Equipos especiales y soluciones a la medida
   ============================================================ */

export type SpecialCategory = {
  id: string;
  icon: string;
  title: string;
  items: string[];
};

export const SPECIAL_EQUIPMENT = {
  intro:
    "Generadores diseñados para proyectos que requieren mayor autonomía, operación en paralelo, condiciones ambientales especiales o configuraciones personalizadas.",
  categories: [
    {
      id: "sincronia",
      icon: "sync",
      title: "Sincronía y operación en paralelo",
      items: [
        "Sistemas de sincronía abierta o cerrada",
        "Operación de múltiples generadores en paralelo",
        "Load sharing para distribución automática de carga",
        "Sincronización con red eléctrica",
        "Transferencia abierta, cerrada o transición programada",
        "Control y monitoreo centralizado",
        "Secuencia automática de arranque y paro",
      ],
    },
    {
      id: "combustible",
      icon: "fuel",
      title: "Mayor autonomía de combustible",
      items: [
        "Tanques de combustible de más de 8 horas de respaldo",
        "Tanques de gran capacidad integrados o remotos",
        "Tanques auxiliares y transferencia automática de combustible",
        "Indicador y monitoreo de nivel",
        "Configuraciones especiales para proyectos de larga autonomía",
      ],
    },
    {
      id: "casetas",
      icon: "enclosure",
      title: "Casetas especiales",
      items: [
        "Casetas insonorizadas en acero galvanizado, acero al carbón o aluminio",
        "Dimensiones especiales de acuerdo con el proyecto",
        "Puertas y accesos de mantenimiento personalizados",
        "Tratamientos anticorrosivos para ambientes agresivos",
        "Preparación para instalación interior o exterior",
      ],
    },
    {
      id: "ventilacion",
      icon: "thermal",
      title: "Ventilación y manejo térmico",
      items: [
        "Sistemas de ventilación calculados para cada instalación",
        "Louvers motorizados",
        "Ventiladores de extracción",
        "Atenuadores acústicos",
        "Sistemas para altas temperaturas, altitud o espacios confinados",
        "Configuraciones para cuartos de máquinas o contenedores",
      ],
    },
    {
      id: "acabados",
      icon: "finish",
      title: "Acabados y protección",
      items: [
        "Pintura especial según requerimiento del proyecto",
        "Colores y acabados personalizados",
        "Sistemas anticorrosivos para ambientes marinos, industriales o de alta humedad",
        "Recubrimientos especiales para condiciones ambientales exigentes",
      ],
    },
    {
      id: "electrico",
      icon: "electrical",
      title: "Configuraciones eléctricas especiales",
      items: [
        "Voltajes y frecuencias configurables",
        "Interruptores principales de diferentes capacidades",
        "ATS integrado o remoto",
        "Tableros de transferencia y distribución",
        "Bypass de mantenimiento",
        "Protecciones eléctricas y medición personalizada",
        "Preparación para conexión a sistemas críticos",
      ],
    },
    {
      id: "control",
      icon: "control",
      title: "Control, comunicación y monitoreo",
      items: [
        "Controladores Deep Sea Electronics u otras plataformas requeridas",
        "Monitoreo remoto",
        "Comunicación Modbus / Ethernet",
        "Integración con BMS, SCADA o sistemas de gestión del edificio",
        "Alarmas y señalización remota",
        "Registro de eventos y parámetros de operación",
      ],
    },
    {
      id: "ingenieria",
      icon: "engineering",
      title: "Ingeniería especial",
      items: [
        "Diseño de sistemas de escape y silenciadores especiales",
        "Precalentadores de motor y calentadores de anticongelante",
        "Sistemas de arranque redundantes",
        "Radiadores remotos",
        "Bases y estructuras especiales",
        "Ingeniería de instalación y adecuación al sitio",
        "Soluciones para altitud, temperatura, humedad y condiciones ambientales particulares",
      ],
    },
  ] as SpecialCategory[],
  closing: {
    title: "¿Tu proyecto requiere algo diferente?",
    text: "Diseñamos la configuración del generador, sistema eléctrico, autonomía, caseta y auxiliares de acuerdo con las condiciones y requerimientos específicos de tu instalación.",
  },
};

/* ============================================================ */

export type Industry = {
  name: string;
  slug: string;
  description: string;
  icon: string;
};

export const INDUSTRIES: Industry[] = [
  {
    name: "Minería",
    slug: "mineria",
    description:
      "Generación primaria y de respaldo para operaciones en zonas remotas sin acceso a red eléctrica.",
    icon: "mining",
  },
  {
    name: "Hotelería",
    slug: "hoteleria",
    description:
      "Energía ininterrumpida para resorts y hoteles: climatización, cocinas y experiencia del huésped.",
    icon: "hotel",
  },
  {
    name: "Data Center",
    slug: "data-center",
    description:
      "Respaldo de misión crítica con transferencia automática y redundancia N+1 para uptime garantizado.",
    icon: "server",
  },
  {
    name: "Construcción",
    slug: "construccion",
    description:
      "Plantas móviles y robustas para obra civil, torres grúa y campamentos durante todo el proyecto.",
    icon: "crane",
  },
  {
    name: "Hospital",
    slug: "hospital",
    description:
      "Cumplimiento normativo de continuidad eléctrica para quirófanos, UCI y equipos de soporte vital.",
    icon: "hospital",
  },
  {
    name: "Manufactura",
    slug: "manufactura",
    description:
      "Protección de líneas de producción ante cortes: evita mermas, paros y daños a maquinaria.",
    icon: "factory",
  },
];

export const DIFERENCIADORES = [
  {
    title: "Ingeniería a la medida",
    text: "Dimensionamos cada planta según tu curva de carga real, no catálogos genéricos.",
  },
  {
    title: "Respuesta 24/7",
    text: "Red de servicio y refacciones con atención garantizada en sitio.",
  },
  {
    title: "Eficiencia y bajas emisiones",
    text: "Motores Tier 3 / Stage IIIA con menor consumo de combustible por kWh.",
  },
  {
    title: "Monitoreo inteligente",
    text: "Telemetría IoT para anticipar mantenimientos y evitar fallas.",
  },
];

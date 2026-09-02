export type Plant = {
  power: string;
  slug: string;
  title: string;
  description: string;
  uses: string;
  specs: { label: string; value: string }[];
  highlight?: boolean;
};

export const PLANTS: Plant[] = [
  {
    power: "10 kW",
    slug: "10kw",
    title: "Planta Compacta 10 kW",
    description:
      "Respaldo silencioso para oficinas, comercios y residencias premium. Arranque automático en menos de 10 segundos.",
    uses: "Comercio · Oficinas · Residencial",
    specs: [
      { label: "Voltaje", value: "120/240 V" },
      { label: "Fases", value: "Monofásica" },
      { label: "Combustible", value: "Diésel / Gas" },
      { label: "Cabina", value: "Insonorizada 65 dB" },
    ],
  },
  {
    power: "50 kW",
    slug: "50kw",
    title: "Planta Ligera 50 kW",
    description:
      "Ideal para clínicas, hoteles boutique y obra en fase inicial. Equilibrio perfecto entre potencia y movilidad.",
    uses: "Hotelería · Salud · Construcción",
    specs: [
      { label: "Voltaje", value: "220/380 V" },
      { label: "Fases", value: "Trifásica" },
      { label: "Combustible", value: "Diésel" },
      { label: "Tanque", value: "8 h autonomía" },
    ],
  },
  {
    power: "250 kW",
    slug: "250kw",
    title: "Planta Industrial 250 kW",
    description:
      "Continuidad operativa para plantas manufactureras medianas y centros logísticos con cargas variables.",
    uses: "Manufactura · Logística · Retail",
    specs: [
      { label: "Voltaje", value: "220/380/440 V" },
      { label: "Fases", value: "Trifásica" },
      { label: "Motor", value: "Turbo diésel" },
      { label: "Control", value: "Panel digital AMF" },
    ],
    highlight: true,
  },
  {
    power: "500 kW",
    slug: "500kw",
    title: "Planta Pesada 500 kW",
    description:
      "Diseñada para hospitales, data centers regionales y procesos industriales que no pueden detenerse.",
    uses: "Hospital · Data Center · Industria",
    specs: [
      { label: "Voltaje", value: "380/440 V" },
      { label: "Fases", value: "Trifásica" },
      { label: "Transferencia", value: "ATS incluida" },
      { label: "Emisiones", value: "Tier 3 / Stage IIIA" },
    ],
  },
  {
    power: "1000 kW",
    slug: "1000kw",
    title: "Planta Master 1000 kW",
    description:
      "Potencia de misión crítica con sincronización en paralelo y monitoreo remoto 24/7.",
    uses: "Minería · Data Center · Utilities",
    specs: [
      { label: "Voltaje", value: "480 V / MT" },
      { label: "Sincronización", value: "Hasta 8 unidades" },
      { label: "Monitoreo", value: "SCADA / IoT" },
      { label: "Enfriamiento", value: "Radiador reforzado" },
    ],
  },
  {
    power: "2500 kW",
    slug: "2500kw",
    title: "Planta Titan 2500 kW",
    description:
      "Solución de generación primaria para operaciones mineras y campamentos aislados de la red.",
    uses: "Minería · Oil & Gas · Campamentos",
    specs: [
      { label: "Voltaje", value: "Media tensión" },
      { label: "Formato", value: "Contenedor 40'" },
      { label: "Redundancia", value: "N+1 configurable" },
      { label: "Servicio", value: "Mantenimiento in-situ" },
    ],
  },
];

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

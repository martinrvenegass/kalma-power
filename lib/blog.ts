// Contenido del blog. Cada artículo se compone de bloques simples; en los
// textos se admiten **negritas** y [enlaces](/ruta).

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "checklist"; title: string; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string; // H1
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  datePublished: string; // ISO
  dateModified: string;
  readingMinutes: number;
  cover: string; // ruta en /public
  coverAlt: string;
  related: string; // slug del artículo relacionado
  blocks: Block[];
  references: string[];
};

export const POSTS: Post[] = [
  {
    slug: "errores-al-comprar-planta-electrica-diesel",
    title:
      "Antes de comprar una planta eléctrica diésel: 7 errores que pueden costarte caro",
    seoTitle: "7 errores al comprar una planta eléctrica diésel y cómo evitarlos",
    description:
      "Los 7 errores más frecuentes al elegir una planta eléctrica diésel (potencia, kW y kVA, arranque de motores, régimen, sitio y cotización) y una lista de verificación para evitarlos.",
    excerpt:
      "Potencia mal calculada, kW contra kVA, arranque de motores, régimen de uso y cotizaciones que no se pueden comparar: qué revisar antes de decidir.",
    category: "Guía de compra",
    datePublished: "2026-10-26",
    dateModified: "2026-10-26",
    readingMinutes: 8,
    cover: "/blog/errores-al-comprar-planta-electrica-diesel.png",
    coverAlt:
      "Ilustración conceptual: lista de verificación y símbolo de energía sobre fondo azul marino",
    related: "costo-de-un-apagon-en-tu-empresa",
    blocks: [
      {
        type: "p",
        text: "Una planta eléctrica diésel se usa justo cuando más se necesita: durante un corte, en una obra o en un proceso que no puede detenerse. Por eso, la mayoría de los problemas no aparecen el día de la compra, sino meses después, cuando el equipo no arranca la carga prevista, no alcanza para lo que se esperaba o su cotización no incluía algo importante.",
      },
      {
        type: "p",
        text: "Estos son siete errores frecuentes al comprar una planta eléctrica diésel y qué puedes hacer para evitarlos. La guía está pensada para equipos de operaciones, mantenimiento, compras, instalaciones y dirección.",
      },
      { type: "h2", text: "1. Elegir la potencia sin analizar las cargas" },
      {
        type: "p",
        text: "Es común decidir por costumbre: «necesitamos una de 100 kW» porque esa es la capacidad que ya existe, o porque otra empresa similar usa esa. La potencia correcta depende de lo que realmente se va a alimentar, no del tamaño del edificio ni de lo que se compró antes.",
      },
      {
        type: "ul",
        items: [
          "**Subdimensionar** puede provocar caídas de voltaje, disparos de protecciones y paros justo cuando hay un corte.",
          "**Sobredimensionar en exceso** encarece la compra y el consumo, y operar un motor diésel con carga muy baja de forma sostenida no es recomendable. Consulta la recomendación del fabricante.",
        ],
      },
      {
        type: "p",
        text: "**Cómo evitarlo:** haz un listado de cargas (equipo, potencia, voltaje, fases y si tiene motor), define cuáles son críticas y cuáles pueden esperar, y considera un margen razonable de crecimiento. Si cuentas con mediciones de demanda, por ejemplo las de tu recibo de CFE o las de un analizador de redes, úsalas como referencia.",
      },
      { type: "h2", text: "2. Confundir kW y kVA" },
      {
        type: "p",
        text: "Los kW miden la potencia activa, la que realiza trabajo útil. Los kVA miden la potencia aparente. Se relacionan mediante el factor de potencia: kW = kVA × factor de potencia.",
      },
      {
        type: "p",
        text: "Como ejemplo ilustrativo, con un factor de potencia de 0.8, una capacidad de 100 kVA equivale a 80 kW. Por eso, comparar una planta anunciada en 100 kW con otra anunciada en 100 kVA no es comparar lo mismo.",
      },
      {
        type: "p",
        text: "**Cómo evitarlo:** pide siempre ambos valores y el factor de potencia con el que se calcularon, y verifica que coincidan con la ficha técnica del fabricante.",
      },
      { type: "h2", text: "3. Ignorar el arranque de motores" },
      {
        type: "p",
        text: "Bombas, compresores, elevadores, equipos de aire acondicionado y maquinaria con motor demandan en el arranque una corriente varias veces mayor que la de operación normal. Si la planta no está dimensionada para ese momento, puede haber caída de voltaje y de frecuencia, o un paro del equipo.",
      },
      {
        type: "p",
        text: "**Cómo evitarlo:** identifica el motor más grande y el tipo de arranque (directo, estrella-delta, arrancador suave o variador de frecuencia), y define si los motores arrancan de forma simultánea o escalonada. Estos datos permiten revisar el dimensionamiento con criterio técnico.",
      },
      {
        type: "h2",
        text: "4. Confundir potencia de emergencia y potencia continua",
      },
      {
        type: "p",
        text: "Un mismo grupo electrógeno puede tener capacidades distintas según el régimen de operación. La norma ISO 8528-1 define, entre otros, los regímenes de emergencia o respaldo, principal y continuo. Una capacidad publicada para uso de emergencia no está pensada para operar de forma continua.",
      },
      {
        type: "p",
        text: "**Cómo evitarlo:** define cuántas horas al año esperas usar la planta y si será solo respaldo ante cortes, fuente principal o apoyo en horas de demanda. Después revisa en la ficha técnica a qué régimen corresponde la capacidad que te cotizan.",
      },
      { type: "h2", text: "5. No revisar las condiciones del sitio" },
      {
        type: "p",
        text: "El lugar donde operará la planta influye en su desempeño y en la instalación. Antes de decidir, conviene revisar:",
      },
      {
        type: "ul",
        items: [
          "**Altitud y temperatura ambiente:** a mayor altitud y temperatura, un motor puede entregar menos potencia que la nominal. Muchas ciudades de México están a más de mil metros sobre el nivel del mar; consulta la información del fabricante.",
          "**Ventilación y espacio:** entrada y salida de aire, escape, distancias de servicio y acceso para maniobras.",
          "**Interior o intemperie:** define si requiere cabina u otro tipo de protección y qué nivel de ruido es aceptable.",
          "**Combustible:** capacidad del tanque y autonomía esperada.",
          "**Cimentación y conexión eléctrica:** la instalación debe realizarla personal calificado y conforme a la normativa aplicable, como la NOM-001-SEDE.",
        ],
      },
      {
        type: "p",
        text: "**Cómo evitarlo:** reúne estos datos del sitio antes de pedir cotización y confirma en cada propuesta quién será responsable de la instalación.",
      },
      { type: "h2", text: "6. No confirmar qué incluye la cotización" },
      {
        type: "p",
        text: "Dos cotizaciones con la misma capacidad pueden no ser comparables. La diferencia suele estar en lo que no se menciona. Antes de aceptar una propuesta, pregunta de forma explícita por:",
      },
      {
        type: "ul",
        items: [
          "Tablero de transferencia automática o manual.",
          "Cabina, silenciador y tanque de combustible.",
          "Baterías, cargador y controlador.",
          "Flete, maniobras y descarga.",
          "Instalación y puesta en marcha: si están incluidas o a cargo de un tercero.",
          "Si los precios incluyen o no IVA.",
          "Vigencia de la cotización, tiempo de entrega y condiciones de pago.",
          "Garantía: alcance, duración y quién la respalda.",
        ],
      },
      { type: "h2", text: "7. Comparar únicamente el precio" },
      {
        type: "p",
        text: "El precio de compra es importante, pero no es el único costo. Al comparar opciones considera también la disponibilidad de refacciones y soporte, el consumo de combustible, los requisitos de mantenimiento, la garantía, el tiempo de entrega y la calidad de la información técnica que acompaña al equipo.",
      },
      {
        type: "p",
        text: "También conviene dimensionar lo que cuesta no tener respaldo cuando falla la red eléctrica. Si quieres estimarlo para tu empresa, lee [¿Cuánto le cuesta a tu empresa quedarse sin electricidad?](/blog/costo-de-un-apagon-en-tu-empresa).",
      },
      {
        type: "checklist",
        title: "Lista de verificación antes de solicitar cotización",
        items: [
          "Listado de cargas con potencia, voltaje y fases.",
          "Cargas críticas identificadas y cargas que pueden esperar.",
          "Motor más grande y tipo de arranque.",
          "Régimen esperado: respaldo, principal o continuo, y horas de uso al año.",
          "Voltaje y número de fases requeridos.",
          "Altitud, temperatura y tipo de ubicación (interior o intemperie).",
          "Espacio, ventilación y acceso para maniobras.",
          "Autonomía de combustible deseada.",
          "Requerimientos de transferencia, cabina y nivel de ruido.",
          "Qué debe incluir la cotización, plazo de entrega y vigencia.",
        ],
      },
      {
        type: "callout",
        title: "¿Quieres revisar tu proyecto?",
        text: "En KALMA POWER comercializamos plantas eléctricas diésel de 10 a 2500 kW de distintas marcas. Comparte los datos de tu proyecto y preparamos una cotización con las condiciones de cada equipo.",
      },
    ],
    references: [
      "ISO 8528-1: Reciprocating internal combustion engine driven alternating current generating sets. Parte 1: Application, ratings and performance.",
      "NOM-001-SEDE-2012, Instalaciones eléctricas (utilización).",
      "Fichas técnicas de los fabricantes de motores y generadores (capacidades, regímenes y factores de corrección).",
    ],
  },
  {
    slug: "costo-de-un-apagon-en-tu-empresa",
    title:
      "¿Cuánto le cuesta a tu empresa quedarse sin electricidad? 5 riesgos que puedes prevenir",
    seoTitle: "Costo de un apagón en tu empresa: 5 riesgos y cómo estimarlo",
    description:
      "Cinco riesgos de quedarse sin electricidad en una empresa y un método sencillo para estimar el costo de un apagón con tus propios datos, sin cifras genéricas.",
    excerpt:
      "Paro operativo, retrasos, daño a sistemas, pérdida de materiales y costos de recuperación: cómo estimar con tus propios datos lo que cuesta un apagón.",
    category: "Continuidad operativa",
    datePublished: "2026-10-26",
    dateModified: "2026-10-26",
    readingMinutes: 7,
    cover: "/blog/costo-de-un-apagon-en-tu-empresa.png",
    coverAlt:
      "Ilustración conceptual: símbolo de energía interrumpida sobre fondo azul marino",
    related: "errores-al-comprar-planta-electrica-diesel",
    blocks: [
      {
        type: "p",
        text: "Muchas empresas saben que un apagón es un problema, pero pocas saben cuánto les cuesta. Sin ese dato, es difícil decidir si conviene un sistema de respaldo, de qué tamaño y con qué prioridad.",
      },
      {
        type: "p",
        text: "Este artículo describe cinco riesgos que suelen aparecer cuando se interrumpe el suministro eléctrico y propone un método para estimar el costo con información de tu propia operación. No usamos cifras promedio porque el costo de una interrupción cambia mucho de una empresa a otra.",
      },
      { type: "h2", text: "Los 5 riesgos de quedarse sin electricidad" },
      { type: "h3", text: "1. Interrupción de la operación" },
      {
        type: "p",
        text: "Cuando se va la luz, se detienen líneas de producción, caja, atención al cliente, cómputo, climatización o procesos de servicio. Mientras la operación está detenida, siguen corriendo la nómina, la renta y otros costos fijos, pero no se genera ingreso.",
      },
      { type: "h3", text: "2. Retrasos y compromisos incumplidos" },
      {
        type: "p",
        text: "Un paro de unas horas puede mover entregas, citas, turnos y fechas de servicio. Según tus contratos, esto puede traducirse en penalizaciones, descuentos, reprogramaciones o pérdida de confianza de clientes.",
      },
      { type: "h3", text: "3. Afectación a sistemas y equipos" },
      {
        type: "p",
        text: "Servidores, controles, redes y maquinaria pueden perder información o sufrir daños por un corte brusco o por las variaciones al restablecerse el suministro. Volver a poner en marcha sistemas también toma tiempo.",
      },
      { type: "h3", text: "4. Pérdida de materiales o producto" },
      {
        type: "p",
        text: "Procesos que no pueden interrumpirse, materiales sensibles a la temperatura o producto en refrigeración pueden echarse a perder o requerir reproceso si falta energía durante el tiempo suficiente.",
      },
      { type: "h3", text: "5. Costos de recuperación" },
      {
        type: "p",
        text: "Después del apagón hay que reiniciar, revisar, reprogramar y, a veces, pagar horas extra para recuperar el retraso. Estos costos suelen olvidarse al calcular el impacto, aunque forman parte de él.",
      },
      { type: "h2", text: "Cómo estimar el costo de un apagón en tu empresa" },
      {
        type: "p",
        text: "El método es sencillo y se puede hacer en una hora con información de operaciones, finanzas y mantenimiento. Lo importante es usar tus datos reales y anotar los supuestos.",
      },
      {
        type: "ol",
        items: [
          "**Define el escenario:** cuántas horas dura una interrupción típica y cuántas veces ocurre al año. Usa tu historial de cortes; si no lo tienes, empieza a registrarlo.",
          "**Calcula el costo por hora de paro:** ingreso o producción que se deja de generar, más costos fijos que continúan durante el paro (por ejemplo, nómina).",
          "**Suma las pérdidas de materiales o producto** asociadas a ese escenario.",
          "**Agrega los costos de recuperación:** reinicio, horas extra, reprocesos y servicios técnicos.",
          "**Incluye penalizaciones o compensaciones** previstas en tus contratos.",
        ],
      },
      {
        type: "callout",
        title: "Fórmula de referencia",
        text: "Costo por evento = (costo por hora de paro × horas de interrupción) + pérdidas de materiales + costos de recuperación + penalizaciones. Costo anual esperado = costo por evento × número de eventos al año.",
      },
      {
        type: "table",
        head: ["Concepto", "De dónde sale el dato", "Tu dato"],
        rows: [
          ["Horas de interrupción por evento", "Historial de cortes, aviso de CFE, bitácora de mantenimiento", ""],
          ["Eventos al año", "Historial de los últimos 12 a 24 meses", ""],
          ["Ingreso o producción por hora", "Finanzas, producción, ventas", ""],
          ["Costos fijos que continúan por hora", "Nómina, renta, servicios", ""],
          ["Materiales o producto perdido", "Almacén, calidad, producción", ""],
          ["Costos de recuperación", "Operaciones, mantenimiento, recursos humanos", ""],
          ["Penalizaciones contractuales", "Contratos con clientes", ""],
        ],
      },
      {
        type: "p",
        text: "Con el resultado puedes comparar el costo anual esperado con la inversión en un sistema de respaldo y decidir con información propia. Si no tienes todos los datos, usa rangos y revisa la estimación con el área de finanzas.",
      },
      { type: "h2", text: "Cómo reducir el riesgo" },
      {
        type: "ul",
        items: [
          "**Identifica las cargas críticas** que no pueden detenerse y define qué debe respaldarse primero.",
          "**Evalúa un sistema de respaldo** dimensionado a esas cargas, incluyendo el arranque de motores. Una planta eléctrica diésel es una de las opciones más usadas para respaldo en la industria y el comercio.",
          "**Define el mantenimiento y las pruebas periódicas** con un proveedor de servicio calificado, para que el equipo funcione cuando se necesite.",
          "**Documenta un procedimiento de contingencia** para el personal.",
        ],
      },
      {
        type: "p",
        text: "Si ya estás considerando una planta eléctrica, revisa [7 errores al comprar una planta eléctrica diésel](/blog/errores-al-comprar-planta-electrica-diesel) antes de pedir cotizaciones.",
      },
      {
        type: "callout",
        title: "¿Necesitas dimensionar un respaldo para tu empresa?",
        text: "En KALMA POWER comercializamos plantas eléctricas diésel de 10 a 2500 kW de distintas marcas. Cuéntanos qué necesitas respaldar y te enviamos una cotización.",
      },
    ],
    references: [
      "NFPA 110: Standard for Emergency and Standby Power Systems.",
      "ISO 8528-1: Reciprocating internal combustion engine driven alternating current generating sets. Parte 1: Application, ratings and performance.",
      "NOM-001-SEDE-2012, Instalaciones eléctricas (utilización).",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

# LUNAAN ENERGY — Sitio web

Landing page corporativa para LUNAAN ENERGY (plantas eléctricas 10 kW – 2500 kW).
Construida con **Next.js 14 (App Router) + React 18 + Tailwind CSS**.

## Requisitos

- Node.js 18.17 o superior

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

```
app/
  layout.tsx        Metadatos, fuente Inter, <html lang="es">
  page.tsx          Composición de la página
  globals.css       Tailwind + utilidades de marca (botones, líneas diagonales)
components/
  Header.tsx        Logo + menú + CTA WhatsApp (responsive con menú móvil)
  Hero.tsx          Banner "El futuro es la energía" + CTAs + stats
  About.tsx         Sobre Lunaan + 4 diferenciadores
  Catalog.tsx       6 plantas (10, 50, 250, 500, 1000, 2500 kW)
  Industries.tsx    6 sectores (Minería, Hotelería, Data Center, Construcción, Hospital, Manufactura)
  QuoteForm.tsx     Formulario de cotización (nombre, email, potencia, industria) → WhatsApp
  Contact.tsx       Sección cotización + bloque WhatsApp destacado
  Chatbot.tsx       Asistente IA flotante con 8 preguntas de calificación de leads
  Footer.tsx        Redes sociales + links
  Logo.tsx          Ícono "cruz de energía" + wordmark LUNAAN ENERGY
  DiagonalLines.tsx Líneas decorativas diagonales (navy + verde lima)
  icons.tsx         Íconos SVG
lib/
  config.ts         Datos de contacto y helper waLink()
  data.ts           Catálogo de plantas, industrias y diferenciadores
```

## Personalización rápida

| Qué                         | Dónde                                   |
|-----------------------------|-----------------------------------------|
| Número de WhatsApp / correo | `lib/config.ts`                         |
| Paleta de colores           | `tailwind.config.ts` → `theme.colors`   |
| Textos de plantas / sectores| `lib/data.ts`                           |
| Preguntas del chatbot       | `components/Chatbot.tsx` → `QUESTIONS`   |

### Paleta

- Azul navy `#1a3a8a`
- Verde lima `#d4ff00`
- Azul claro `#4a7fd6` / fondo `#e8f0ff`
- Blanco `#ffffff`

## Notas

- El chatbot y el formulario no envían datos a un backend: generan un mensaje
  prellenado y abren WhatsApp (`wa.me`). Para capturar leads en base de datos,
  conecta `QuoteForm.handleSubmit` y `Chatbot.summary` a un endpoint (por ejemplo
  un Route Handler en `app/api/lead/route.ts`).
- El número usado en `wa.me` es `525641819907` (México +52 + 10 dígitos).

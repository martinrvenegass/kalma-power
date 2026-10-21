import { NextRequest, NextResponse } from "next/server";
import { COMPANY, WA_DEFAULT_MESSAGE } from "@/lib/config";

const MAX_TEXT = 1000;
const MAX_PARAM = 100;

// Parámetros de origen que aceptamos y registramos.
const TRACKING_PARAMS = [
  "src",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const tracking: Record<string, string> = {};
  for (const key of TRACKING_PARAMS) {
    const value = params.get(key);
    if (value) tracking[key] = value.slice(0, MAX_PARAM);
  }

  // Sin texto (Facebook, bio, QR) se usa el mismo mensaje único del sitio.
  const text = params.get("text")?.slice(0, MAX_TEXT) || WA_DEFAULT_MESSAGE;

  // Registro TEMPORAL de diagnóstico (logs del servidor). No es analytics ni
  // atribución: no guarda teléfono, nombre, IP ni el contenido del mensaje.
  console.log(
    JSON.stringify({
      event: "whatsapp_click",
      at: new Date().toISOString(),
      hasText: params.has("text"),
      ...tracking,
    })
  );

  const destination = `https://wa.me/${COMPANY.whatsappLink}?text=${encodeURIComponent(text)}`;

  const response = NextResponse.redirect(destination, 307);
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export const COMPANY = {
  name: "KALMA POWER",
  tagline: "El futuro es la energía",
  whatsappNumber: "+52 56 4009 9139",
  // E.164 sin signos, para wa.me / tel: (52 = México + 10 dígitos)
  whatsappLink: "525640099139",
  telLink: "+525640099139",
  email: "info@kalmapower.com",
};

// Mensaje único que se precarga en todos los botones de WhatsApp. No incluye
// modelos ni potencias; el origen se registra aparte con el parámetro src.
export const WA_DEFAULT_MESSAGE =
  "Hola, me gustaría recibir información sobre sus plantas eléctricas.";

// Los CTA pasan por /whatsapp, que redirige al WhatsApp Business oficial.
// `message` solo se personaliza en el chatbot y el formulario, que envían el
// resumen de lo que escribió el cliente.
export function waLink(src: string, message: string = WA_DEFAULT_MESSAGE) {
  return `/whatsapp?src=${encodeURIComponent(src)}&text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${COMPANY.telLink}`;
}

export function mailLink(subject?: string) {
  return subject
    ? `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${COMPANY.email}`;
}

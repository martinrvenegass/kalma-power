export const COMPANY = {
  name: "KALMA POWER",
  tagline: "El futuro es la energía",
  whatsappNumber: "+52 56 4009 9139",
  // E.164 sin signos, para wa.me / tel: (52 = México + 10 dígitos)
  whatsappLink: "525640099139",
  telLink: "+525640099139",
  email: "info@kalmapower.com",
};

export function waLink(message: string) {
  return `https://wa.me/${COMPANY.whatsappLink}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${COMPANY.telLink}`;
}

export function mailLink(subject?: string) {
  return subject
    ? `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${COMPANY.email}`;
}

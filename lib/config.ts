export const COMPANY = {
  name: "LUNAAN ENERGY",
  tagline: "El futuro es la energía",
  whatsappNumber: "+52 564 181 9907",
  // E.164 sin signos, para wa.me / tel: (52 = México + 10 dígitos)
  whatsappLink: "525641819907",
  telLink: "+525641819907",
  email: "info@lunaanenergy.com",
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

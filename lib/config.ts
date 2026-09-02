export const COMPANY = {
  name: "LUNAAN ENERGY",
  tagline: "El futuro es la energía",
  whatsappNumber: "+52 564 181 9907",
  // E.164 sin signos, para el enlace wa.me (52 = México + 10 dígitos)
  whatsappLink: "525641819907",
  email: "contacto@lunaanenergy.com",
};

export function waLink(message: string) {
  return `https://wa.me/${COMPANY.whatsappLink}?text=${encodeURIComponent(message)}`;
}

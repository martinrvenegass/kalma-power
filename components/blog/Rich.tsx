import type { ReactNode } from "react";

// Convierte **negritas** y [texto](enlace) en elementos React.
export function Rich({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1]) {
      nodes.push(<strong key={i++}>{m[1]}</strong>);
    } else {
      nodes.push(
        <a
          key={i++}
          href={m[3]}
          className="font-semibold text-navy-700 underline decoration-lima-600 decoration-2 underline-offset-2 hover:text-navy-900"
        >
          {m[2]}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

// Texto plano (sin marcas) para metadatos y datos estructurados.
export function plain(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((.+?)\)/g, "$1");
}

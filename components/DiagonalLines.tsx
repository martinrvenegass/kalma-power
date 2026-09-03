type Props = {
  /** rotación de las líneas en grados */
  angle?: number;
  className?: string;
  variant?: "onLight" | "onDark";
  /** esquina donde se anclan los segmentos */
  corner?: "top-left" | "bottom-right";
};

/**
 * Líneas decorativas diagonales (azul navy + verde lima).
 * Segmentos cortos anclados en un margen/esquina: nunca cruzan el texto.
 */
export default function DiagonalLines({
  angle = -18,
  className = "",
  variant = "onLight",
  corner = "top-left",
}: Props) {
  const navyColor =
    variant === "onDark" ? "rgba(238,242,255,0.16)" : "rgba(26,58,138,0.18)";
  const rotate = `rotate(${angle}deg)`;
  const isTop = corner === "top-left";

  const navyStyle: React.CSSProperties = {
    position: "absolute",
    height: 1.5,
    width: 230,
    transform: rotate,
    background: navyColor,
    ...(isTop ? { top: 40, left: -46 } : { bottom: 34, right: -46 }),
  };
  const limaStyle: React.CSSProperties = {
    position: "absolute",
    height: 3,
    width: 74,
    transform: rotate,
    background: "#d4ff00",
    ...(isTop ? { top: 58, left: 66 } : { bottom: 20, right: 66 }),
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <span style={navyStyle} />
      <span style={limaStyle} />
    </div>
  );
}

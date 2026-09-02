type Props = {
  /** rotación de las líneas en grados */
  angle?: number;
  className?: string;
  variant?: "onLight" | "onDark";
};

/**
 * Líneas decorativas diagonales (azul navy + verde lima).
 */
export default function DiagonalLines({
  angle = -18,
  className = "",
  variant = "onLight",
}: Props) {
  const navyColor = variant === "onDark" ? "rgba(255,255,255,0.12)" : "rgba(26,58,138,0.14)";
  return (
    <div className={`diagonal-lines ${className}`} aria-hidden="true">
      <span
        style={{ top: "18%", transform: `rotate(${angle}deg)`, background: navyColor }}
      />
      <span
        style={{
          top: "22%",
          transform: `rotate(${angle}deg)`,
          background: "var(--lima)",
          opacity: 0.9,
          width: "22%",
          left: "8%",
        }}
      />
      <span
        style={{ top: "72%", transform: `rotate(${angle}deg)`, background: navyColor }}
      />
      <span
        style={{
          top: "68%",
          transform: `rotate(${angle}deg)`,
          background: "var(--lima)",
          opacity: 0.9,
          width: "18%",
          left: "70%",
        }}
      />
    </div>
  );
}

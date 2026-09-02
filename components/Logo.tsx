type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Logo Lunaan Energy: ícono "cruz de energía" (cruz + rayo) + wordmark.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";
  const subColor = variant === "light" ? "text-lima" : "text-sky";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
          {/* Cruz de energía */}
          <path
            d="M19 4h10v15h15v10H29v15H19V29H4V19h15V4z"
            className="fill-navy-700"
          />
          {/* Rayo sobre la cruz */}
          <path
            d="M26 12l-9 13h6l-3 11 10-14h-6l2-10z"
            className="fill-lima"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-tight ${textColor}`}>
          LUNAAN
        </span>
        <span
          className={`text-[0.65rem] font-bold uppercase tracking-[0.35em] ${subColor}`}
        >
          Energy
        </span>
      </span>
    </span>
  );
}

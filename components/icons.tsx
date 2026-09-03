type IconProps = { className?: string };

const base = "h-7 w-7";

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.06 1.6 5.78L2 22l4.44-1.17a9.9 9.9 0 0 0 5.6 1.72h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.16h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-2.63.69.7-2.57-.2-.31a8.24 8.24 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.25 8.25zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.48-.01c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BoltIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2 4.5 13.5H11l-2 8.5 8.5-12H11l2-8Z" />
    </svg>
  );
}

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IndustryIcon({ name, className = base }: IconProps & { name: string }) {
  switch (name) {
    case "mining":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M3 20h18M6 20l3-8M18 20l-3-8M9 12l6-6M15 6l3-3M9 6 6 3" />
        </svg>
      );
    case "hotel":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M4 21V4h10v6h6v11M4 10h10M8 6h2M8 14h2M8 18h2M16 14h1M16 18h1" />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <rect x="3" y="4" width="18" height="7" rx="1.5" />
          <rect x="3" y="13" width="18" height="7" rx="1.5" />
          <path d="M7 7.5h.01M7 16.5h.01M11 7.5h4M11 16.5h4" />
        </svg>
      );
    case "crane":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M5 21V6l14-2v3M5 6h14M9 9v4a2 2 0 0 0 2 2h6M15 15v3M13 21h6" />
        </svg>
      );
    case "hospital":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <rect x="4" y="4" width="16" height="17" rx="1.5" />
          <path d="M12 8v6M9 11h6M9 18h6" />
        </svg>
      );
    case "factory":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M3 21V10l6 4V10l6 4V7l3-3v17H3ZM7 21v-4M12 21v-4M17 21v-4" />
        </svg>
      );
    default:
      return <BoltIcon className={className} />;
  }
}

export function SpecialIcon({ name, className = base }: IconProps & { name: string }) {
  switch (name) {
    case "sync":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M4 9a8 8 0 0 1 13-3l3 3M20 5v4h-4M20 15a8 8 0 0 1-13 3l-3-3M4 19v-4h4" />
        </svg>
      );
    case "fuel":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M14 9h3a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V8l-3-3M7 8h6" />
        </svg>
      );
    case "enclosure":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6M7 10h.01M17 10h.01" />
        </svg>
      );
    case "thermal":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M6 4v10a4 4 0 1 0 4 0V4a2 2 0 0 0-4 0ZM8 14V8M14 5c2 0 2 2 4 2M14 10c2 0 2 2 4 2M14 15c2 0 2 2 4 2" />
        </svg>
      );
    case "finish":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M12 3a9 9 0 0 0 0 18c1.66 0 2-1.34 2-2s-.34-1-.34-1.5c0-.83.67-1.5 1.5-1.5H17a4 4 0 0 0 4-4c0-4.42-4.03-8-9-8Z" />
          <path d="M7.5 11h.01M10.5 7.5h.01M15 7.5h.01" />
        </svg>
      );
    case "electrical":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M13 2 4.5 13.5H11l-2 8.5 8.5-12H11l2-8Z" />
        </svg>
      );
    case "control":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <rect x="3" y="4" width="18" height="13" rx="1.5" />
          <path d="M8 21h8M12 17v4M7 8h4M7 11h6M15 8h2" />
        </svg>
      );
    case "engineering":
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2 2l6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z" />
        </svg>
      );
    default:
      return <BoltIcon className={className} />;
  }
}

export function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className} aria-hidden="true">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChatIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4V6a2 2 0 0 1 2-2Zm3 6h10M7 13h6" stroke="currentColor" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

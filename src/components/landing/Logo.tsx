type LogoProps = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const SIZES = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-12 w-12",
};

export default function Logo({
  variant = "light",
  size = "md",
  showWordmark = true,
  className = "",
}: LogoProps) {
  const wordmarkColor =
    variant === "light" ? "text-brand-800" : "text-white";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-brand-900 ring-1 ring-brand-700/40 ${SIZES[size]}`}
      >
        <img
          src="/logo-agencia-dedicada.png"
          alt="Agência Dedicada"
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </span>
      {showWordmark && (
        <span
          className={`font-display text-base font-semibold tracking-tight sm:text-lg ${wordmarkColor}`}
        >
          Agência <span className="text-brand-500">Dedicada</span>
        </span>
      )}
    </span>
  );
}

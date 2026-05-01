import { PAINS_MARQUEE } from "./constants";

export default function PainsMarquee() {
  const items = [...PAINS_MARQUEE, ...PAINS_MARQUEE];
  return (
    <section
      aria-label="Problemas comuns no WhatsApp comercial"
      className="relative overflow-hidden border-y border-brand-700/40 bg-brand-900 py-5"
    >
      <div className="marquee">
        <ul
          className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap pr-10 text-sm font-medium text-brand-100/85 sm:text-base"
          aria-hidden="false"
        >
          {items.map((p, i) => (
            <li key={i} className="flex items-center gap-10">
              <span>{p}</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-brand-300/60" />
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-900 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-900 to-transparent"
      />
    </section>
  );
}

import { VALUE_CARDS } from "./constants";

export default function ValueSection() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Impacto
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Velocidade, padrão e organização no mesmo atendimento.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_CARDS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-lg"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/10 text-electric-500">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-brand-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

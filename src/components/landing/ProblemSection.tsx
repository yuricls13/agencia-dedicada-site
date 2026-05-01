import { PROBLEM_CARDS } from "./constants";

export default function ProblemSection() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            O problema
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Seu WhatsApp pode estar perdendo vendas todos os dias
          </h2>
          <p className="mt-5 text-base text-neutral-700 sm:text-lg">
            Nem toda venda perdida acontece por falta de interesse. Muitas
            acontecem porque o lead demorou para receber resposta, ficou sem
            retorno ou foi atendido sem processo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEM_CARDS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand-900">
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

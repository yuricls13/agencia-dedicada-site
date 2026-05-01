import { SOLUTION_CARDS } from "./constants";

export default function SolutionSection() {
  return (
    <section id="solucao" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            A solução
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Um agente de IA treinado para o seu atendimento real
          </h2>
          <p className="mt-5 text-base text-neutral-700 sm:text-lg">
            O Agente Dedicado não é um chatbot genérico. Ele é criado com base
            nos serviços, linguagem, perguntas frequentes, regras comerciais e
            objetivos da sua empresa.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTION_CARDS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-7 transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-lg"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm shadow-brand-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold text-brand-900">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-neutral-700">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

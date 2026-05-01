import { STEPS } from "./constants";

export default function StepsSection() {
  return (
    <section id="como-funciona" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Do primeiro contato ao lead organizado.
          </h2>
          <p className="mt-5 text-base text-neutral-700 sm:text-lg">
            Criamos um processo para que cada conversa no WhatsApp tenha mais
            velocidade, clareza e próximo passo.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-5 lg:grid-cols-5">
          <span
            aria-hidden
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-100 via-brand-200 to-transparent lg:hidden"
          />
          {STEPS.map((step, i) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-lg"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold leading-none text-brand-400 sm:text-5xl">
                  {step.number}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden h-px flex-1 translate-y-2 bg-gradient-to-r from-brand-200 to-transparent lg:block"
                  />
                )}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-brand-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-neutral-500">
          Implantação típica em 7 a 14 dias, dependendo da complexidade do
          atendimento e das integrações.
        </p>
      </div>
    </section>
  );
}

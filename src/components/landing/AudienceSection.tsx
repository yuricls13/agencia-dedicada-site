import { AUDIENCE } from "./constants";

export default function AudienceSection() {
  return (
    <section id="para-quem-e" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Para quem é
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Não é para qualquer empresa.
          </h2>
          <p className="mt-5 text-base text-neutral-700 sm:text-lg">
            É para negócios que levam atendimento e vendas pelo WhatsApp a
            sério.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
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

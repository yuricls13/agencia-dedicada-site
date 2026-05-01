import { Check } from "lucide-react";
import { FEATURES } from "./constants";

export default function FeaturesSection() {
  return (
    <section id="beneficios" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Atendimento comercial com IA
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Tudo que seu WhatsApp precisa para vender melhor.
          </h2>
          <p className="mt-5 text-base text-neutral-700 sm:text-lg">
            Recursos pensados para empresas que recebem leads, orçamentos e
            agendamentos pelo WhatsApp todos os dias.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description, bullets }) => (
            <article
              key={title}
              className="rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-lg"
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
              <ul className="mt-5 space-y-2 border-t border-neutral-100 pt-4">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-neutral-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

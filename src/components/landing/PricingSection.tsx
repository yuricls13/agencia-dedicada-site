import { ArrowRight, Check, TrendingDown } from "lucide-react";
import { WHATSAPP_URL, handleWhatsAppClick } from "./constants";

const EMPLOYEE_COSTS = [
  "Salário mínimo: R$ 1.518/mês",
  "Encargos trabalhistas: ~70% a mais",
  "Férias, 13º, FGTS",
  "Só atende em horário comercial",
  "Resposta média: 15 a 40 minutos",
];

const AGENT_BENEFITS = [
  "Implantação consultiva inclusa",
  "Atendimento 24h, 7 dias por semana",
  "Resposta em segundos",
  "Sem encargos ou rescisões",
  "Ajustes e melhoria contínua",
];

export default function PricingSection() {
  return (
    <section id="investimento" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Investimento
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Quanto custa perder leads todos os dias?
          </h2>
          <p className="mt-5 text-base text-neutral-700 sm:text-lg">
            O Agente Dedicado custa menos do que um atendente em tempo integral
            — e trabalha sem parar.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-200">
                <TrendingDown className="h-4 w-4 text-neutral-500" />
              </span>
              <h3 className="font-display text-xl font-semibold text-neutral-700">
                Atendente humano
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {EMPLOYEE_COSTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-neutral-600"
                >
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-center">
              <p className="text-xs text-neutral-500">Custo real mensal</p>
              <p className="mt-1 text-2xl font-bold text-neutral-700">
                R$ 2.500–3.500<span className="text-base font-normal">/mês</span>
              </p>
              <p className="mt-0.5 text-xs text-neutral-400">
                + indisponível fora do horário
              </p>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 shadow-lg shadow-brand-500/5">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-100/60 blur-3xl"
            />
            <div className="relative flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cta-500">
                <Check className="h-4 w-4 text-white" />
              </span>
              <h3 className="font-display text-xl font-semibold text-brand-700">
                Agente Dedicado
              </h3>
              <span className="rounded-full bg-cta-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Recomendado
              </span>
            </div>
            <ul className="relative mt-6 space-y-3">
              {AGENT_BENEFITS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium text-neutral-900"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 ring-1 ring-success/30">
                    <Check className="h-3 w-3 text-success" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative mt-6 rounded-xl border border-brand-200 bg-white px-4 py-3 text-center">
              <p className="text-xs text-neutral-500">Investimento mensal</p>
              <p className="mt-1 text-2xl font-bold text-brand-700">
                A partir de R$ 897<span className="text-base font-normal">/mês</span>
              </p>
              <p className="mt-0.5 text-xs text-neutral-400">
                implantação consultiva inclusa
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                handleWhatsAppClick();
              }}
              className="relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-cta-500/30 transition-all hover:bg-cta-600"
            >
              Solicitar proposta
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="relative mt-3 text-center text-xs text-neutral-500">
              Consulta gratuita · Sem compromisso
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

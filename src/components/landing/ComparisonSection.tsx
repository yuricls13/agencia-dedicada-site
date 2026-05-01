import { Check, X } from "lucide-react";
import { COMPARISON } from "./constants";

export default function ComparisonSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Diferencial
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Mais do que uma ferramenta pronta.
          </h2>
          <p className="mt-5 text-base text-neutral-700 sm:text-lg">
            A diferença não está em ter IA. Está em ter um processo comercial
            implantado no canal onde sua empresa já conversa com os clientes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <header className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-neutral-700">
                {COMPARISON.generic.title}
              </h3>
              <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-neutral-700">
                Comum
              </span>
            </header>
            <ul className="mt-6 space-y-3">
              {COMPARISON.generic.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-neutral-700"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-200">
                    <X className="h-3 w-3 text-neutral-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 shadow-lg shadow-brand-500/5">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-100/60 blur-3xl"
            />
            <header className="relative flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-brand-700">
                {COMPARISON.agency.title}
              </h3>
              <span className="rounded-full bg-cta-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Recomendado
              </span>
            </header>
            <ul className="relative mt-6 space-y-3">
              {COMPARISON.agency.items.map((item) => (
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
          </article>
        </div>
      </div>
    </section>
  );
}

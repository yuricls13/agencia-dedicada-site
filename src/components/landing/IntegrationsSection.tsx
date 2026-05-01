import { INTEGRATIONS, LEAD_CHANNELS } from "./constants";

export default function IntegrationsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Integrações
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Conversa com as ferramentas que sua equipe já usa.
          </h2>
          <p className="mt-5 text-base text-neutral-700 sm:text-lg">
            Os leads não ficam só na conversa. Vão para a planilha, o CRM ou o
            calendário — sem retrabalho manual da equipe.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
          {INTEGRATIONS.map((tool) => (
            <article
              key={tool.slug}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={tool.src}
                  alt={`Logo ${tool.name}`}
                  className="h-full w-full object-contain transition-transform group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-center">
                <div className="font-display text-sm font-semibold text-brand-900">
                  {tool.name}
                </div>
                <div className="mt-0.5 text-xs text-neutral-500">
                  {tool.label}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8 sm:p-10">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-lg font-semibold text-brand-900 sm:text-xl">
                Ideal para empresas que recebem leads de
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Anúncios, redes sociais, busca paga e WhatsApp comercial.
              </p>
            </div>

            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-10">
              {LEAD_CHANNELS.map((c) => (
                <li
                  key={c.slug}
                  className="flex items-center gap-2 opacity-80 grayscale-[30%] transition-all hover:opacity-100 hover:grayscale-0"
                  title={c.name}
                >
                  <img
                    src={c.src}
                    alt={c.name}
                    className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="text-sm font-medium text-neutral-700">
                    {c.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Outras integrações sob demanda na implantação consultiva.
        </p>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    initials: "MO",
    name: "Marina Oliveira",
    role: "Sócia-Proprietária · Clínica Renova Estética",
    quote:
      "Antes perdíamos leads que chegavam à noite pelo Instagram. Agora o agente agenda, confirma e organiza tudo. No primeiro mês, nossos agendamentos aumentaram 40%.",
    result: "+40% agendamentos no 1º mês",
    color: "bg-brand-500",
  },
  {
    initials: "CH",
    name: "Carlos Henrique",
    role: "Diretor Comercial · BL Imóveis",
    quote:
      "Os corretores pararam de perder tempo com leads frios. O agente já qualifica região, faixa de valor e urgência antes de repassar. Economizamos pelo menos 2 horas por dia em triagem.",
    result: "2h/dia economizadas em triagem",
    color: "bg-cta-500",
  },
  {
    initials: "FS",
    name: "Fernanda Souza",
    role: "Coordenadora · Instituto Linguagem Viva",
    quote:
      "Matrículas que antes exigiam ligação e follow-up manual agora fecham direto no WhatsApp. A equipe só entra na conversa quando o lead já está pronto para assinar.",
    result: "Processo de matrícula 100% via WhatsApp",
    color: "bg-success",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Resultados reais
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            Quem já usa, não volta atrás.
          </h2>
          <p className="mt-5 text-base text-neutral-700 sm:text-lg">
            Empresas que implantaram o Agente Dedicado e mudaram como atendem no
            WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ initials, name, role, quote, result, color }) => (
            <article
              key={name}
              className="relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <Quote className="mb-4 h-6 w-6 text-brand-200" aria-hidden />
              <p className="flex-1 text-sm leading-relaxed text-neutral-700">
                "{quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${color}`}
                >
                  {initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-900">{name}</p>
                  <p className="text-xs text-neutral-500">{role}</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-brand-50 px-3 py-2">
                <p className="text-xs font-semibold text-brand-600">{result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

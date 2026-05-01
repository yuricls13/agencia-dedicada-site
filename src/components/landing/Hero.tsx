import { ArrowRight, Check, CheckCheck, Sparkles } from "lucide-react";
import { WHATSAPP_URL, handleWhatsAppClick } from "./constants";

const HERO_BG =
  "linear-gradient(135deg, #040320 0%, #0D0B50 60%, #2A2490 100%)";

const MICRO_BENEFITS = [
  "Atendimento 24/7",
  "Qualificação automática",
  "Implantação consultiva",
];

const CHAT = [
  { from: "lead", text: "Olá, tenho interesse no serviço.", time: "09:14" },
  {
    from: "agent",
    text:
      "Perfeito. Vou te fazer algumas perguntas rápidas para entender sua necessidade.",
    time: "09:14",
  },
  { from: "lead", text: "Quero agendar uma avaliação.", time: "09:15" },
  {
    from: "agent",
    text: "Claro. Qual melhor dia e horário para você?",
    time: "09:15",
  },
] as const;

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden text-white"
      style={{ background: HERO_BG }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(82,75,196,0.35) 0%, rgba(8,6,56,0) 60%), radial-gradient(50% 40% at 0% 100%, rgba(255,101,53,0.18) 0%, rgba(8,6,56,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:py-32">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-brand-100 backdrop-blur-md sm:text-[11px]">
            <Sparkles className="h-3.5 w-3.5 text-brand-300" />
            Agente de IA para WhatsApp
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
            Responda seus leads
            <br className="hidden sm:block" /> antes dos concorrentes.
            <span className="mt-3 block text-2xl font-medium text-brand-100 sm:text-3xl lg:text-[34px]">
              Com IA no WhatsApp, 24h por dia.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-brand-100/90 sm:text-lg">
            A Agência Dedicada cria agentes de IA personalizados para atender,
            qualificar e organizar seus leads no WhatsApp — sem depender apenas
            da disponibilidade da sua equipe.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                handleWhatsAppClick();
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-cta-500/30 transition-all hover:bg-cta-600 hover:shadow-cta-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cta-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              Falar com especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              Ver como funciona
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-100/80">
            {MICRO_BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <WhatsAppCard />
        </div>
      </div>
    </section>
  );
}

function WhatsAppCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-400/30 via-transparent to-cta-500/20 blur-3xl"
      />
      <div className="rounded-[28px] border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
        <div className="rounded-[22px] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03]">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-brand-900 ring-2 ring-success/50">
                <img
                  src="/logo-agencia-dedicada.png"
                  alt="Agência Dedicada"
                  className="h-full w-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white p-0.5 ring-2 ring-brand-900">
                <img
                  src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/whatsapp/default.svg"
                  alt="WhatsApp"
                  className="h-full w-full"
                  loading="lazy"
                />
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">
                Agente Dedicado
              </div>
              <div className="flex items-center gap-1.5 text-xs text-brand-100/80">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                online · responde em segundos
              </div>
            </div>
            <div className="text-[10px] uppercase tracking-wider text-brand-100/60">
              hoje
            </div>
          </div>

          <div className="space-y-3 px-4 py-5">
            {CHAT.map((m, i) => (
              <div
                key={i}
                className={[
                  "flex flex-col gap-0.5",
                  m.from === "lead" ? "items-end" : "items-start",
                ].join(" ")}
              >
                <div
                  className={[
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-snug",
                    m.from === "lead"
                      ? "rounded-br-sm bg-white text-neutral-900"
                      : "rounded-bl-sm border border-success/25 bg-success/15 text-white",
                  ].join(" ")}
                >
                  {m.text}
                </div>
                <div
                  className={[
                    "flex items-center gap-1 px-1 text-[10px] text-brand-100/60",
                    m.from === "lead" ? "flex-row-reverse" : "",
                  ].join(" ")}
                >
                  <span>{m.time}</span>
                  {m.from === "lead" && (
                    <CheckCheck
                      className="h-3 w-3 text-electric-500"
                      aria-label="Lida"
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-1 pl-1 pt-1" aria-live="polite">
              <span className="sr-only">Agente digitando</span>
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-100/70 [animation-delay:-200ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-100/70 [animation-delay:-100ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-100/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

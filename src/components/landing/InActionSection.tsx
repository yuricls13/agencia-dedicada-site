import { useState } from "react";
import { CheckCheck } from "lucide-react";
import { SCENARIOS } from "./constants";

export default function InActionSection() {
  const [active, setActive] = useState(SCENARIOS[0].slug);
  const current = SCENARIOS.find((s) => s.slug === active) ?? SCENARIOS[0];

  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 0%, rgba(82,75,196,0.30) 0%, rgba(8,6,56,0) 60%), radial-gradient(50% 50% at 0% 100%, rgba(255,101,53,0.18) 0%, rgba(8,6,56,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Veja o Agente em ação
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px]">
            Conversas reais. Mesmo padrão. Resultado organizado.
          </h2>
          <p className="mt-5 text-base text-brand-100/85 sm:text-lg">
            Três cenários comuns no WhatsApp comercial — atendidos com a
            linguagem, perguntas e regras da empresa.
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <ul role="tablist" className="flex flex-col gap-3">
              {SCENARIOS.map((s) => {
                const isActive = s.slug === active;
                return (
                  <li key={s.slug}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(s.slug)}
                      className={[
                        "w-full rounded-2xl border p-5 text-left transition-all",
                        isActive
                          ? "border-brand-300/60 bg-white/[0.07] shadow-lg shadow-brand-900/30"
                          : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05]",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={[
                            "text-xs font-semibold uppercase tracking-wider",
                            isActive ? "text-cta-400" : "text-brand-300",
                          ].join(" ")}
                        >
                          {s.segment}
                        </span>
                        {isActive && (
                          <span className="rounded-full bg-cta-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cta-400">
                            Ativo
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-brand-100/80">
                        {s.subtitle}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <PhoneFrame scenario={current} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ scenario }: { scenario: (typeof SCENARIOS)[number] }) {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[48px] bg-gradient-to-br from-brand-400/30 via-transparent to-cta-500/20 blur-3xl"
      />
      <div className="rounded-[44px] border border-white/15 bg-neutral-900 p-3 shadow-2xl">
        <div className="overflow-hidden rounded-[34px] bg-[#0b1418]">
          <div className="flex items-center gap-3 border-b border-white/5 bg-[#1f2c33] px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-brand-900 ring-2 ring-success/40">
              <img
                src="/logo-agencia-dedicada.png"
                alt=""
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-sm font-semibold text-white">
                Agente Dedicado
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                online
              </div>
            </div>
            <img
              src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/whatsapp/default.svg"
              alt="WhatsApp"
              className="h-5 w-5 opacity-80"
              loading="lazy"
            />
          </div>

          <div
            className="space-y-2.5 px-4 py-5"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/60">
              Hoje
            </div>
            {scenario.messages.map((m, i) => (
              <Bubble key={i} message={m} />
            ))}
          </div>

          <div className="border-t border-white/5 bg-[#1f2c33] px-4 py-3 text-[11px] text-white/60">
            <div className="flex items-center justify-between">
              <span>Resultado</span>
              <span className="rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-medium text-success">
                ✓ {scenario.outcome}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({
  message,
}: {
  message: { from: "lead" | "agent"; text: string; time: string };
}) {
  const isLead = message.from === "lead";
  return (
    <div className={`flex ${isLead ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[82%] rounded-lg px-3 py-2 text-[13.5px] leading-snug shadow-sm",
          isLead
            ? "rounded-br-sm bg-[#005c4b] text-white"
            : "rounded-bl-sm bg-[#202c33] text-white",
        ].join(" ")}
      >
        <p>{message.text}</p>
        <div
          className={[
            "mt-1 flex items-center gap-1 text-[10px]",
            isLead ? "justify-end text-white/60" : "justify-end text-white/45",
          ].join(" ")}
        >
          <span>{message.time}</span>
          {isLead && <CheckCheck className="h-3 w-3 text-[#53bdeb]" />}
        </div>
      </div>
    </div>
  );
}

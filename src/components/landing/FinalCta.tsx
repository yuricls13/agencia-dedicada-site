import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL, handleWhatsAppClick } from "./constants";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(82,75,196,0.35) 0%, rgba(8,6,56,0) 60%), radial-gradient(40% 40% at 100% 100%, rgba(255,101,53,0.25) 0%, rgba(8,6,56,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[52px] lg:leading-[1.05]">
          Pare de perder leads no WhatsApp.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-brand-100/90 sm:text-lg">
          Comece a atender com mais velocidade, organização e padrão usando um
          agente de IA criado para o processo da sua empresa.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleWhatsAppClick();
            }}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cta-500/30 transition-all hover:bg-cta-600 hover:shadow-cta-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cta-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
          >
            Falar com especialista
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-brand-100/70">
          Implantação consultiva · 7 a 14 dias · Atendimento 24/7
        </p>
      </div>
    </section>
  );
}

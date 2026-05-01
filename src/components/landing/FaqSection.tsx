import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "./constants";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px]">
            O que costuma aparecer antes de fechar.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                  >
                    <span className="font-display text-base font-semibold text-brand-900 sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={[
                        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-brand-500 transition-transform",
                        isOpen ? "rotate-45 bg-brand-50" : "bg-white",
                      ].join(" ")}
                      aria-hidden
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-sm leading-relaxed text-neutral-700 sm:text-[15px]"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

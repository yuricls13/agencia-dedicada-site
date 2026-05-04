import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { WHATSAPP_URL, handleWhatsAppClick } from "./constants";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tipOpen, setTipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.max(1800, document.body.scrollHeight * 0.3);
      setShow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setTipOpen(true), 45000);
    return () => clearTimeout(t);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3 sm:bottom-6 sm:right-6">
      {tipOpen && (
        <div className="relative max-w-[260px] rounded-2xl rounded-br-sm border border-neutral-200 bg-white px-4 py-3 shadow-xl animate-fade-in-up">
          <button
            type="button"
            aria-label="Fechar mensagem"
            onClick={() => setTipOpen(false)}
            className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-success">
              Online agora
            </span>
          </div>
          <p className="mt-1.5 text-sm font-medium text-brand-900">
            Quer ver como ficaria no seu WhatsApp?
          </p>
          <p className="mt-0.5 text-xs text-neutral-600">
            Fale com um especialista — resposta em segundos.
          </p>
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          handleWhatsAppClick();
        }}
        aria-label="Falar com especialista no WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-success/30 transition-all hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-success/40 sm:h-16 sm:w-16"
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 motion-safe:animate-ping"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/whatsapp/mono.svg"
          alt=""
          className="relative h-7 w-7 brightness-0 invert sm:h-8 sm:w-8"
          loading="eager"
        />
        <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-cta-500 text-[10px] font-bold text-white">
          1
        </span>
      </a>
    </div>
  );
}

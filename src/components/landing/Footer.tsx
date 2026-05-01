import { MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, WHATSAPP_URL, handleWhatsAppClick } from "./constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a
            href="#topo"
            className="inline-flex items-center"
            aria-label="Agência Dedicada"
          >
            <Logo variant="light" size="md" />
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-700">
            Agentes de IA personalizados para WhatsApp, atendimento e vendas.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleWhatsAppClick();
            }}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-brand-800 transition-colors hover:border-brand-300/60 hover:bg-white"
          >
            <MessageCircle className="h-4 w-4 text-success" />
            (11) 92424-6749
          </a>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Navegação
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-neutral-700 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Comece agora
          </h4>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleWhatsAppClick();
            }}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-cta-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-cta-500/30 transition-all hover:bg-cta-600"
          >
            Falar com especialista
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-neutral-100 px-5 pt-6 sm:px-8">
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Agência Dedicada. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

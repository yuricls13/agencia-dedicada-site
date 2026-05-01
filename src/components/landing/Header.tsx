import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, WHATSAPP_URL, handleWhatsAppClick } from "./constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-neutral-200 bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#topo"
          className="inline-flex items-center"
          aria-label="Agência Dedicada — voltar ao topo"
        >
          <Logo variant="light" size="sm" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleWhatsAppClick();
            }}
            className="inline-flex items-center justify-center rounded-full bg-cta-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-cta-500/30 transition-all hover:bg-cta-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cta-400 focus-visible:ring-offset-2"
          >
            Falar com especialista
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-800 transition-colors hover:bg-neutral-100 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                handleWhatsAppClick();
              }}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cta-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-cta-500/30 transition-all hover:bg-cta-600"
            >
              Falar com especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

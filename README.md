# Agência Dedicada — Landing Page

Landing page do **Agente Dedicado** — agente de IA personalizado para WhatsApp que atende, qualifica e organiza leads 24/7.

🌐 Deploy automático na Vercel a cada push em `master`.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** com design system próprio (paleta brand/cta/electric)
- **Lucide React** (ícones)
- **thesvg** via jsDelivr (logos coloridas reais)

## Como rodar local

```bash
npm install
npm run dev
# http://localhost:5173
```

## Build

```bash
npm run build      # gera dist/
npm run preview    # serve a build localmente
```

## Estrutura

```
src/
├── pages/Index.tsx                # Página única
├── components/landing/
│   ├── constants.ts               # WhatsApp URL, dados (cards, FAQ, cenários)
│   ├── Logo.tsx                   # Logo reutilizável
│   ├── Header.tsx
│   ├── Hero.tsx                   # Hero + mockup WhatsApp
│   ├── PainsMarquee.tsx           # Faixa marquee de dores
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── FeaturesSection.tsx
│   ├── InActionSection.tsx        # Mockups WhatsApp por segmento
│   ├── IntegrationsSection.tsx    # Logos coloridas (Sheets, HubSpot, etc.)
│   ├── StepsSection.tsx
│   ├── AudienceSection.tsx
│   ├── ComparisonSection.tsx
│   ├── ValueSection.tsx
│   ├── FaqSection.tsx
│   ├── FinalCta.tsx
│   ├── FloatingWhatsApp.tsx       # Botão flutuante fixo
│   └── Footer.tsx
└── index.css
```

## Constantes principais

`src/components/landing/constants.ts`:

```ts
export const WHATSAPP_NUMBER = "5511924246749";
export const WHATSAPP_MESSAGE = "Olá, quero falar com um especialista sobre o Agente Dedicado";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
```

Todos os CTAs apontam para `WHATSAPP_URL`. A função `handleWhatsAppClick()` registra `[LandingPage] CTA WhatsApp clicked` no console.

## Deploy

`vercel.json` força:

```json
{ "framework": "vite", "buildCommand": "npm run build", "outputDirectory": "dist" }
```

A regra de rewrite manda toda rota desconhecida para `index.html` (single page).

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const STRUCTURED_DATA_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Agência Dedicada",
  description:
    "Agentes de IA personalizados para WhatsApp. Atendimento 24/7, qualificação automática de leads e organização comercial.",
  url: "https://www.agenciadedicada.com.br",
  logo: "https://www.agenciadedicada.com.br/logo-agencia-dedicada.png",
  telephone: "+5511924246749",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "SP",
  },
  areaServed: "BR",
  priceRange: "$$",
  serviceType: "Agente de IA para WhatsApp",
};

const STRUCTURED_DATA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Agente Dedicado substitui minha equipe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não necessariamente. O melhor uso é deixar a IA cuidar das primeiras respostas, qualificação, organização e follow-up, enquanto sua equipe assume as conversas mais importantes.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona para qualquer empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Funciona melhor para empresas que recebem leads, pedidos de orçamento, agendamentos ou dúvidas pelo WhatsApp e precisam atender com mais velocidade e organização.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso saber tecnologia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A Agência Dedicada conduz a implantação, configura o agente e orienta sua equipe no uso.",
      },
    },
    {
      "@type": "Question",
      name: "Em quanto tempo fica pronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Normalmente entre 7 e 14 dias, dependendo da complexidade do atendimento e das integrações.",
      },
    },
    {
      "@type": "Question",
      name: "O agente fala com a linguagem da minha marca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A linguagem é ajustada de acordo com o perfil da empresa, tipo de cliente e objetivo do atendimento.",
      },
    },
    {
      "@type": "Question",
      name: "Ele pode integrar com planilha, CRM ou calendário?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Integramos com as ferramentas que sua equipe já usa, como Google Sheets, principais CRMs e Google Calendar.",
      },
    },
  ],
};

const STRUCTURED_DATA_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Agência Dedicada",
  url: "https://www.agenciadedicada.com.br",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agenciadedicada.com.br"),
  title: {
    default: "Agente de IA para WhatsApp — Agência Dedicada | Atendimento 24/7",
    template: "%s — Agência Dedicada",
  },
  description:
    "Crie um agente de IA personalizado para atender, qualificar e organizar seus leads no WhatsApp, 24h por dia. Implantação consultiva em 7 a 14 dias.",
  keywords: [
    "agente de ia para whatsapp",
    "chatbot whatsapp empresa",
    "atendimento automatizado whatsapp",
    "ia atendimento whatsapp",
    "automatizar whatsapp",
    "qualificação de leads whatsapp",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.agenciadedicada.com.br",
    siteName: "Agência Dedicada",
    locale: "pt_BR",
    title: "Agente de IA para WhatsApp — Agência Dedicada | Atendimento 24/7",
    description:
      "Crie um agente de IA personalizado para atender, qualificar e organizar seus leads no WhatsApp, 24h por dia. Implantação consultiva em 7 a 14 dias.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agente de IA para WhatsApp — Agência Dedicada",
    description:
      "Crie um agente de IA personalizado para atender, qualificar e organizar seus leads no WhatsApp, 24h por dia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA_BUSINESS),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA_FAQ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA_WEBSITE),
          }}
        />
      </head>
      <body>
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

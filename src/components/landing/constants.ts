import {
  Clock,
  Filter,
  RefreshCw,
  Send,
  Zap,
  BookOpen,
  ScrollText,
  Sparkles,
  Database,
  LineChart,
  AlertTriangle,
  Inbox,
  Volume2,
  Users,
  Shuffle,
  TrendingDown,
  Stethoscope,
  GraduationCap,
  Building2,
  Wrench,
  Megaphone,
} from "lucide-react";

export const WHATSAPP_NUMBER = "5511924246749";
export const WHATSAPP_MESSAGE =
  "Olá, quero falar com um especialista sobre o Agente Dedicado";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const NAV_LINKS = [
  { label: "Solução", href: "#solucao" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para quem é", href: "#para-quem-e" },
  { label: "FAQ", href: "#faq" },
];

export const PAINS_MARQUEE = [
  "Lead esquecido no WhatsApp",
  "Resposta lenta",
  "Tráfego pago desperdiçado",
  "Falta de follow-up",
  "Atendimento sem padrão",
  "Oportunidades perdidas",
  "Equipe sobrecarregada",
  "Conversas sem organização",
];

export const PROBLEM_CARDS = [
  {
    icon: Clock,
    title: "Resposta demorada",
    description:
      "Cada minuto entre a mensagem e a resposta reduz a chance de o lead ainda estar interessado.",
  },
  {
    icon: Inbox,
    title: "Conversas esquecidas",
    description:
      "Mensagens que se perdem entre dezenas de outras e nunca recebem retorno.",
  },
  {
    icon: RefreshCw,
    title: "Falta de follow-up",
    description:
      "Contatos interessados que ficam sem retomada e seguem para o concorrente.",
  },
  {
    icon: Shuffle,
    title: "Atendimento improvisado",
    description:
      "Cada pessoa responde de um jeito, sem padrão e sem critério comercial.",
  },
  {
    icon: Database,
    title: "Dados perdidos no WhatsApp",
    description:
      "Informações importantes ficam soltas em conversas e nunca chegam ao CRM.",
  },
  {
    icon: TrendingDown,
    title: "Anúncios mal aproveitados",
    description:
      "Tráfego pago gera leads que não viram oportunidade por demora no atendimento.",
  },
];

export const SOLUTION_CARDS = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description:
      "Responda leads fora do horário comercial, finais de semana e momentos em que sua equipe está ocupada.",
  },
  {
    icon: Filter,
    title: "Qualificação automática",
    description:
      "Colete informações importantes antes de encaminhar o contato para o time humano.",
  },
  {
    icon: RefreshCw,
    title: "Follow-up estruturado",
    description:
      "Retome contatos e mantenha oportunidades vivas com mais consistência.",
  },
  {
    icon: Send,
    title: "Encaminhamento inteligente",
    description:
      "Direcione conversas importantes para a pessoa certa, com contexto organizado.",
  },
];

export const FEATURES = [
  {
    icon: Zap,
    title: "Respostas rápidas",
    description:
      "Reduza o tempo entre a mensagem do lead e o primeiro atendimento.",
    bullets: [
      "Resposta em segundos",
      "Mesmo fora do horário comercial",
      "Sem depender de uma única pessoa",
    ],
  },
  {
    icon: BookOpen,
    title: "Base de conhecimento",
    description:
      "Tudo o que sua empresa precisa responder, organizado em um só lugar.",
    bullets: [
      "Serviços e ofertas",
      "Perguntas frequentes",
      "Regras e diferenciais",
    ],
  },
  {
    icon: ScrollText,
    title: "Roteiro comercial",
    description:
      "Uma conversa estruturada para identificar interesse e conduzir o próximo passo.",
    bullets: [
      "Perguntas de qualificação",
      "Quando agendar",
      "Quando encaminhar",
    ],
  },
  {
    icon: Sparkles,
    title: "Qualificação de leads",
    description:
      "Separe contatos curiosos de oportunidades comerciais reais antes do humano entrar.",
    bullets: [
      "Coleta de dados-chave",
      "Identificação de urgência",
      "Contexto pronto para o vendedor",
    ],
  },
  {
    icon: Database,
    title: "Integrações",
    description:
      "Conecte o agente às ferramentas que sua equipe já usa no dia a dia.",
    bullets: [
      "Planilhas e Google Sheets",
      "CRMs principais",
      "Calendário de agendamento",
    ],
  },
  {
    icon: LineChart,
    title: "Acompanhamento e ajustes",
    description:
      "Os primeiros dias são monitorados para refinar respostas e processo.",
    bullets: [
      "Revisão de conversas reais",
      "Ajustes de roteiro",
      "Melhoria contínua",
    ],
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Lead chama no WhatsApp",
    description:
      "O atendimento começa rapidamente, mesmo quando sua equipe está ocupada.",
  },
  {
    number: "02",
    title: "Agente entende a necessidade",
    description:
      "A IA faz perguntas, identifica o interesse e coleta informações importantes.",
  },
  {
    number: "03",
    title: "Conversa é qualificada",
    description:
      "O contato deixa de ser apenas uma mensagem solta e passa a ter contexto comercial.",
  },
  {
    number: "04",
    title: "Oportunidade é encaminhada",
    description:
      "Sua equipe recebe o lead com mais clareza para continuar o atendimento.",
  },
  {
    number: "05",
    title: "Follow-up mantém o contato vivo",
    description:
      "O agente pode retomar conversas e reduzir oportunidades esquecidas.",
  },
];

export const AUDIENCE = [
  {
    icon: Stethoscope,
    title: "Clínicas e estética",
    description:
      "Para empresas que recebem pedidos de avaliação, dúvidas e agendamentos.",
  },
  {
    icon: GraduationCap,
    title: "Escolas e cursos",
    description:
      "Para operações que precisam responder interessados e conduzir matrículas.",
  },
  {
    icon: Building2,
    title: "Imobiliárias",
    description:
      "Para times que precisam qualificar perfil, região, faixa de valor e disponibilidade.",
  },
  {
    icon: Wrench,
    title: "Serviços locais",
    description:
      "Para negócios que dependem de orçamento, disponibilidade e velocidade no atendimento.",
  },
  {
    icon: Megaphone,
    title: "Empresas que anunciam",
    description:
      "Para quem investe em Instagram, Google ou Meta Ads e não quer desperdiçar leads.",
  },
];

export const COMPARISON = {
  generic: {
    title: "Plataforma genérica",
    items: [
      "Você configura sozinho",
      "Fluxos prontos e limitados",
      "Pouco contexto comercial",
      "Ajustes dependem da sua equipe",
      "Foco na ferramenta",
    ],
  },
  agency: {
    title: "Agência Dedicada",
    items: [
      "Implantação consultiva",
      "Roteiro criado para seu processo",
      "Linguagem alinhada à sua marca",
      "Acompanhamento inicial",
      "Foco em atendimento, vendas e organização",
    ],
  },
};

export const VALUE_CARDS = [
  {
    icon: Zap,
    title: "Atendimento mais rápido",
    description:
      "Primeiro contato em segundos, sem depender só da disponibilidade da equipe.",
  },
  {
    icon: AlertTriangle,
    title: "Menos leads esquecidos",
    description:
      "Conversas organizadas e retomadas com mais consistência.",
  },
  {
    icon: Volume2,
    title: "Mais contexto para o time",
    description:
      "O vendedor recebe o lead já com perfil, intenção e dados-chave.",
  },
  {
    icon: Users,
    title: "Anúncios melhor aproveitados",
    description:
      "Cada lead que chega do tráfego pago entra num processo, não numa caixa de entrada.",
  },
];

export const FAQ = [
  {
    question: "O Agente Dedicado substitui minha equipe?",
    answer:
      "Não necessariamente. O melhor uso é deixar a IA cuidar das primeiras respostas, qualificação, organização e follow-up, enquanto sua equipe assume as conversas mais importantes.",
  },
  {
    question: "Funciona para qualquer empresa?",
    answer:
      "Funciona melhor para empresas que recebem leads, pedidos de orçamento, agendamentos ou dúvidas pelo WhatsApp e precisam atender com mais velocidade e organização.",
  },
  {
    question: "Preciso saber tecnologia?",
    answer:
      "Não. A Agência Dedicada conduz a implantação, configura o agente e orienta sua equipe no uso.",
  },
  {
    question: "Em quanto tempo fica pronto?",
    answer:
      "Normalmente entre 7 e 14 dias, dependendo da complexidade do atendimento e das integrações.",
  },
  {
    question: "O agente fala com a linguagem da minha marca?",
    answer:
      "Sim. A linguagem é ajustada de acordo com o perfil da empresa, tipo de cliente e objetivo do atendimento.",
  },
  {
    question: "Ele pode integrar com planilha, CRM ou calendário?",
    answer:
      "Sim. Integramos com as ferramentas que sua equipe já usa, como Google Sheets, principais CRMs e Google Calendar.",
  },
];

export function handleWhatsAppClick() {
  console.log("[LandingPage]", "CTA WhatsApp clicked");
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
}

const SVG_CDN = "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons";

export const INTEGRATIONS = [
  {
    slug: "google-sheets",
    name: "Google Sheets",
    label: "Planilhas",
    src: `${SVG_CDN}/google-sheets/default.svg`,
  },
  {
    slug: "google-calendar",
    name: "Google Calendar",
    label: "Agendamento",
    src: `${SVG_CDN}/google-calendar/default.svg`,
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    label: "CRM",
    src: `${SVG_CDN}/hubspot/default.svg`,
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    label: "CRM",
    src: `${SVG_CDN}/salesforce/default.svg`,
  },
  {
    slug: "notion",
    name: "Notion",
    label: "Base de conhecimento",
    src: `${SVG_CDN}/notion/default.svg`,
  },
  {
    slug: "zapier",
    name: "Zapier",
    label: "Automações",
    src: `${SVG_CDN}/zapier/default.svg`,
  },
  {
    slug: "make",
    name: "Make",
    label: "Automações",
    src: `${SVG_CDN}/make/default.svg`,
  },
  {
    slug: "n8n",
    name: "n8n",
    label: "Workflows",
    src: `${SVG_CDN}/n8n/default.svg`,
  },
];

type ChatMessage = {
  from: "lead" | "agent";
  text: string;
  time: string;
};

export const SCENARIOS: {
  slug: string;
  segment: string;
  title: string;
  subtitle: string;
  messages: ChatMessage[];
  outcome: string;
}[] = [
  {
    slug: "clinica",
    segment: "Clínica de estética",
    title: "Agendamento em 4 mensagens",
    subtitle: "Lead chegou pelo Instagram às 22h.",
    messages: [
      { from: "lead", text: "Oi, vi vocês no Insta. Fazem limpeza de pele?", time: "22:14" },
      { from: "agent", text: "Olá! Sim, fazemos. Posso te explicar a avaliação? É gratuita.", time: "22:14" },
      { from: "lead", text: "Pode sim. Tenho disponibilidade na quinta de manhã.", time: "22:15" },
      { from: "agent", text: "Perfeito. Tenho 9h ou 10h30. Qual prefere?", time: "22:15" },
      { from: "lead", text: "10h30 fica ótimo.", time: "22:16" },
      { from: "agent", text: "Reservado ✅ Quinta às 10h30. Vou te enviar a confirmação.", time: "22:16" },
    ],
    outcome: "Agendamento confirmado · fora do horário comercial",
  },
  {
    slug: "imobiliaria",
    segment: "Imobiliária",
    title: "Qualificação antes do corretor",
    subtitle: "Lead veio de campanha Meta Ads.",
    messages: [
      { from: "lead", text: "Tenho interesse em apartamentos na Vila Madalena.", time: "14:02" },
      { from: "agent", text: "Ótimo! Para te direcionar melhor: 2 ou 3 quartos?", time: "14:02" },
      { from: "lead", text: "2 quartos, com varanda.", time: "14:03" },
      { from: "agent", text: "Faixa de investimento aproximada?", time: "14:03" },
      { from: "lead", text: "Até R$ 850 mil.", time: "14:04" },
      { from: "agent", text: "Anotei. Vou passar para a corretora Carla com 3 opções compatíveis.", time: "14:04" },
    ],
    outcome: "Corretor recebe perfil + faixa + região",
  },
  {
    slug: "escola",
    segment: "Escola de cursos",
    title: "Triagem de matrícula",
    subtitle: "Lead chegou pelo Google Ads.",
    messages: [
      { from: "lead", text: "Vocês têm turma de inglês para adolescente?", time: "19:48" },
      { from: "agent", text: "Sim! Qual a idade do aluno e nível atual?", time: "19:48" },
      { from: "lead", text: "13 anos, básico. Já fez curso antes.", time: "19:49" },
      { from: "agent", text: "Temos turmas de pré-intermediário às terças e quintas, 18h ou 19h.", time: "19:49" },
      { from: "lead", text: "19h às terças/quintas é ideal.", time: "19:50" },
      { from: "agent", text: "Te conecto com a coordenação para fazer a avaliação grátis. Tudo bem?", time: "19:50" },
    ],
    outcome: "Lead qualificado encaminhado em 2 minutos",
  },
];

export const LEAD_CHANNELS = [
  {
    slug: "whatsapp",
    name: "WhatsApp",
    src: `${SVG_CDN}/whatsapp/default.svg`,
  },
  {
    slug: "instagram",
    name: "Instagram",
    src: `${SVG_CDN}/instagram/default.svg`,
  },
  {
    slug: "meta",
    name: "Meta Ads",
    src: `${SVG_CDN}/meta/default.svg`,
  },
  {
    slug: "facebook",
    name: "Facebook",
    src: `${SVG_CDN}/facebook/default.svg`,
  },
  {
    slug: "google",
    name: "Google",
    src: `${SVG_CDN}/google/default.svg`,
  },
];

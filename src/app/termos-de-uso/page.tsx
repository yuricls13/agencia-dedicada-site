import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/landing/Logo";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Leia os Termos de Uso da Agência Dedicada — condições para contratação dos serviços de agentes de IA para WhatsApp.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Voltar para o início">
            <Logo variant="light" size="sm" />
          </Link>
          <Link
            href="/"
            className="text-sm text-neutral-500 transition-colors hover:text-brand-600"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
          Termos de Uso
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          Última atualização: maio de 2026
        </p>

        <div className="prose prose-neutral mt-10 max-w-none text-neutral-700 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand-900 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:space-y-1.5 [&_ul]:pl-5">

          <p>
            Estes Termos de Uso regulam a contratação e uso dos serviços da{" "}
            <strong>Agência Dedicada</strong> ("Prestadora"), empresa especializada
            em implantação de agentes de IA para WhatsApp. Ao contratar nossos
            serviços, você ("Cliente") concorda com os termos abaixo.
          </p>

          <h2>1. Descrição dos Serviços</h2>
          <p>A Agência Dedicada oferece:</p>
          <ul>
            <li>Implantação consultiva de agentes de IA personalizados para WhatsApp</li>
            <li>Configuração de roteiros comerciais, base de conhecimento e regras de atendimento</li>
            <li>Integração com ferramentas como Google Sheets, CRMs e Google Calendar</li>
            <li>Acompanhamento inicial para ajustes e melhoria do agente</li>
            <li>Suporte técnico conforme plano contratado</li>
          </ul>

          <h2>2. Contratação e Vigência</h2>
          <p>
            O contrato tem início na confirmação formal (e-mail ou WhatsApp) e
            pagamento da primeira mensalidade. O prazo de implantação é de 7 a 14
            dias corridos, salvo complexidade acordada em proposta específica.
          </p>
          <p>
            O contrato é mensal, renovado automaticamente, salvo aviso de rescisão
            com antecedência mínima de 30 dias.
          </p>

          <h2>3. Obrigações da Agência Dedicada</h2>
          <ul>
            <li>Implantar o agente conforme escopo acordado na proposta</li>
            <li>Fornecer treinamento básico à equipe do cliente</li>
            <li>Realizar ajustes iniciais durante o período de acompanhamento</li>
            <li>Manter confidencialidade das informações do cliente</li>
            <li>Cumprir a LGPD no tratamento de dados</li>
          </ul>

          <h2>4. Obrigações do Cliente</h2>
          <ul>
            <li>Fornecer as informações necessárias para configuração do agente (produtos, serviços, FAQs, regras comerciais)</li>
            <li>Disponibilizar acesso ao WhatsApp Business e às ferramentas de integração</li>
            <li>Efetuar o pagamento conforme condições acordadas</li>
            <li>Não utilizar o agente para fins ilegais, spam ou práticas abusivas</li>
            <li>Informar alterações relevantes nos processos que impactem o funcionamento do agente</li>
          </ul>

          <h2>5. Pagamento</h2>
          <p>
            Os valores, forma de pagamento e vencimento são definidos na proposta
            comercial. O não pagamento no prazo acarreta suspensão do serviço após
            notificação e pode resultar no encerramento contratual.
          </p>

          <h2>6. Propriedade Intelectual</h2>
          <p>
            Os roteiros, configurações e fluxos desenvolvidos durante a
            implantação são de propriedade do Cliente após quitação integral dos
            valores. A Agência Dedicada retém o direito de utilizar a experiência
            adquirida para desenvolvimento de soluções similares a outros clientes,
            sem revelar informações confidenciais.
          </p>

          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            A Agência Dedicada não se responsabiliza por:
          </p>
          <ul>
            <li>Indisponibilidade da API do WhatsApp ou de plataformas de terceiros</li>
            <li>Resultados comerciais específicos (o agente auxilia o processo, mas não garante vendas)</li>
            <li>Perdas decorrentes de uso indevido do serviço pelo cliente</li>
            <li>Dados inseridos pelo cliente que violem direitos de terceiros</li>
          </ul>

          <h2>8. Confidencialidade</h2>
          <p>
            Ambas as partes se comprometem a manter sigilo sobre informações
            confidenciais trocadas durante a vigência e por 2 anos após o
            encerramento do contrato.
          </p>

          <h2>9. Rescisão</h2>
          <p>
            Qualquer das partes pode rescindir o contrato com aviso prévio de 30
            dias. A rescisão imediata é possível em caso de descumprimento grave
            das obrigações, mediante notificação formal.
          </p>

          <h2>10. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de atualizar estes Termos. Clientes ativos
            serão notificados por e-mail com antecedência mínima de 15 dias.
          </p>

          <h2>11. Foro</h2>
          <p>
            Estes Termos são regidos pela legislação brasileira. Fica eleito o
            foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias,
            com renúncia a qualquer outro por mais privilegiado que seja.
          </p>

          <h2>12. Contato</h2>
          <p>
            E-mail: <strong>contato@agenciadedicada.com.br</strong>
            <br />
            WhatsApp: <strong>(11) 92424-6749</strong>
          </p>
        </div>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-8 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Agência Dedicada. ·{" "}
        <Link href="/politica-de-privacidade" className="hover:text-neutral-600">
          Política de Privacidade
        </Link>
      </footer>
    </div>
  );
}

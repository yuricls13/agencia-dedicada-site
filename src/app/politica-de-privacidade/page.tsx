import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/landing/Logo";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Agência Dedicada coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPolicyPage() {
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
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          Última atualização: maio de 2026
        </p>

        <div className="prose prose-neutral mt-10 max-w-none text-neutral-700 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand-900 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:space-y-1.5 [&_ul]:pl-5">

          <p>
            A <strong>Agência Dedicada</strong> ("nós", "nosso") está comprometida
            com a proteção da sua privacidade. Esta Política de Privacidade
            explica como coletamos, usamos, armazenamos e protegemos seus dados
            pessoais, em conformidade com a Lei Geral de Proteção de Dados
            Pessoais (LGPD — Lei nº 13.709/2018).
          </p>

          <h2>1. Controlador dos Dados</h2>
          <p>
            Agência Dedicada<br />
            CNPJ: a ser cadastrado<br />
            E-mail: contato@agenciadedicada.com.br<br />
            WhatsApp: (11) 92424-6749
          </p>

          <h2>2. Dados que Coletamos</h2>
          <p>Coletamos os seguintes dados pessoais:</p>
          <ul>
            <li><strong>Dados de contato:</strong> nome, telefone/WhatsApp, e-mail, empresa</li>
            <li><strong>Dados de navegação:</strong> endereço IP, páginas visitadas, tempo de sessão (via Google Analytics, se consentido)</li>
            <li><strong>Dados fornecidos voluntariamente:</strong> informações compartilhadas durante consultas comerciais via WhatsApp ou formulários</li>
          </ul>

          <h2>3. Finalidade do Tratamento</h2>
          <p>Tratamos seus dados para:</p>
          <ul>
            <li>Responder a solicitações de contato e propostas comerciais</li>
            <li>Prestar e melhorar nossos serviços de implantação de agentes de IA</li>
            <li>Enviar comunicações relacionadas ao contrato firmado</li>
            <li>Cumprir obrigações legais e regulatórias</li>
            <li>Analisar o desempenho do site para melhorias (com sua autorização)</li>
          </ul>

          <h2>4. Base Legal</h2>
          <p>
            O tratamento dos seus dados é realizado com base em: (i) execução de
            contrato ou procedimentos preliminares, (ii) legítimo interesse para
            contato comercial, (iii) consentimento quando aplicável, e (iv)
            cumprimento de obrigação legal.
          </p>

          <h2>5. Compartilhamento de Dados</h2>
          <p>
            Não vendemos seus dados. Podemos compartilhá-los com:
          </p>
          <ul>
            <li>Ferramentas de automação e CRM utilizadas na prestação do serviço (ex: Google Sheets, Google Calendar, CRMs contratados pelo cliente)</li>
            <li>Prestadores de serviços tecnológicos que nos auxiliam (ex: Vercel para hospedagem, Google Analytics para métricas)</li>
            <li>Autoridades públicas, quando exigido por lei</li>
          </ul>
          <p>
            Todos os terceiros são contratualmente obrigados a proteger seus dados.
          </p>

          <h2>6. Retenção dos Dados</h2>
          <p>
            Mantemos seus dados pelo período necessário para cumprir as
            finalidades descritas. Dados de clientes são retidos pelo prazo
            contratual e por até 5 anos após o encerramento da relação comercial,
            para fins de cumprimento de obrigações legais.
          </p>

          <h2>7. Seus Direitos (LGPD)</h2>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Confirmar a existência de tratamento dos seus dados</li>
            <li>Acessar os dados que temos sobre você</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar a anonimização, bloqueio ou exclusão de dados desnecessários</li>
            <li>Portabilidade dos dados para outro fornecedor</li>
            <li>Revogar o consentimento a qualquer momento</li>
            <li>Opor-se a tratamento realizado com base em legítimo interesse</li>
          </ul>
          <p>
            Para exercer seus direitos, entre em contato pelo e-mail{" "}
            <strong>contato@agenciadedicada.com.br</strong>. Responderemos em até
            15 dias úteis.
          </p>

          <h2>8. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger
            seus dados contra acesso não autorizado, alteração, divulgação ou
            destruição, incluindo criptografia em trânsito (HTTPS) e controle de
            acesso restrito.
          </p>

          <h2>9. Cookies e Analytics</h2>
          <p>
            Nosso site pode utilizar cookies e ferramentas de análise (como o
            Google Analytics) para entender o comportamento de navegação e
            melhorar a experiência do usuário. Você pode desativar cookies nas
            configurações do seu navegador.
          </p>

          <h2>10. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política periodicamente. A data de "última
            atualização" no topo indica quando ocorreu a revisão mais recente.
            Alterações relevantes serão comunicadas por e-mail quando aplicável.
          </p>

          <h2>11. Contato</h2>
          <p>
            Dúvidas sobre esta Política ou sobre o tratamento dos seus dados:
            <br />
            E-mail: <strong>contato@agenciadedicada.com.br</strong>
            <br />
            WhatsApp: <strong>(11) 92424-6749</strong>
          </p>
        </div>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-8 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Agência Dedicada. ·{" "}
        <Link href="/termos-de-uso" className="hover:text-neutral-600">
          Termos de Uso
        </Link>
      </footer>
    </div>
  );
}

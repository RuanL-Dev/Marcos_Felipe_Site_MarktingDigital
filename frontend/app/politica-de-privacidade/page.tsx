import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Politica de Privacidade | Marcos Felipe",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-4 py-14 sm:px-6">
      <section>
        <div className="mx-auto w-full max-w-5xl rounded-[24px] border border-border-soft/80 bg-surface/90 p-6 shadow-[var(--shadow-soft)]">
          <SectionHeader
            eyebrow="Politica de privacidade"
            title="Tratamento de dados para contato comercial"
            description="Esta pagina resume como os dados enviados no formulario do site sao utilizados na V1 do projeto."
          />

          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            <p>
              Os dados coletados no formulario sao nome, sobrenome, e-mail e
              telefone. Eles sao usados com a finalidade exclusiva de retorno
              comercial, apresentacao de servicos e futuros contatos
              relacionados ao interesse demonstrado pelo visitante.
            </p>
            <p>
              A coleta segue o principio de minimizacao, com foco em dados
              estritamente necessarios para atendimento inicial. O armazenamento
              ocorre em base controlada da aplicacao e o acesso deve ser
              restrito aos responsaveis pelo atendimento e operacao do projeto.
            </p>
            <p>
              O envio do formulario representa concordancia com essa finalidade
              de uso. Esta politica pode ser revisada conforme a evolucao do
              projeto e de seus fluxos operacionais.
            </p>
            <p>
              Para esclarecer duvidas sobre o tratamento de dados, utilize os
              canais oficiais de atendimento apresentados na pagina principal.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

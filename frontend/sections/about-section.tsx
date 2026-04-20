import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutSection() {
  return (
    <section className="px-4 py-14 sm:px-6" id="sobre">
      <div className="mx-auto grid w-full max-w-7xl gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] bg-[#241a16] p-7 text-[#f9efe7] shadow-[var(--shadow-soft)]">
          <span className="inline-flex rounded-full border border-white/20 bg-white/8 px-3 py-2 text-xs tracking-[0.2em] text-[#f2d9cb] uppercase">
            Sobre o trabalho
          </span>
          <h2 className="mt-5 text-4xl leading-tight font-semibold">
            Estetica com direcao, entrega com intencao.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/80">
            Marcos Felipe atua na construcao de apresentacoes visuais que
            aproximam marca, ambiente e experiencia. O trabalho combina
            sensibilidade estetica com foco em clareza comercial.
          </p>
        </div>

        <div>
          <SectionHeader
            eyebrow="Autoridade"
            title="Uma apresentacao profissional para quem precisa ser lembrado pela imagem certa."
          />
          <div className="mt-5 overflow-hidden rounded-[24px] border border-border-soft/70 bg-surface shadow-[var(--shadow-soft)]">
            <Image
              alt="Equipe reunida em evento, reforcando presenca real e confianca comercial."
              className="h-auto w-full object-cover"
              height={794}
              sizes="(max-width: 1024px) 100vw, 55vw"
              src="/events/sobre-evento.png"
              width={1320}
            />
          </div>
          <p className="mt-5 text-base leading-7 text-muted">
            A V1 deste site foi estruturada para explicar melhor os servicos,
            destacar trabalhos relevantes e facilitar o contato de clientes que
            buscam decoracao de eventos, materiais personalizados e design
            grafico.
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            O objetivo e simples: tornar o primeiro contato mais forte, mais
            confiavel e mais propenso a virar conversa comercial.
          </p>
        </div>
      </div>
    </section>
  );
}

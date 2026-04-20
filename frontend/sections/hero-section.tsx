import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-16" id="inicio">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="inline-flex rounded-full border border-accent/30 bg-accent/8 px-3 py-2 text-xs tracking-[0.2em] text-accent-strong uppercase">
            Decoracao de eventos em primeiro plano
          </span>
          <h1 className="mt-5 max-w-[10ch] text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.95] font-semibold">
            Cenografia, material grafico e design para elevar a percepcao do seu projeto.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Marcos Felipe transforma eventos e marcas em experiencias visuais
            mais desejadas, com decoracao de eventos como frente principal e
            apoio estrategico em material grafico e design grafico.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
            <ActionLink external href={siteConfig.whatsappUrl}>
              Solicitar atendimento
            </ActionLink>
            <ActionLink href="#portfolio" variant="secondary">
              Ver portfolio
            </ActionLink>
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-soft)]">
            <Image
              alt="Registro de evento com publico celebrando e reforcando a experiencia visual criada."
              className="h-[420px] w-full object-cover"
              height={762}
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              src="/events/hero-evento.png"
              width={1320}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/18 to-transparent" />
            <div className="absolute right-5 bottom-5 left-5 rounded-[24px] border border-white/15 bg-white/12 p-5 text-white backdrop-blur-sm">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs tracking-[0.2em] uppercase">
                Prova real de evento
              </span>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/88">
                A abertura da V1 prioriza experiencia real, presenca humana e
                energia de evento para comunicar impacto antes mesmo da leitura
                completa.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[20px] border border-border-soft/70 bg-white/70 p-4">
              <strong className="block text-3xl font-semibold">3</strong>
              <span className="text-sm leading-6 text-muted">
                frentes principais de servico
              </span>
            </div>
            <div className="rounded-[20px] border border-border-soft/70 bg-white/70 p-4">
              <strong className="block text-3xl font-semibold">CTA</strong>
              <span className="text-sm leading-6 text-muted">
                WhatsApp em primeiro plano
              </span>
            </div>
            <div className="rounded-[20px] border border-border-soft/70 bg-white/70 p-4">
              <strong className="block text-3xl font-semibold">Curado</strong>
              <span className="text-sm leading-6 text-muted">
                poucos ativos com mais forca comercial
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

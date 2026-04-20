import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "#servicos", label: "Servicos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border-soft/60 bg-[rgba(252,247,242,0.82)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a className="grid gap-0.5" href="#inicio">
          <span className="flex items-center gap-3">
            <Image
              alt="Marca Marcos Felipe"
              className="h-11 w-11 rounded-xl border border-border-soft/70 bg-surface object-cover p-1"
              height={100}
              src="/brand/logo-lipe.jpeg"
              width={100}
            />
            <span className="text-lg font-bold tracking-[0.08em] uppercase">
              {siteConfig.businessName}
            </span>
          </span>
          <span className="text-sm text-muted">
            Eventos, material grafico e design
          </span>
        </a>

        <nav
          aria-label="Navegacao principal"
          className="order-3 flex w-full gap-4 overflow-x-auto pb-1 text-sm md:order-2 md:w-auto md:gap-5"
        >
          {links.map((link) => (
            <a
              className="whitespace-nowrap text-muted underline-offset-4 transition hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              key={link.href}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ActionLink external href={siteConfig.whatsappUrl}>
          Falar no WhatsApp
        </ActionLink>
      </div>
    </header>
  );
}

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
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="brand" href="#inicio">
          <span className="brand-title">{siteConfig.businessName}</span>
          <span className="brand-subtitle">Eventos, material grafico e design</span>
        </a>

        <nav className="header-nav" aria-label="Navegacao principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}

export const siteConfig = {
  businessName: "Marcos Felipe",
  whatsappUrl: "https://wa.me/5500000000000",
  instagramUrl: "https://instagram.com/",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
};

export const services = [
  {
    id: "decoracao-de-eventos",
    title: "Decoracao de eventos",
    description:
      "Ambientacoes pensadas para transformar celebracoes em experiencias memoraveis, com composicao visual elegante e execucao cuidadosa.",
    highlights: [
      "Concepcao visual de eventos sociais e corporativos",
      "Direcao de paleta, cenografia e ambientacao",
      "Planejamento para eventos com identidade forte",
    ],
  },
  {
    id: "material-grafico",
    title: "Material grafico",
    description:
      "Pecas fisicas personalizadas que fortalecem a apresentacao da marca e ampliam a experiencia do cliente no ponto de contato certo.",
    highlights: [
      "Ecobags, aventais, camisas e blocos personalizados",
      "Aplicacao visual consistente em materiais impressos",
      "Apoio para campanhas, eventos e brindes",
    ],
  },
  {
    id: "design-grafico",
    title: "Design grafico",
    description:
      "Criacao de identidades e pecas digitais com linguagem visual clara, coerente e orientada a reforcar valor percebido.",
    highlights: [
      "Logos, banners e pecas promocionais",
      "Identidade visual para redes e campanhas",
      "Direcao criativa para materiais digitais",
    ],
  },
];

export const testimonials = [
  {
    author: "Cliente de eventos",
    text: "O cuidado com cada detalhe visual fez a entrega parecer maior do que imaginavamos. Ficou marcante e muito bem executado.",
  },
  {
    author: "Cliente de material grafico",
    text: "A identidade ficou consistente nas pecas fisicas e ajudou muito na percepcao profissional da marca.",
  },
];

export const portfolioItems = [
  {
    title: "Personagem para comunicacao visual",
    category: "Design grafico",
    image: "/portfolio/design-personagem.jpeg",
    description:
      "Estudo visual com foco em identidade, simpatia e memorizacao para comunicacao comercial.",
  },
  {
    title: "Material grafico personalizado",
    category: "Material grafico",
    image: "/portfolio/material-bela.jpeg",
    description:
      "Aplicacao visual em material fisico pensado para reforcar presenca de marca e acabamento.",
  },
  {
    title: "Logo de marca pessoal",
    category: "Design grafico",
    image: "/portfolio/logo-lipe.jpeg",
    description:
      "Construcao de marca com simbolo e tipografia voltados para apresentacao clara e profissional.",
  },
];

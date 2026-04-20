import "./globals.css";

export const metadata = {
  title: "Marcos Felipe | Decoracao, material grafico e design",
  description:
    "Site institucional de Marcos Felipe com servicos de decoracao de eventos, material grafico e design grafico.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

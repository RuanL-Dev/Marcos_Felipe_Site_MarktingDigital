import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Felipe | Decoracao, material grafico e design",
  description:
    "Site institucional de Marcos Felipe com servicos de decoracao de eventos, material grafico e design grafico.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IronWhey - Suplementos de Elite",
  description: "Suplementação de elite para quem busca o máximo desempenho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planner de Casamento Digital | Organize seu casamento sozinha",
  description: "Planeje o casamento dos seus sonhos com nosso planner digital completo. Organize cada detalhe com facilidade, do seu jeito e sem estresse!",
  keywords: "planner de casamento, organização de casamento, planejamento de casamento, noivas, casamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

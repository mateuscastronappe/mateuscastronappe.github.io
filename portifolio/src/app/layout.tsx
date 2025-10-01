import Rodape from "@/components/Rodape";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Portfólio | Mateus Castro Nappe",
  description: "Portfólio de projetos de Mateus Castro Nappe, Desenvolvedor Full-Stack.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      <Rodape />
      </body>
    </html>
  );
}
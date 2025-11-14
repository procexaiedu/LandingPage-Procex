import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ProceX - IA acessível para o dia a dia da sua empresa',
  description:
    'Uma plataforma que conecta sua operação a agentes de IA prontos para automatizar tarefas, sem exigir conhecimento técnico.',
  keywords: [
    'IA acessível',
    'agentes de IA',
    'automação empresarial',
    'inteligência artificial para empresas',
    'funcionários digitais',
  ],
  authors: [{ name: 'ProceX' }],
  openGraph: {
    title: 'ProceX - IA acessível para o dia a dia da sua empresa',
    description:
      'Coloque IA para trabalhar por você, sem código. Agentes de IA que automatizam rotinas, atendimentos e processos.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

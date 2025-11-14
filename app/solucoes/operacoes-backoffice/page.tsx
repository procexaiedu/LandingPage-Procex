import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Settings, CheckCircle2, BarChart } from 'lucide-react';
import { MotionFadeUp, MotionStaggerList } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Agentes de IA para Operações & Backoffice | ProceX',
  description:
    'Atualize planilhas, status de pedidos e indicadores operacionais em tempo real com agentes de IA que integram sistemas e organizam bastidores.',
};

const ROTINAS = [
  'Atualização de planilhas e dashboards operacionais em tempo real',
  'Registro de status de pedidos, entregas ou tickets em múltiplos sistemas',
  'Envio de alertas quando um processo sai do fluxo esperado',
  'Organização de documentos, anexos e históricos por cliente/projeto',
  'Geração de relatórios e indicadores para reuniões de operações',
];

const BENEFICIOS = [
  {
    title: 'Operação previsível',
    description: 'Tudo registrado no momento certo, com alertas automáticos de exceção.',
  },
  {
    title: 'Menos retrabalho',
    description: 'Adeus copiar/colar e “caçar” informação em chats e planilhas soltas.',
  },
  {
    title: 'Visão em tempo real',
    description: 'Indicadores consistentes para decisões rápidas entre áreas.',
  },
];

export default function OperacoesBackofficePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-spacing bg-gradient-to-b from-slate-900 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
          <MotionFadeUp>
            <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-sm font-semibold border border-white/30">
              ⚙️ Bastidor organizado
            </p>
          </MotionFadeUp>
          <MotionFadeUp delay={60}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Agentes de IA para Operações & Backoffice
            </h1>
          </MotionFadeUp>
          <MotionFadeUp delay={120}>
            <p className="text-lg sm:text-xl text-white/80">
              Funcionários digitais mantêm planilhas, sistemas e indicadores sempre atualizados. Você
              coordena times com dados confiáveis e elimina gargalos silenciosos.
            </p>
          </MotionFadeUp>
          <MotionFadeUp delay={180}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#waitlist"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Falar com especialista em Operações
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#solucoes"
                className="btn-secondary inline-flex items-center justify-center gap-2 border-white/40 text-white hover:text-primary-700"
              >
                Ver outras áreas
              </Link>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
          <MotionFadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">O agente que mantém sua operação no trilho</h2>
              <p className="text-lg text-neutral-600">
                Integramos com ERPs, planilhas, CRMs ou ferramentas internas para garantir que cada
                status esteja certo — e que você seja avisado quando algo fugir da regra.
              </p>
            </div>
          </MotionFadeUp>

          <MotionStaggerList className="grid md:grid-cols-2 gap-5" delayChildren={80}>
            {ROTINAS.map((routine) => (
              <MotionFadeUp key={routine}>
                <div className="flex items-start gap-3 bg-white rounded-2xl p-5 shadow-soft border border-neutral-100">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-1" />
                  <p className="text-sm text-neutral-800">{routine}</p>
                </div>
              </MotionFadeUp>
            ))}
          </MotionStaggerList>

          <MotionFadeUp delay={120}>
            <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start shadow-soft border border-neutral-100">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center shadow-soft">
                <Settings className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Operação acompanhada em tempo real, sem apagar incêndio
                </h3>
                <p className="text-neutral-700">
                  Um agente operacional ProceX atualiza planilhas e status de pedidos automaticamente.
                  Cada área recebe alertas quando precisa agir, reduzindo ruídos e reuniões desnecessárias.
                </p>
              </div>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      <section className="section-spacing bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-10">
          <MotionFadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Resultados que aparecem no bastidor</h2>
              <p className="text-neutral-600">
                Menos “onde está aquela informação?” e mais decisões com indicadores confiáveis.
              </p>
            </div>
          </MotionFadeUp>
          <MotionStaggerList className="grid sm:grid-cols-3 gap-6" delayChildren={60}>
            {BENEFICIOS.map((benefit) => (
              <MotionFadeUp key={benefit.title}>
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-white/50 h-full">
                  <BarChart className="w-6 h-6 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-700">{benefit.description}</p>
                </div>
              </MotionFadeUp>
            ))}
          </MotionStaggerList>

          <MotionFadeUp delay={120} className="text-center">
            <Link href="/#waitlist" className="btn-primary inline-flex items-center gap-2">
              Quero organizar meu backoffice
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionFadeUp>
        </div>
      </section>
    </main>
  );
}



import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, TrendingUp, CheckCircle2, ListChecks } from 'lucide-react';
import { MotionFadeUp, MotionStaggerList } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Agentes de IA para Vendas & Comercial | ProceX',
  description:
    'Automatize follow-ups, nutrição de leads e reativação de clientes inativos com agentes de IA especializados para times comerciais.',
};

const ROTINAS = [
  'Follow-ups automáticos após propostas ou reuniões',
  'Reativação inteligente de clientes inativos com mensagens personalizadas',
  'Sequências de nutrição por segmento ou ticket',
  'Atualização de CRM com status, notas e próximos passos',
  'Envio de relatórios diários com pipeline e gargalos',
];

const BENEFICIOS = [
  {
    title: 'Mais oportunidades vivas',
    description: 'Agente monitora o funil inteiro, dispara lembretes e impede que leads “esfriem”.',
  },
  {
    title: 'Produtividade para o time',
    description: 'Equipe humana foca em negociação e estratégia; agente cuida do toque operacional.',
  },
  {
    title: 'Dados confiáveis',
    description: 'CRM e planilhas sempre atualizados para reuniões de forecast e decisões rápidas.',
  },
];

export default function VendasComercialPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-spacing bg-gradient-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
          <MotionFadeUp>
            <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-sm font-semibold border border-white/30">
              🎯 Foco em aumento de faturamento
            </p>
          </MotionFadeUp>
          <MotionFadeUp delay={60}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Agentes de IA para Vendas & Comercial
            </h1>
          </MotionFadeUp>
          <MotionFadeUp delay={120}>
            <p className="text-lg sm:text-xl text-white/80">
              Automatize nutrição de leads, follow-ups e reativação de clientes inativos. O agente faz
              o trabalho repetitivo todos os dias enquanto seu time foca em fechar negócios.
            </p>
          </MotionFadeUp>
          <MotionFadeUp delay={180}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#waitlist"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Falar com especialista em Vendas
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
              <h2 className="text-3xl font-bold">Rotinas que os agentes assumem por você</h2>
              <p className="text-lg text-neutral-600">
                Você define a estratégia comercial, o agente garante execução perfeita — com regras,
                horários e integrações ao CRM ou planilhas que já usa.
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
            <div className="bg-primary-50 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-soft">
                <TrendingUp className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  +32% de aumento em vendas com reativação automatizada
                </h3>
                <p className="text-neutral-700">
                  Em um dos nossos projetos piloto, o agente comercial reativou uma base de clientes
                  inativos com mensagens personalizadas e fluxo contínuo, entregando crescimento em
                  poucos meses.
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
              <h2 className="text-3xl font-bold">Por que começar agora?</h2>
              <p className="text-neutral-600">
                Comece com um fluxo crítico, prove valor rápido e evolua para múltiplos agentes
                comerciais conforme os resultados aparecem.
              </p>
            </div>
          </MotionFadeUp>
          <MotionStaggerList className="grid sm:grid-cols-3 gap-6" delayChildren={60}>
            {BENEFICIOS.map((benefit) => (
              <MotionFadeUp key={benefit.title}>
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-white/50 h-full">
                  <ListChecks className="w-6 h-6 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-700">{benefit.description}</p>
                </div>
              </MotionFadeUp>
            ))}
          </MotionStaggerList>

          <MotionFadeUp delay={120} className="text-center">
            <Link href="/#waitlist" className="btn-primary inline-flex items-center gap-2">
              Quero mapear um fluxo comercial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionFadeUp>
        </div>
      </section>
    </main>
  );
}


import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, DollarSign, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MotionFadeUp, MotionStaggerList } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Agentes de IA para Financeiro & Cobrança | ProceX',
  description:
    'Automatize envio de boletos, lembretes e conciliações com agentes de IA conectados às ferramentas que seu financeiro já usa.',
};

const ROTINAS = [
  'Envio automático de boletos, PIX e segunda via com personalização',
  'Lembretes de pagamento com régua por canal e comportamento do cliente',
  'Registro e conciliação de recebimentos em ERPs, CRMs ou planilhas',
  'Avisos de inadimplência e propostas de negociação',
  'Geração de relatórios de fluxo de caixa e previsões atualizadas',
];

const BENEFICIOS = [
  {
    title: 'Fluxo de caixa previsível',
    description: 'Recebimentos acontecem dentro do prazo graças a lembretes consistentes.',
  },
  {
    title: 'Menos erros manuais',
    description: 'Conciliações e status de pagamento atualizados automaticamente.',
  },
  {
    title: 'Comunicação profissional',
    description: 'Mensagens padronizadas, com tom certo e histórico registrado.',
  },
];

export default function FinanceiroCobrancaPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-spacing bg-gradient-to-b from-emerald-900 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
          <MotionFadeUp>
            <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-sm font-semibold border border-white/30">
              💸 Caixa sob controle
            </p>
          </MotionFadeUp>
          <MotionFadeUp delay={60}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Agentes de IA para Financeiro & Cobrança
            </h1>
          </MotionFadeUp>
          <MotionFadeUp delay={120}>
            <p className="text-lg sm:text-xl text-white/80">
              Deixe um agente enviar cobranças, lembretes e atualizar registros automaticamente.
              Sua equipe acompanha indicadores em tempo real e toma decisões com calma.
            </p>
          </MotionFadeUp>
          <MotionFadeUp delay={180}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#waitlist"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Falar com especialista financeiro
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
              <h2 className="text-3xl font-bold">Rotinas financeiras automatizadas</h2>
              <p className="text-lg text-neutral-600">
                Configure regras, integrações e mensagens uma única vez. O agente executa diariamente,
                registra evidências e alerta quando algo sai do esperado.
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
                <DollarSign className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Cobranças 100% automatizadas com emissão de boletos integrada
                </h3>
                <p className="text-neutral-700">
                  Um agente financeiro ProceX conectou-se ao Asaas para gerar boletos, enviar lembretes
                  e registrar pagamentos. Resultado: menos inadimplência e previsibilidade de caixa.
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
              <h2 className="text-3xl font-bold">Benefícios para o financeiro</h2>
              <p className="text-neutral-600">
                Segurança operacional, comunicação padronizada e dados sempre atualizados.
              </p>
            </div>
          </MotionFadeUp>
          <MotionStaggerList className="grid sm:grid-cols-3 gap-6" delayChildren={60}>
            {BENEFICIOS.map((benefit) => (
              <MotionFadeUp key={benefit.title}>
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-white/50 h-full">
                  <ShieldCheck className="w-6 h-6 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-700">{benefit.description}</p>
                </div>
              </MotionFadeUp>
            ))}
          </MotionStaggerList>

          <MotionFadeUp delay={120} className="text-center">
            <Link href="/#waitlist" className="btn-primary inline-flex items-center gap-2">
              Quero organizar minha cobrança
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionFadeUp>
        </div>
      </section>
    </main>
  );
}



import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, MessageCircle, CheckCircle2, Clock } from 'lucide-react';
import { MotionFadeUp, MotionStaggerList } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Agentes de IA para Atendimento & Suporte | ProceX',
  description:
    'Responda mais rápido em WhatsApp, chat e e-mail com agentes de IA que filtram dúvidas, resolvem questões simples e encaminham somente o necessário para o time humano.',
};

const ROTINAS = [
  'Respostas instantâneas no WhatsApp, chat ou e-mail com linguagem configurada',
  'Classificação de solicitações e encaminhamento para o responsável correto',
  'Agendamento e confirmação automática de atendimentos ou reuniões',
  'Coleta de informações obrigatórias antes de escalar para humanos',
  'Feedback pós-atendimento e pesquisas rápidas com clientes',
];

const BENEFICIOS = [
  {
    title: 'Tempo de resposta < 1 minuto',
    description: 'Mesmo com alto volume, o agente responde na hora e mantém o cliente engajado.',
  },
  {
    title: 'Equipe focada em casos complexos',
    description: 'O agente resolve o básico e organiza o restante com contexto completo.',
  },
  {
    title: 'Experiência padronizada',
    description: 'Mensagens com tom adequado, informações corretas e registro automático.',
  },
];

export default function AtendimentoSuportePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-spacing bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
          <MotionFadeUp>
            <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-sm font-semibold border border-white/30">
              ⚡ Atendimento sem filas
            </p>
          </MotionFadeUp>
          <MotionFadeUp delay={60}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Agentes de IA para Atendimento & Suporte
            </h1>
          </MotionFadeUp>
          <MotionFadeUp delay={120}>
            <p className="text-lg sm:text-xl text-white/80">
              Garanta respostas instantâneas em qualquer canal e reduza drasticamente o volume que chega
              ao time humano. Seu cliente é atendido na hora, 24 horas por dia.
            </p>
          </MotionFadeUp>
          <MotionFadeUp delay={180}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#waitlist" className="btn-primary inline-flex items-center justify-center gap-2">
                Falar com especialista em Atendimento
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
              <h2 className="text-3xl font-bold">O que o agente faz no seu lugar</h2>
              <p className="text-lg text-neutral-600">
                Configuramos linguagem, integrações e regras de encaminhamento para que cada cliente
                receba a resposta correta em segundos.
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
                <Clock className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">15 minutos para 1 minuto no WhatsApp</h3>
                <p className="text-neutral-700">
                  Caso real: um agente de agendamento reduziu o tempo de resposta médio para 1 minuto,
                  organizou filas e dobrou o número de atendimentos concluídos por dia.
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
              <h2 className="text-3xl font-bold">Benefícios imediatos</h2>
              <p className="text-neutral-600">
                Menos fila, mais satisfação e registro automático de tudo que foi combinado com o
                cliente.
              </p>
            </div>
          </MotionFadeUp>
          <MotionStaggerList className="grid sm:grid-cols-3 gap-6" delayChildren={60}>
            {BENEFICIOS.map((benefit) => (
              <MotionFadeUp key={benefit.title}>
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-white/50 h-full">
                  <MessageCircle className="w-6 h-6 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-700">{benefit.description}</p>
                </div>
              </MotionFadeUp>
            ))}
          </MotionStaggerList>

          <MotionFadeUp delay={120} className="text-center">
            <Link href="/#waitlist" className="btn-primary inline-flex items-center gap-2">
              Quero reduzir o tempo de resposta
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionFadeUp>
        </div>
      </section>
    </main>
  );
}


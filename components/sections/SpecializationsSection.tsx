import Link from 'next/link';
import {
  TrendingUp,
  MessageCircle,
  DollarSign,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { MotionFadeUp, MotionStaggerList, TiltCard } from '@/components/animations';

export const SPECIALIZATIONS = [
  {
    slug: 'vendas-comercial',
    icon: TrendingUp,
    title: 'Vendas & Comercial',
    description:
      'Automatize nutrição de leads, follow-ups e reativação de clientes inativos. Nenhuma oportunidade fica esquecida no funil.',
    benefit: 'Ideal para quem busca aumento de faturamento com consistência diária.',
    quickBenefit: 'Nunca mais esqueça follow-ups e reativações.',
    cta: 'Ver soluções para Vendas & Comercial',
  },
  {
    slug: 'atendimento-suporte',
    icon: MessageCircle,
    title: 'Atendimento & Suporte',
    description:
      'Reduza o tempo de resposta em canais como WhatsApp, chat e e-mail, filtrando dúvidas simples e encaminhando só o que importa.',
    benefit: 'Experiência do cliente melhor sem aumentar headcount.',
    quickBenefit: 'Respostas rápidas em WhatsApp, chat e e-mail.',
    cta: 'Ver soluções para Atendimento & Suporte',
  },
  {
    slug: 'financeiro-cobranca',
    icon: DollarSign,
    title: 'Financeiro & Cobrança',
    description:
      'Envio de boletos, lembretes e conciliações automáticas integradas ao seu financeiro.',
    benefit: 'Mais previsibilidade de caixa e menos esquecimentos.',
    quickBenefit: 'Cobranças automáticas e conciliações em dia.',
    cta: 'Ver soluções para Financeiro & Cobrança',
  },
  {
    slug: 'operacoes-backoffice',
    icon: Settings,
    title: 'Operações & Backoffice',
    description:
      'Atualização de planilhas, status de pedidos e relatórios em tempo real com regras claras.',
    benefit: 'Mais controle e menos retrabalho operacional entre áreas.',
    quickBenefit: 'Planilhas e status atualizados em tempo real.',
    cta: 'Ver soluções para Operações & Backoffice',
  },
] as const;

export function SpecializationsSection() {
  return (
    <section id="solucoes" className="section-spacing bg-gradient-to-b from-background via-primary-50/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-1/3 w-72 h-72 bg-primary-300/10 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-accent-300/10 blur-3xl rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <MotionFadeUp>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-100/60 text-primary-700 text-sm font-semibold border border-primary-200/50">
              🧭 Navegação estratégica
            </span>
          </MotionFadeUp>
          <MotionFadeUp delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Escolha onde a IA começa a trabalhar por você
            </h2>
          </MotionFadeUp>
          <MotionFadeUp delay={140}>
            <p className="text-lg text-neutral-600">
              Comece pela área que sente mais impacto hoje. Cada agente é desenhado sob medida, com regras claras, integrações com suas ferramentas e acompanhamento contínuo.
            </p>
          </MotionFadeUp>
        </div>

        <MotionStaggerList className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" delayChildren={160}>
          {SPECIALIZATIONS.map((spec) => {
            const Icon = spec.icon;
            return (
              <MotionFadeUp key={spec.slug}>
                <TiltCard className="h-full bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-white/60 hover:border-primary-200/60 hover:shadow-lifted transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-500">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                  <p className="text-sm text-neutral-700 mb-3">{spec.description}</p>
                  <p className="text-xs text-neutral-500 mb-4">{spec.benefit}</p>
                  <Link
                    href={`/solucoes/${spec.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                    aria-label={spec.cta}
                  >
                    {spec.cta}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </TiltCard>
              </MotionFadeUp>
            );
          })}
        </MotionStaggerList>
      </div>
    </section>
  );
}


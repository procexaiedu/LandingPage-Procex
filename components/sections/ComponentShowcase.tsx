'use client';

import { TrendingUp, Clock, DollarSign, Briefcase, ArrowRight } from 'lucide-react';
import { AnimatedMetricsCard } from './AnimatedMetricsCard';
import { FlowingStepCard } from './FlowingStepCard';
import { FeatureComparisonCard } from './FeatureComparisonCard';

/**
 * ComponentShowcase
 *
 * A visual demonstration of all three premium design components.
 * This component showcases:
 * 1. AnimatedMetricsCard - For displaying metrics with animated counters
 * 2. FlowingStepCard - For timeline/process steps with flowing animations
 * 3. FeatureComparisonCard - For comparison cards with feature reveals
 *
 * Usage: Import and add to your page.tsx for a full showcase
 */
export function ComponentShowcase() {
  return (
    <div className="space-y-24">
      {/* Section 1: AnimatedMetricsCard Showcase */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">1. Animated Metrics Cards</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Metrics que se revelam com animações de contador. Perfeito para showcasing resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedMetricsCard
            metric="Aumento em Vendas"
            metricValue={32}
            title="Agente Comercial"
            description="Base de clientes reativada com mensagens personalizadas"
            icon={<TrendingUp className="w-6 h-6" />}
            delay={0}
            accentColor="primary"
          />

          <AnimatedMetricsCard
            metric="Tempo de Resposta"
            metricValue="15 → 1 min"
            title="Agente de Atendimento"
            description="Respostas automáticas em tempo real para dúvidas comuns"
            icon={<Clock className="w-6 h-6" />}
            delay={100}
            accentColor="primary"
          />

          <AnimatedMetricsCard
            metric="Redução em Inadimplência"
            metricValue={28}
            title="Agente Financeiro"
            description="Cobranças automatizadas e lembretes inteligentes"
            icon={<DollarSign className="w-6 h-6" />}
            delay={200}
            gradient="from-accent-400/20 to-primary-400/20"
            accentColor="accent"
          />

          <AnimatedMetricsCard
            metric="Eficiência Operacional"
            metricValue={45}
            title="Agente Operacional"
            description="Automação de rotinas repetitivas e manutenção de dados"
            icon={<Briefcase className="w-6 h-6" />}
            delay={300}
            accentColor="primary"
          />
        </div>
      </section>

      {/* Section 2: FlowingStepCard Showcase */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">2. Flowing Step Cards</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Timeline steps com animações fluidas e conectores dinâmicos. Ideal para demonstrar processos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <FlowingStepCard
            step="01"
            title="Diagnóstico"
            description="Entendemos suas rotinas, gargalos e objetivos. Você explica o dia a dia; nós identificamos onde a IA gera maior impacto primeiro."
            icon={<Briefcase className="w-6 h-6" />}
            delay={0}
            isAlternate={false}
            showConnector={true}
          />

          <FlowingStepCard
            step="02"
            title="Desenho de Fluxo"
            description="Mapeamos as tarefas que serão automatizadas, os canais envolvidos e as regras que o agente deve seguir."
            icon={<TrendingUp className="w-6 h-6" />}
            delay={150}
            isAlternate={true}
            showConnector={true}
          />

          <FlowingStepCard
            step="03"
            title="Desenvolvimento e Integração"
            description="Configuramos o agente de IA, conectamos aos sistemas da sua empresa e preparamos os dados necessários."
            icon={<Clock className="w-6 h-6" />}
            delay={300}
            isAlternate={false}
            showConnector={true}
          />

          <FlowingStepCard
            step="04"
            title="Testes e Treinamento"
            description="Validamos o comportamento do agente com casos reais e ajustamos até que ele esteja pronto para operar com segurança."
            icon={<DollarSign className="w-6 h-6" />}
            delay={450}
            isAlternate={true}
            showConnector={false}
          />
        </div>
      </section>

      {/* Section 3: FeatureComparisonCard Showcase */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">3. Feature Comparison Cards</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comparison cards com animações de features e reveals dinâmicos. Perfeito para pricing e serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureComparisonCard
            title="Diagnóstico Guiado"
            description="Entenda em quais processos a IA pode gerar maior impacto."
            price="Sob demanda"
            features={[
              { name: 'Análise de processos', included: true },
              { name: 'Identificação de gargalos', included: true },
              { name: 'Recomendações personalizadas', included: true },
              { name: 'Roadmap detalhado', included: false },
            ]}
            cta="Solicitar Diagnóstico"
            badge="Ponto de partida"
            delay={0}
          />

          <FeatureComparisonCard
            title="Projeto Piloto Focado"
            description="Implantação de um único agente em um processo-chave."
            price="A partir de R$ 5K"
            features={[
              { name: '1 fluxo automatizado', included: true, highlight: true },
              { name: 'Integração básica', included: true, highlight: true },
              { name: 'Suporte inicial', included: true },
              { name: 'Múltiplos agentes', included: false },
            ]}
            cta="Começar Piloto"
            isPopular={true}
            badge="⭐ Mais Popular"
            delay={100}
          />

          <FeatureComparisonCard
            
            title="Evolução Contínua"
            description="Expansão para novos fluxos com acompanhamento contínuo."
            price="Personalizado"
            features={[
              { name: 'Múltiplos agentes', included: true },
              { name: 'Integrações avançadas', included: true },
              { name: 'Suporte dedicado', included: true },
              { name: 'Otimizações contínuas', included: true },
            ]}
            cta="Escalar Operações"
            badge="Crescimento"
            delay={200}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-16">
        <h2 className="text-4xl font-bold">Pronto para transformar sua landing page?</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Estes componentes estão prontos para serem integrados nas seções específicas da sua página.
          Consulte o INTEGRATION_GUIDE.md para exemplos detalhados.
        </p>
        <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:shadow-lifted hover:-translate-y-1 transition-all duration-300">
          <span>Ver Integration Guide</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
}

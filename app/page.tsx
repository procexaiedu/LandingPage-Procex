'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, type MouseEvent as ReactMouseEvent } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import {
  Menu,
  X,
  TrendingUp,
  Clock,
  Zap,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  DollarSign,
  Settings,
  Building2,
  ShoppingCart,
  Briefcase,
  Stethoscope,
} from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { MotionFadeUp, MotionStaggerList, TiltCard } from '@/components/animations';
import { SpecializationsSection, SPECIALIZATIONS, AnimatedMetricsCard, FlowingStepCard, FeatureComparisonCard } from '@/components/sections';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const heroPointerX = useMotionValue(0);
  const heroPointerY = useMotionValue(0);
  const heroParallaxX = useSpring(heroPointerX, { stiffness: 80, damping: 20, mass: 0.4 });
  const heroParallaxY = useSpring(heroPointerY, { stiffness: 80, damping: 20, mass: 0.4 });
  const ctaPointerX = useMotionValue(0);
  const ctaPointerY = useMotionValue(0);
  const ctaMagnetX = useSpring(ctaPointerX, { stiffness: 260, damping: 20, mass: 0.3 });
  const ctaMagnetY = useSpring(ctaPointerY, { stiffness: 260, damping: 20, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingDown = currentScroll > lastScrollYRef.current;

      setScrolled(currentScroll > 20);

      if (currentScroll < 120) {
        setNavHidden(false);
      } else if (isScrollingDown && currentScroll - lastScrollYRef.current > 5) {
        setNavHidden(true);
      } else if (!isScrollingDown) {
        setNavHidden(false);
      }

      lastScrollYRef.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  const handleHeroPointerMove = (event: ReactMouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 80;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 80;
    heroPointerX.set(offsetX);
    heroPointerY.set(offsetY);
  };

  const resetHeroPointer = () => {
    heroPointerX.set(0);
    heroPointerY.set(0);
  };

  const handleCtaMagnet = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
    ctaPointerX.set(offsetX);
    ctaPointerY.set(offsetY);
  };

  const resetCtaMagnet = () => {
    ctaPointerX.set(0);
    ctaPointerY.set(0);
  };

  return (
    <div className="min-h-screen">
      {/* 1. HEADER GLOBAL - Cinematográfico Premium */}
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 will-change-transform',
          navHidden ? '-translate-y-full' : 'translate-y-0',
          scrolled
            ? 'glass shadow-soft py-3 backdrop-blur-lg'
            : 'bg-gradient-to-b from-background/80 to-transparent py-4'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Com animação de entrada */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-accent group-hover:scale-110">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-heading text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-600 transition-all duration-300 group-hover:from-primary-600 group-hover:to-primary-500">
                ProceX
              </span>
            </Link>

            {/* Desktop Navigation - Com microinterações */}
            <nav className="hidden md:flex items-center space-x-8">
              {['solucoes', 'como-funciona', 'casos-reais', 'planos'].map((section) => {
                const labels: Record<string, string> = {
                  solucoes: 'Soluções',
                  'como-funciona': 'Como funciona',
                  'casos-reais': 'Casos reais',
                  'planos': 'Modelos de entrada',
                };
                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={cn(
                      'text-neutral-700 font-medium transition-all duration-300',
                      'relative group hover:text-primary-600 overflow-hidden'
                    )}
                  >
                    {labels[section]}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-cta transition-all duration-300 group-hover:w-full"></span>
                  </button>
                );
              })}
            </nav>

            {/* CTA Button - Premium */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => scrollToSection('waitlist')}
                className="btn-primary text-base py-3 px-6 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Entrar em contato
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 transition-colors duration-300 hover:bg-muted rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-primary-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu - Premium */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden mt-4 pb-4 space-y-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <nav className="flex flex-col space-y-2 bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                  {['solucoes', 'como-funciona', 'casos-reais', 'planos'].map((section) => {
                    const labels: Record<string, string> = {
                      solucoes: 'Soluções',
                      'como-funciona': 'Como funciona',
                      'casos-reais': 'Casos reais',
                      'planos': 'Modelos de entrada',
                    };
                    return (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="text-left text-neutral-700 hover:text-primary-600 font-medium transition-colors hover:pl-2 duration-200"
                      >
                        {labels[section]}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => scrollToSection('waitlist')}
                    className="btn-primary w-full text-base py-3 mt-2"
                  >
                    Entrar em contato
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* 1. HEADER GLOBAL - Headline Principal Cinematográfico */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center hero-starfield pt-32 pb-12 overflow-hidden"
        onMouseMove={handleHeroPointerMove}
        onMouseLeave={resetHeroPointer}
      >
        {/* Background Layers - Profundidade cinematográfica */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80"></div>
          <motion.div
            aria-hidden="true"
            className="absolute top-6 right-16 w-80 h-80 rounded-full bg-primary-400/20 blur-3xl"
            style={{ x: heroParallaxX, y: heroParallaxY }}
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 60, repeat: Infinity, ease: 'linear' }
            }
          ></motion.div>
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-32 left-20 w-[420px] h-[420px] rounded-full bg-accent-500/15 blur-3xl"
            style={{ x: heroParallaxX, y: heroParallaxY }}
            animate={prefersReducedMotion ? undefined : { rotate: -360 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 70, repeat: Infinity, ease: 'linear' }
            }
          ></motion.div>
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
            style={{ x: heroParallaxX, y: heroParallaxY }}
          >
            <div className="relative w-[520px] h-[520px]">
              <div className="absolute inset-0 rounded-full border border-white/10"></div>
              <motion.div
                className="absolute inset-[60px] rounded-full border border-white/5"
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={
                  prefersReducedMotion ? undefined : { duration: 80, repeat: Infinity, ease: 'linear' }
                }
              ></motion.div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/80 shadow-glow"></div>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-8 text-white">
            {/* Badge com animação de entrada */}
            <MotionFadeUp>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-sm font-semibold border border-white/30 shadow-soft backdrop-blur-lg">
                <span className="w-2 h-2 bg-accent-400 rounded-full pulse-soft"></span>
                ✨ IA na prática para quem quer ser mais
              </div>
            </MotionFadeUp>

            {/* Headline Principal - Impactante */}
            <MotionFadeUp delay={100}>
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]">
                  <span className="block text-gradient-dynamic">IA trabalhando com você</span>
                  <span className="block bg-gradient-cta bg-clip-text text-transparent">
                    para você ser mais.
                  </span>
                </h1>
              </div>
            </MotionFadeUp>

            {/* Subheadline - Refinado */}
            <MotionFadeUp delay={200}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Pare de só ouvir falar sobre IA. A ProceX cria agentes que assumem tarefas repetitivas
                na sua rotina — de vendas ao financeiro — para você ter mais impacto na empresa sem
                precisar virar especialista em tecnologia.
              </p>
            </MotionFadeUp>

            {/* Tagline do hub de especialistas */}
            <MotionFadeUp delay={260}>
              <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
                Seu hub de especialistas em agentes de IA por nicho, conectado à realidade da sua empresa.
              </p>
            </MotionFadeUp>

            {/* Linha de acolhimento */}
            <MotionFadeUp delay={310}>
              <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
                Serve para donos, gestores, analistas, vendedores, CS — qualquer pessoa que quer fazer mais com o que já tem.
              </p>
            </MotionFadeUp>

            {/* CTA Buttons - Premium */}
            <MotionFadeUp delay={360}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.div
                  className="inline-flex"
                  style={{ x: ctaMagnetX, y: ctaMagnetY }}
                  onMouseMove={handleCtaMagnet}
                  onMouseLeave={resetCtaMagnet}
                >
                  <button
                    onClick={() => scrollToSection('waitlist')}
                    className="btn-primary text-lg py-4 px-8 hover-lift group"
                  >
                    <span className="flex items-center gap-2">
                      Quero ver, na prática, como IA pode me ajudar
                      <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </motion.div>
                <button
                  onClick={() => scrollToSection('solucoes')}
                  className="btn-secondary text-lg py-4 px-8 hover-lift border-white/50 text-white hover:text-primary-700"
                >
                  Explorar soluções por área
                </button>
              </div>
            </MotionFadeUp>

            {/* Supporting Text */}
            <MotionFadeUp delay={420}>
              <p className="text-sm text-white/70">
                🎯 Você descreve o problema em linguagem de negócio. A ProceX entrega o agente pronto e acompanha os resultados.
              </p>
            </MotionFadeUp>

            {/* Quick navigation cards */}
            <MotionFadeUp delay={500}>
              <div className="mt-10 bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <p className="text-white/80 text-lg font-semibold">Soluções por área</p>
                  <button
                    onClick={() => scrollToSection('solucoes')}
                    className="text-sm font-semibold text-accent-200 hover:text-white transition-colors"
                  >
                    Ver todas
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {SPECIALIZATIONS.map((spec) => (
                    <Link
                      key={spec.slug}
                      href={`/solucoes/${spec.slug}`}
                      className="group bg-white/10 hover:bg-white/15 rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-200"
                      aria-label={`Ver soluções para ${spec.title}`}
                    >
                      <p className="text-white font-semibold mb-1">{spec.title}</p>
                      <p className="text-sm text-white/70">{spec.quickBenefit}</p>
                      <span className="mt-3 inline-flex items-center text-xs font-semibold text-accent-200 group-hover:translate-x-1 transition-transform">
                        Explorar solução
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </div>
      </section>

      <SpecializationsSection />

      {/* 3. SOCIAL PROOF - Impressionante e Cinematic */}
      <section className="section-spacing bg-gradient-to-b from-background via-primary-50/30 to-background relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-40 right-1/4 w-96 h-96 bg-primary-300/5 rounded-full blur-3xl"
            animate={prefersReducedMotion ? undefined : { y: [0, -30, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-300/5 rounded-full blur-3xl"
            animate={prefersReducedMotion ? undefined : { y: [0, 40, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header - Cinematográfico */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <MotionFadeUp>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-100/60 text-primary-700 text-sm font-semibold border border-primary-200/50">
                📊 Resultados comprovados
              </span>
            </MotionFadeUp>

            <MotionFadeUp delay={100}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                IA já gerando resultado
                <br />
                <span className="text-gradient">em empresas como a sua</span>
              </h2>
            </MotionFadeUp>

            <MotionFadeUp delay={180}>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
                Empresas de diferentes portes já usam agentes ProceX para vender mais, responder mais rápido e organizar bastidores sem contratar mais gente.
              </p>
            </MotionFadeUp>
          </div>

          {/* Metrics Grid - Com animações em cascata */}
          <MotionStaggerList className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" delayChildren={250}>
            {[
              {
                icon: TrendingUp,
                value: '+32%',
                description: 'de aumento em vendas após reativação de clientes inativos com agente comercial',
                delay: 300,
              },
              {
                icon: Clock,
                value: '15min → 1min',
                description: 'Resposta de 15 min para 1 min no WhatsApp com agente de agendamento',
                delay: 375,
              },
              {
                icon: Zap,
                value: '100%',
                description: 'Cobranças e conciliações automatizadas com emissão de boletos integrada',
                delay: 450,
              },
              {
                icon: RefreshCw,
                value: 'Tempo real',
                description: 'Atualizações em tempo real de planilhas e status de pedidos com agente operacional',
                delay: 525,
              },
            ].map((metric, i) => {
              const Icon = metric.icon;
              return (
                <MotionFadeUp key={i}>
                  <TiltCard className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-7 shadow-soft border border-white/50 hover:shadow-lifted hover:border-primary-200/50 overflow-hidden">
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary-600" />
                      </div>

                      {/* Value */}
                      <div className="metric-number text-3xl sm:text-4xl mb-4 font-bold text-primary-700">
                        {metric.value}
                      </div>

                      {/* Description */}
                      <p className="text-neutral-600 text-sm leading-relaxed font-medium">{metric.description}</p>
                    </div>
                  </TiltCard>
                </MotionFadeUp>
              );
            })}
          </MotionStaggerList>

          {/* Logos Carousel */}
          <MotionFadeUp delay={300}>
            <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/50 backdrop-blur-md mb-16">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              <motion.div
                className="flex items-center gap-12 py-6 px-8 text-primary-700 font-semibold text-lg uppercase tracking-[0.2em]"
                animate={prefersReducedMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
                transition={prefersReducedMotion ? undefined : { duration: 24, repeat: Infinity, ease: 'linear' }}
              >
                {['Banco Aurora', 'Healthfy', 'Cobalto Tech', 'NorteLog', 'VivaEdu', 'Maran Finanças', 'UpSales', 'Farmo+']
                  .concat(['Banco Aurora', 'Healthfy', 'Cobalto Tech', 'NorteLog', 'VivaEdu', 'Maran Finanças', 'UpSales', 'Farmo+'])
                  .map((brand, index) => (
                    <span key={`${brand}-${index}`} className="text-sm sm:text-base whitespace-nowrap text-neutral-500">
                      {brand}
                    </span>
                  ))}
              </motion.div>
            </div>
          </MotionFadeUp>

          {/* CTA - Premium */}
          <MotionFadeUp delay={360} className="text-center">
            <button
              onClick={() => scrollToSection('casos-reais')}
              className="btn-secondary hover-lift group"
            >
              <span className="flex items-center gap-2">
                Ver casos reais por área
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </MotionFadeUp>
        </div>
      </section>

      {/* HOW IT WORKS - Timeline cinematográfica */}
      <section id="como-funciona" className="section-spacing bg-gradient-to-b from-background to-primary-50/20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <MotionFadeUp>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary-accent-500/15 text-secondary-accent-500 text-sm font-semibold border border-secondary-accent-500/30">
                🚀 Processo simplificado
              </span>
            </MotionFadeUp>

            <MotionFadeUp delay={120}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Veja como é simples
                <br />
                <span className="text-gradient">começar com IA</span>
              </h2>
            </MotionFadeUp>

            <MotionFadeUp delay={200}>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
                Você não precisa montar um projeto gigante. Escolhemos juntos um fluxo específico, desenhamos o agente ideal e conectamos às ferramentas que já existem na sua operação.
              </p>
            </MotionFadeUp>
          </div>

          {/* Steps Timeline - Premium Flowing Animation */}
          <div className="relative max-w-5xl mx-auto space-y-8 md:space-y-12">
            {[
              {
                step: '01',
                title: 'Diagnóstico',
                description:
                  'Entendemos suas rotinas, gargalos e objetivos. Você explica o dia a dia; nós identificamos onde a IA gera maior impacto primeiro.',
                icon: Briefcase,
              },
              {
                step: '02',
                title: 'Desenho de fluxo',
                description:
                  'Mapeamos as tarefas que serão automatizadas, os canais envolvidos e as regras que o agente deve seguir.',
                icon: Settings,
              },
              {
                step: '03',
                title: 'Desenvolvimento / Integração',
                description:
                  'Configuramos o agente de IA, conectamos aos sistemas da sua empresa e preparamos os dados necessários.',
                icon: Zap,
              },
              {
                step: '04',
                title: 'Testes e treinamento',
                description:
                  'Validamos o comportamento do agente com casos reais e ajustamos até que ele esteja pronto para operar com segurança.',
                icon: CheckCircle2,
              },
              {
                step: '05',
                title: 'Acompanhamento contínuo',
                description:
                  'Monitoramos performance, fazemos ajustes e evoluções conforme sua operação muda.',
                icon: RefreshCw,
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <FlowingStepCard
                  key={i}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  icon={<Icon className="w-6 h-6" />}
                  isAlternate={i % 2 !== 0}
                  delay={200 + i * 100}
                  showConnector={i < 4}
                />
              );
            })}
          </div>

          {/* CTA */}
          <MotionFadeUp delay={420} className="mt-20 text-center space-y-6">
            <p className="text-lg text-neutral-700">
              Basta saber qual rotina precisa melhorar. <span className="font-semibold text-primary-700">Você descreve em linguagem de negócio</span>, nós traduzimos isso em agentes de IA que executam com consistência.
            </p>
            <button onClick={() => scrollToSection('waitlist')} className="btn-primary hover-lift group inline-flex">
              <span className="flex items-center gap-2">
                Mapear meu primeiro fluxo de IA
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </MotionFadeUp>
        </div>
      </section>

      {/* 7. CASE STUDIES - Antes/Depois com efeitos visuais */}
      <section id="casos-reais" className="section-spacing bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-400/8 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-40 w-96 h-96 bg-primary-400/8 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="inline-block animate-fade-up">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-success/15 text-success text-sm font-semibold border border-success/30">
                ✅ Resultados reais
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-fade-up" style={{ animationDelay: '100ms' }}>
              Antes e depois de ter
              <br />
              <span className="text-gradient">um agente de IA na equipe</span>
            </h2>

            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              Veja exemplos práticos de como agentes de IA mudaram rotinas, melhoraram indicadores e liberaram tempo da equipe.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Agente Comercial',
                before: 'Base de clientes inativos, follow-ups manuais, equipe sem tempo para reativar leads',
                after: 'Agente de IA reativando a base com mensagens personalizadas e fluxo contínuo',
                result: '+32% de aumento em vendas em poucos meses',
                icon: TrendingUp,
                delay: 300,
              },
              {
                title: 'Agente de Agendamento',
                before: 'Tempo médio de resposta de 10 a 20 minutos, perda de oportunidades',
                after: 'Agente atendendo automaticamente, tirando dúvidas e oferecendo horários',
                result: 'Tempo de resposta reduzido de 15 min para 1 min',
                icon: Clock,
                delay: 375,
              },
              {
                title: 'Agente Financeiro',
                before: 'Cobranças manuais, esquecimentos, falta de padrão na comunicação',
                after: 'Agente disparando boletos, lembretes e atualizando registros automaticamente',
                result: 'Melhor previsibilidade de caixa e redução de inadimplência',
                icon: DollarSign,
                delay: 450,
              },
              {
                title: 'Agente Operacional',
                before: 'Planilhas desatualizadas, informações espalhadas, falta de visão',
                after: 'Agente de IA atualizando planilhas e sistemas em tempo real',
                result: 'Mais controle e menos ruído entre áreas',
                icon: RefreshCw,
                delay: 525,
              },
            ].map((caseStudy, i) => {
              const Icon = caseStudy.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-soft hover:shadow-lifted border border-white/40 hover:border-primary-200/60 transition-all duration-300 hover:-translate-y-2 reveal-up"
                  style={{ animationDelay: `${caseStudy.delay}ms` }}
                >
                  {/* Header */}
                  <div className="bg-gradient-dark p-7 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-full group-hover:translate-x-0"></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                    </div>
                  </div>

                  {/* Before / After */}
                  <div className="grid grid-cols-2 divide-x divide-primary-100">
                    {/* Before */}
                    <div className="p-6 bg-error/8">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block w-2 h-2 bg-error rounded-full"></span>
                        <span className="text-xs uppercase tracking-widest font-bold text-error">Antes</span>
                      </div>
                      <p className="text-sm text-neutral-700 font-medium leading-relaxed">{caseStudy.before}</p>
                    </div>

                    {/* After */}
                    <div className="p-6 bg-success/8">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block w-2 h-2 bg-success rounded-full"></span>
                        <span className="text-xs uppercase tracking-widest font-bold text-success">Depois</span>
                      </div>
                      <p className="text-sm text-neutral-700 font-medium leading-relaxed">{caseStudy.after}</p>
                    </div>
                  </div>

                  {/* Result Footer */}
                  <div className="bg-gradient-cta px-6 py-4 text-center group-hover:shadow-accent transition-all duration-300">
                    <p className="text-white font-bold text-lg">{caseStudy.result}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Metrics Results - Animated Reveals */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Métricas que falam por si</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedMetricsCard
                metric="Aumento em Vendas"
                metricValue={32}
                title="Agente Comercial"
                description="Base de clientes reativada com mensagens personalizadas e fluxo contínuo"
                icon={<TrendingUp className="w-6 h-6" />}
                delay={0}
                accentColor="primary"
              />

              <AnimatedMetricsCard
                metric="Tempo de Resposta"
                metricValue="15 → 1"
                title="Agente de Atendimento"
                description="Respostas automáticas em tempo real para dúvidas e agendamentos"
                icon={<Clock className="w-6 h-6" />}
                delay={100}
                accentColor="primary"
              />

              <AnimatedMetricsCard
                metric="Redução em Inadimplência"
                metricValue={28}
                title="Agente Financeiro"
                description="Cobranças automatizadas e lembretes inteligentes de pagamento"
                icon={<DollarSign className="w-6 h-6" />}
                delay={200}
                gradient="from-accent-400/20 to-primary-400/20"
                accentColor="accent"
              />

              <AnimatedMetricsCard
                metric="Eficiência Operacional"
                metricValue={45}
                title="Agente Operacional"
                description="Automação de rotinas repetitivas e manutenção de dados em tempo real"
                icon={<Zap className="w-6 h-6" />}
                delay={300}
                accentColor="primary"
              />
            </div>
          </div>

          {/* Testimonials - Com estilo melhorado */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    'A sensação é de ter contratado um novo funcionário, só que ele trabalha 24h por dia e não esquece nada.',
                  author: 'Diretor Comercial',
                  delay: 300,
                },
                {
                  quote:
                    'A gente deixou de apagar incêndio e passou a acompanhar os números em tempo real. O agente faz o trabalho chato e repetitivo.',
                  author: 'Gestor Operacional',
                  delay: 375,
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border-l-4 border-primary-600 shadow-soft hover:shadow-lifted transition-all duration-300 hover:-translate-y-1 reveal-up"
                  style={{ animationDelay: `${testimonial.delay}ms` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl text-accent-500 leading-none">"</span>
                  </div>
                  <p className="text-neutral-700 italic mb-6 leading-relaxed text-lg">{testimonial.quote}</p>
                  <p className="text-sm text-neutral-600 font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: '600ms' }}>
            <button onClick={() => scrollToSection('waitlist')} className="btn-primary hover-lift group inline-flex">
              <span className="flex items-center gap-2">
                Entrar em contato
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. USE CASES - Casos de uso com hover 3D */}
      <section className="section-spacing bg-gradient-to-b from-background to-primary-50/20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-300/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-accent-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="inline-block animate-fade-up">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-100/60 text-primary-700 text-sm font-semibold border border-primary-200/50">
                🎯 Para quem a ProceX foi criada
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-fade-up" style={{ animationDelay: '100ms' }}>
              Pessoas e empresas que querem
              <br />
              <span className="text-gradient">usar IA na prática</span>
            </h2>

            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              ProceX é para empresas e também para profissionais dentro delas — gestores, analistas, vendedores, CS, coordenadores — que querem vender mais, atender mais clientes, marcar mais reuniões ou automatizar tarefas sem virar especialistas em tecnologia.
            </p>
          </div>

          {/* By Area - Com microinterações */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-14 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <span className="text-gradient">Por área da empresa</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: 'Vendas & Comercial',
                  items: ['Nutrição de leads', 'Reativação de clientes', 'Atualizações em CRM'],
                  gradient: 'from-primary-50 to-primary-100/50',
                  delay: 350,
                },
                {
                  icon: MessageCircle,
                  title: 'Atendimento & Suporte',
                  items: ['Respostas rápidas', 'Filtragem de demandas', 'Agendamentos'],
                  gradient: 'from-accent-50 to-accent-100/50',
                  delay: 425,
                },
                {
                  icon: DollarSign,
                  title: 'Financeiro & Cobrança',
                  items: ['Envio de boletos', 'Lembretes', 'Atualização de recebimentos'],
                  gradient: 'from-success/10 to-success/5',
                  delay: 500,
                },
                {
                  icon: Settings,
                  title: 'Operações & Backoffice',
                  items: ['Status de pedidos', 'Relatórios', 'Organização de tarefas'],
                  gradient: 'from-secondary-accent-500/10 to-secondary-accent-500/5',
                  delay: 575,
                },
              ].map((area, i) => {
                const Icon = area.icon;
                return (
                  <div
                    key={i}
                    className={`group relative bg-gradient-to-br ${area.gradient} backdrop-blur-md rounded-2xl p-7 shadow-soft border border-primary-100/30 hover:border-primary-200/50 hover:shadow-lifted transition-all duration-300 hover:-translate-y-3 reveal-up cursor-pointer`}
                    style={{ animationDelay: `${area.delay}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 group-hover:scale-125 transition-transform duration-300 shadow-soft">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-5 text-foreground group-hover:text-primary-700 transition-colors duration-300">{area.title}</h4>

                    {/* Items */}
                    <ul className="space-y-3">
                      {area.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-primary-600 font-bold mt-0.5">✓</span>
                          <span className="text-sm text-neutral-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* By Business Type - Com estilo premium */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-14 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <span className="text-gradient">Por tipo de negócio</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Stethoscope,
                  title: 'Clínicas e consultórios',
                  description: 'Agendamentos, confirmações, lista de espera automatizada',
                  color: 'text-info',
                  delay: 450,
                },
                {
                  icon: ShoppingCart,
                  title: 'Varejo e e-commerce',
                  description: 'Suporte ao cliente, recuperação de carrinho, pós-venda',
                  color: 'text-accent-600',
                  delay: 525,
                },
                {
                  icon: Briefcase,
                  title: 'Prestadores de serviço',
                  description: 'Organização de demandas, status de projetos',
                  color: 'text-secondary-accent-500',
                  delay: 600,
                },
                {
                  icon: Building2,
                  title: 'Indústria e B2B',
                  description: 'Atualização de pedidos, acompanhamento de contratos',
                  color: 'text-primary-600',
                  delay: 675,
                },
              ].map((business, i) => {
                const Icon = business.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-7 shadow-soft border border-white/40 hover:border-primary-200/60 hover:shadow-lifted transition-all duration-300 hover:-translate-y-3 reveal-up"
                    style={{ animationDelay: `${business.delay}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 group-hover:scale-125 transition-transform duration-300 shadow-soft">
                      <Icon className={`w-7 h-7 ${business.color}`} />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-3 text-foreground">{business.title}</h4>

                    {/* Description */}
                    <p className="text-sm text-neutral-700 leading-relaxed">{business.description}</p>

                    {/* Hover indicator */}
                    <div className="absolute -bottom-1 left-0 h-1 w-0 bg-gradient-cta group-hover:w-full transition-all duration-300 rounded-full"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-lg text-neutral-700 mt-12">
            Se você ou sua empresa têm tarefas repetitivas e baseadas em regras, existe um agente de IA que pode ajudar — e um especialista ProceX pronto para desenhá-lo com você.
          </p>
        </div>
      </section>

      {/* 9. ENTRY MODELS */}
      <section id="planos" className="section-spacing bg-gradient-to-b from-primary-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <MotionFadeUp>
              <h2 className="mb-2">Comece pequeno, teste rápido, cresça com segurança</h2>
            </MotionFadeUp>
            <MotionFadeUp delay={100}>
              <p className="text-xl text-neutral-600">
                Escolha entre diagnóstico guiado, piloto focado ou evolução contínua. Em todos eles, o objetivo é o mesmo: clareza de escopo, medição de resultado e ajustes constantes.
              </p>
            </MotionFadeUp>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                tier: 'diagnostic',
                title: 'Diagnóstico Guiado',
                description: 'Entenda em quais processos a IA pode gerar maior impacto e qual seria o primeiro agente ideal.',
                features: [
                  { name: 'Análise de processos', included: true },
                  { name: 'Identificação de gargalos', included: true },
                  { name: 'Recomendações personalizadas', included: true },
                  { name: 'Implementação', included: false },
                ],
                cta: 'Solicitar Diagnóstico',
                badge: 'Ponto de partida',
              },
              {
                tier: 'pilot',
                title: 'Projeto Piloto Focado',
                description: 'Implantação de um único agente em um processo-chave. Ideal para testar valor rapidamente.',
                price: 'A definir',
                features: [
                  { name: '1 fluxo automatizado', included: true, highlight: true },
                  { name: 'Integração básica', included: true, highlight: true },
                  { name: 'Suporte inicial (30 dias)', included: true },
                  { name: 'Múltiplos agentes', included: false },
                ],
                cta: 'Começar Piloto',
                isPopular: true,
                badge: '⭐ Mais Popular',
              },
              {
                tier: 'evolution',
                title: 'Evolução Contínua',
                description: 'Após validar o piloto, expansão para novos fluxos e áreas com acompanhamento frequente.',
                price: 'Personalizado',
                features: [
                  { name: 'Múltiplos agentes', included: true },
                  { name: 'Integrações avançadas', included: true },
                  { name: 'Suporte dedicado', included: true },
                  { name: 'Otimizações contínuas', included: true },
                ],
                cta: 'Escalar Operações',
                badge: 'Crescimento',
              },
            ].map((model, i) => (
              <FeatureComparisonCard
                key={i}
                title={model.title}
                description={model.description}
                price={model.price}
                features={model.features}
                cta={model.cta}
                isPopular={model.isPopular || false}
                badge={model.badge}
                delay={220 + i * 100}
                onCtaClick={() => scrollToSection('waitlist')}
              />
            ))}
          </div>

          <MotionFadeUp delay={180} className="bg-white rounded-xl p-8 shadow-soft max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Destaques de acessibilidade
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                'Não exige equipe técnica interna',
                'Começa com escopo enxuto e objetivo claro',
                'Possibilidade de ajustar e crescer conforme o resultado aparece',
              ].map((highlight, i) => (
                <MotionFadeUp key={i} delay={i * 60} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <CheckCircle2 className="w-8 h-8 text-primary-600" />
                  </div>
                  <p className="text-neutral-700">{highlight}</p>
                </MotionFadeUp>
              ))}
            </div>
          </MotionFadeUp>

          <MotionFadeUp delay={260} className="text-center space-y-4">
            <motion.button
              onClick={() => scrollToSection('waitlist')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: [1, 1.025, 1],
                      boxShadow: [
                        '0 20px 40px rgba(15,168,158,0.25)',
                        '0 30px 50px rgba(15,168,158,0.35)',
                        '0 20px 40px rgba(15,168,158,0.25)',
                      ],
                    }
              }
              transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Conversar sobre o melhor modelo
            </motion.button>
            <p className="text-sm text-neutral-500">
              Fique entre os primeiros a receber os modelos de entrada e condições especiais
            </p>
          </MotionFadeUp>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Ainda com dúvidas sobre IA na sua empresa?</h2>
            <p className="text-xl text-neutral-600">
              Respondemos as perguntas mais comuns de quem quer usar IA, mas ainda não se sente
              100% seguro para dar o primeiro passo.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Preciso saber programar para usar a ProceX?',
                answer:
                  'Não. Você não precisa escrever uma linha de código. Nosso time cuida de toda a parte técnica, configurações e integrações. Seu papel é explicar o negócio e validar se o agente está atuando como você precisa.',
              },
              {
                question: 'Minha empresa é pequena. Faz sentido ter agente de IA?',
                answer:
                  'Sim. Empresas menores normalmente têm equipes enxutas e muita demanda repetitiva. Isso torna o impacto da automação ainda mais perceptível. O modelo de entrada foi pensado justamente para permitir começar pequeno.',
              },
              {
                question: 'Em quanto tempo vejo resultado?',
                answer:
                  'Depende do fluxo escolhido, mas em muitos casos o efeito é sentido nas primeiras semanas, seja em tempo economizado, seja em aumento de conversão ou melhor organização das rotinas.',
              },
              {
                question: 'E se eu não tiver sistemas modernos (ERP, CRM, etc.)?',
                answer:
                  'Não tem problema. Muitas integrações podem ser feitas com planilhas, WhatsApp e ferramentas simples. Avaliamos o que você já usa e adaptamos o agente a essa realidade.',
              },
              {
                question: 'Como funciona o suporte depois da implantação?',
                answer:
                  'O agente não é "entrega e adeus". Existe acompanhamento para monitorar resultados, fazer ajustes e evoluir o fluxo conforme sua operação muda.',
              },
              {
                question: 'Quanto custa?',
                answer:
                  'O investimento varia conforme a complexidade do fluxo e o número de integrações. Durante o diagnóstico, estimamos essa faixa com transparência, sempre buscando retorno financeiro e operacional claro.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-50/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-neutral-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaqIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-primary-50 rounded-xl p-8">
            <p className="text-lg font-semibold text-primary-900 mb-4">Minha dúvida não está aqui</p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a ProceX."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section id="waitlist" className="section-spacing-xl bg-gradient-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <MotionFadeUp>
              <h2 className="text-white mb-8">Pronto para ter IA assumindo as tarefas repetitivas da sua empresa?</h2>
            </MotionFadeUp>
            <MotionFadeUp delay={80}>
              <p className="text-xl text-white/90 mb-6">
                Fale com um especialista ProceX, explique sua rotina em linguagem simples e receba um plano claro de como agentes de IA podem gerar resultado nos próximos meses.
              </p>
            </MotionFadeUp>
            <MotionFadeUp delay={140}>
              <p className="text-lg text-white/80 mb-12">
                Sem contratar time técnico e sem implementar tudo de uma vez. Começamos com um fluxo bem definido, medimos o impacto e evoluímos juntos.
              </p>
            </MotionFadeUp>

            {/* Benefits */}
            <MotionStaggerList className="grid sm:grid-cols-3 gap-8 mb-12" delayChildren={150}>
              {[
                {
                  title: 'Mais faturamento',
                  description: 'Processos de vendas e follow-up rodando de forma consistente',
                },
                {
                  title: 'Menos custos',
                  description: 'Menos retrabalho, erros manuais e tarefas operacionais',
                },
                {
                  title: 'Mais tempo livre',
                  description: 'Você e sua equipe focam em estratégia, não em apagar incêndios',
                },
              ].map((benefit, i) => (
                <MotionFadeUp key={i}>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-white/80">{benefit.description}</p>
                  </div>
                </MotionFadeUp>
              ))}
            </MotionStaggerList>

            {/* CTA Buttons */}
            <MotionFadeUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-primary-700 font-bold text-xl rounded-full shadow-lifted"
                  whileHover={{ scale: 1.05, boxShadow: '0 25px 60px rgba(15,168,158,0.45)' }}
                  whileTap={{ scale: 0.95 }}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: [1, 1.03, 1],
                          filter: ['brightness(1)', 'brightness(1.05)', 'brightness(1)'],
                        }
                  }
                  transition={
                    prefersReducedMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
                  }
                  onClick={() => scrollToSection('waitlist')}
                >
                  Falar com especialista em IA
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
                <motion.a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a ProceX."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-white border-2 border-white font-bold text-xl rounded-full"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Ver soluções para minha área
                </motion.a>
              </div>
            </MotionFadeUp>

            <MotionFadeUp delay={260}>
              <p className="text-sm text-white/70 mt-6">
                Garanta prioridade no acesso à plataforma e aos primeiros slots de implantação
              </p>
            </MotionFadeUp>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
          animate={prefersReducedMotion ? undefined : { y: [0, -30, 0] }}
          transition={prefersReducedMotion ? undefined : { duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={prefersReducedMotion ? undefined : { y: [0, 30, 0] }}
          transition={prefersReducedMotion ? undefined : { duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-neutral-900 text-neutral-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="font-heading text-2xl font-bold text-white">ProceX</span>
              </div>
              <p className="text-sm">IA acessível para o dia a dia da sua empresa</p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('como-funciona')}
                    className="hover:text-primary-400 transition-colors"
                  >
                    Como funciona
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('casos-reais')}
                    className="hover:text-primary-400 transition-colors"
                  >
                    Casos reais
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('planos')}
                    className="hover:text-primary-400 transition-colors"
                  >
                    Planos
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:contato@procex.ai"
                    className="hover:text-primary-400 transition-colors"
                  >
                    contato@procex.ai
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-700 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} ProceX. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';

interface Feature {
  name: string;
  included: boolean;
  highlight?: boolean;
}

interface FeatureComparisonCardProps {
  title: string;
  description: string;
  price?: string | number;
  features: Feature[];
  cta: string;
  isPopular?: boolean;
  delay?: number;
  onCtaClick?: () => void;
  badge?: string;
}

export function FeatureComparisonCard({
  title,
  description,
  price,
  features,
  cta,
  isPopular = false,
  delay = 0,
  onCtaClick,
  badge,
}: FeatureComparisonCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay / 1000,
        duration: 0.6,
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (delay + 150 + i * 80) / 1000,
        duration: 0.5,
      }
    })
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: (delay + 200 + i * 60) / 1000,
        duration: 0.4,
      }
    }),
    hover: {
      x: 8,
      transition: { duration: 0.3 }
    }
  };

  const checkmarkVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  const gradientClasses = isPopular
    ? 'from-accent-50/50 via-white to-primary-50/30'
    : 'from-neutral-50/30 via-white/50 to-neutral-50/20';

  const borderClasses = isPopular
    ? 'border-accent-300/60 hover:border-accent-400'
    : 'border-primary-200/30 hover:border-primary-300/60';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        'relative group h-full overflow-hidden rounded-3xl p-8 sm:p-10',
        'bg-gradient-to-br',
        gradientClasses,
        'backdrop-blur-xl backdrop-brightness-95',
        borderClasses,
        'border transition-all duration-500',
        'hover:shadow-lifted hover:-translate-y-1',
        isPopular && 'ring-2 ring-accent-300/40 shadow-lifted',
        'will-change-transform'
      )}
    >
      {/* Popular badge */}
      {isPopular && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay / 1000, duration: 0.5 }}
          className="absolute -top-px left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-400 to-primary-500
            text-white text-xs font-bold uppercase tracking-wider
            shadow-accent"
          >
            ⭐ Mais Procurado
          </div>
        </motion.div>
      )}

      {/* Animated background orbs */}
      <motion.div
        className={cn(
          'absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-30',
          isPopular ? 'bg-accent-300/20' : 'bg-primary-300/10'
        )}
        animate={!prefersReducedMotion ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Flowing gradient border */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: isPopular
            ? 'linear-gradient(90deg, transparent, rgba(255, 87, 51, 0.2), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(15, 168, 158, 0.15), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={!prefersReducedMotion ? {
          backgroundPosition: ['200% 0', '-200% 0'],
        } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <motion.div
          custom={0}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                bg-primary-100/40 text-primary-700 text-xs font-semibold
                border border-primary-200/50 mb-3"
            >
              {badge}
            </motion.div>
          )}

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (delay + 100) / 1000, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (delay + 150) / 1000, duration: 0.5 }}
            className="text-neutral-700 text-sm sm:text-base leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Price */}
        {price !== undefined && (
          <motion.div
            custom={1}
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (delay + 200) / 1000, duration: 0.5 }}
              className="text-gradient-accent text-4xl sm:text-5xl font-bold"
            >
              {typeof price === 'string' ? price : `R$ ${price.toLocaleString('pt-BR')}`}
            </motion.div>
            <p className="text-neutral-600 text-sm mt-1">por mês</p>
          </motion.div>
        )}

        {/* Features List */}
        <motion.div
          className="mb-8 space-y-3 flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                custom={index}
                variants={featureVariants}
                whileHover={!prefersReducedMotion ? 'hover' : undefined}
                onHoverStart={() => !prefersReducedMotion && setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className={cn(
                  'flex items-start gap-3 p-3 rounded-lg transition-all duration-300',
                  hoveredFeature === index && 'bg-accent-50/40',
                  !feature.included && 'opacity-60'
                )}
              >
                <motion.div
                  variants={checkmarkVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: (delay + 250 + index * 80) / 1000 }}
                  className={cn(
                    'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
                    feature.included
                      ? 'bg-gradient-to-br from-primary-400 to-accent-500 text-white'
                      : 'bg-neutral-200 text-neutral-400'
                  )}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                </motion.div>

                <motion.span
                  className={cn(
                    'text-sm font-medium',
                    feature.included ? 'text-neutral-900' : 'text-neutral-600',
                    feature.highlight && 'font-bold text-accent-600'
                  )}
                >
                  {feature.name}
                </motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          custom={features.length}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onClick={onCtaClick}
          whileHover={!prefersReducedMotion ? { scale: 1.02 } : undefined}
          whileTap={!prefersReducedMotion ? { scale: 0.98 } : undefined}
          className={cn(
            'w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300',
            'flex items-center justify-center gap-2',
            isPopular
              ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-accent hover:shadow-lifted hover:-translate-y-1'
              : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-soft hover:shadow-float hover:-translate-y-1'
          )}
        >
          <span>{cta}</span>
          <motion.div
            animate={!prefersReducedMotion ? { x: [0, 4, 0] } : undefined}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}

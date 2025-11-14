'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { useEffect, useRef, useState } from 'react';

interface MetricsCardProps {
  title: string;
  metric: string;
  metricValue: string | number;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  gradient?: string;
  accentColor?: string;
}

export function AnimatedMetricsCard({
  title,
  metric,
  metricValue,
  description,
  icon,
  delay = 0,
  gradient = 'from-primary-400/20 to-accent-400/20',
  accentColor = 'primary'
}: MetricsCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    // Extract numeric value from metricValue
    const numValue = typeof metricValue === 'number'
      ? metricValue
      : parseInt(metricValue.toString().replace(/\D/g, '')) || 0;

    // Start animation when component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          const startTime = Date.now();
          const duration = 2000;
          setDisplayValue(0);

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth count animation
            const eased = progress < 0.5
              ? 2 * progress * progress
              : -1 + (4 - 2 * progress) * progress;

            setDisplayValue(Math.round(numValue * eased));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [metricValue, prefersReducedMotion]);

  const containerVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.95 },
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: (delay + 200) / 1000,
        duration: 0.6,
      }
    }
  };

  const metricVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: (delay + 300) / 1000,
        duration: 0.6,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative group overflow-hidden rounded-3xl p-8 sm:p-10
        bg-gradient-to-br ${gradient}
        border border-primary-200/30 hover:border-accent-300/60
        backdrop-blur-xl backdrop-brightness-95
        transition-all duration-500 hover:shadow-lifted hover:-translate-y-2
        will-change-transform`}
    >
      {/* Animated background orb */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent-300/10 blur-3xl"
        animate={!prefersReducedMotion ? {
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Flowing border animation on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(15, 168, 158, 0.2), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={!prefersReducedMotion ? {
          backgroundPosition: ['200% 0', '-200% 0'],
        } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6">
        {/* Icon */}
        <motion.div
          variants={iconVariants}
          className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${accentColor}-400 to-${accentColor}-600
            text-white flex items-center justify-center shadow-accent
            group-hover:shadow-lifted transition-shadow duration-300`}
        >
          {icon}
        </motion.div>

        {/* Metric */}
        <motion.div variants={metricVariants} className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-neutral-600">
            {metric}
          </p>
          <motion.div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
            {displayValue}
            {typeof metricValue === 'string' && metricValue.replace(/\d+/g, '')}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={metricVariants}
          className="text-neutral-700 leading-relaxed text-sm sm:text-base"
        >
          {description}
        </motion.p>

        {/* Title */}
        <motion.h3
          variants={metricVariants}
          className="text-lg font-semibold text-neutral-900 pt-2"
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  );
}

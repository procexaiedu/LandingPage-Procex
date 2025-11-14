'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';

interface FlowingStepCardProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isAlternate?: boolean;
  delay?: number;
  showConnector?: boolean;
}

export function FlowingStepCard({
  step,
  title,
  description,
  icon,
  isAlternate = false,
  delay = 0,
  showConnector = true,
}: FlowingStepCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay / 1000,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: (delay + 150) / 1000,
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.6 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: isAlternate ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: (delay + 200) / 1000,
        duration: 0.6,
      }
    }
  };

  const pulseVariants = {
    animate: {
      boxShadow: [
        '0 0 0 0 rgba(15, 168, 158, 0.4)',
        '0 0 0 12px rgba(15, 168, 158, 0)'
      ],
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        'relative group md:flex md:gap-8 lg:gap-12',
        isAlternate && 'md:flex-row-reverse'
      )}
    >
      {/* Timeline dot with enhanced styling */}
      <motion.div
        className="hidden md:absolute left-1/2 transform -translate-x-1/2 top-8 z-20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: (delay + 100) / 1000, duration: 0.5 }}
      >
        <motion.div
          variants={prefersReducedMotion ? {} : pulseVariants}
          animate={prefersReducedMotion ? undefined : 'animate'}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full"
        />
        <div className="relative w-6 h-6 bg-white border-4 border-primary-600 rounded-full shadow-lifted ring-4 ring-primary-100/30" />
      </motion.div>

      {/* Content card */}
      <div className={cn('md:w-1/2', isAlternate ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16')}>
        <motion.div
          variants={contentVariants}
          className="group/card relative overflow-hidden rounded-2xl p-8 sm:p-9
            bg-gradient-to-br from-white/80 via-primary-50/20 to-white/80
            backdrop-blur-md
            border border-primary-100/40 hover:border-accent-300/60
            shadow-soft hover:shadow-lifted
            transition-all duration-500 hover:-translate-y-2
            will-change-transform"
        >
          {/* Animated gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover/card:opacity-100
              bg-gradient-to-br from-primary-500/5 to-accent-500/5
              transition-opacity duration-300 pointer-events-none"
            aria-hidden="true"
          />

          {/* Flowing light effect */}
          <motion.div
            className="absolute -top-1/2 -right-1/2 w-96 h-96 rounded-full
              bg-gradient-radial from-accent-300/20 to-transparent
              blur-3xl opacity-0 group-hover/card:opacity-100
              transition-opacity duration-500 pointer-events-none"
            animate={!prefersReducedMotion ? {
              x: [0, 50, 0],
              y: [0, -50, 0],
            } : undefined}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 flex gap-4 sm:gap-6">
            {/* Icon */}
            <motion.div
              variants={iconVariants}
              whileHover={!prefersReducedMotion ? 'hover' : undefined}
              className="flex-shrink-0"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                bg-gradient-to-br from-accent-400 to-primary-500
                text-white flex items-center justify-center
                shadow-accent group-hover/card:shadow-lifted
                transition-shadow duration-300"
              >
                {icon}
              </div>
            </motion.div>

            {/* Text content */}
            <div className="flex-1 min-w-0">
              {/* Step badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: (delay + 250) / 1000 }}
                className="inline-flex items-center gap-2 mb-2"
              >
                <span className="inline-flex items-center justify-center
                  w-8 h-8 rounded-lg
                  bg-gradient-to-br from-accent-400/30 to-primary-500/30
                  text-primary-600 font-mono font-bold text-sm
                  border border-primary-200/50"
                >
                  {step}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (delay + 300) / 1000, duration: 0.5 }}
                className="text-lg sm:text-xl font-bold text-neutral-900 mb-2"
              >
                {title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (delay + 350) / 1000, duration: 0.5 }}
                className="text-sm sm:text-base text-neutral-700 leading-relaxed"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile dot indicator */}
      <div className="md:hidden flex gap-3 ml-2 mt-0 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay / 1000 }}
          className="w-4 h-4 rounded-full bg-primary-600 shadow-soft flex-shrink-0 mt-1.5"
        />
      </div>
    </motion.div>
  );
}

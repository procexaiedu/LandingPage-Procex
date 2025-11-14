'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

interface AnimatedLogoProps {
  className?: string;
}

export function AnimatedLogo({ className = '' }: AnimatedLogoProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={`w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-accent relative overflow-hidden ${className}`}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: {
                scale: { duration: 0.3 },
                rotate: { duration: 0.6, ease: 'easeInOut' },
              },
            }
      }
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: ['100%', '-100%'],
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 2,
              }
        }
      />

      {/* Logo letter with pulse */}
      <motion.span
        className="text-white font-bold text-xl relative z-10"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        P
      </motion.span>

      {/* Rotating border glow */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }
        }
      />
    </motion.div>
  );
}

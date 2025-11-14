'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function ScrollIndicator() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToContent}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      aria-label="Rolar para baixo"
    >
      <span className="text-sm font-medium tracking-wider uppercase">Rolar para baixo</span>
      <motion.div
        className="relative w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        animate={
          prefersReducedMotion
            ? {}
            : {
                borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.3)'],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-white rounded-full"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [0, 8, 0],
              }
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
}

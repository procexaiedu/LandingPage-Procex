'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  movementX: number;
}

const seededRandom = (seed: number) => {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
};

export function ParticleField({ count = 30 }: { count?: number }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => {
      const baseSeed = i + 1;
      const next = (offset: number) => seededRandom(baseSeed + offset);

      return {
        id: i,
        x: next(1) * 100,
        y: next(2) * 100,
        size: next(3) * 3 + 1,
        duration: next(4) * 10 + 15,
        delay: next(5) * 5,
        opacity: next(6) * 0.4 + 0.1,
        movementX: next(7) * 40 - 20,
      };
    });
  }, [count]);

  const formatPercent = (value: number) => `${value.toFixed(6)}%`;
  const formatSize = (value: number) => Number(value.toFixed(6));
  const formatOpacity = (value: number) => Number(value.toFixed(6));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/80"
          style={{
            left: formatPercent(particle.x),
            top: formatPercent(particle.y),
            width: formatSize(particle.size),
            height: formatSize(particle.size),
            opacity: formatOpacity(particle.opacity),
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, -100, 0],
                  x: [0, particle.movementX, 0],
                  opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
                  scale: [1, 1.5, 1],
                }
          }
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

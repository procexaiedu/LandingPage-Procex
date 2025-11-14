'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function AnimatedGradientMesh() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Mesh Orbs - Flowing Animation */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(15,168,158,0.4) 0%, rgba(15,168,158,0.1) 50%, transparent 70%)',
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,87,51,0.35) 0%, rgba(255,87,51,0.1) 50%, transparent 70%)',
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-[15%] left-[15%] w-[550px] h-[550px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(146,217,65,0.3) 0%, rgba(146,217,65,0.08) 50%, transparent 70%)',
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, 60, 0],
                y: [0, -70, 0],
                scale: [1, 1.25, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,168,158,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,168,158,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial fade overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, transparent 0%, rgba(2,6,23,0.6) 100%)',
        }}
      />
    </div>
  );
}

'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef, MouseEvent } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  shine?: boolean;
}

export function Card3D({ children, className = '', intensity = 15, shine = true }: Card3DProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), springConfig);

  const glowX = useTransform(x, [0, 1], ['0%', '100%']);
  const glowY = useTransform(y, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={
        prefersReducedMotion
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
    >
      {/* Glow effect that follows mouse */}
      {shine && !prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(15,168,158,0.15) 0%, transparent 50%)`,
          }}
        />
      )}

      {/* Content with 3D transform */}
      <div
        style={
          prefersReducedMotion
            ? {}
            : {
                transform: 'translateZ(20px)',
                transformStyle: 'preserve-3d',
              }
        }
      >
        {children}
      </div>

      {/* Shine overlay */}
      {shine && !prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
            backgroundPosition: `${glowX} ${glowY}`,
            backgroundSize: '200% 200%',
          }}
        />
      )}
    </motion.div>
  );
}

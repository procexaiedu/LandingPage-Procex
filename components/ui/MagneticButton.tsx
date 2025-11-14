'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef, MouseEvent } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  magnetStrength?: number;
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  magnetStrength = 0.3,
}: MagneticButtonProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-100, 100], [10, -10]);
  const rotateY = useTransform(smoothX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * magnetStrength;
    const distanceY = (e.clientY - centerY) * magnetStrength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? {}
          : {
              x: smoothX,
              y: smoothY,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
    >
      <motion.div
        style={{
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
}

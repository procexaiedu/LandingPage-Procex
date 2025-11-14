'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade' | 'slide' | 'scale' | 'blur' | 'rotate';
  delay?: number;
}

export function ScrollReveal({
  children,
  className = '',
  variant = 'fade',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.5'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], [10, 0]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);
  const scaleSpring = useSpring(scale, springConfig);
  const rotateSpring = useSpring(rotate, springConfig);

  const getVariantStyle = () => {
    switch (variant) {
      case 'slide':
        return { opacity, y: ySpring };
      case 'scale':
        return { opacity, scale: scaleSpring };
      case 'blur':
        return { opacity, filter: useTransform(blur, (v) => `blur(${v}px)`) };
      case 'rotate':
        return { opacity, y: ySpring, rotate: rotateSpring };
      default:
        return { opacity };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={getVariantStyle()}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ScrollProgressBarProps {
  className?: string;
}

export function ScrollProgressBar({ className = '' }: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-cta origin-left z-50 ${className}`}
      style={{ scaleX }}
    />
  );
}

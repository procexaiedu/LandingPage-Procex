'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function FloatingOrbs() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 30, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  const orbs = [
    { size: 300, color: 'rgba(15,168,158,0.15)', duration: 25, delay: 0 },
    { size: 250, color: 'rgba(255,87,51,0.12)', duration: 20, delay: 2 },
    { size: 200, color: 'rgba(146,217,65,0.1)', duration: 22, delay: 4 },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => {
        const offsetX = useTransform(smoothMouseX, [0, 1000], [0, (i + 1) * 15]);
        const offsetY = useTransform(smoothMouseY, [0, 1000], [0, (i + 1) * 15]);

        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              left: '50%',
              top: '50%',
              marginLeft: -orb.size / 2,
              marginTop: -orb.size / 2,
              x: offsetX,
              y: offsetY,
            }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: [0, 100, -100, 0],
                    y: [0, -80, 80, 0],
                    scale: [1, 1.2, 0.9, 1],
                  }
            }
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
            }}
          />
        );
      })}
    </div>
  );
}

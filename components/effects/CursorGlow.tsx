'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function CursorGlow() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (prefersReducedMotion || !isVisible) return null;

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-full h-full rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(15,168,158,0.4) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Secondary accent glow */}
      <motion.div
        className="fixed top-0 left-0 w-[250px] h-[250px] pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-full h-full rounded-full opacity-15 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,87,51,0.35) 0%, transparent 70%)',
          }}
        />
      </motion.div>
    </>
  );
}

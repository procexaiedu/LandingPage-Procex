'use client';

import { ComponentPropsWithoutRef, MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

interface TiltCardProps extends Omit<MotionDivProps, 'children'> {
  children?: ReactNode;
  intensity?: number;
  glowColor?: string;
}

export function TiltCard({
  children,
  className,
  intensity = 12,
  glowColor = 'rgba(15, 168, 158, 0.25)',
  ...props
}: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * intensity;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * intensity;
    rotateY.set(x);
    rotateX.set(-y);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        className={cn(
          'relative group rounded-2xl transition-shadow duration-300 will-change-transform',
          className
        )}
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        {...props}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at top, ${glowColor}, transparent 60%)` }}
        />
        {children}
      </motion.div>
    </div>
  );
}


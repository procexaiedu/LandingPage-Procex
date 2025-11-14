'use client';

import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { Variants, motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';

const baseFadeUp: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

interface MotionFadeUpProps extends MotionDivProps {
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function MotionFadeUp({
  children,
  className,
  delay = 0,
  duration = 0.65,
  once = true,
  ...props
}: PropsWithChildren<MotionFadeUpProps>) {
  const prefersReduced = usePrefersReducedMotion();

  const variants: Variants = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : baseFadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.6 }}
      transition={{ delay: delay / 1000, duration }}
      variants={variants}
      className={cn('will-change-transform', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerListProps extends MotionDivProps {
  delayChildren?: number;
  once?: boolean;
}

export function MotionStaggerList({
  children,
  className,
  delayChildren = 0,
  once = true,
  ...props
}: PropsWithChildren<MotionStaggerListProps>) {
  const prefersReduced = usePrefersReducedMotion();

  const variants: Variants = prefersReduced
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: delayChildren / 1000 } },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}


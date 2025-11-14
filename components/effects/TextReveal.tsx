'use client';

import { motion, type Variants } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';

type TextRevealTag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface TextRevealProps {
  children: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  as?: TextRevealTag;
}

export function TextReveal({
  children,
  className = '',
  wordClassName = '',
  delay = 0,
  as = 'span',
}: TextRevealProps) {
  const words = children.trim().split(/\s+/).filter(Boolean);
  const Component = as;

  return (
    <div className={className}>
      {Component === 'span' && (
        <span className="inline-flex flex-wrap justify-center">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={cn('inline-block mr-[0.3em] text-reveal-word', wordClassName)}
              style={{ animationDelay: `${delay / 1000 + index * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </span>
      )}
      {Component === 'h1' && (
        <h1 className="inline-flex flex-wrap justify-center">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={cn('inline-block mr-[0.3em] text-reveal-word', wordClassName)}
              style={{ animationDelay: `${delay / 1000 + index * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
      )}
      {Component === 'h2' && (
        <h2 className="inline-flex flex-wrap justify-center">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={cn('inline-block mr-[0.3em] text-reveal-word', wordClassName)}
              style={{ animationDelay: `${delay / 1000 + index * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </h2>
      )}
      {Component === 'h3' && (
        <h3 className="inline-flex flex-wrap justify-center">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={cn('inline-block mr-[0.3em] text-reveal-word', wordClassName)}
              style={{ animationDelay: `${delay / 1000 + index * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </h3>
      )}
      {Component === 'p' && (
        <p className="inline-flex flex-wrap justify-center">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={cn('inline-block mr-[0.3em] text-reveal-word', wordClassName)}
              style={{ animationDelay: `${delay / 1000 + index * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

interface LetterRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function LetterReveal({ children, className = '', delay = 0 }: LetterRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const letters = children.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay / 1000,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 200,
      },
    },
  } as Variants;

  return (
    <motion.span
      className={className}
      variants={prefersReducedMotion ? undefined : container}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={prefersReducedMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : child}
          className="inline-block"
          style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

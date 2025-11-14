'use client';

import React from 'react';

interface GridPatternProps {
  className?: string;
  variant?: 'blueprint' | 'dots' | 'grid' | 'mesh';
  opacity?: number;
  animated?: boolean;
  color?: 'primary' | 'accent' | 'secondary' | 'neutral';
}

export const GridPattern: React.FC<GridPatternProps> = ({
  className = '',
  variant = 'blueprint',
  opacity = 0.15,
  animated = false,
  color = 'primary',
}) => {
  const colorMap = {
    primary: 'hsl(var(--primary-500))',
    accent: 'hsl(var(--accent-500))',
    secondary: 'hsl(var(--secondary-accent-500))',
    neutral: 'hsl(var(--neutral-300))',
  };

  const colorValue = colorMap[color];

  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className} ${
        animated ? 'animate-grid-flow' : ''
      }`}
      style={{
        opacity,
        pointerEvents: 'none',
      }}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 800"
    >
      <defs>
        <pattern
          id={`grid-${color}`}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          {variant === 'blueprint' && (
            <>
              <line
                x1="0"
                y1="0"
                x2="40"
                y2="0"
                stroke={colorValue}
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke={colorValue}
                strokeWidth="0.5"
              />
              <circle cx="0" cy="0" r="1.5" fill={colorValue} />
            </>
          )}
          {variant === 'dots' && (
            <circle cx="20" cy="20" r="1" fill={colorValue} />
          )}
          {variant === 'grid' && (
            <>
              <line
                x1="0"
                y1="0"
                x2="40"
                y2="0"
                stroke={colorValue}
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke={colorValue}
                strokeWidth="1"
              />
            </>
          )}
          {variant === 'mesh' && (
            <>
              <line
                x1="0"
                y1="0"
                x2="40"
                y2="40"
                stroke={colorValue}
                strokeWidth="0.5"
              />
              <line
                x1="40"
                y1="0"
                x2="0"
                y2="40"
                stroke={colorValue}
                strokeWidth="0.5"
              />
            </>
          )}
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#grid-${color})`} />
    </svg>
  );
};

export default GridPattern;

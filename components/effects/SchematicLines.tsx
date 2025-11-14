'use client';

import React from 'react';

interface SchematicLinesProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  stepCount?: number;
  color?: 'primary' | 'accent' | 'secondary';
  animated?: boolean;
}

export const SchematicLines: React.FC<SchematicLinesProps> = ({
  className = '',
  orientation = 'horizontal',
  stepCount = 5,
  color = 'primary',
  animated = true,
}) => {
  const colorMap = {
    primary: 'hsl(var(--primary-500))',
    accent: 'hsl(var(--accent-500))',
    secondary: 'hsl(var(--secondary-accent-500))',
  };

  const colorValue = colorMap[color];

  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className} ${
        animated ? 'animate-schematic-flow' : ''
      }`}
      style={{ pointerEvents: 'none' }}
      preserveAspectRatio="none"
      viewBox={
        orientation === 'horizontal' ? '0 0 1200 100' : '0 0 100 800'
      }
    >
      <defs>
        <style>
          {`
            @keyframes dashflow {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -20px; }
            }
            .schematic-line-animated {
              animation: dashflow 2s linear infinite;
            }
          `}
        </style>
      </defs>

      {orientation === 'horizontal' ? (
        <>
          {/* Main horizontal line */}
          <line
            x1="5%"
            y1="50"
            x2="95%"
            y2="50"
            stroke={colorValue}
            strokeWidth="2"
            opacity="0.3"
          />
          <line
            x1="5%"
            y1="50"
            x2="95%"
            y2="50"
            stroke={colorValue}
            strokeWidth="1.5"
            strokeDasharray="10,10"
            className={animated ? 'schematic-line-animated' : ''}
          />

          {/* Step markers */}
          {Array.from({ length: stepCount }).map((_, i) => {
            const x = 5 + ((100 - 10) / (stepCount - 1)) * i;
            return (
              <g key={i}>
                {/* Connection point */}
                <circle
                  cx={`${x}%`}
                  cy="50"
                  r="6"
                  fill="white"
                  stroke={colorValue}
                  strokeWidth="2"
                />
                {/* Subtle glow */}
                <circle
                  cx={`${x}%`}
                  cy="50"
                  r="10"
                  fill="none"
                  stroke={colorValue}
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </g>
            );
          })}
        </>
      ) : (
        <>
          {/* Main vertical line */}
          <line
            x1="50"
            y1="5%"
            x2="50"
            y2="95%"
            stroke={colorValue}
            strokeWidth="2"
            opacity="0.3"
          />
          <line
            x1="50"
            y1="5%"
            x2="50"
            y2="95%"
            stroke={colorValue}
            strokeWidth="1.5"
            strokeDasharray="10,10"
            className={animated ? 'schematic-line-animated' : ''}
          />

          {/* Step markers */}
          {Array.from({ length: stepCount }).map((_, i) => {
            const y = 5 + ((100 - 10) / (stepCount - 1)) * i;
            return (
              <g key={i}>
                <circle
                  cx="50"
                  cy={`${y}%`}
                  r="6"
                  fill="white"
                  stroke={colorValue}
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy={`${y}%`}
                  r="10"
                  fill="none"
                  stroke={colorValue}
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </g>
            );
          })}
        </>
      )}
    </svg>
  );
};

export default SchematicLines;

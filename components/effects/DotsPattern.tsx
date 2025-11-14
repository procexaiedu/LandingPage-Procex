'use client';

import React, { useEffect, useRef } from 'react';

interface DotsPatternProps {
  className?: string;
  opacity?: number;
  color?: 'primary' | 'accent' | 'secondary';
  dotCount?: number;
  animated?: boolean;
}

export const DotsPattern: React.FC<DotsPatternProps> = ({
  className = '',
  opacity = 0.1,
  color = 'primary',
  dotCount = 30,
  animated = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const colorMap = {
    primary: 'rgba(15, 168, 158',
    accent: 'rgba(255, 87, 51',
    secondary: 'rgba(173, 214, 33',
  };

  const colorValue = colorMap[color];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate random dots
    const dots: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (animated) {
        // Update dots position
        dots.forEach((dot) => {
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Bounce off walls
          if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
          if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

          // Keep dots in bounds
          dot.x = Math.max(0, Math.min(canvas.width, dot.x));
          dot.y = Math.max(0, Math.min(canvas.height, dot.y));
        });
      }

      // Draw connecting lines
      ctx.strokeStyle = `${colorValue}, ${opacity})`;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < dots.length; i++) {
        const dotI = dots[i];
        if (!dotI) continue;

        for (let j = i + 1; j < dots.length; j++) {
          const dotJ = dots[j];
          if (!dotJ) continue;

          const dx = dotI.x - dotJ.x;
          const dy = dotI.y - dotJ.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const lineOpacity = (1 - distance / 200) * opacity;
            ctx.strokeStyle = `${colorValue}, ${lineOpacity})`;
            ctx.beginPath();
            ctx.moveTo(dotI.x, dotI.y);
            ctx.lineTo(dotJ.x, dotJ.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      ctx.fillStyle = `${colorValue}, ${opacity * 2})`;
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dotCount, opacity, colorValue, animated]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default DotsPattern;

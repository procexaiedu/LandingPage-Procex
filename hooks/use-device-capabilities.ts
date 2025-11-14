'use client';

import { useState, useEffect } from 'react';

interface DeviceCapabilities {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  hasGoodGPU: boolean;
  prefersReducedMotion: boolean;
  supportsWebGL: boolean;
}

export function useDeviceCapabilities(): DeviceCapabilities {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    hasGoodGPU: true,
    prefersReducedMotion: false,
    supportsWebGL: true,
  });

  useEffect(() => {
    const checkCapabilities = () => {
      // Check screen size
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Check WebGL support
      const canvas = document.createElement('canvas');
      const supportsWebGL = !!(
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      );

      // Estimate GPU capability (simplified)
      const hasGoodGPU = isDesktop && supportsWebGL;

      setCapabilities({
        isMobile,
        isTablet,
        isDesktop,
        hasGoodGPU,
        prefersReducedMotion,
        supportsWebGL,
      });
    };

    checkCapabilities();

    // Re-check on resize
    window.addEventListener('resize', checkCapabilities);
    return () => window.removeEventListener('resize', checkCapabilities);
  }, []);

  return capabilities;
}

export function shouldRender3D(capabilities: DeviceCapabilities): boolean {
  return (
    capabilities.supportsWebGL &&
    !capabilities.prefersReducedMotion &&
    (capabilities.isDesktop || capabilities.isTablet)
  );
}

export function shouldUseHeavyAnimations(capabilities: DeviceCapabilities): boolean {
  return !capabilities.prefersReducedMotion && !capabilities.isMobile;
}

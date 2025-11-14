'use client';

import { ReactNode } from 'react';
import { useDeviceCapabilities, shouldRender3D } from '@/hooks/use-device-capabilities';

interface Adaptive3DProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function Adaptive3D({ children, fallback = null }: Adaptive3DProps) {
  const capabilities = useDeviceCapabilities();
  const should3D = shouldRender3D(capabilities);

  if (!should3D) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

'use client';

import { useEffect, useRef, ReactNode, HTMLAttributes } from 'react';

interface FinisherBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  options?: Record<string, any>;
  children: ReactNode;
}

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

const defaultOptions = {
  count: 12,
  size: { min: 1200, max: 1600, pulse: 0 },
  speed: { x: { min: 0.1, max: 0.5 }, y: { min: 0.1, max: 0.5 } },
  colors: {
    background: '#e2e9fc',
    particles: ['#f1f5fe', '#4380ed'],
  },
  blending: 'overlay',
  opacity: { center: 0.4, edge: 0.05 },
  skew: 2,
  shapes: ['c'],
};

export function FinisherBackground({ children, style, ...props }: FinisherBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://finisher.co/lab/header/assets/finisher-header.es5.min.js';
    script.async = true;

    script.onload = () => {
      if (window.FinisherHeader && containerRef.current) {
        new window.FinisherHeader({ ...defaultOptions });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%', ...style }}
      className="finisher-header relative"
      {...props}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}


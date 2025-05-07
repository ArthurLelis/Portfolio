'use client';

import { useContext } from 'react';

import { ActiveSectionContext } from '@/context/ActiveSectionContext';

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }

  return context;
}

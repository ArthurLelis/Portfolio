'use client'

import type { Links } from '@/data/Links';
import {
  createContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';

export type SectionName = (typeof Links)[number]['name'];

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: Dispatch<SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: Dispatch<SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType>({} as ActiveSectionContextType)

export function ActiveSectionProvider({ children }: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<SectionName>('main')
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, setTimeOfLastClick, timeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}


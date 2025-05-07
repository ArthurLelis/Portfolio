'use client';

import { motion } from 'framer-motion';

import { Links } from '@/data/Links';
import { cn } from '@/utils/cn';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <header className="relative z-40">
      <div className="bg-white backdrop-opacity-80 fixed left-1/2 top-0 w-full -translate-x-1/2 rounded-none border border-black/3 shadow-lg blackdrop-blur-sm sm:top-4 sm:w-auto sm:rounded-full sm:p-2">
        <nav className="py-2 sm:py-0">
          <ul className="flex flex-1 flex-wrap items-center justify-center gap-y-1 text-sm font-medium sm:flex-nowrap sm:gap-2">
            {Links.map((link, index) => (
              <a
                key={index}
                href={link.to}
                className={cn(
                  'relative z-20 inline-block rounded-full px-4 py-2 transition-all hover:text-primary',
                  activeSection === link.name && 'text-primary font-bold',
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span className="text-"> {link.text} </span>

                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                  />
                )}
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useActiveSection } from '@/hooks/useActiveSection';
import { links } from '@/data/links';
import LogoAL from '@/assets/LogoAL.svg';
import { cn } from '@/utils/cn';
import { SpecialText } from '../components/SpecialText';

export function Header() {
  const {
    activeSection,
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSection();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a
          href="https://www.arthurlelis.com.br/"
          className="hidden min-[486px]:block"
        >
          <Image src={LogoAL} alt="Logo" className="h-8 w-8 rounded-sm" />
        </a>

        <nav className="hidden min-[486px]:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.to}
                className={cn(
                  'font-bold relative z-20 transition-colors duration-300',
                  activeSection !== link.name &&
                  'text-gray-500/50 hover:bg-gradient-to-r hover:from-[#3b82f6] hover:via-[#8b5cf6] hover:to-[#3b82f6] hover:bg-clip-text hover:text-transparent'
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {activeSection === link.name ? (
                  <SpecialText>{link.text}</SpecialText>
                ) : (
                  <span>{link.text}</span>
                )}
              </a>
            ))}
          </ul>
        </nav>

        <button
          className="block min-[486px]:hidden p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X color='#000' size={24} /> : <Menu color='#000' size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-screen bg-white shadow-md px-6 py-6 flex flex-col min-w-[220px]"
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              exit={{ x: -250 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end mb-6">
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.to}
                    className={cn(
                      'text-base font-semibold transition-colors duration-300',
                      activeSection !== link.name &&
                      'text-gray-500 hover:text-black'
                    )}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setIsOpen(false);
                    }}
                  >
                    {activeSection === link.name ? (
                      <SpecialText>{link.text}</SpecialText>
                    ) : (
                      <span>{link.text}</span>
                    )}
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div
              className="flex-1 bg-black/80 h-screen"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

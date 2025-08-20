'use client';

import Image from 'next/image';

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-3">
        <div className="flex items-center gap-8">
          <a href="https://www.arthurlelis.com.br/">
            <Image src={LogoAL} alt="Logo" className="h-8 w-8 rounded-sm" />
          </a>

          <nav>
            <ul className="flex items-center gap-6 text-sm font-medium">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.to}
                  className={cn(
                    "font-bold relative z-20 transition-colors duration-300",
                    activeSection !== link.name &&
                    "text-gray-500/50 hover:bg-gradient-to-r hover:from-[#3b82f6] hover:via-[#8b5cf6] hover:to-[#3b82f6] hover:bg-clip-text hover:text-transparent"
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
        </div>

        <div className="flex items-center gap-4">

        </div>
      </div>
    </header>
  );
}

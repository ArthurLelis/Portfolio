import Image from 'next/image';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { useActiveSection } from '@/hooks/useActiveSection';
import LogoAL from '@/assets/LogoAL.svg';
import { links } from '@/data/links';
import { cn } from '@/utils/cn';

export function Footer() {
  const {
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSection();

  return (
    <footer className="flex flex-col justify-center items-center gap-6 !py-14">
      <div
        className={cn('flex justify-between',
          'flex-col md:flex-row gap-6 md:gap-0',
          'items-center md:items-start',
          'w-full md:w-3/4',
        )}
      >
        <div
          className={cn('flex flex-col gap-3',
            'items-center md:items-start',
          )}
        >
          <a
            href="https://www.arthurlelis.com.br/"
          >
            <Image src={LogoAL} alt="Logo" className="h-8 w-8 rounded-sm" />
          </a>

          <p className="text-[#fbfbfb99] text-sm text-center md:text-left">
            Inovação e performance em cada linha de código.
          </p>
        </div>

        <nav>
          <ul
            className={cn('flex flex-col gap-6',
              'items-center md:items-start',
            )}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.to}
                className={cn(
                  'text-sm font-medium relative z-20 transition-colors duration-300',
                  'text-[#fbfbfb99] hover:bg-gradient-to-r hover:from-[#3b82f6] hover:via-[#8b5cf6] hover:to-[#3b82f6] hover:bg-clip-text hover:text-transparent',
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span> {link.text} </span>
              </a>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={cn('flex items-center justify-between my-2 border-t-2 border-[#fbfbfb33] pt-6',
          'w-full md:w-3/4',
        )}
      >
        <p className="text-[#fbfbfb99]">
          © {new Date().getFullYear()} Arthur Lelis
        </p>

        <div className="flex gap-2 items-center font-medium">
          <a
            target="_blank"
            href="https://github.com/ArthurLelis"
            className="text-[#fbfbfb99] hover:text-white transition-colors"
          >
            <SiGithub />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/arthur-lelis/"
            className="text-[#fbfbfb99] hover:text-white transition-colors"
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

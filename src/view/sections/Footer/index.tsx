import { SiGithub, SiLinkedin } from 'react-icons/si';

import { useActiveSection } from '@/hooks/useActiveSection';

export function Footer() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <footer className="flex justify-center border-t-2 border-secondary p-3 mt-30">
      <div className="flex items-center justify-between w-1/2">
        <a href="#main"
          onClick={() => {
            setActiveSection('main');
            setTimeOfLastClick(Date.now());
          }}
        >
          © {new Date().getFullYear()} Arthur <span className="text-primary"> Lelis </span>
        </a>

        <div className="flex gap-2 items-center font-medium">
          <a href="https://github.com/ArthurLelis" target="_blank">
            <SiGithub />
          </a>

          <a href="https://www.linkedin.com/in/arthur-lelis/" target="_blank">
            <SiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

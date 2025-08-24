import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Tooltip } from './Tooltip';

interface StackItemProps {
  stack: {
    name: string;
    logo: React.ElementType;
  };
  stackActive: string;
  setStackActive: (name: string) => void;
}

export function StackItem({ stack, stackActive, setStackActive }: StackItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Logo = stack.logo;

  return (
    <div
      ref={ref}
      onMouseLeave={() => setStackActive('')}
      onMouseEnter={() => setStackActive(stack.name)}
      className="group flex flex-col items-center relative"
    >
      <Logo isActive={stackActive === stack.name} className="w-5 h-5" />

      <AnimatePresence>
        {stackActive === stack.name && (
          <Tooltip parentRef={ref}>
            {stack.name}
          </Tooltip>
        )}
      </AnimatePresence>
    </div>
  );
}

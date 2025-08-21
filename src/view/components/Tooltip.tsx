import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, RefObject } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  parentRef: RefObject<HTMLElement | null>;
}

export function Tooltip({ children, parentRef }: TooltipProps) {
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null
  );

  useEffect(() => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left,
      });
    }
  }, [parentRef, children]);

  if (!coords) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{ duration: 0.25 }}
      style={{
        top: coords.top,
        left: coords.left,
        transform: 'translateX(-100%)',
      }}
      className="absolute z-[999999] whitespace-nowrap px-2 py-1 rounded-md bg-[#1e1e1e] text-[#fbfbfbcc] text-sm font-semibold pointer-events-none"
    >
      {children}
    </motion.div>,
    document.body
  );
}

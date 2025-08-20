import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface SpecialTextProps {
  className?: string;
  children: React.ReactNode;
}

export function SpecialText({ className, children }: SpecialTextProps) {
  return (
    <motion.span
      className={cn(className)}
      style={{
        backgroundImage: "linear-gradient(270deg, #3b82f6, #8b5cf6, #3b82f6)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
      animate={{ backgroundPosition: ["200% 0", "0% 0"] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}

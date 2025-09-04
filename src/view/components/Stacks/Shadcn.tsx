import { cn } from '@/utils/cn';

interface ShadcnProps {
  isActive?: boolean;
  className?: string;
}

export function Shadcn({ isActive, className }: ShadcnProps) {
  const defaultColors = {
    primary: '#000',
    muted: '#444',
  };

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-8 h-8', className)}
    >
      <path
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M30 20L20 30M28 9L9 28"
        stroke={isActive ? defaultColors.primary : defaultColors.muted}
      />
    </svg>
  );
}

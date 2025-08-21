import { cn } from '@/utils/cn';

interface RadixProps {
  isActive?: boolean;
  className?: string;
}

export function Radix({ isActive, className }: RadixProps) {
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
        fill={isActive ? defaultColors.primary : defaultColors.muted}
        d="M19.68 32C15.438 32 12 28.562 12 24.32C12 20.078 15.438 16.64 19.68 16.64V32ZM19.68 8H12V15.68H19.68V8ZM24.48 15.68C26.6 15.68 28.32 13.96 28.32 11.84C28.32 9.72 26.6 8 24.48 8C22.36 8 20.64 9.72 20.64 11.84C20.64 13.96 22.36 15.68 24.48 15.68Z"
      />
    </svg>
  );
}

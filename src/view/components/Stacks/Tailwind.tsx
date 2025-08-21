import { cn } from '@/utils/cn';

interface TailwindProps {
  isActive?: boolean;
  className?: string;
}

export function Tailwind({ isActive, className }: TailwindProps) {
  const defaultColors = {
    primary: '#38BDF8',
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
        d="M20 9C15.108 9 12.058 11.442 10.832 16.334C12.666 13.892 14.808 12.974 17.25 13.584C18.642 13.934 19.642 14.942 20.75 16.066C22.55 17.892 24.624 20 29.166 20C34.058 20 37.108 17.558 38.332 12.666C36.5 15.108 34.358 16.024 31.916 15.416C30.524 15.066 29.524 14.058 28.416 12.934C26.616 11.108 24.54 9 20 9ZM10.832 20C5.94202 20 2.89202 22.442 1.66602 27.334C3.50002 24.892 5.64202 23.976 8.08202 24.584C9.47402 24.934 10.474 25.942 11.582 27.066C13.382 28.892 15.458 31 20 31C24.89 31 27.94 28.558 29.166 23.666C27.332 26.108 25.19 27.024 22.75 26.416C21.358 26.066 20.358 25.058 19.25 23.934C17.45 22.108 15.374 20 10.832 20Z"
      />
    </svg>
  );
}

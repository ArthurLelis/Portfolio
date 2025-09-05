import { useId } from 'react';

import { cn } from '@/utils/cn';

interface NextProps {
  isActive?: boolean;
  className?: string;
}

export function Next({ isActive, className }: NextProps) {
  const defaultColors = {
    primary: '#000',
    secondary: '#FFF',
    muted: '#444',
  };

  const id1 = useId();
  const id2 = useId();
  const id3 = useId();

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-8 h-8', className)}
    >
      <g clipPath={`url(#${id1})`}>
        <path
          fill={isActive ? defaultColors.primary : defaultColors.muted}
          d="M20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40Z"
        />

        <path
          fill={`url(#paint0_linear_${id2})`}
          d="M33.224 35.004L15.364 12H12V27.994H14.692V15.418L31.11 36.632C31.852 36.136 32.558 35.592 33.224 35.004Z"
        />

        <path
          fill={`url(#paint1_linear_${id3})`}
          d="M28.2222 12H25.5562V28H28.2222V12Z"
        />
      </g>

      <defs>
        <linearGradient id={`paint0_linear_${id2}`} x1="14.0369" y1="12" x2="34.3529" y2="33.6632" gradientUnits="userSpaceOnUse">
          <stop stopColor={isActive ? defaultColors.secondary : defaultColors.muted} />
          <stop offset="1" stopColor={isActive ? defaultColors.secondary : defaultColors.muted} stopOpacity="0" />
        </linearGradient>

        <linearGradient id={`paint1_linear_${id3}`} x1="26.8876" y1="12" x2="27.0026" y2="27.9992" gradientUnits="userSpaceOnUse">
          <stop stopColor={isActive ? defaultColors.secondary : defaultColors.muted} />
          <stop offset="1" stopColor={isActive ? defaultColors.secondary : defaultColors.muted} stopOpacity="0" />
        </linearGradient>

        <clipPath id={id1}>
          <rect width="40" height="40" fill={isActive ? defaultColors.secondary : defaultColors.muted} />
        </clipPath>
      </defs>
    </svg>
  );
}

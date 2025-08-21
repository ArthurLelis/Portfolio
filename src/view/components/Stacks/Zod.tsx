import { cn } from '@/utils/cn';

interface ZodProps {
  isActive?: boolean;
  className?: string;
}

export function Zod({ isActive, className }: ZodProps) {
  const defaultColors = {
    primary: '#142641',
    secondary: '#274D82',
    tertiary: '#3068B7',
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
        d="M30 7H12L6 13L20.674 30L36 13L30 7Z"
      />

      <path
        fill={isActive ? defaultColors.secondary : defaultColors.muted}
        d="M16.2739 21.7358L33.8039 11.6158L33.4519 11.2358L35.2739 13.1378L28.0759 21.1998H23.1339V21.7358H16.2739Z"
      />

      <path
        fill={isActive ? defaultColors.secondary : defaultColors.muted}
        d="M24.22 25.5181H17.624L20.802 29.3461L24.22 25.5181Z"
      />

      <path
        fill={isActive ? defaultColors.secondary : defaultColors.muted}
        d="M12.5379 19.3919L27.0799 10.9959L26.8119 10.5299L30.6539 8.31185L30.1599 7.79785H22.9139L23.6919 7.80385L9.64795 15.9119L12.5379 19.3919Z"
      />

      <path
        fill={isActive ? defaultColors.secondary : defaultColors.muted}
        d="M7.38775 13.1919L16.7297 7.79785H12.7057L7.34375 13.1379L7.38775 13.1919Z"
      />

      <path
        fill={isActive ? defaultColors.tertiary : defaultColors.muted}
        d="M30.8419 6.19385H12.0399L5.17188 13.0278L20.7659 31.8078L37.4479 13.0918L30.8419 6.19385ZM30.1539 7.80185L35.2579 13.1298L20.8099 29.3398L7.34987 13.1298L12.7039 7.80185H30.1539Z"
      />

    </svg>
  );
}

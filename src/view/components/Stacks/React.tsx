import { cn } from '@/utils/cn';

interface ReactProps {
  isActive?: boolean;
  className?: string;
}

export function React({ isActive, className }: ReactProps) {
  const defaultColors = {
    primary: '#57C4DC',
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
        d="M20.0003 23.3981C21.8483 23.3981 23.3463 21.9001 23.3463 20.0521C23.3463 18.2041 21.8483 16.7061 20.0003 16.7061C18.1523 16.7061 16.6543 18.2041 16.6543 20.0521C16.6543 21.9001 18.1523 23.3981 20.0003 23.3981Z"
      />

      <path
        strokeMiterlimit="10"
        strokeWidth="0.836549"
        stroke={isActive ? defaultColors.primary : defaultColors.muted}
        d="M20.0001 27.58C29.2421 27.58 36.7321 24.21 36.7321 20.052C36.7321 15.892 29.2421 12.522 20.0001 12.522C10.7601 12.522 3.26807 15.892 3.26807 20.052C3.26807 24.21 10.7601 27.58 20.0001 27.58Z"
      />

      <path
        strokeMiterlimit="10"
        strokeWidth="0.836549"
        stroke={isActive ? defaultColors.primary : defaultColors.muted}
        d="M13.4783 23.8164C18.1003 31.8184 24.7643 36.6204 28.3663 34.5424C31.9663 32.4624 31.1403 24.2884 26.5203 16.2864C21.9003 8.2844 15.2343 3.4824 11.6343 5.5604C8.03229 7.6404 8.85829 15.8144 13.4783 23.8164Z"
      />

      <path
        strokeMiterlimit="10"
        strokeWidth="0.836549"
        stroke={isActive ? defaultColors.primary : defaultColors.muted}
        d="M13.4783 16.2864C8.85829 24.2904 8.03229 32.4624 11.6343 34.5424C15.2343 36.6204 21.9003 31.8184 26.5203 23.8164C31.1403 15.8124 31.9663 7.6404 28.3663 5.5604C24.7643 3.4824 18.1003 8.2844 13.4783 16.2864Z"
      />
    </svg>
  );
}

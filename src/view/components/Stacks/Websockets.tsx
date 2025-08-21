import { cn } from '@/utils/cn';

interface WebsocketsProps {
  isActive?: boolean;
  className?: string;
}

export function Websockets({ isActive, className }: WebsocketsProps) {
  const defaultColors = {
    primary: '#ffffffb3',
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
        d="M28.0498 26.07H32.0198V16.538L27.5478 12.064L24.7398 14.872L28.0498 18.182V26.07ZM32.0298 28.062H26.2478H18.1818L14.8718 24.75L16.2758 23.348L19.0098 26.082H24.6338L19.0938 20.528L20.5078 19.114L26.0498 24.656V19.03L23.3258 16.308L24.7178 14.914L17.8358 8H11.0478H4.00781L7.96781 11.96V11.97H7.98781H16.1798L19.0818 14.872L14.8398 19.114L11.9378 16.214V13.96H7.96781V17.858L14.8398 24.73L12.0418 27.526L16.5158 32H23.3038H35.9898L32.0298 28.062Z"
      />
    </svg>
  );
}

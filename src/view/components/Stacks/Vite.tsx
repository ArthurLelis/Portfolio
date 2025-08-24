import { useId } from 'react';

import { cn } from '@/utils/cn';

interface ViteProps {
  isActive?: boolean;
  className?: string;
}

export function Vite({ isActive, className }: ViteProps) {
  const defaultColors = {
    primary: '#41D1FF',
    secondary: '#BD34FE',
    tertiary: '#FFEA83',
    quaternary: '#FFA800',
    muted: '#444',
  };

  const id1 = useId();
  const id2 = useId();

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-8 h-8', className)}
    >
      <path
        fill={`url(#${id1})`}
        d="M35.4201 11.1259L21.5541 35.9199C21.2681 36.4319 20.5321 36.4339 20.2421 35.9259L6.10012 11.1279C5.78412 10.5719 6.25812 9.89986 6.88812 10.0119L20.7681 12.4939C20.8581 12.5099 20.9481 12.5099 21.0361 12.4939L34.6281 10.0159C35.2541 9.90186 35.7321 10.5679 35.4201 11.1259Z"
      />

      <path
        fill={`url(#${id2})`}
        d="M27.1961 6.00824L16.9361 8.01824C16.7661 8.05024 16.6421 8.19424 16.6321 8.36624L16.0001 19.0262C15.9861 19.2782 16.2161 19.4722 16.4621 19.4162L19.3181 18.7562C19.5861 18.6942 19.8281 18.9302 19.7721 19.1982L18.9241 23.3542C18.8661 23.6342 19.1281 23.8742 19.4021 23.7902L21.1661 23.2542C21.4401 23.1722 21.7041 23.4122 21.6461 23.6922L20.2961 30.2202C20.2121 30.6282 20.7561 30.8522 20.9821 30.5022L21.1341 30.2682L29.4941 13.5802C29.6341 13.3022 29.3921 12.9822 29.0861 13.0422L26.1461 13.6102C25.8701 13.6622 25.6341 13.4062 25.7121 13.1362L27.6321 6.48224C27.7101 6.21024 27.4741 5.95424 27.1961 6.00824Z"
      />

      <defs>
        <linearGradient id={id1} x1="9.86704" y1="9.99951" x2="28.5206" y2="38.3638" gradientUnits="userSpaceOnUse">
          <stop stopColor={isActive ? defaultColors.primary : defaultColors.muted} />
          <stop offset="1" stopColor={isActive ? defaultColors.secondary : defaultColors.muted} />
        </linearGradient>

        <linearGradient id={id2} x1="21.7515" y1="6.00098" x2="28.1733" y2="29.4744" gradientUnits="userSpaceOnUse">
          <stop stopColor={isActive ? defaultColors.tertiary : defaultColors.muted} />
          <stop offset="1" stopColor={isActive ? defaultColors.quaternary : defaultColors.muted} />
        </linearGradient>
      </defs>
    </svg>
  );
}

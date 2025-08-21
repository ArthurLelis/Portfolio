import { cn } from '@/utils/cn';

interface JWTTokensProps {
  isActive?: boolean;
  className?: string;
}

export function JWTTokens({ isActive, className }: JWTTokensProps) {
  const defaultColors = {
    primary: '#EBEEEF',
    secondary: '#00F2E6',
    tertiary: '#00B9F1',
    quaternary: '#D63AFF',
    quinary: '#FB015B',
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
        d="M22.0019 13.49L21.9739 6H17.7979L17.8259 13.49L19.9139 16.358L22.0019 13.49Z"
      />

      <path
        fill={isActive ? defaultColors.primary : defaultColors.muted}
        d="M17.8262 26.3241V33.8401H22.0022V26.3241L19.9142 23.4561L17.8262 26.3241Z"
      />

      <path
        fill={isActive ? defaultColors.secondary : defaultColors.muted}
        d="M22.002 26.3241L26.402 32.3941L29.77 29.9441L25.37 23.8741L22.002 22.7881V26.3241Z"
      />

      <path
        fill={isActive ? defaultColors.secondary : defaultColors.muted}
        d="M17.8282 13.4899L13.4002 7.41992L10.0322 9.86992L14.4302 15.9399L17.8282 17.0259V13.4899Z"
      />

      <path
        fill={isActive ? defaultColors.tertiary : defaultColors.muted}
        d="M14.43 15.9379L7.30197 13.6279L6.02197 17.5819L13.15 19.9199L16.518 18.8059L14.43 15.9379Z"
      />

      <path
        fill={isActive ? defaultColors.tertiary : defaultColors.muted}
        d="M23.2842 21.0059L25.3722 23.8739L32.5002 26.1839L33.7802 22.2299L26.6522 19.9199L23.2842 21.0059Z"
      />

      <path
        fill={isActive ? defaultColors.quaternary : defaultColors.muted}
        d="M26.6522 19.9199L33.7802 17.5819L32.5002 13.6279L25.3722 15.9379L23.2842 18.8059L26.6522 19.9199Z"
      />

      <path
        fill={isActive ? defaultColors.quaternary : defaultColors.muted}
        d="M13.15 19.9199L6.02197 22.2299L7.30197 26.1839L14.43 23.8739L16.518 21.0059L13.15 19.9199Z"
      />

      <path
        fill={isActive ? defaultColors.quinary : defaultColors.muted}
        d="M14.4302 23.8741L10.0322 29.9441L13.4002 32.3941L17.8282 26.3241V22.7881L14.4302 23.8741Z"
      />

      <path
        fill={isActive ? defaultColors.quinary : defaultColors.muted}
        d="M25.37 15.9399L29.77 9.86992L26.402 7.41992L22.002 13.4899V17.0259L25.37 15.9399Z"
      />

    </svg>
  );
}

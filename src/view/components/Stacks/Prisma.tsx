import { cn } from '@/utils/cn';

interface PrismaProps {
  isActive?: boolean;
  className?: string;
}

export function Prisma({ isActive, className }: PrismaProps) {
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
        d="M8.31193 26.3635C8.01793 25.8975 8.01193 25.3055 8.30193 24.8355L19.1539 7.13146C19.7579 6.14746 21.2159 6.23346 21.6979 7.28146L31.6139 28.7895C31.9819 29.5875 31.5579 30.5255 30.7159 30.7775L15.2939 35.4055C14.6719 35.5915 14.0039 35.3415 13.6579 34.7955L8.31193 26.3635ZM16.5899 31.3135C16.5079 31.7135 16.8839 32.0575 17.2759 31.9395L27.9319 28.7595C28.2419 28.6655 28.4019 28.3215 28.2739 28.0235L21.4359 12.1995C21.2239 11.7115 20.5099 11.7875 20.4059 12.3075L16.5899 31.3135Z"
      />
    </svg>
  );
}

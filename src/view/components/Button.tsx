import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isPending?: boolean;
}

export function Button({ className, disabled, isPending, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isPending}
      className={cn(
        "flex items-center justify-center gap-2 cursor-pointer px-3 py-4 h-12 rounded-lg bg-primary border-2 border-primary text-white hover:bg-primary-dark disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all text-sm sm:text-base",
        className,
      )}
    >
      {!isPending && children}
      {isPending && <Spinner className="w-6 h-6" />}
    </button>
  );
}

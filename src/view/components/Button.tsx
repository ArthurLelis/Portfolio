import { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

import { cn } from '@/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isPending?: boolean;
  variant?: 'primary' | 'secondary' | 'simple' | 'inverse';
}

const button = tv({
  base: 'flex items-center justify-center gap-2 cursor-pointer p-2 h-12 rounded-xl border-2 transition-all text-sm 2xl:text-base disabled:cursor-not-allowed font-semibold',
  variants: {
    variant: {
      primary:
        'bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#3b82f6] text-white border-transparent hover:opacity-90 disabled:opacity-50',
      secondary:
        'bg-gray-700 text-white border-gray-700 hover:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-500',
      simple:
        'bg-black text-white border-white hover:bg-neutral-900 disabled:bg-neutral-800 disabled:text-neutral-400',
      inverse:
        'bg-white text-black border-black hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export function Button({
  className,
  disabled,
  isPending,
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isPending}
      className={cn(button({ variant }), className)}
    >
      {!isPending && children}
      {isPending && <Spinner className="w-6 h-6" />}
    </button>
  );
}

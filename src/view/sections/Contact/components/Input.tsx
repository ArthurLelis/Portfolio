import { ComponentProps, forwardRef } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

import { cn } from '@/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, className, placeholder, error, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div>
        <input
          ref={ref}
          {...props}
          name={name}
          id={inputId}
          placeholder={placeholder}
          className={cn(
            'w-full h-[48px] rounded-lg p-2 outline-none',
            'bg-[#0f0f0f] border border-white/20 text-white',
            'placeholder-[#fbfbfbcc]',
            'focus:border-white',
            error && '!border-red-400',
            className,
          )}
        />

        {error && (
          <div className="flex gap-2 items-center mt-3 text-red-500">
            <RxCrossCircled />

            <span className="text-xs">
              {error}
            </span>
          </div>
        )}
      </div>
    );
  });

Input.displayName = 'Input';

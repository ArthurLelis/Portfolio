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
      <div className="relative w-1/2">
        <input
          ref={ref}
          {...props}
          name={name}
          id={inputId}
          placeholder=" "
          className={cn(
            'w-full bg-white outline-none rounded-lg border border-gray-500 px-2 pt-4 h-[44px] text-gray-800 focus:border-gray-800 placeholder-shown:pt-0 peer',
            error && '!border-red-900',
            className,
          )}
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs left-[8px] top-[4px] pointer-events-none text-gray-700 transition-all z-10 peer-placeholder-shown:text-base peer-placeholder-shown:top-[12px]"
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <RxCrossCircled />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  });

Input.displayName = 'Input';

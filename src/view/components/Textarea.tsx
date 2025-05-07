import { ComponentProps, forwardRef } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

import { cn } from '@/utils/cn';

interface TextareaProps extends ComponentProps<'textarea'> {
  name: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, name, className, placeholder, error, ...props }, ref) => {
    const textareaId = id ?? name;

    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          {...props}
          name={name}
          id={textareaId}
          placeholder=" "
          className={cn(
            'w-full bg-white outline-none rounded-lg border border-gray-500 px-2 pt-4 min-h-[80px] text-gray-800 focus:border-gray-800 peer',
            error && '!border-red-900',
            className,
          )}
        />

        <label
          htmlFor={textareaId}
          className="absolute text-xs left-[8px] top-[4px] pointer-events-none text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-[19px]"
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

Textarea.displayName = 'Textarea';

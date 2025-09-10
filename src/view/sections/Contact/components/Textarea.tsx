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
      <div className="w-full">
        <textarea
          ref={ref}
          {...props}
          name={name}
          id={textareaId}
          placeholder={placeholder}
          className={cn(
            'w-full min-h-[120px] rounded-lg p-2 outline-none',
            'bg-[#0f0f0f] border border-white/20 text-white resize-none',
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

Textarea.displayName = 'Textarea';

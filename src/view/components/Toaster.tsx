'use client';

import { Toaster as Toast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Toast>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Toast
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

import React, { HTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from './tools/cn';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const Card = forwardRef<HTMLDivElement, IProps>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      ref={ref}
      {...props}
      className={cn('flex flex-col gap-4 rounded-2xl bg-card p-6', className)}
    />
  );
});

Card.displayName = 'Card';

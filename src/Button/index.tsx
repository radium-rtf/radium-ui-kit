import React, {HTMLAttributes, forwardRef} from 'react'
import {Slot} from '@radix-ui/react-slot'
import {useStyles} from './styles'
import cn from 'classnames'

type ButtonProps = {
  variant?: 'default' | 'destructive' | 'outline'
  size?: 'default' | 'wide'
  asChild?: boolean
  className?: string // Добавляем тип для className
} & HTMLAttributes<HTMLButtonElement>

//RADIUMFRONT-5 проверить цвета

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const c = useStyles()
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(
          c.buttonBase,
          {
            [c.variantDefault]: variant === 'default',
            [c.variantDestructive]: variant === 'destructive',
            [c.variantOutline]: variant === 'outline',
            [c.sizeDefault]: size === 'default',
            [c.sizeWide]: size === 'wide',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export {Button}

import {HTMLAttributes, forwardRef} from 'react'
import {Slot} from '@radix-ui/react-slot'
import React from 'react'
import cn from 'classnames'
import {useStyles} from './styles'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const Card = forwardRef<HTMLDivElement, IProps>(({className, asChild, ...props}, ref) => {
  const Comp = asChild ? Slot : 'section'
  const c = useStyles()

  return <Comp ref={ref} {...props} className={cn(c.card, className)} />
})

Card.displayName = 'Card'

'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {Check} from 'lucide-react' // RADIUMFRONT-5 ВЫПИЛИТЬ
import cn from 'classnames'
import {useCheckboxStyles} from './styles'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({className, ...props}, ref) => {
  const classes = useCheckboxStyles()

  return (
    <CheckboxPrimitive.Root ref={ref} className={cn(classes.root, className)} {...props}>
      <CheckboxPrimitive.Indicator className={classes.indicator}>
        <Check className={classes.checkIcon} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {Checkbox}

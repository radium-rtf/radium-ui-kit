'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import cn from 'classnames'
import {useAvatarStyles} from './styles'

const Avatar = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(
  (props, ref) => {
    const classes = useAvatarStyles()
    return <AvatarPrimitive.Root {...props} ref={ref} className={cn(classes.root, props.className)} />
  }
)
Avatar.displayName = 'Avatar'

const AvatarImage = React.forwardRef<HTMLImageElement, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(
  (props, ref) => {
    const classes = useAvatarStyles()
    return <AvatarPrimitive.Image {...props} ref={ref} className={cn(classes.image, props.className)} />
  }
)
AvatarImage.displayName = 'AvatarImage'

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  const classes = useAvatarStyles()
  return <AvatarPrimitive.Fallback {...props} ref={ref} className={cn(classes.fallback, props.className)} />
})
AvatarFallback.displayName = 'AvatarFallback'

export {Avatar, AvatarImage, AvatarFallback}

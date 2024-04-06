import React, {forwardRef} from 'react'
import cn from 'classnames'
import {useStyles} from './styles'

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
  const c = useStyles()
  return <div ref={ref} className={cn(c.card, className)} {...props} />
})
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
  const c = useStyles()
  return <div ref={ref} className={cn(c.cardHeader, className)} {...props} />
})
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({className, ...props}, ref) => {
    const c = useStyles()
    return <h3 ref={ref} className={cn(c.cardTitle, className)} {...props} />
  }
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({className, ...props}, ref) => {
    const c = useStyles()
    return <p ref={ref} className={cn(c.cardDescription, className)} {...props} />
  }
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
  const c = useStyles()
  return <div ref={ref} className={cn(c.cardContent, className)} {...props} />
})
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
  const c = useStyles()
  return <div ref={ref} className={cn(c.cardFooter, className)} {...props} />
})
CardFooter.displayName = 'CardFooter'

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}

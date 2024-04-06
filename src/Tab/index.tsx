import React, {ButtonHTMLAttributes, FC} from 'react'
import {Icon} from '../Icon'
import cn from 'classnames'

//RADIUMFRONT-5 Fix styles

export interface ITab extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon
  isSelected?: boolean
}

export const Tab: FC<ITab> = ({icon, children, className, isSelected, ...props}) => {
  return (
    <button
      type='button'
      className={cn(
        [
          'relative',
          'flex',
          'items-center',
          'gap-4',
          'px-3',
          'py-2',
          'transition',
          'rounded-lg',
          '-outline-offset-[1px]',
          'after:block',
          'after:h-0.5',
          'after:bg-accent-primary-200',
          'after:content-[""]',
          'after:absolute',
          'after:-bottom-[2px]',
          'after:left-1/2',
          'after:-translate-x-1/2',
          'after:w-0',
          'after:transition-all',
          'after:rounded-full',
        ],
        isSelected && 'after:w-6/12',
        className
      )}
      {...props}
    >
      <Icon type={icon} className={cn([isSelected && 'text-primary underline'])} />
      <span className={cn('text-base text-text-primary', isSelected && 'text-primary')}>{children}</span>
    </button>
  )
}

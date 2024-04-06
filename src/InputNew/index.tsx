'use client'
import cn from 'classnames'
import {Icon} from '../Icon'
import {useGetTextWidth} from './useGetTextWidth'
import React, {InputHTMLAttributes, forwardRef, useId} from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: Icon
  actionIcon?: Icon
  onActionClick?: () => void
  text?: string
  wrapperClassName?: string
}

//RADIUMFRONT-5 Fix styles

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({id, type, icon, text, className, actionIcon, placeholder, onActionClick, wrapperClassName, ...props}, ref) => {
    const innerId = useId()
    const textWidth = useGetTextWidth(text, '13px var(--font-nt-somic)')
    const leftPadding = (16 + (icon ? 34 : 0)) / 16 + 'rem'
    const rightPadding = (16 + (textWidth ? textWidth + 16 : 0) + (actionIcon ? 18 + 16 : 0)) / 16 + 'rem'

    const style = {
      '--left-padding': leftPadding,
      '--right-padding': rightPadding,
      '--action-right': actionIcon ? '1rem' : 0,
      '--text-right': text ? (actionIcon ? `${16 + 18 + 16}px` : '1rem') : 0,
    } as React.CSSProperties

    return (
      <div className={cn('relative h-9 w-full rounded-[0.5rem] text-[#B3B3B3]', wrapperClassName)} style={style}>
        <input
          id={id || innerId}
          placeholder={placeholder}
          type={type}
          className={cn(
            'text-normal peer absolute inset-0 flex h-9 w-full rounded-[0.5rem] border border-white/10 bg-transparent pb-0.5 pl-[var(--left-padding)] pr-[var(--right-padding)] pt-3 text-foreground ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:select-none placeholder:text-transparent hover:bg-white/5 focus-visible:bg-black/5 focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <label
          htmlFor={id || innerId}
          className='absolute left-[calc(var(--left-padding)+1px)] top-2 line-clamp-1 -translate-y-1/2 select-none text-[0.5rem] leading-tight transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:w-[calc(100%-var(--left-padding)-var(--right-padding))] peer-placeholder-shown:text-[0.8125rem] peer-focus:top-2 peer-focus:w-[calc(100%-32px)] peer-focus:text-[0.5rem]'
        >
          {placeholder}
        </label>
        {icon && <Icon type={icon} className='absolute left-4 top-1/2 -translate-y-1/2 text-inherit' />}
        {text && (
          <label
            htmlFor={id || innerId}
            className='absolute right-[var(--text-right)] top-1/2 -translate-y-1/2 select-none text-[0.625rem] text-[#B3B3B3]'
          >
            {text}
          </label>
        )}
        {actionIcon && (
          <button
            type='button'
            onClick={onActionClick}
            className='leading-0 absolute right-[var(--action-right)] top-1/2 z-10 flex -translate-y-1/2 select-none items-center justify-center rounded-[0.25rem] p-1.5 transition-colors hover:bg-white/5 focus:bg-white/5 active:bg-black/5'
          >
            <Icon type={actionIcon} className='h-3 w-3' />
          </button>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export {Input}

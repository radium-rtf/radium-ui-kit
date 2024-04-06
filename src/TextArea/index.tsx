'use client'
import cn from 'classnames'
import {TextareaHTMLAttributes, forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react'

// RADIUMFRONT-5 FIX STYLES AND REFS

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({className, onChange, ...props}, ref) => {
  const innerRef = useRef<HTMLTextAreaElement>(null)
  const [value, setValue] = useState('')

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    innerRef.current!.style.height = 'auto'
    innerRef.current!.style.height = `calc(${innerRef.current!.scrollHeight}px + 0.5rem)`
  }, [value])

  return (
    <textarea
      ref={innerRef}
      onChange={(e) => {
        onChange?.(e)
        setValue(e.target.value)
      }}
      {...props}
      className={cn(
        [
          'p-4',
          'text-[0.8125rem]',
          'leading-normal',
          'rounded-[0.5rem]',
          'border',
          'border-white/10',
          'outline-none',
          'bg-transparent',
          'text-text-primary',
          'resize',
          'transition-colors',
          'max-w-full',
          'placeholder:text-text-secondary',
          'disabled:opacity-50',
          '[&:not(:disabled)]:hover:bg-white/5',
          '[&:not(:disabled)]:focus:bg-black/10',
          '[&:not(:disabled)]:focus:border-primary-default',
        ],
        className
      )}
    />
  )
})

TextArea.displayName = 'TextArea'

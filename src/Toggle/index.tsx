'use client'

import {FC, InputHTMLAttributes} from 'react'
import cn from 'classnames'
import {useStyles} from './styles'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const Toggle: FC<IProps> = ({className, ...props}) => {
  const c = useStyles()

  return (
    <label className={cn(c.root, className)}>
      <input type='checkbox' className='uikit-toggle-input-checkbox' {...props} />
      <div className={c.toggleSlider} />
    </label>
  )
}

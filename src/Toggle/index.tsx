import './styles.css';
import React, { FC, InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Toggle: FC<IProps> = ({ className, ...props }) => {
  return (
    <label className={'ui-kit-toggle-label ' + className}>
      <input type='checkbox' className='ui-kit-toggle-input' {...props} />
      <div className='ui-kit-toggle-div' />
    </label>
  );
};

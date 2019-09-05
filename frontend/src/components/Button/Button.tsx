import React from 'react';
import { ButtonProps } from './ButtonProps';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button className={`button ${className}`} {...props}>
    {children}
  </button>
);

export default Button;

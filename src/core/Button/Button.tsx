import React from 'react';
import { ButtonProps } from './ButtonProps';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({ children, onClick, className, ...props }) => (
  <button className={`button ${className}`} {...props} onClick={onClick}>
    {children}
  </button>
);

export default Button;

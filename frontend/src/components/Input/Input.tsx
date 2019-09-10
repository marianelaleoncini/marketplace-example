import './Input.scss';
import React from 'react';
import { InputProps } from './InputProps';

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input type="text" className={`input ${className}`} {...props} />
);

export default Input;

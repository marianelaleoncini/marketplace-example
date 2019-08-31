import React from 'react';
import { InputProps } from './InputProps';
import './Input.scss';

const Input: React.FC<InputProps> = ({ value, onChange, className, ...props }) => (
  <input type="text" className={`input ${className}`} value={value} onChange={onChange} {...props} />
);

export default Input;

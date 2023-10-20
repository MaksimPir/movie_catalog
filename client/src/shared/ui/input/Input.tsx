import React, { FC, InputHTMLAttributes } from 'react';
import './index.scss'

interface IInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
>  {
  value: string;
  onChange: (value: string) => void;
  inputRef?:React.LegacyRef<HTMLInputElement>
};
export const Input:FC<IInputProps> = (props) => {
    const {onChange,value,className,inputRef,...other}=props
    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className={`input ${className}`}
            {...other}
        > 
        </input>
    );
};


import React, { FC, PropsWithChildren } from 'react';
import './index.scss'
interface IButtonProps extends PropsWithChildren
{
    text:string
    nameOfClass:string
    onClick:()=>void
}
export const Button:FC<IButtonProps> = ({nameOfClass,onClick,text}) => {
    return (
        <button className={`button ${nameOfClass}`} onClick={onClick}>
            {text}
        </button>
    );
};


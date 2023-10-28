import { InputHTMLAttributes } from "react";

export interface IInputProps extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
    > 
{
    value: string;
    onChange: (value: string) => void;
    inputRef?:React.LegacyRef<HTMLInputElement>
};
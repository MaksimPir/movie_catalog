import { InputHTMLAttributes } from "react";

export interface IInputProps extends Omit<
InputHTMLAttributes<HTMLInputElement>,
"onChange" | "value"
> {
    onChange: (value: string) => void
    value:string,
    rules:RegExp,
    text:string,
    inputRef?:React.LegacyRef<HTMLInputElement>
}
 
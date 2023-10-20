import { FC, useEffect, useState } from 'react';
import { Input } from 'shared/ui/input/Input';
import { IInputProps } from './types';

export const InputWithRules:FC<IInputProps>=({onChange,rules,text,value, inputRef, ...others})=>{
    const [isRelative, setIsRelative]=useState(true)
    useEffect(()=>{
        if(value!=='')
        {
            const res=value.match(rules)
            setIsRelative(!!res)
        }
        else
        {
            setIsRelative(true)
        }
    },[value])
    return(
        <div>
            <Input onChange={onChange} value={value} inputRef={inputRef} {...others}/>
            {!isRelative&& <div className=''>{text}</div>}
        </div>
    )
}
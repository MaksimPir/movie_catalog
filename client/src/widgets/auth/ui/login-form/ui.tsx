import { FC, useEffect, useRef, useState } from "react";
import { login, registration } from "entities/user";
import {Button} from 'shared/ui/button'
import  './style.scss'
import { InputWithRules } from "features/inputWithRules";
import { IAuthPayload } from "entities/user/model/types";
import { useAppDispatch } from "shared/lib";

export const LoginForm:FC = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const dispatch=useAppDispatch()
    const myRef=useRef<HTMLInputElement>(null)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            if(myRef.current)
            {
                myRef.current.focus()
            }
        },1)
        return ()=>{
            clearTimeout(timer)
        }
        
    },[])
    const loginHandler=()=>{
       dispatch(login({email,password} as IAuthPayload))
    }
    const registrationHandler=()=>{
        dispatch(registration({email,password} as IAuthPayload))
    }
    return (
        <div className="loginformContainer">
            <div className='loginform'>
                <div className='loginform__main'>
                    <div>
                        <span>Email:</span>
                        <InputWithRules value={email} onChange={setEmail} 
                            inputRef={myRef}
                            rules={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/} 
                            text="Неверный формат почты"
                            type="text" 
                            placeholder="Введите email"
                        />
                    </div>
                    <div>
                        <span>Пароль:</span>
                        <InputWithRules value={password} onChange={setPassword} 
                            rules={/.{6,}/} 
                            text="Количество символов должно быть больше 5"
                            type="password" 
                            placeholder="Введите пароль"
                        />
                    </div>
                </div>
                
                <div className="loginform__footer">
                    <Button onClick={loginHandler} text="Войти" nameOfClass="input__button login"/>
                    <Button onClick={registrationHandler} text="Регистрация" nameOfClass="input__button registration"/>
                </div>
            </div>
        </div>
        
    );
};


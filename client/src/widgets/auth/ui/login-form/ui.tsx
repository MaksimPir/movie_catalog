import { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "shared/lib";
import { login, registration } from "entities/user/model";
import { Input } from "shared/ui/input/Input";
import {Button} from 'shared/ui/button/Button'
import  './index.scss'
import { InputWithRules } from "features/inputWithRules";

const LoginForm:FC = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
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
    useEffect(()=>{
        console.log(email,'EMAIL');
        
    },[email])
    const dispatch=useAppDispatch()
    const loginHandler=()=>{
       login(dispatch,email, password)
    }
    const registrationHandler=()=>{
        registration(dispatch,email,password)
    }
    return (
        <div className='loginform'>
            <div className='loginform__main'>
                <div>
                    <span>Email:</span>
                    <InputWithRules value={email} onChange={setEmail} 
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
    );
};

export default LoginForm;
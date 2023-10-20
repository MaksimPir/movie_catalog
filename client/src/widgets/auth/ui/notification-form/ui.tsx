import React,{FC, useEffect, useState} from 'react'
import './index.scss'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { clearResponse, responseSlice } from 'entities/response'
export const enum TypesNotices{
    Success='Успешно!',
    Error='Ошибка',
    Info='Информация'
}
interface INoticeFormProps{
    text:string
    type:TypesNotices
}
export const NotificationForm:FC<INoticeFormProps>=({text,type})=>{
    const dispatch=useAppDispatch()
    useEffect(()=>{
        const timer=setTimeout(()=>{
            clearResponse(dispatch)
        },3000)
        return ()=>{
            clearTimeout(timer)
        }
    })
    const click=()=>{
        clearResponse(dispatch)
    }
    if(text=='')
    {
        return <></>  
    }
    const nameClass=type===TypesNotices.Success?'success':type===TypesNotices.Error?'error':'info'
    return(
        <div className={`notice ${nameClass}`} style={{display:'block'}}>
            <div className='notice__btn'> 
                <button 
                onClick={click}
                >
                    X
                </button>
            </div>
            <div className='notice__text'>
                <div className={`text__${nameClass}`}>
                    {type}
                </div>
                <div className='text__information'>
                    {text}
                </div>
            </div>
        </div>
    )
}
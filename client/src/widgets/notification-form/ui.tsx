import {FC, useEffect} from 'react'
import './index.scss'
import { useAppDispatch } from 'shared/lib'
import { clearResponse } from 'entities/response'
import { INoticeFormProps, TypesNotices } from './types'

export const NotificationForm:FC<INoticeFormProps>=({text,type})=>{
    const dispatch=useAppDispatch()
    useEffect(()=>{
        const timer=setTimeout(()=>{
            clearResponse(dispatch)
        },3000)
        return ()=>{
            clearTimeout(timer)
        }
    },[text,type])
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
                <p className={`text__${nameClass}`}>
                    {type}
                </p>
                <p className='text__information'>
                    {text}
                </p>
            </div>
        </div>
    )
}
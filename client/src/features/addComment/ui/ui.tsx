import React, { FC, useEffect, useRef, useState } from 'react';
import './styles.scss'
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { useParams } from 'react-router-dom';
import { addComment, fetchCommentsById } from 'entities/comment/model/comments';
export const CommentInput:FC= () => {
    const ref=useRef<HTMLSpanElement>(null)
    const {idFilm}=useParams()
    const dispatch=useAppDispatch()
    const [comment, setComment]=useState('')
    const {isAuth,user}=useAppSelector(state=>state.auth)
    const clickHandler=()=>{
        if(comment.trim()!='' && idFilm && !isNaN(Number(idFilm)))
        {
            addComment(dispatch,Number(idFilm),comment,user.id!)
            setComment('')
        }
    }
    if(!isAuth)
    {
        return(
            <div>
                Пройдите авторизацию для добавления комментариев!
            </div>
        )
       
    }
    
    return (
        <div className='commentinput'>
            {/* <span className="textarea" role="textbox" contentEditable ref={ref}></span> */}
            <input className='commentinput__input' placeholder='Введите комментарий' value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <button className='commentinput__btn' onClick={clickHandler}>Отправить</button>
        </div>
    );
};

import React, { useEffect } from 'react';
import { useAppSelector,useAppDispatch } from '../../../shared/lib';
import {FilmCard, fetchFilms } from '../../../entities/film/model';
import './style.scss'

export const Catalog = () => {
    const {films,error}=useAppSelector(state=>state.film)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        fetchFilms(dispatch)
    },[])
    useEffect(()=>{
        console.log(error,'er');
        
    })
    return (
        <div className='catalog'>
            {films&& films.map((el)=>{
                return (
                    <FilmCard key={el.id} film={el}/>
                )
            })}
            {error&&<div>Что-то пошло не так</div>}
        </div>
    );
};

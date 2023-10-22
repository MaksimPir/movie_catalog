import React, { FC, useEffect, useRef, useState } from 'react';
import './style.scss'
import { ICardFilmProps } from './types';

export const FilmCard:FC<ICardFilmProps> = ({film}) => {
    const [isFocus,setIsFocus]=useState(false)
    return (
        <div className='cardfilm' 
        onMouseEnter={()=>setIsFocus(true)}
        onMouseLeave={()=>setIsFocus(false)}
        >
            <div className='cardfilm__image'>
                <img src={film.image}/>
                {isFocus&& 
                <div className='cardfilm__image__focus'>
                    <div className='cardfilm__desc'>{film.description}</div>
                    <h4 className='cardfilm__rate'>Рейтинг {film.rate}</h4>
                </div>}
            </div>
            <h3 className='cardfilm__title'>{film.name}</h3>
        
        </div>
    );
};


import React, { FC, useEffect, useRef, useState } from 'react';
import './style.scss'
import { ICardFilmProps } from './types';
import { Navigate, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Skeleton } from 'antd';
import { ImageLazy } from 'shared/ui/image/Image';

export const FilmCard:FC<ICardFilmProps> = ({film}) => {
    const {ref, inView}=useInView({
        threshold:1,
        triggerOnce:true
    })
    const [isFocus,setIsFocus]=useState(false)
    const navigate=useNavigate()
    return (
        <div className='cardfilm' 
            onMouseEnter={()=>setIsFocus(true)}
            onMouseLeave={()=>setIsFocus(false)}
            onClick={()=>navigate(`/film/${film.id}`)}
            ref={ref}
        >
            <div className='cardfilm__image'>
               <ImageLazy src={film.image} inView={inView} />
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


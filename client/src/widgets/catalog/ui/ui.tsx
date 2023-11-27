import  { useEffect } from 'react';
import { useAppSelector,useAppDispatch } from 'shared/lib';
import {FilmCard, fetchFilms, fetchRangeFilms } from 'entities/film';
import './style.scss'
import { useInView } from 'react-intersection-observer';

export const Catalog = () => {
    const {ref, inView}=useInView({
        threshold:1
    })
    const {films,error,isEnd}=useAppSelector(state=>state.film)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        console.log('InView', inView);
       if(inView && !isEnd)
        dispatch(fetchRangeFilms({count:10,start:films[films.length-1].id}))
    },[inView])
    useEffect(()=>{
        // dispatch(fetchFilms())
        dispatch(fetchRangeFilms({count:10,start:0}))
    },[])
    return (
        <div className='catalog'>
            {films&& films.map((el,index)=>{
                if(index===films.length-1)
                {
                    return (
                        <div ref={ref} key={el.id}>
                            <FilmCard key={el.id} film={el}/>
                        </div>
                    )
                }
                return (
                    <div  key={el.id}>
                        <FilmCard key={el.id} film={el}/>
                    </div>
                )
            })}
            {error&&<div>Что-то пошло не так</div>}
        </div>
    );
};

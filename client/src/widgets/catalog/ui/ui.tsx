import  { useEffect, useState } from 'react';
import { useAppSelector,useAppDispatch } from 'shared/lib';
import {FilmCard, fetchFilms, fetchRangeFilms, filmApi } from 'entities/film';
import './style.scss'
import { useInView,  } from 'react-intersection-observer';

export const Catalog = () => {
    const {ref:refUp, inView:inViewUp, entry:entryUp}=useInView({
        threshold:1,
        triggerOnce:true
    })
    const {ref:refDown, inView:inViewDown, entry:entryDown}=useInView({
        threshold:0.1,
    })
    const [isFirst,setIsFirst]=useState(1)
    const [filmIndex,setFilmIndex]=useState(0)
    const [direction, setDirection] = useState(0)
    const [count] = useState(20)
    const {data:dataFilms, isLoading, currentData, isFetching} =filmApi.useFetchAllFilmsQuery({count,main:filmIndex,direction})//15
    const dispatch=useAppDispatch()
    useEffect(()=>{
       
        if(isFetching==false  && direction==1)
        {
            console.log('films',dataFilms?.films);
            console.log('countOfSkip()',countOfSkip());
            let k
            if (k=countOfSkip())
                window.scrollTo(0,k)
        }

        
    },[isFetching])
    useEffect(()=>{
        if( inViewDown && dataFilms?.films)
        {
            setFilmIndex(dataFilms.films[6].id)
            setDirection(0)
            console.log('Down',dataFilms.films[8].id);
            setIsFirst(0)
        }
    },[inViewDown])
    const countOfSkip=()=>{
        if (dataFilms)
        {
            if(dataFilms?.count>count)
            {
                let clientHeight=document.documentElement.clientHeight;
                let heightOneElem=clientHeight*40/100+40
                console.log('heightOneElem',heightOneElem);
        
                let clientWidth=document.documentElement.clientWidth;
                console.log('clientWidth',clientWidth);
                let oneWidth=340
                let countInRow=Math.floor((clientWidth-60)/340)
                console.log('countInRow',countInRow);
                let k=15/countInRow////////////////////
                console.log('k',k);
                
                let resHeight=k*heightOneElem-100
                console.log('resHeight',resHeight);
                return resHeight
            }
            else 
            {
                let clientHeight=document.documentElement.clientHeight;
                let heightOneElem=clientHeight*40/100+40
                console.log('heightOneElem',heightOneElem);
        
                let clientWidth=document.documentElement.clientWidth;
                console.log('clientWidth',clientWidth);
                let oneWidth=340
                let countInRow=Math.floor((clientWidth-60)/340)
                console.log('countInRow',countInRow);
                let k=(dataFilms?.count-5)/countInRow////////////////////
                console.log('k',k);
                
                let resHeight=k*heightOneElem-100
                console.log('resHeight1',resHeight);
                return resHeight
            }
        }
        
    }
    useEffect(()=>{
        console.log('UPPPPP');
        
        if(inViewUp && dataFilms && !isFirst)
        {
            setFilmIndex(dataFilms.films[5].id)
            setDirection(1)
            console.log('Up',dataFilms.films[5].id);
        }
    },[inViewUp])
    return (
        <>
            <div className='catalog'>
                {dataFilms&& dataFilms.films.map((el,index)=>{
                    if(index===1)
                    {
                        return (
                            <div className='filmcard__wrapper' ref={refUp} key={el.id} style={{backgroundColor:'red'}}>
                                <FilmCard key={el.id} film={el}/>
                            </div>
                        )
                    }
                    if(index===16)//13
                    {
                        return (
                            <div className='filmcard__wrapper' ref={refDown} key={el.id} style={{backgroundColor:'blue'}}>
                                <FilmCard key={el.id} film={el}/>
                            </div>
                        )
                    }
                    return (
                        <div className='filmcard__wrapper'  key={el.id}>
                            <FilmCard key={el.id} film={el}/>
                        </div>
                    )
                })}
            
                {/* {error&&<div>Что-то пошло не так</div>} */}
            </div>
            {isFetching&&<div>Загрузка...</div>}
        </>
    );
};

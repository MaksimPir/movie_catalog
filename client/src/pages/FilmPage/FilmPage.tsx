import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { MainSectionFilm } from './mainSection';
import { CommentSection } from './commentSection';
import { fetchFilmById } from 'entities/film';
import { IFilm } from 'shared/api';
import { fetchCommentsById } from 'entities/comment';
import { withNotification } from 'app/providers/with-notification';
import { unwrapResult } from '@reduxjs/toolkit';
const FilmPage = () => {
    const {idFilm}=useParams()
    const [film,setFilm]=useState<IFilm|null>(null)
    const {comments}=useAppSelector(state=>state.comment)
    const dispatch=useAppDispatch()
    
    const fetchFilm=async()=>{
    //    const film:{film:IFilm}= (await dispatch( fetchFilmById(Number(idFilm)))).payload as {film:IFilm}
    //    setFilm(film.film)
       dispatch( fetchFilmById(Number(idFilm))).then(unwrapResult).then((res)=>{
            if(res && res.film)
                setFilm(res.film)
        })
    }
    useEffect(()=>{
        if(idFilm) 
        {
            fetchFilm()
            fetchCommentsById(dispatch,Number(idFilm))
        }
    },[idFilm])
    if(idFilm)
    {
        return (
            film?
            <>
                <MainSectionFilm film={film}/>
                <CommentSection comments={comments}/>
            </>
            :
            <>
                Такого фильма не существует
            </>
        );
    }
    return(
        <>
            Такой страницы не существует
        </>
    )
};

export default withNotification(FilmPage);
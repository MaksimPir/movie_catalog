import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { MainSectionFilm } from './mainSection';
import { CommentSection } from './commentSection';
import { fetchFilmById } from 'entities/film/model';
import { IComment, IFilm } from 'shared/api';
import { fetchCommentsById } from 'entities/comment/model/comments';

const FilmPage = () => {
    const {idFilm}=useParams()
    const [film,setFilm]=useState<IFilm|null>(null)
    const {comments}=useAppSelector(state=>state.comment)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        if(idFilm) 
        {
            fetchFilmById(dispatch,Number(idFilm)).then(
                data=>{
                    setFilm(data?data.film:null)
                }
            )
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

export default FilmPage;
import { AxiosResponse } from 'axios';
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "shared/lib/types";
import { responseSlice } from "entities/response";
import { IFilm } from "shared/api";
import  FilmService  from "shared/api/typicode/films";
import { authSlice } from 'entities/user/model';
import { IFilmInitialState } from './types';

const initialState:IFilmInitialState={
    films:[] as IFilm[],
    error:false
}
export const filmSlice=createSlice({
    name:'films',
    initialState:initialState,
    reducers:{
        setFilms:(state, action:PayloadAction<IFilm[]>)=>{
            state.films=action.payload
            state.error=false
        },
        setFilmError:(state)=>{
            state.error=true
        }
    }

})
export const reducer= filmSlice.reducer
export const fetchFilms =async(dispatch:AppDispatch)=>{
    const {fetching,fetchingStop}=responseSlice.actions
    const {setFilms,setFilmError}=filmSlice.actions
    try{
        dispatch(fetching())
        const response=await FilmService.getAll()
        dispatch(fetchingStop({isError:false,isFetching:false,isSuccess:true,answer:''}))
        dispatch(setFilms(response.data))
    }
    catch(e:any)
    {
        if(e.response)
        {
            dispatch(setFilmError())
            dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.response.data.message}))
            console.log(e.response?.data?.message);
        }
        else
        {
            dispatch(setFilmError())
            dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.message}))
        }
    }
}
export const fetchFilmById=createAsyncThunk('film/fetchFilmById',async(filmId:number)=>{
    try{
        const response=await FilmService.getById(filmId)
        return response.data
    }
    catch(e:any)
    {
        console.log(e.response?.data?.message);
    }
})
export const fetchFilmById_ =async(dispatch:AppDispatch, filmId:number)=>{
    const {fetching,fetchingStop}=responseSlice.actions
    try{
        dispatch(fetching())
        const response=await FilmService.getById(filmId)
        dispatch(fetchingStop({isError:false,isFetching:false,isSuccess:true,answer:''}))
        return response.data
    }
    catch(e:any)
    {
        dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.response.data.message}))
        console.log(e.response?.data?.message);
    }
}


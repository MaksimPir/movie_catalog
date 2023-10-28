import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "shared/lib/types";
import { IFilm } from "shared/api";
import  FilmService  from "shared/api/typicode/films";
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
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchFilms.fulfilled,(state,action)=>{
            if(action.payload)
            {
                state.films=action.payload
                state.error=false
            }
        }).addCase(fetchFilms.rejected,(state,action)=>{
            state.error=false
        })
    }

})
export const reducer= filmSlice.reducer
export const fetchFilms =createAsyncThunk('film/fetchFilms',async()=>{
    try{
        const response=await FilmService.getAll()
        return response.data
    }
    catch(e:any)
    {
        console.log(e.response?.data?.message);
    }
}) 
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


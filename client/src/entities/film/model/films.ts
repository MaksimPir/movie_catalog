import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { AppDispatch } from "shared/lib/types";
import { IFilm } from "shared/api";
import  FilmService  from "shared/api/typicode/films";
import { IFilmInitialState, IFilmRangeParams, IFilmResponse } from './types';
import { API_URL } from "shared/config";

const initialState:IFilmInitialState={
    films:[] as IFilm[],
    error:false,
    isEnd:false
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
            state.error=true
        })
        builder.addCase(fetchRangeFilms.fulfilled,(state,action)=>{
            if(action.payload)
            {
                state.films=[...state.films,...action.payload]
                state.error=false
                state.isEnd=false
            }
            else
            {
                state.isEnd=true
            }
        }).addCase(fetchRangeFilms.rejected,(state)=>{
            state.error=true
        })
    }

})
export const reducer= filmSlice.reducer
export const fetchFilms =createAsyncThunk('film/fetchFilms',async(_,{rejectWithValue})=>{
    try{
        console.log( 'res');
        const response=await FilmService.getAll()
        console.log(response, 'res');
        
        return response.data
    }
    catch(e:any)
    {
        return rejectWithValue(e.message)
    }
}) 
export const fetchRangeFilms =createAsyncThunk('film/fetchRangeFilms',async(data:IFilmRangeParams,{rejectWithValue})=>{
    try{
        console.log( 'res');
        
        const response=await FilmService.getRange(data.start,data.count)
        console.log(response, 'res');
        return response.data
    }
    catch(e:any)
    {
        return rejectWithValue(e.message)
    }
}) 
export const fetchFilmById=createAsyncThunk('film/fetchFilmById',async(filmId:number,{rejectWithValue})=>{
    try{
        const response=await FilmService.getById(filmId)
        return response.data
    }
    catch(e:any)
    {
        if(e.response)
        {
           return rejectWithValue(e.response?.data?.message)
        }
        else 
        {
           return rejectWithValue(e.message)
        }
    }
})

export const filmApi=createApi({
    reducerPath:'films',
    baseQuery:fetchBaseQuery({baseUrl:API_URL}),
    endpoints:(build)=>({
        fetchAllFilms: build.query<IFilmResponse,{count:number,main:number, direction:number}>({
            query:({count=5, main=0,direction=0})=>({
                url:'/film',
                params:
                {
                    count:count,
                    main:main,
                    direction
                }
            })
        }),
        // fetchPostById: build.query<IPost,number>({
        //     query:(id:number=1)=>({
        //         url:`/posts/${id}`,
        //     })
        // })
    })
})
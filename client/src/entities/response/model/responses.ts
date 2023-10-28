import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IInitialState, IResponsePayload } from "./types"
import { AppDispatch } from "shared/lib/types"
import { fetchFilmById } from "entities/film"

const initialState:IInitialState={
    answer:'',
    isError:false,
    isFetching:false,
    isSuccess:false
}
export const responseSlice=createSlice(
    {
        name:'response',
        initialState,
        reducers:{
            fetching:(state)=>{
                state.answer=''
                state.isError=false
                state.isSuccess=false
                state.isFetching=true
            },
            fetchingStop:(state,payload:PayloadAction<IResponsePayload>)=>{
                state.answer=payload.payload.answer
                state.isError=payload.payload.isError
                state.isSuccess=payload.payload.isSuccess
                state.isFetching=false
            },
            fetchingClear:(state)=>{
                state.answer=''
                state.isError=false
                state.isSuccess=false
                state.isFetching=false
            }
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchFilmById.pending,(state)=>{
                state.answer=''
                state.isError=false
                state.isSuccess=false
                state.isFetching=true
            }).addCase(fetchFilmById.fulfilled,(state,action)=>{
                state.answer='Фильм получен'
                state.isError=false
                state.isSuccess=true
                state.isFetching=false
            }).addCase(fetchFilmById.rejected,(state,action)=>{
                state.answer=action.error.message||'Что-то пошло не так'
                state.isError=true
                state.isSuccess=false
                state.isFetching=false
                
            })
        }
    }
)
export const reducer= responseSlice.reducer

export const clearResponse=(dispatch:AppDispatch)=>{
    const {fetchingClear}=responseSlice.actions
    dispatch(fetchingClear())
}
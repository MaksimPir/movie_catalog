import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IInitialState, IResponsePayload } from "./types"
import { AppDispatch } from "app/store/types"

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
        }
    }
)
export const {fetching,fetchingStop,fetchingClear}=responseSlice.actions
export const reducer= responseSlice.reducer

export const clearResponse=(dispatch:AppDispatch)=>{
    const {fetchingClear}=responseSlice.actions
    dispatch(fetchingClear())
}
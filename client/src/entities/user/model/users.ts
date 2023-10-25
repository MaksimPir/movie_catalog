import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthPayload, IInitialState } from "./types";
import {AppDispatch} from "app/store/types";
import UserService from "shared/api/typicode/users";
import { AuthResponse } from "shared/api";
import { API_URL } from "shared/config";
import axios from "axios";
import { responseSlice } from "entities/response";

const initialState:IInitialState={
    user:{
        id:null,
        email:null,
        password:null
    },
    isAuth:false
}
export const authSlice=createSlice(
    {
        name:'auth',
        initialState,
        reducers:{
            auth:(state,action:PayloadAction<IAuthPayload>)=>{
                state.user={...action.payload}
                state.isAuth=true
            },
            logout:(state)=>{
                state.isAuth=false
                state.user={
                    id:null,
                    email:null,
                    password:null
                }
            }
        }
    }
)
export const {auth,logout}=authSlice.actions
export const reducer= authSlice.reducer


export const login =async(dispatch:AppDispatch,email:string,password:string)=>{
        const {auth}=authSlice.actions
        const {fetching,fetchingStop}=responseSlice.actions
        try{
            dispatch(fetching())
            const response=await UserService.login(email,password)
            dispatch(fetchingStop({isError:false,isFetching:false,isSuccess:true,answer:'Произведен успешный вход'}))
            localStorage.setItem('token',response.data.accessToken)
            dispatch(auth(response.data.user))
        }
        catch(e:any)
        {
            if(e.response)
            {
                dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.response.data.message}))
                console.log(e.response?.data?.message);
            }
            else 
            {
                dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.message}))
                console.log(e);
            }
            
        }
    }
export const registration =async(dispatch:AppDispatch,email:string,password:string)=>{
    const {auth}=authSlice.actions
    const {fetching,fetchingStop}=responseSlice.actions
    try{
        dispatch(fetching())
        const response=await UserService.registration(email,password)
        dispatch(fetchingStop({isError:false,isFetching:false,isSuccess:true,answer:'Произведена успешная регистрация и вход'}))
        localStorage.setItem('token',response.data.accessToken)
        dispatch(auth(response.data.user))
    }
    catch(e:any)
    {
        if(e.response)
        {
            dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.response.data.message}))
            console.log(e.response?.data?.message);
        }
        else 
        {
            dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.message}))
            console.log(e);
        }
    }
}
export const logoutAction =async(dispatch:AppDispatch)=>{
    const {auth}=authSlice.actions
    const {fetching,fetchingStop}=responseSlice.actions
    try{
        dispatch(fetching())
        const response=await UserService.logout()
        localStorage.removeItem('token')
        dispatch(logout())
        dispatch(fetchingStop({isError:false,isFetching:false,isSuccess:true,answer:''}))
    }
    catch(e:any)
    {
        dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.response.data.message}))
        console.log(e.response?.data?.message);
    }
}
export const checkAuth=async(dispatch:AppDispatch)=>{
    const {auth}=authSlice.actions
    try{
        const response=await axios.get<AuthResponse>(`${API_URL}/refresh`,{withCredentials:true})
        localStorage.setItem('token',response.data.accessToken)
        dispatch(auth(response.data.user))
    }
    catch(e)
    {
        console.log(e);
    }
}
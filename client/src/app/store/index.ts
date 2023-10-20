import { configureStore } from "@reduxjs/toolkit";
import { userModel } from "entities/user/";
import {responseSlice} from 'entities/response/'


export const  store=configureStore(
    {
        reducer:{
            auth:userModel.authSlice.reducer,
            response:responseSlice.reducer
        }
    }
)


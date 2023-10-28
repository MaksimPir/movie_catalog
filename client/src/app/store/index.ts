import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "entities/user/";
import { filmSlice } from "entities/film/";
import {responseSlice} from 'entities/response/'
import {commentSlice} from 'entities/comment'


export const store=configureStore(
    {
        reducer:{
            auth:authSlice.reducer,
            response:responseSlice.reducer,
            film:filmSlice.reducer,
            comment:commentSlice.reducer
        }
    }
)


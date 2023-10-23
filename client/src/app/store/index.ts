import { configureStore } from "@reduxjs/toolkit";
import { userModel } from "entities/user/";
import { filmModel } from "entities/film/";
import {responseSlice} from 'entities/response/'
import {commentSlice} from 'entities/comment'


export const store=configureStore(
    {
        reducer:{
            auth:userModel.authSlice.reducer,
            response:responseSlice.reducer,
            film:filmModel.reducer,
            comment:commentSlice.reducer
        }
    }
)


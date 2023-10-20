import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/lib";
import { routesEnum } from "pages/types";
import { userModel } from "entities/user";
import {Button} from 'shared/ui/button/Button'
import './index.scss'
import React, { FC } from "react";

 const Navbar:FC = () => {
    const {isAuth}=useAppSelector(state=>state.auth)
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const logoutHandler=()=>{
        userModel.logoutAction(dispatch)
    }
    return (
        isAuth
        ?
        <div className="navbar">
            <div className="navbar__item">
                <Button  onClick={logoutHandler} text="Выйти" nameOfClass="button__exit"></Button>
            </div>
        </div>
        :
        <div className="navbar">
            <div  className="navbar__item">
                <Button  onClick={()=>navigate(routesEnum.LOGIN)} text="Войти" nameOfClass="button__login"></Button>
            </div>
        </div>
    );
};

export {Navbar}
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/lib";
import { routesEnum } from "pages/types";
import { userModel } from "entities/user";
import {Button} from 'shared/ui/button/Button'
import './index.scss'
import React, { FC, useState } from "react";
import { LoadingForm } from "widgets/loadingForm";

 const Navbar:FC = () => {
    const {isAuth}=useAppSelector(state=>state.auth)
    const [isMenuOpen, setIsMenuOpen]=useState(false)
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const logoutHandler=()=>{
        userModel.logoutAction(dispatch)
    }

    return (
        <div className="navbar">
            <div className="navbar__logo" >
                <a href="#main"><h1>PseudoTube</h1></a>
                
            </div>
            <div className={`navbar__links ${isMenuOpen?'active':''}`} >
                <div className='navbar__item' >
                    <Button  onClick={()=>{
                            setIsMenuOpen(prev=>!prev)
                            navigate(routesEnum.MAIN)
                        }} 
                        text="Главная" nameOfClass="button__exit"></Button>
                </div>
                <div className="navbar__item">
                    {isAuth?<Button  onClick={logoutHandler} text="Выйти" nameOfClass="button__exit"></Button>:
                    <Button  onClick={()=>
                        {
                            setIsMenuOpen(prev=>!prev)
                            navigate(routesEnum.LOGIN)
                        }}
                        text="Войти" nameOfClass="button__login"></Button>
                    }
                </div>
            </div>
            <div 
                className={`navbar__hamburger ${isMenuOpen?'active':''}`} 
                onClick={()=>setIsMenuOpen(prev=>!prev)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </div>
        </div>
    );
};

export {Navbar}
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/lib";
import { routesEnum } from "pages/types";
import { logoutAction } from "entities/user";
import {Button} from 'shared/ui/button'
import './index.scss'
import  { FC, useState } from "react";

 const Navbar:FC = () => {
    const {isAuth}=useAppSelector(state=>state.auth)
    const dispatch=useAppDispatch()
    const [isMenuOpen, setIsMenuOpen]=useState(false)
    const navigate=useNavigate()
    const logoutHandler=()=>{
        dispatch(logoutAction())
    }

    return (
        <div className="navbar">
            <div className="navbar__logo" >
                <a href="#main"><h1>PseudoTube</h1></a>
            </div>
            <div className={`navbar__links ${isMenuOpen?'active':''}`} >
                <div className='navbar__item' >
                    <Button  
                        onClick={()=>{
                            setIsMenuOpen(prev=>!prev)
                            navigate(routesEnum.MAIN)
                        }} 
                        text="Главная" nameOfClass="button__exit">
                    </Button>
                </div>
                <div className="navbar__item">
                    {isAuth?
                        <Button  
                            onClick={()=>{
                                    logoutHandler()
                                    if(isMenuOpen)
                                        setIsMenuOpen(prev=>!prev)
                                }
                            } 
                            text="Выйти" 
                            nameOfClass="button__exit">
                        </Button>
                    :
                        <Button  
                            onClick={()=>
                                {
                                    if(isMenuOpen)
                                        setIsMenuOpen(prev=>!prev)
                                    navigate(routesEnum.LOGIN)
                                }}
                            text="Войти" 
                            nameOfClass="button__login">
                        </Button>
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
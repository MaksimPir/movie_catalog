import {FC, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, routesEnum } from './types';
import { checkAuth } from 'entities/user';

const AppRouter:FC = () => {
    const dispatch=useAppDispatch()
    useEffect(()=>{
      if(localStorage.getItem('token')) checkAuth(dispatch)
    },[])
    const {isAuth}=useAppSelector(state=>state.auth)
   return( 
    <Routes>
         {publicRoutes.map((my_route)=>{
            if(!isAuth)
            {
              return (
                <Route  key={my_route.path} Component={my_route.component} path={my_route.path}/>
              )
            }
            else
            {
              if(my_route.path!==routesEnum.LOGIN)
                return (
                  <Route  key={my_route.path} Component={my_route.component} path={my_route.path}/>
                )
            }
        })}
        <Route path="*" element={<Navigate to={routesEnum.MAIN} />} />
    </Routes>
   )
};

export default AppRouter;
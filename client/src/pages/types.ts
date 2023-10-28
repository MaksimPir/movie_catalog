import LoginPage from "../pages/LoginPage/LoginPage"
import MainPage from "../pages/MainPage/MainPage"
import FilmPage from "./FilmPage/FilmPage"


interface IRoute{
    path:routesEnum,
    component:React.ComponentType
}
export enum routesEnum{
    LOGIN='/login',
    MAIN='/main',
    USER='/user',
    FILM='/film/:idFilm'
} 
export const publicRoutes:IRoute[]=[
    {
        path:routesEnum.LOGIN,
        component:LoginPage
    },
    {
        path:routesEnum.MAIN,
        component:MainPage
    },
    {
        path:routesEnum.FILM,
        component:FilmPage
    },
]

export const authRoutes:IRoute[]=[
    {
        path:routesEnum.MAIN,
        component:MainPage
    }
]
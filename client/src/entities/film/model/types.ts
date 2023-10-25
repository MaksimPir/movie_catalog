import { IFilm } from "shared/api";

export interface ICardFilmProps
{
    film:IFilm
} 
export interface IFilmInitialState
{
    films:IFilm[],
    error:boolean
}
import axios, { AxiosResponse } from "axios";
import {  ICommentResponse, IFilm, IResponseFilmById } from "./models";
import { API_URL } from "shared/config";

export default  class FilmService
{
    static async getAll():Promise<AxiosResponse<IFilm[]>>
    {
        return axios.get<IFilm[]>(`${API_URL}/film`)
    }
    static async getById(id:number):Promise<AxiosResponse<IResponseFilmById>>
    {
        return axios.get<IResponseFilmById>(`${API_URL}/film/${id}`)
    }
    static async addComment(idFilm:number, idUser:number, text:string):Promise<AxiosResponse<ICommentResponse>>
    {
        console.log('text',idFilm, idUser,text);
        
        return axios.post<ICommentResponse>(`${API_URL}/film`,{idFilm, idUser,text})
    }
}

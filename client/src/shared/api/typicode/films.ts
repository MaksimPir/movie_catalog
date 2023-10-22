import axios, { AxiosResponse } from "axios";
import {  IFilm } from "./models";
import { API_URL } from "shared/config";

export default  class FilmService
{
    static async getAll():Promise<AxiosResponse<IFilm[]>>
    {
        return axios.get<IFilm[]>(`${API_URL}/film`)
    }
    static async getById(id:number):Promise<AxiosResponse<IFilm>>
    {
        return axios.get<IFilm>(`${API_URL}/film/${id}`)
    }
}

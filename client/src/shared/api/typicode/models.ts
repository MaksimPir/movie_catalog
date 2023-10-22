export interface IUser{
    email:string|null
    password:string|null
    id:number|null
}

export interface AuthResponse{
    accessToken:string
    refreshToken:string
    user:IUser
}
export interface IFilm{
    id:number,
    name:string,
    description:string,
    rate:number,
    comments:IComment[],
    image:string
}
export interface IComment
{
    id:number,
    userName:string
    text:string
    date:Date
} 
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
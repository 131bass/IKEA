

export interface User{
    firstName:string,
    lastName:string,
    email: string, 
    phoneNumber?:string,
    password: string,
    isAdmin:boolean,
    _id?:string
}
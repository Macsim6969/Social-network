import { UserType } from './../Types/Types';
import axios from 'axios';
  

export const instance = axios.create({
    withCredentials : true ,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY" : '218756f4-1d57-417c-8345-49d77e2e96a8'}
}) 

export enum ResultCodeEnum {
    Success =0,
    Error = 1
}
export type ResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    message: Array<string>
    ResultCode: RC
}

type MeResponseType ={
    data: {
        id:number
        email: string
        login: string
    }
    resultCode : ResultCodeEnum
    messages: Array<string>
}

export  type GetItemsType ={
    items: Array<UserType>
    totallCount: number
    error: string | null
}


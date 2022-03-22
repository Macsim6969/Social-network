import axios from 'axios';
 

const instance = axios.create({
    withCredentials : true ,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY" : '218756f4-1d57-417c-8345-49d77e2e96a8'}
}) 


export const usersAPI = {
    getUsers:(currentPage = 1 ,pageSize = 5) =>{
        return( 
           instance.get( `users?page=${currentPage}&count=${pageSize}`)
           .then(response => response.data)
        )
    } , 
    getUsers2 : (current , pageSize = 5) =>{
        return(
            instance.get(`users?page=${current}&count=${pageSize}`)
            .then(response => response.data)
        )
    } ,
    getDelete : (userId) =>{
        return(
            instance.delete(`follow/${userId}`)
            .then(response => response.data)
        )
    },
    getADD : (userId) =>{
        return(
            instance.post(`follow/${userId}`) 
            .then(response => response.data)
        )
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/2` + userId )
    },
    getStatus(status) {
         return instance.get(`profile/status/2` + status)
    }, 
    updateStatus(status) {
        return instance.put(`profile/status/2` + status )
    },
    saveProfile(profile) {
        return instance.put(`profile` , profile)
    }
}


export enum ResultCodeEnum {
    Success =0,
    Error = 1
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

export const usesrAuth  = {
    getAuth: () =>{
        return(
            instance.get<MeResponseType>('auth/me' ).then(res => res.data)
        )
    },
    login(email , password , rememberMe = false){
        return instance.post(`auth/login` , {email , password , rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
export const usersACCOUNT = {
    getAcc: () =>{
        return(
            instance.get(`profile/2`)
        )
    }
}




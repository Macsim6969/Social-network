import { GetItemsType, instance, ResponseType } from './API.ts';
import { profileAPI } from './Profile-Api.ts';





export const usersAPI = {
    getUsers:(currentPage = 1 ,pageSize = 5) =>{
        return( 
           instance.get<GetItemsType>( `users?page=${currentPage}&count=${pageSize}`)
           .then(res => res.data)
        )
    } , 
    getUsers2 : (current , pageSize = 5) =>{
        return(
            instance.get(`users?page=${current}&count=${pageSize}`)
            .then(response => response.data)
        )
    } ,
    getDelete : (userId: number) =>{
        return(
            instance.delete(`follow/${userId}`)
            .then(resp => resp.data)
        )
    },
    getADD : (userId: number) =>{
        return(
            instance.post<ResponseType>(`follow/${userId}`).then(res => res.data ) as Promise<ResponseType>  
        )
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId).then(res => res.data);
    }
}
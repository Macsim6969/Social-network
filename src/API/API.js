import * as axios from 'axios';
 

const instance = axios.create({
    withCredentials : true ,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY" : '9739fd73-191f-4205-acfa-edb2b33872d1'}
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
    getDelete : (id) =>{
        return(
            instance.delete(`follow/${id}`)
            .then(response => response.data)
        )
    },
    getADD : (id) =>{
        return(
            instance.post(`follow/${id}`)
            .then(response => response.data)
        )
    }
    
}




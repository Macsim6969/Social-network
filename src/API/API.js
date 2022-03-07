import * as axios from 'axios';
 

const instance = axios.create({
    withCredentials : true ,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY" : '2c1e079c-c52a-41b9-a380-d89015b11b6a'}
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
    getProfile() {
        return instance.get(`profile/2` )
    },
    getStatus(status) {
         return instance.get(`profile/status/2` + status)
    }, 
    updateStatus(status) {
        return instance.put(`profile/status/2` + status )
    }
}
 
export const usesrAuth  = {
    getAuth: () =>{
        return(
            instance.get('auth/me' )
        )
    },
    login(email , password , rememberMe = false){
        return instance.post(`auth/login` , {email , password , rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }

}




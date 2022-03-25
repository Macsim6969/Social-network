import { ProfileType } from "../Types/Types"
import { ResponseType } from "./API"
import { instance } from "./API.ts"

export const profileAPI = {
    getProfile(userId) {
        return instance.get<ProfileType>(`profile/2` + userId ).then(res => res.data)
    },
    getStatus(status) {
         return instance.get<string>(`profile/status/2` + status).then(res => res.data)
    }, 
    updateStatus(status) {
        return instance.put<ResponseType>(`profile/status/2` + status ).then(res => res.data)
    },
    saveProfile(profile) {
        return instance.put(`profile` , profile).then(res => res.data)
    }
}
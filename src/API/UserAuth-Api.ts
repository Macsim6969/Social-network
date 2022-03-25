import { instance, ResponseType, ResultCodeEnum } from './API.ts';
export const usesrAuth = {
    getAuth: () => {
        return (
            instance.get<ResponseType<MeResponseType>>('auth/me').then(res => res.data)
        )
    },
    login(email, password, rememberMe = false) {
        return instance.post<ResponseType<LoginResponseType, ResultCodeEnum>>(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}



type MeResponseType = {
    id: number
    email: string
    login: string
}

type LoginResponseType = {
    userId: number
}
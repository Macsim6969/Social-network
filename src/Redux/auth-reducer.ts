import { stopSubmit } from "redux-form"
import { ResultCodeEnum, usersAPI, usesrAuth } from "../API/API"

const AUTH_STATUS = 'AUTH_STATUS'


let initalState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isStatus: false
}   
export type InitialStateType = typeof initalState

const authReducer = (state = initalState, action: any):InitialStateType => { 
    switch (action.type) {
        case AUTH_STATUS:
            return {
                ...state, ...action.payload , id: 'dfdfdf'
            }
        default:
            return state
    }
}

type inititalStatusPayload = {
    id: number | null
    login: string | null
    email: string | null
    isStatus: boolean
}

type initialStatusauthType = {
    type: typeof AUTH_STATUS,
    payload :inititalStatusPayload
}

export const setStatusAuth = (id : number | null, login: string | null, email: string | null, isStatus: boolean):initialStatusauthType => {
    return {
        type: AUTH_STATUS, payload: { id, login, email , isStatus}
    }
}

export const getLogin = () => {
    return (dispatch) => {
        let Medata = await  usesrAuth.getAuth();
            if (Medata.resultCode === ResultCodeEnum.Success) {
                let { id, login, email  } = Medata.data;
                dispatch(setStatusAuth(id, login, email , true))
            }
        })
    }
}


export const logine = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    usesrAuth.login(email, password, rememberMe ).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getLogin())
        } else {
           let messages = response.data.messages.length > 0  ? response.data.messages[0] : 'Some erroe' ;
            dispatch(stopSubmit('login' , {_error: messages}))
        }
    })

}


export const logout = () => (dispatch: any) => {
    usesrAuth.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusAuth(null, null, null , false))
        }
    })

}
export default authReducer
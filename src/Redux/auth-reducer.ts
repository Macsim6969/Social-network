import { ThunkAction } from 'redux-thunk';
import { Dispatch } from "react"
import { stopSubmit } from "redux-form"
import { ResultCodeEnum, usersAPI, usesrAuth } from "../API/API"
import { AppStateType } from "./Redux-store"

const AUTH_STATUS = 'AUTH_STATUS'


let initalState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isStatus: false
}
export type InitialStateType = typeof initalState

const authReducer = (state = initalState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case AUTH_STATUS:
            return {
                ...state, ...action.payload
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
    payload: inititalStatusPayload
}

export const setStatusAuth = (id: number | null, login: string | null, email: string | null, isStatus: boolean): initialStatusauthType => {
    return {
        type: AUTH_STATUS, payload: { id, login, email, isStatus }
    }
}

type AuthActionType = initialStatusauthType
type DispatchType = Dispatch<AuthActionType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthActionType>


export const getLogin = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        let Medata = await usesrAuth.getAuth();
        if (Medata.resultCode === ResultCodeEnum.Success) {
            let { id, login, email } = Medata.data;
            dispatch(setStatusAuth(id, login, email, true))
        }
    }
}


export const logine = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch: DispatchType) => {

    let response = await usesrAuth.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getLogin())
    } else {
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some erroe';
        dispatch(stopSubmit('login', { _error: messages }))
    }

}


export const logout = (): ThunkType => async (dispatch: DispatchType) => {
    usesrAuth.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusAuth(null, null, null, false))
        }
    })

}
export default authReducer
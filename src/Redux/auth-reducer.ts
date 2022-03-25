import { ActionTypes, FormAction, stopSubmit } from "redux-form"
import { usersAPI, usesrAuth } from "../API/UserAuth-Api.ts"
import { AppStateType } from "./Redux-store.ts"
import { ResultCodeEnum } from '../API/API.ts';
import { BaseThunkType, InfermActionsTypes } from './Redux-store';


export type InitialStateType = typeof initalState
type initalState = {
    id: number | null
    login: string | null
    email: string | null
    isStatus: boolean
}
type ActionTypes = InfermActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | FormAction>

let initalState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isStatus: false
}

const authReducer = (state = initalState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "AUTH_STATUS":
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}



export const actions = {
    setStatusAuth: (id: number | null, login: string | null, email: string | null, isStatus: boolean) => {
        return {
            type: "AUTH_STATUS", payload: { id, login, email, isStatus }
        } as const
    }
}


export const getLogin = (): ThunkType => async (dispatch) => {
    let Medata = await usesrAuth.getAuth();
    if (Medata.resultCode === ResultCodeEnum.Success) {
        let { id, login, email } = Medata.data;
        dispatch(actions.setStatusAuth(id, login, email, true))
    }
}


export const logine = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {

    let response = await usesrAuth.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getLogin())
    } else {
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some erroe';
        dispatch(stopSubmit('login', { _error: messages }))
    }

}


export const logout = () => async (dispatch) => {
    usesrAuth.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(actions.setStatusAuth(null, null, null, false))
        }
    })

}
export default authReducer
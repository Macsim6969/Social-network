import { stopSubmit } from "redux-form"
import { usersAPI, usesrAuth } from "../API/API"

const AUTH_STATUS = 'AUTH_STATUS'

let initalState = {
    id: null,
    login: null,
    email: null,
    isStatus: false
}   

const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case AUTH_STATUS:
            return {
                ...state, ...action.payload 
            }
        default:
            return state
    }
}

export const setStatusAuth = (id, login, email , isStatus) => {
    return {
        type: AUTH_STATUS, payload: { id, login, email , isStatus}
    }
}

export const getLogin = () => {
    return (dispatch) => {
        usesrAuth.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email  } = response.data.data;
                dispatch(setStatusAuth(id, login, email , true))
            }
        })
    }
}


export const logine = (email, password, rememberMe) => (dispatch) => {
    usesrAuth.login(email, password, rememberMe ).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getLogin())
        } else {
           let messages = response.data.messages.length > 0  ? response.data.messages[0] : 'Some erroe' ;
            dispatch(stopSubmit('login' , {_error: messages}))
        }
    })

}


export const logout = () => (dispatch) => {
    usesrAuth.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusAuth(null, null, null , false))
        }
    })

}
export default authReducer
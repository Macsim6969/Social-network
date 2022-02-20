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
                ...state, ...action.data, isStatus: true
            }
        default:
            return state
    }
}

export const setStatusAuth = (id , login , email )=>{
    return{
        type: AUTH_STATUS , data : {id, login , email}
    }
}
export default authReducer
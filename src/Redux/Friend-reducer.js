const ADD = 'ADD';
const DELETE = 'DELETE';
const SET_FRIENDS = 'SET-FRIEDNDS';

let initalState = { 
    users: []
}

const friendReducer = (state = initalState, action) => {

    switch (action.type) {
        case ADD :
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, add: true}
                    }
                    return u;
                })
            }
        case DELETE :
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, add: false}
                    }
                    return u;
                })
            }
        case SET_FRIENDS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const addAC = (id) => {
    return {
        type: ADD, id
    }
} 

export const deleteAC = (id) => {
    return {
        type: DELETE, id
    }
}
export const setFriends = (users) => {
    return {
        type: SET_FRIENDS, users
    }
}
export default friendReducer;
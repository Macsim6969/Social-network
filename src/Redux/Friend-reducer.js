const ADD = 'ADD'; 
const DELETE = 'DELETE';
const SET_FRIENDS = 'SET-FRIEDNDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL = 'SET-TOTAL';
const SET_lOADER = 'SET-lOADER'

let initalState = { 
    users: [],
    pageSize : 5, 
    totalUsersCount : 0,
    currentPage : 2 ,
    isFetching: false
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
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return{
                ...state , currentPage : action.currentPage
            }
        case SET_TOTAL :
            return{
                ...state , totalUsersCount : action.totalCount
            }
        case SET_lOADER:
            return{
                ...state , isFetching : action.isFetching
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
export const setCurrentAC = (current) =>{
    return{
        type: SET_CURRENT_PAGE , current
    }
}
export const setTotalAC = (totalCount) =>{
    return{
        type: SET_TOTAL, totalCount
    }
}
export const isFetchingAC = (isFetching) =>{
    return{
        type: SET_lOADER , isFetching
    }
}
export default friendReducer;
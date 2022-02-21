import { usersAPI } from "../API/API";

const ADD = 'ADD';  
const DELETE = 'DELETE';
const SET_FRIENDS = 'SET-FRIEDNDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL = 'SET-TOTAL';
const SET_lOADER = 'SET-lOADER';
const FOLLOW_FETCH = 'FOLLOW_FETCH';

let initalState = { 
    users: [],
    pageSize : 5, 
    totalUsersCount : 0,
    currentPage : 2 ,
    isFetching: false,
    followFetching: [],
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
        case FOLLOW_FETCH :
            return{
                ...state , followFetching : action.fetching  
                ? [...state.followFetching ,action.userId] 
                : state.followFetching.filter(id => id != action.userId)  
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
export const followAC = (fetching , userId) =>{
    return{
        type : FOLLOW_FETCH , fetching , userId
    }
}

export const getUsersThunk = (currentPage , pageSize) => {
    return (dispatch) =>{
    dispatch(isFetchingAC(true));
        usersAPI.getUsers(currentPage , pageSize)
        .then(data =>{
            dispatch(isFetchingAC(false))
            dispatch(setFriends(data.items));
            dispatch(setTotalAC(data.totalCount))
        }) 
    }
}

export const acceptAdd = (userId) =>{
    return (dispatch) =>{
        dispatch(followAC(true , userId))
        usersAPI.getDelete(userId)
            .then(data => {
                if (data.resultCode == 1) {
                    dispatch(deleteAC(userId));
                }
                dispatch(followAC(false , userId))
            });
    }
}
export const acceptDelete = (userId) =>{
    return (dispatch) =>{
        dispatch(followAC(true , userId))
        usersAPI.getADD(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(addAC(userId));
                }
                dispatch(followAC(false , userId))
            });
    }
}
export default friendReducer;
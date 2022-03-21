import { type } from 'os';
import { UserType } from './../Types/Types';
import { usersAPI } from "../API/API";
import { updateObjectArray } from "../utilits/validators/object-helper";

const ADD = 'ADD';
const DELETE = 'DELETE';
const SET_FRIENDS = 'SET-FRIEDNDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL = 'SET-TOTAL';
const SET_lOADER = 'SET-lOADER';
const FOLLOW_FETCH = 'FOLLOW_FETCH';

let initalState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followFetching: [] as Array<number>,
}

type initialStateType = typeof initalState

const friendReducer = (state = initalState, action: any): initialStateType => {

    switch (action.type) {
        case ADD:
            return {
                ...state,
                users: updateObjectArray(state.users , action.id , "id" , {add : true})
                
            }
        case DELETE:
            return {
                ...state, users: updateObjectArray(state.users , action.id , "id" , {add: false})
            }
        case SET_FRIENDS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case SET_lOADER:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOW_FETCH:
            return {
                ...state, followFetching: action.fetching
                    ? [...state.followFetching, action.userId]
                    : state.followFetching.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

type addACType ={
    type: typeof ADD
    id: number
}
export const addAC = (id: number):addACType => {
    return {
        type: ADD, id
    }
}
type deleteACType ={
    type: typeof DELETE
    id: number
}
export const deleteAC = (id: number):deleteACType => {
    return {
        type: DELETE, id
    }
}
type setFriendsType ={
    type: typeof SET_FRIENDS
    users: UserType
}
export const setFriends = (users):setFriendsType => {
    return {
        type: SET_FRIENDS, users
    }
}
type setCurrentACType ={
    type: typeof SET_CURRENT_PAGE
    current: number
}
export const setCurrentAC = (current):setCurrentACType => {
    return {
        type: SET_CURRENT_PAGE, current
    }
}
type setTotalACType ={
    type: typeof SET_TOTAL
    totalCount: number
}
export const setTotalAC = (totalCount):setTotalACType => {
    return {
        type: SET_TOTAL, totalCount
    }
}
type isFetchingACType ={
    type: typeof SET_lOADER
    isFetching: boolean
}
export const isFetchingAC = (isFetching):isFetchingACType => {
    return {
        type: SET_lOADER, isFetching
    }
}
type followACType ={
    type: typeof FOLLOW_FETCH
    fetching: any
    userId: number
}
export const followAC = (fetching, userId):followACType => {
    return {
        type: FOLLOW_FETCH, fetching, userId
    }
}

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(isFetchingAC(false))
                dispatch(setFriends(data.items));
                dispatch(setTotalAC(data.totalCount))
            })
    }
}

export const addDeleteFlow = async (dispatch, userId, usersAPI, actionCreator) => {
    dispatch(followAC(true, userId))
    let data = await usersAPI(userId)

    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(followAC(false, userId))
}

export const acceptAdd = (userId) => async (dispatch) => {
    addDeleteFlow(dispatch, userId, usersAPI.getDelete.bind(usersAPI), deleteAC);
}
export const acceptDelete = (userId) => async (dispatch) => {
    addDeleteFlow(dispatch, userId, usersAPI.getADD.bind(usersAPI), addAC)
}

export default friendReducer; 
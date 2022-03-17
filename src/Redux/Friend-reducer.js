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
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followFetching: [],
}

const friendReducer = (state = initalState, action) => {

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
export const setCurrentAC = (current) => {
    return {
        type: SET_CURRENT_PAGE, current
    }
}
export const setTotalAC = (totalCount) => {
    return {
        type: SET_TOTAL, totalCount
    }
}
export const isFetchingAC = (isFetching) => {
    return {
        type: SET_lOADER, isFetching
    }
}
export const followAC = (fetching, userId) => {
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

const addDeleteFlow = async (dispatch, userId, usersAPI, actionCreator) => {
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
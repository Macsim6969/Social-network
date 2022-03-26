import { AppStateType, InfermActionsTypes } from './Redux-store';
import { type } from 'os';
import { UserType } from './../Types/Types';
import { usersAPI } from "../API/User-Api.ts";
import { updateObjectArray } from "../utilits/validators/object-helper";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';



let initalState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followFetching: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean 
    }
}

type initialStateType = typeof initalState

const friendReducer = (state = initalState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                users: updateObjectArray(state.users, action.id, "id", { add: true })

            } 
        case 'DELETE':
            return {
                ...state, users: updateObjectArray(state.users, action.id, "id", { add: false })
            }
        case 'SET_FRIENDS':
            return {
                ...state, users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.current
            }
        case 'SET_TOTAL':
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case 'SET_lOADER':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'FOLLOW_FETCH':
            return {
                ...state, followFetching: action.fetching
                    ? [...state.followFetching, action.userId]
                    : state.followFetching.filter(id => id != action.userId)
            }
        case 'FR/SET_FILTER':
            return{ ...state , filter: action.payload}
        default:
            return state;
    }
}

type ActionsTypes = InfermActionsTypes<typeof actions>
export type FilterForm = typeof initalState.filter

export const actions ={
    addAC : (id: number) => {
        return {
            type: "ADD", id
        } as const 
    },
    deleteAC : (id: number) => {
        return {
            type: "DELETE", id
        } as const
    },
    setFriends : (users: UserType) => {
        return {
            type: "SET_FRIENDS", users
        } as const
    },
    setCurrentAC : (current: number) => {
        return {
            type: "SET_CURRENT_PAGE", current
        } as const
    },
    setTotalAC :(totalCount: number) => {
        return {
            type: "SET_TOTAL", totalCount
        } as const 
    },
    isFetchingAC : (isFetching: boolean) => {
        return {
            type: "SET_lOADER", isFetching
        } as const 
    },
    followAC :(fetching, userId) => {
        return {
            type: "FOLLOW_FETCH", fetching, userId
        } as const 
    },
    setFilter : (filter: FilterForm) =>{
        return{
            type: 'FR/SET_FILTER', payload: {filter}
        } as const 
    }
}


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsersThunk = (currentPage: number, pageSize: number, filter: FilterForm): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.isFetchingAC(true));
        dispatch(actions.setFilter(filter))
        usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
            .then(data => {
                dispatch(actions.isFetchingAC(false))
                dispatch(actions.setFriends(data.items));
                dispatch(actions.setTotalAC(data.totalCount))
            })
    }
}

export const addDeleteFlow = async (dispatch: DispatchType, userId: number, usersAPI: any, actionCreator: (userId)=> ActionsTypes) => {
    dispatch(actions.followAC(true, userId))
    let data = await usersAPI(userId)

    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.followAC(false, userId))
}

export const acceptAdd = (userId): ThunkType => async (dispatch:DispatchType) => {
    addDeleteFlow(dispatch, userId, usersAPI.getDelete.bind(usersAPI), actions.deleteAC);
}
export const acceptDelete = (userId): ThunkType => async (dispatch: DispatchType) => {
    addDeleteFlow(dispatch, userId, usersAPI.getADD.bind(usersAPI), actions.addAC)
}

export default friendReducer; 
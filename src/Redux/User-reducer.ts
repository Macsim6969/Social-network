import { PhotoType } from './../Types/Types';
const ADD = 'ADD';
const DELETE = 'DELETE';
const SET_USERS = 'SET_USERS'
const CURRENT_AC = 'CURRENT_AC';
const TOTAL_COUNT = 'TOTAL_COUNT';
const IS_LOADING = 'ISLOADING';
const SET_USERSCOM = 'SET_USERSCOM';
const SET_NEWUSERS = 'SET_NEWUSERS'

type UserType ={
    id: number
    name: string
    status: string
    photos: PhotoType
}

let initalState = {
    users: [] as Array<UserType>,
    totalUserCount: 0,
    pageSize: 5,
    currentPage: 2,
    isLoading: true, 
    usersCom : [ 
        {text : ''}
    ],
    newUsersCom : ''
}


type initalStateType = typeof initalState

const usersReducer = (state = initalState, action:any): initalStateType => {
    switch (action.type) {
        case ADD:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, add: true }
                    }
                    return u;
                })
            }
        case DELETE:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, add: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case TOTAL_COUNT:
            return {
                ...state, totalUserCount: action.totalCount
            }
        case CURRENT_AC:
            return {
                ...state, currentPage: action.currentPage
            }
        case IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        case SET_USERSCOM :
            let text = state.newUsersCom;
            return{
                ...state , newUsersCom : '' , usersCom : [ ...state.usersCom , {text : text}]
            }
        case SET_NEWUSERS :
            return{
                ...state , newUsersCom : action.newUsersCom
            }
        default:
            return state
    }
}
type addACType = {
    type: typeof ADD ,
    id: number
}
export const addAC = (id):addACType => {
    return {
        type: ADD, id
    }

}
type deltesType ={
    type: typeof DELETE
    id: number
}
export const deletes = (id):deltesType => {
    return {
        type: DELETE, id
    }
}
type setUsersType ={
    type: typeof SET_USERS
    users: UserType
}
export const setUsers = (users): setUsersType => {
    return {
        type: SET_USERS, users
    }
}
type totalCountType ={
    type: typeof TOTAL_COUNT
    totalCount: number
}
export const totallCount = (totalCount):totalCountType => {
    return {
        type: TOTAL_COUNT, totalCount
    }
}
type currentPageACType ={
    type: typeof CURRENT_AC
    current : number
}
export const currentPageAC = (current): currentPageACType => {
    return {
        type: CURRENT_AC, current
    }
}
type isLoadingAcType ={
    type: typeof IS_LOADING
    isLoading: boolean
}
export const isLoadingAC = (isLoading):isLoadingAcType => {
    return {
        type: IS_LOADING, isLoading
    }
}
type setUsersComType ={
    type: typeof SET_USERSCOM
}
export const setUSersCom = ():setUsersComType =>{
    return{
        type: SET_USERSCOM 
    }
}
type setNewUsersCom ={
    type: typeof SET_NEWUSERS
    newUsersCom: string
}
export const setNewUsersCom = (text):setNewUsersCom =>{
    return{
        type : SET_NEWUSERS ,newUsersCom : text
    }
}
export default usersReducer
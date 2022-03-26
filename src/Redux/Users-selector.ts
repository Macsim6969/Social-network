import {createSelector} from 'reselect';
import { AppStateType } from './Redux-store.ts';

const getusersSelector = (state: AppStateType) => {
    return state.users.users;
}

export const getUsers = createSelector(getusersSelector, (users) =>{
    users.filter(u => true) 
})

export const getPageSize = (state: AppStateType) =>{
    return state.users.pageSize
}
export const gettotalUserCount = (state: AppStateType ) =>{
    return state.users.totalUserCount
}
export const getcurrentPage = (state: AppStateType)=>{
    return state.users.currentPage
}
export const getisLoading = (state: AppStateType) =>{
    return state.users.isLoading
}

export const getnewUsersCom = (state: AppStateType) =>{
    return state.users.newUsersCom
}
 
export const getusersCom = (state: AppStateType) =>{
    return state.users.usersCom
}

export const getUsersFilter = (state: AppStateType) =>{
    return state.users.filter
}
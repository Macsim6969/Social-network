import { createSelector } from 'reselect';
import { AppStateType } from './Redux-store.ts';



export const frienUserdSeletor = (state: AppStateType) =>{
    return state.friends.users
}

export const getUsers = createSelector(frienUserdSeletor, (users) =>{
    users.filter(u => true)
})

export const getPageSize = (state: AppStateType) =>{
    return state.friends.pageSize
}
export const gettotalUsersCount = (state: AppStateType) =>{
    return state.friends.totalUsersCount
}

export const getcurrentPage = (state: AppStateType) =>{
    return state.friends.currentPage
}

export const getisFetching = (state: AppStateType) =>{
    return state.friends.isFetching
}
export const getfollowFetching = (state: AppStateType) =>{
    return state.friends.followFetching
}
export const getUsersFilter = (state: AppStateType) =>{
    return state.friends.filter
}
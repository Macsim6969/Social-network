export const getUsers = (state) => {
    return state.users.users;
}

export const getPageSize = (state) =>{
    return state.users.pageSize
}
export const gettotalUserCount = (state ) =>{
    return state.users.totalUserCount
}
export const getcurrentPage = (state)=>{
    return state.users.currentPage
}
export const getisLoading = (state) =>{
    return state.users.isLoading
}

export const getnewUsersCom = (state) =>{
    return state.users.newUsersCom
}

export const getusersCom = (state) =>{
    return state.users.usersCom
}
const ADD = 'ADD';
const DELETE = 'DELETE';
const SET_USERS = 'SET_USERS'
const CURRENT_AC = 'CURRENT_AC';
const TOTAL_COUNT = 'TOTAL_COUNT';
const IS_LOADING = 'ISLOADING';

let initalState = {
    users: [],
    totalUserCount: 0,
    pageSize: 5,
    currentPage: 2,
    isLoading: true
}

const usersReducer = (state = initalState, action) => {
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
                ...state, currentPAge: action.currentPage
            }
        case IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state
    }
}

export const addAC = (id) => {
    return {
        type: ADD, id
    }

}
export const deletes = (id) => {
    return {
        type: DELETE, id
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const totalCount = (totalCount) => {
    return {
        type: TOTAL_COUNT, totalCount
    }
}
export const currentPageAC = (current) => {
    return {
        type: CURRENT_AC, current
    }
}
export const isLoadingAC = (isLoading) => {
    return {
        type: IS_LOADING, isLoading
    }
}
export default usersReducer
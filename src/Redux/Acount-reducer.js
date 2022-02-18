const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    info: [
        { name: 'Posts', number: 880 },
        { name: 'Followers', number: 400 },
        { name: 'Following', number: 330 }
    ],
    mainlink: [
        { name: 'Timeline' },
        { name: 'About' },
        { name: 'Friends' },
        { name: 'Photos' }
    ],
    profile: null
}
const acountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default: {
            return state
        }
    }
}

export const getUserID = (profile) => {
    return {
        type: SET_PROFILE, profile
    }
}

export default acountReducer; 
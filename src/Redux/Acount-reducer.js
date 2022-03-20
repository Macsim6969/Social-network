import { profileAPI } from "../API/API";

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
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
    profile: null,
    status: ''
}
const acountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
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

export const getStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const getUserProfile = () => async (dispatch) =>{
    let response = await profileAPI.getProfile()
    dispatch(getUserID(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    const responce = await profileAPI.updateStatus(status)
    if (responce.data.resultCode === 0) {
        dispatch(getStatus(status));
    }
}
export const saveProfile = (profile) => async (dispatch , getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    debugger;
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    }
}
export default acountReducer; 
import { ProfileType } from './../Types/Types';
import { profileAPI } from "../API/Profile-Api.ts";

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

type infoType ={
    name: string
    number: number
}
type mainlinkType ={
    name:string
}
let initialState = {
    info: [
        { name: 'Posts', number: 880 },
        { name: 'Followers', number: 400 },
        { name: 'Following', number: 330 }
    ] as Array<infoType>,
    mainlink: [
        { name: 'Timeline' },
        { name: 'About' },
        { name: 'Friends' },
        { name: 'Photos' }
    ]as Array<mainlinkType>,
    profile: null as Array<ProfileType>,
    status: ''
}
type initialStateType = typeof initialState
const acountReducer = (state = initialState, action:any):initialStateType => {
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
type getUserIDType ={
    type: typeof SET_PROFILE
    profile: ProfileType
}
export const getUserID = (profile):getUserIDType => {
    return {
        type: SET_PROFILE, profile
    }
}
type getStatusType ={
    type: typeof SET_STATUS
    status: string
}
export const getStatus = (status):getStatusType => {
    return {
        type: SET_STATUS, status
    }
}


export const getUserProfile = (userId) => async (dispatch) =>{
    let response = await profileAPI.getProfile(userId)
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
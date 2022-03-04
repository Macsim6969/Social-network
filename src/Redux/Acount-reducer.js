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
    status : ''
}
const acountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS :{
            return{
                ...state, status : action.status
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

export const getStatus = (status) =>{
    return{
        type : SET_STATUS , status
    }
}


export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status).then(responce =>{
        if(responce.data.resultCode === 0){
            dispatch(getStatus(status));
        }
    })
}
export default acountReducer; 
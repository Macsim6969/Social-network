import { profileAPI } from "../API/API";

const ADD_DIALOG = 'ADD-DIALOG'
const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG'
const SAVE_PHOTO = 'SAVE_PHOTO'

let initialState = { 
    mess: [
        { name: 'Vanya', id: 5 }, 
        { name: 'Dmitryi', id: 6 },
        { name: 'Oleg', id: 4 },
        { name: 'Andreu', id: 3 },
        { name: 'ALya', id: 1 },
        { name: 'MAcs', id: 2 }
    ],
    dia: [
        { name: 'HI' },
        { name: ' i love you' },
        { name: 'Hi , i too))' } 
    ],
} 

const messageReducer = (state = initialState, action) => { 

    switch (action.type) {
        case ADD_DIALOG:
            let text = action.NewDialog;
            return {
                ...state  , dia: [...state.dia ,{name: text} ]
            }
        default:
            return state;
    }

}

export const addSaveDialog = (NewDialog) => {
    return {
        type: ADD_DIALOG , NewDialog
    }
}
export const savePhotoSuccess = (photos) =>{
    return{
        type: SAVE_PHOTO , photos
    }
}

export const savePhoto = (file) => async (dispatch) =>{
    let responce = await profileAPI.savePhooto(file)

    if(responce.data.resultCode === 0){
        dispatch(savePhotoSuccess(responce.data.photos))
    }
}
export default messageReducer;
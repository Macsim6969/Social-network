import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { PhotoType } from './../Types/Types';
import { type } from 'os';
import { profileAPI } from "../API/API";
import { AppStateType } from './Redux-store';

const ADD_DIALOG = 'ADD-DIALOG'
const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG'
const SAVE_PHOTO = 'SAVE_PHOTO'

type messDialog ={
    name: string
    id: number
}
type diaDialog={
    name: string
}
let initialState = { 
    mess: [
        { name: 'Vanya', id: 5 }, 
        { name: 'Dmitryi', id: 6 },
        { name: 'Oleg', id: 4 },
        { name: 'Andreu', id: 3 },
        { name: 'ALya', id: 1 },
        { name: 'MAcs', id: 2 }
    ] as Array<messDialog>,
    dia: [
        { name: 'HI' },
        { name: ' i love you' },
        { name: 'Hi , i too))' } 
    ]as Array<diaDialog>,
} 

export type initialStateType = typeof initialState

const messageReducer = (state = initialState, action:any) : initialStateType => { 

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

type ActionType =addSaveDialogType|savePhotoSuccessType

type addSaveDialogType = {
    type: typeof ADD_DIALOG
    NewDialog: string
}
export const addSaveDialog = (NewDialog: string):addSaveDialogType => {
    return {
        type: ADD_DIALOG , NewDialog
    }
}

type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO
    photos: PhotoType
}
export const savePhotoSuccess = (photos):savePhotoSuccessType =>{
    return{
        type: SAVE_PHOTO , photos
    }
}

type DispatchType = Dispatch<ActionType>
type ThunkType = ThunkAction<Promise<void> , AppStateType, unknown, ActionType>

export const savePhoto = (file):ThunkType => async (dispatch:DispatchType) =>{
    let responce = await profileAPI.savePhooto(file)

    if(responce.data.resultCode === 0){
        dispatch(savePhotoSuccess(responce.data.photos))
    }
}
export default messageReducer;
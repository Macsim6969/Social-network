import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { PhotoType } from './../Types/Types';
import { type } from 'os';
import { profileAPI } from "../API/Profile-Api.ts";
import { AppStateType, InfermActionsTypes } from './Redux-store';


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
        case "ADD_DIALOG":
            let text = action.NewDialog;
            return {
                ...state  , dia: [...state.dia ,{name: text} ]
            }
        default:
            return state;
    }

}

type ActionType = InfermActionsTypes<typeof actions>

export const actions = {
    addSaveDialog :(NewDialog: string) => {
        return {
            type: "ADD_DIALOG" , NewDialog
        }
    },
    savePhotoSuccess :(photos) =>{
        return{
            type: "SAVE_PHOTO" , photos
        }
    }
}

type DispatchType = Dispatch<ActionType>
type ThunkType = ThunkAction<Promise<void> , AppStateType, unknown, ActionType>

export const savePhoto = (file):ThunkType => async (dispatch:DispatchType) =>{
    let responce = await profileAPI.savePhooto(file)

    if(responce.data.resultCode === 0){
        dispatch(actions.savePhotoSuccess(responce.data.photos))
    }
}
export default messageReducer;
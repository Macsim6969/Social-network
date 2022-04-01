import { AppStateType } from "./Redux-store.ts";


export const getProfile = (state: AppStateType) =>{
    return state.acount.profile
}
import { AppStateType, InfermActionsTypes } from "./Redux-store";

export type newsType ={
    message: string
}

let initalState = {
    news: [
        { message: '7898798' }
    ] as Array<newsType>,
    setnews: ''
}

type initalStateType = typeof initalState

const newsReducer = (state = initalState, action: ActionsType):initalStateType => {
    switch (action.type) {
        case "SET_NEWS":
            let text = state.setnews;
            return {
                ...state , setnews: '' , news : [...state.news , {message: text}]
            }
        case "SET_NEWS_AC":
            return{
                ...state , setnews : action.newSaveNEws
            }
        default:
            return state;
    }
}

type ActionType = AppStateType


type ActionsType = InfermActionsTypes<typeof actions >

export const actions = {
    addNews: () =>{
        return{
            type: "SET_NEWS" 
        } as const
    }, 
    addNewsAC: (text) =>{
        return{
            type: "SET_NEWS_AC" , newSaveNEws: text
        } as const 
    } 
}

export default newsReducer;
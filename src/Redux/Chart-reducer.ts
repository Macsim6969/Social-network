import { ChartsMessage } from './../API/chat-api.ts';
import { ActionTypes, FormAction, stopSubmit } from "redux-form"
import { usersAPI, usesrAuth } from "../API/UserAuth-Api.ts"
import { AppStateType } from "./Redux-store.ts"
import { ResultCodeEnum } from '../API/API.ts';
import { BaseThunkType, InfermActionsTypes } from './Redux-store';
import { chatApi } from '../API/chat-api.ts';


export type InitialStateType = typeof initalState
let initalState = {
    messages: [] as ChartsMessage[]
}
type ActionTypes = InfermActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | FormAction>



const charthReducer = (state = initalState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "CR/chat/MESSAGES_RECEVIED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state
    }
}



export const actions = {
    messagesReceived: (messages: ChartsMessage[]) => {
        return {
            type: "CR/chat/MESSAGES_RECEVIED", payload: { messages }
        } as const
    }
}

let _newMessageHandler: ((messages: ChartsMessage[]) => void) | null = null

const newMessageHandlerCreator = (dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: ChartsMessage[]) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}
export const sendMessage = (message: string): ThunkType => async (dispatch) =>{
    chatApi.sendMessage(message)
} 
export const startMessagesList = (): ThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesList = (): ThunkType => async (dispatch) => {
    chatApi.stop()
    chatApi.unsubscibe(newMessageHandlerCreator(dispatch))
}

export default charthReducer
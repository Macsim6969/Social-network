import { applyMiddleware, combineReducers, createStore} from 'redux';
import acountReducer from './Acount-reducer.ts';
import mainreviewReducer from './Mainreview-reducer.ts';
import messageReducer from './Message-reducer.ts'; 
import friendReducer from "./Friend-reducer.ts";
import photoReducer from './Photos-reducer.ts';
import authReducer from './auth-reducer.ts';
import  newsReducer  from './News-reducer.ts';
import usersReducer from './User-reducer.ts';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'



let reducer = combineReducers({
    mainreview :mainreviewReducer, 
    message :messageReducer, 
    friends :friendReducer,
    acount: acountReducer,
    photos : photoReducer,
    auth : authReducer,
    news : newsReducer,
    users : usersReducer,
    form: formReducer
});

type RootReducerType  = typeof reducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InfermActionsTypes<T extends {[key: string]: (...args : any[]) => any}> = ReturnType<PropertiesTypes<T>>


let store = createStore(reducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;
export default store;
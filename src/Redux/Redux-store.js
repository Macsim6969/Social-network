import {combineReducers, createStore} from 'redux';
import acountReducer from './Acount-reducer';
import mainreviewReducer from './Mainreview-reducer';
import messageReducer from './Message-reducer';
import friendReducer from "./Friend-reducer";


let reducer = combineReducers({
    mainreview :mainreviewReducer,
    message :messageReducer,
    friends :friendReducer,
    acount: acountReducer
});

let store = createStore(reducer);
window.store = store;
export default store;
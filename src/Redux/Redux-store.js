import {combineReducers, createStore} from 'redux';
import acountReducer from './Acount-reducer';
import mainreviewReducer from './Mainreview-reducer';
import messageReducer from './Message-reducer';

let reducer = combineReducers({
    mainreview :mainreviewReducer,
    message :messageReducer,
    acount: acountReducer
});

let store = createStore(reducer);
window.store = store;
export default store;
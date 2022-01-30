import {combineReducers, createStore} from 'redux';
import mainreviewReducer from './Mainreview-reducer';
import messageReducer from './Message-reducer';

let reducer = combineReducers({
    mainreview :mainreviewReducer,
    message :messageReducer
});

let store = createStore(reducer);

export default store;
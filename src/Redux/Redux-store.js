import { applyMiddleware, combineReducers, createStore} from 'redux';
import acountReducer from './Acount-reducer';
import mainreviewReducer from './Mainreview-reducer';
import messageReducer from './Message-reducer';
import friendReducer from "./Friend-reducer";
import photoReducer from './Photos-reducer';
import authReducer from './auth-reducer';
import  newsReducer  from './News-reducer';
import usersReducer from './User-reducer';
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

let store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
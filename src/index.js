import reportWebVitals from './reportWebVitals';
import store from './Redux/Redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { BrowserRouter} from 'react-router-dom';

let rerenderTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
          <App state={store.getState()}  dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
      );
}

rerenderTree(store.getState());
store.subscribe( ()=>{
  let state = store.getState();
  rerenderTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

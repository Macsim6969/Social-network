import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import {addPost} from './Redux/State';
import { addComm } from './Redux/State';

export let rerenderTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
          <App state={state} addPost={addPost} addComm={addComm}/>
        </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
      );
}



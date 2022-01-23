import state from './Redux/State';
import { renderer } from './render';
import reportWebVitals from './reportWebVitals';



renderer(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

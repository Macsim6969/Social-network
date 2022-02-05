import './App.scss';
import Maininner from './components/Main/Maininner';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Mylog from './components/Mylog/Mylog';
import {  Route, Routes } from 'react-router-dom';
import Acount from './components/Acount/Acount';
import FIndfriends from './components/Find friends/FIndfriends';
import Message from './components/Message/Message'; 
import Rev from './components/Rev/Rev';
import Saves from './components/Saves/Saves';
import MessageContainer from './components/Message/MessageContainer';


function App(props) {
  return (
    <div className="App">
      <Header name='Oleg' />
      <div className='block'>

        <div className='block_inner'>
          <Nav />
        </div>
        <div className='mainblock'> 
          <Routes>
        <Route path='message/*' element={<MessageContainer  store={props.store} />} /> 
       { /*   <Route path='findfriend' element={<FIndfriends />} />
            <Route path="acount/*" element={<Acount store={props.store}  />} />
            <Route path="/" element={<Maininner store={props.store} />} />
            <Route path="mylog" element={<Mylog />} />
            <Route path='comments' element={<Rev />} />
            <Route path='saves' element={<Saves store={props.store}  />} />*/}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

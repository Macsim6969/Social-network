import logo from './logo.svg';
import './App.scss';
import Maininner from './components/Main/Maininner';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Mylog from './components/Mylog/Mylog';
import {  Route, Routes } from 'react-router-dom';
import Acount from './components/Acount/Acount';
import FIndfriends from './components/Find friends/FIndfriends';
import Message from './components/Message/Message';




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
            <Route path='/message/*' element={<Message state={props.state.message} />} />
            <Route path='findfriend' element={<FIndfriends />} />
            <Route path="/acount/*" element={<Acount state={props.state.acount} />} />
            <Route path="/" element={<Maininner />} />
            <Route path="/mylog" element={<Mylog />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

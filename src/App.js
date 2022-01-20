import logo from './logo.svg';
import './App.scss';
import Maininner from './components/Main/Maininner';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Mylog from './components/Mylog/Mylog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acount from './components/Acount/Acount';
import FIndfriends from './components/Find friends/FIndfriends';
import Message from './components/Message/Message';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header name='Oleg' />
        <div className='block'>
          
          <div className='block_inner'>
            <Nav />
          </div>
          <div className='mainblock'>
            <Routes>
              <Route path='/message/*' element={<Message />} />
              <Route path='findfriend' element={<FIndfriends />}/>
              <Route path="/acount" element={<Acount />} />
              <Route path="/" element={<Maininner />}/>
              <Route path="/mylog" element={<Mylog />} />
            </Routes>
          </div>  
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

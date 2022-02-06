import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Mylog from './components/Mylog/Mylog';
import {Route, Routes} from 'react-router-dom';
import Acount from './components/Acount/Acount';
import FIndfriends from './components/Find friends/FIndfriends';
import MessageContainer from './components/Message/MessageContainer';
import SavesContainer from "./components/Saves/SavesContainer";
import MaininnerContainer from "./components/Main/MaininnerContainer";


function App(props) {
    return (
        <div className="App">
            <Header name='Oleg'/>
            <div className='block'>

                <div className='block_inner'>
                    <Nav/>
                </div>
                <div className='mainblock'>
                    <Routes>
                        <Route path='message/*' element={<MessageContainer/>}/>
                        <Route path='findfriend' element={<FIndfriends/>}/>
                        <Route path="acount/*" element={<Acount store={props.store}/>}/>
                        <Route path="/" element={<MaininnerContainer/>}/>
                        <Route path="mylog" element={<Mylog/>}/>
                        <Route path='saves' element={<SavesContainer/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;

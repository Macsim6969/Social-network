import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Mylog from './components/Mylog/Mylog';
import { Routes, Route } from 'react-router-dom';
import MessageContainer from './components/Message/MessageContainer';
import SavesContainer from "./components/Saves/SavesContainer";
import MaininnerContainer from "./components/Main/MaininnerContainer";
import AcountContainer from "./components/Acount/AcountContainer";
import FIndfriendsContainer from "./components/Find friends/FIndfriendsContainer";
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {getUserID } from './Redux/Acount-reducer'
import ProfileUSersContainer from './components/ProfileUsers/ProfileUSersContainer';


class App extends React.Component {
    
    render() {
        return (
            <div className="App">
                <Header name='Oleg' />
                <div className='block'>

                    <div className='block_inner'>
                        <Nav />
                    </div>
                    <div className='mainblock'>
                        <Routes>
                            <Route path='message/*' element={<MessageContainer />} />
                            <Route path='findfriend' element={<FIndfriendsContainer />} />
                            <Route path="profile/*" element={<AcountContainer />} />
                            <Route path="/" element={<MaininnerContainer />} />
                            <Route path="mylog" element={<Mylog />} />
                            <Route path='saves' element={<SavesContainer />} />
                            <Route path='news' element={<UsersContainer />} />
                            <Route path='login' element={<Login />} />
                            <Route path='users' element={<ProfileUSersContainer />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null , {getUserID})(App);

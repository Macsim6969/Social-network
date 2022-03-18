import ss from './Findfriend.module.scss'
import React from 'react';
import usersPhoto from '../../assets/image/users.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../API/API';
import Paginator from './Paginator';
import Friends from './Friends';


const Findfriends = (props) => {

    return (
        <div className={ss.log_find}>
           <h1>People You May Know</h1>
            <Paginator currentPage={props.currentPage} onpageClick={props.onpageClick} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
            <div className={ss.find}>{props.users.map(u => <Friends user={u} key={u.id}  followFetching={props.followFetching} acceptDelete={props.acceptDelete} acceptAdd={props.acceptAdd}/>
                )}
            </div>
        </div >
    )
}

export default Findfriends;
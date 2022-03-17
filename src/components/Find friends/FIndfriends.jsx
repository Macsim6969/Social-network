import ss from './Findfriend.module.scss'
import React from 'react';
import usersPhoto from '../../assets/image/users.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../API/API';
import Paginator from './Paginator';
import Friends from './Friends';


const Findfriends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div className={ss.log_find}>f
           <h1>People You May Know</h1>
            <Paginator currentPage={props.currentPage} onpageClick={props.onpageClick} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
            <div className={ss.find}>{props.users.map(u => <Friends user={u} key={u.id}  followFetching={props.followFetching} acceptDelete={props.acceptDelete} acceptAdd={props.acceptAdd}/>
                )}
            </div>
        </div >
    )
}

export default Findfriends;
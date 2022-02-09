import ss from './Findfriend.module.scss'
import React from 'react';
import {setFriends} from "../../Redux/Friend-reducer";
import * as axios from "axios";
import usersPhoto from '../../assets/image/users.png';

const Findfriends = (props) => {
    let getUsers = () =>{
        if (props.users.length === 0){

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
    
                props.setFr( response.data.items)
            });
    
    
        }
    }

    return (
        <div className={ss.log_find}>
            People You May Know
            <button onClick={getUsers}>Show Me</button>
            <div className={ss.find}>{props.users.map(u =>
                <div className={ss.findfriend} key={u.id}>
                    <div className={ss.friendsss}>
                        <nav><img className={ss.img} src={u.photos.small != null ? u.photos.small : usersPhoto} /></nav>
                        <span className={ss.friendbiogr}>
                            <div>{u.name}</div>
                            <div>{'u.friend'}</div>
                        </span>
                    </div>
                    <div>
                        {u.add ? <button onClick={ ()=> { props.delete(u.id)}}>Add friend</button > : <button onClick={ ()=> { props.add(u.id)}}>Remove</button>}
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Findfriends;
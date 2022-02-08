import ss from './Findfriend.module.css'
import React from 'react';

const FIndfriends = (props) => {
debugger;
    return (
        <div className={ss.log_find}>
            People You May Know
            <div>{props.users.map(u => <div key={u.id}><nav><img src={u.ava}/></nav><span><div>{u.users.login}</div><div>{u.users.friend}</div></span></div>)} </div>
        </div>
    )
}

export default FIndfriends;
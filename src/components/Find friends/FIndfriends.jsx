import ss from './Findfriend.module.scss'
import React from 'react';

const Findfriends = (props) => {
    return (
        <div className={ss.log_find}>
            People You May Know
            <div className={ss.find}>{props.users.map(u =>
                <div className={ss.findfriend} key={u.id}>
                    <div className={ss.friendsss}>
                        <nav><img className={ss.img} src={u.ava} /></nav>
                        <span className={ss.friendbiogr}>
                            <div>{u.login}</div>
                            <div>{u.friend}</div>
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
import ss from './Findfriend.module.scss'
import React from 'react';
import usersPhoto from '../../assets/image/users.png';
import { NavLink } from 'react-router-dom';


const Friends = ({user , acceptAdd ,acceptDelete , followFetching}) => {
    let u = user
    return (
        <div>
            <div className={ss.friendsss}>
                <nav>
                    <NavLink to={'/profile/:userId'}>
                        <img className={ss.img} src={u.photos.small != null ? u.photos.small : usersPhoto} />
                    </NavLink>
                </nav>
                <span className={ss.friendbiogr}>
                    <div>{u.name}</div>
                    <div>{'u.friend'}</div>
                </span>
            </div>
            <div>
                {u.add ?
                    < button disabled={followFetching.some(id => id === u.id)} onClick={() => {
                        acceptAdd(u.id)
                    }

                    }>Remove</button> :
                    <button disabled={followFetching.some(id => id === u.id)} onClick={() => {
                        acceptDelete(u.id)
                    }
                    }>ADD</button>}
            </div>
        </div>
    )
}

export default Friends;
import ss from './Findfriend.module.scss'
import React from 'react';
import usersPhoto from '../../assets/image/users.png';
import { NavLink } from 'react-router-dom';


const Findfriends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div className={ss.log_find}>
            People You May Know
            <div className={ss.logg}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && ss.selector}
                        onClick={(e) => { props.onpageClick(p) }}>{p}</span>
                })}

            </div>
            <div className={ss.find}>{props.users.map(u =>
                <div className={ss.findfriend} key={u.id}>
                    <div className={ss.friendsss}>
                        <nav>
                            <NavLink to={'/users' + u.id}>
                            <img className={ss.img} src={u.photos.small != null ? u.photos.small : usersPhoto} />
                            </NavLink>
                        </nav>
                        <span className={ss.friendbiogr}>
                            <div>{u.name}</div>
                            <div>{'u.friend'}</div>
                        </span>
                    </div>
                    <div>
                        {u.add ? <button onClick={() => {
                            props.delete(u.id)
                        }}>Add friend</button> : <button onClick={() => {
                            props.add(u.id)
                        }}>Remove</button>}
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Findfriends;
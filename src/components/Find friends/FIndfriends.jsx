import ss from './Findfriend.module.scss'
import React from 'react';
import usersPhoto from '../../assets/image/users.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../API/API';


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
                            < button disabled={props.followFetching.some(id => id ===u.id)} onClick={() => {
                                props.followAC(true , u.id)
                                usersAPI.getDelete(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.delete(u.id);
                                        }
                                        props.followAC(false , u.id)
                                    });
                            }

                        }>Remove</button> :
                    <button disabled={props.followFetching.some(id => id ===u.id)} onClick={() => {
                        props.followAC(true , u.id)
                        usersAPI.getADD(u.id)
                            .then(data => {
                                if (data.resultCode == 0) {
                                    props.add(u.id);
                                }
                                props.followAC(false , u.id)
                            })
                    }

                    }>Add Friends</button>}
                </div>
                </div>)}
        </div>
        </div >
    )
}

export default Findfriends;
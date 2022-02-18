import ss from './Findfriend.module.scss'
import React from 'react';
import usersPhoto from '../../assets/image/users.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


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
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true ,headers: {"API-KEY" : '9739fd73-191f-4205-acfa-edb2b33872d1'}  }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.delete(u.id);
                                    }
                                });
                            }

                            }>Remove</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true,headers: {"API-KEY" : '9739fd73-191f-4205-acfa-edb2b33872d1'} }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.add(u.id);
                                    }
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
import React, { useState } from 'react'
import { usersAPI } from '../../API/User-Api.ts'
import users from '../../assets/image/users.png'
import ss from './Users.module.scss'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setUsers, addAC , deletes, totallCount ,setUSersCom, setNewUsersCom, currentPageAC , isLoadingAC} from '../../Redux/User-reducer.ts'
import {getuserCom, getnewUsersCom} from '../../Redux/Users-selector.ts'


const Users = (props) => {
 

    const usersCom = useState(getuserCom)
    const newUsersCom = useState(getnewUsersCom)

    const dispatch = useDispatch()

    const setUSersComAC = () =>{
        dispatch(setUSersCom())
    }
    

let textdoc = usersCom.map(c =><div> {c.text} </div>  )
    let newusersss = newUsersCom
    let newPOstUSER = () =>{
        setUSersComAC();
    }

    let onNewMessDial =(e)=>{
        let text = e.target.value;
        props.setNewUsersCom(text)
    }
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i)
        }
    }

    return (
        <div>
            <h1>People want you see </h1>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && ss.selector}
                        onClick={() => { props.onpageClick(p) }}>{p}</span>
                })}
            </div>
            <div className={ss.find}>{props.users.map(u =>
                <div className={ss.findfriend} key={u.id}>
                    <div className={ss.friendsss}>
                        <nav>
                            <NavLink to={'/profile/:userIf'}>
                                <img src={u.photos.small != null ? u.photos.small : users} alt="" />
                            </NavLink>
                        </nav>
                        <nav>
                            <p>{u.name}</p>
                            <p>{'2001'}</p>
                        </nav>
                    </div>
                    <div>
                        {u.add ?
                            <button onClick={() => {
                                usersAPI.getDelete(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.deletes(u.id);
                                    }
                                });
                            }}>Delete</button> :
                            <button onClick={() => {
                                usersAPI.getADD(u.id).then(data => {
                                    if (data.resultCode == 1) {
                                        props.addAC(u.id);
                                    }
                                })
                            }}> ADD</button>

                        }
                    </div>
                </div>
            )}</div>
            <div>
                <input type="text" value={newusersss} onChange={onNewMessDial} />
                <button onClick={newPOstUSER}>dfdffd</button>

            </div>
            <div>
            {textdoc}
            </div>
        </div>
    )
}

export default Users;
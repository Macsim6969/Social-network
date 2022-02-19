import { NavLink } from "react-router-dom";
import { usersAPI } from "../../API/API";
import usersPhoto from '../../assets/image/users.png';
import ss from './Users.module.scss'

const Users = (props) => {
    let pageCurrent = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCurrent; i++) {
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
                                usersAPI.getDelete(u.id)
                                .then(data => {
                                    if (data.resultCode == 0) {
                                        props.deletes(u.id);
                                    }
                                });
                            }

                            }>Remove</button> :
                            <button onClick={() => {
                                usersAPI.getADD(u.id)
                                .then(data => {
                                    if (data.resultCode == 0) {
                                        props.addAC(u.id);
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

export default Users;
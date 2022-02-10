import ss from './Findfriend.module.scss'
import React from 'react';
import {setFriends} from "../../Redux/Friend-reducer";
import * as axios from "axios";
import usersPhoto from '../../assets/image/users.png';


class Findfriends extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setFr(response.data.items)
        });
    }

    render() {
        return (
            <div className={ss.log_find}>
                People You May Know
                <div className={ss.find}>{this.props.users.map(u =>
                    <div className={ss.findfriend} key={u.id}>
                        <div className={ss.friendsss}>
                            <nav><img className={ss.img} src={u.photos.small != null ? u.photos.small : usersPhoto}/>
                            </nav>
                            <span className={ss.friendbiogr}>
                            <div>{u.name}</div>
                            <div>{'u.friend'}</div>
                        </span>
                        </div>
                        <div>
                            {u.add ? <button onClick={() => {
                                this.props.delete(u.id)
                            }}>Add friend</button> : <button onClick={() => {
                                this.props.add(u.id)
                            }}>Remove</button>}
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Findfriends;
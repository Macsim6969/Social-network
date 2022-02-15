import React from "react";
import usersPhoto from '../../../../assets/image/users.png'
import * as axios from 'axios';
import ss from './Photo.module.scss'


class Photo extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.set(response.data.items)
            this.props.totalAC(response.data.totalCount)
        });
    }

    onpageClick = (current) => {
        this.props.photoCurrentAC(current);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${current}&count=${this.props.pageSize}`).then(response => {
            this.props.set(response.data.items)
        });
    }

    render() {
        debugger;
        let pageCurrent = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []
        for (let i=1; i< pageCurrent; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

        return (
            <div className={ss.photo}>
                <h1>Photo would you like</h1>
                <div className={ss.photos}>
                {pages.map(h =>{
                   return <span className={this.props.currentPage === h && ss.selector }
                   onClick={()=>{this.onpageClick(h)} }>{h}</span>    
                    })}
                    
                </div>
                <div>{this.props.users.map(p =>
                    <div key={p.id}>
                        <div>
                            <div><img src={p.photos.small != null ? p.photos.small : usersPhoto} alt="" /></div>
                            <div>{p.name}</div>
                            <div>
                                {p.add ? <button onClick={() => {
                                    this.props.delete(p.id)
                                }}>Remove</button> : <button onClick={() => {
                                    this.props.add(p.id)
                                }}>Save</button>}
                            </div>
                        </div>
                    </div>
                )}</div>
            </div>
        )
    }
}

export default Photo;
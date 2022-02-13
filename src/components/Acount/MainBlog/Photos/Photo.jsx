import React from "react";
import usersPhoto from '../../../../assets/image/users.png'
import * as axios from 'axios';

class Photo extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.set(response.data.items)
        });
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Photo would you like</h1>
                <div>{this.props.users.map(p => 
                    <div key={p.id}>
                        <div>
                            <div><img src={p.photos.small != null ? p.photos.small : usersPhoto} alt="" /></div>
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
import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import ProfileUSers from "./ProfileUSers";
import {getUserID ,saveProfile} from '../../Redux/Acount-reducer';


class ProfileUSersContainerAPI extends React.Component{

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response =>{ 
            this.props.getUserID(response.data)
        })
    }

    render(){
        return(
            <ProfileUSers {...this.props} profile={this.props.profile} saveProfile={this.props.saveProfile}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        profile : state.acount.profile
    }
}

export default connect(mapStateToProps, {getUserID ,saveProfile})(ProfileUSersContainerAPI)
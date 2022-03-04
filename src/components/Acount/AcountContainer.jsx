import * as axios from 'axios';
import React from 'react'
import {connect} from "react-redux";
import Acount from "./Acount";
import {getUserID , getStatus , updateStatus} from '../../Redux/Acount-reducer'
import { Navigate } from 'react-router-dom';
import { hocRedirect } from '../../HOC/HocRedirect';
import { compose } from 'redux';



class AcountAPI extends React.Component{
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response =>{
            debugger;
            this.props.getUserID(response.data);
            this.props.getStatus(response.status)

        }) 
    }

    render(){

        return(
            <Acount profile={this.props.profile} updateStatus={this.props.updateStatus}  status={this.props.status} acount={this.props.acount}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        profile : state.acount.profile,
        acount : state.acount,
        status : state.acount.status
    }
}

export default compose(connect(mapStateToProps , {getUserID , getStatus , updateStatus}) , hocRedirect)(AcountAPI) ; 

import * as axios from 'axios';
import React from 'react'
import {connect} from "react-redux";
import Acount from "./Acount";
import {getUserID} from '../../Redux/Acount-reducer'
import { Navigate } from 'react-router-dom';



class AcountAPI extends React.Component{
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response =>{
            this.props.getUserID(response.data);
        })
    }

    render(){
        if(!this.props.isStatus) return <Navigate to={'/login'} />

        return(
            <Acount profile={this.props.profile}  acount={this.props.acount}/>
        )
    }
}



let mapStateToProps = (state) =>{
    return{
        profile : state.acount.profile,
        acount : state.acount,
        isStatus : state.auth.isStatus
    }
}


const AcountContainer = connect(mapStateToProps , {getUserID})(AcountAPI)

export default AcountContainer ; 

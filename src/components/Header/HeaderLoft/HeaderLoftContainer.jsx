import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {setStatusAuth} from '../../../Redux/auth-reducer'
import HeaderLoft from "./HeaderLoft";



class HeaderLoftContainerAPI extends React.Component {
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me' , {withCredentials : true})
        .then(responce =>{
            if(responce.data.resultCode === 0){
                let {id , login , email} = responce.data.data;
                this.props.setStatusAuth(id, login , email)
            }
        })
    }


    render(){
        return(
            <HeaderLoft  {...this.props}/>
        )
    }
}
let mapStateToProps = (state )=>{
    return{
        isStatus : state.auth.isStatus,
        login : state.auth.login
    }
}
export default connect (mapStateToProps , {setStatusAuth}) (HeaderLoftContainerAPI)


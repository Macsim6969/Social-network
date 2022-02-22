 import React from "react";
import { connect } from "react-redux";
import { usesrAuth } from "../../../API/API";
import {getLogin, setStatusAuth} from '../../../Redux/auth-reducer'
import HeaderLoft from "./HeaderLoft";



class HeaderLoftContainerAPI extends React.Component {
    componentDidMount(){
        this.props.getLogin();
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
export default connect (mapStateToProps , {setStatusAuth , getLogin}) (HeaderLoftContainerAPI)


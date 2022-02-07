import React from 'react'
import {connect} from "react-redux";
import Acount from "./Acount";

let mapStateToProps = (state) =>{
    return{
        acount : state.acount
    }
}


const AcountContainer = connect(mapStateToProps)(Acount)

export default AcountContainer

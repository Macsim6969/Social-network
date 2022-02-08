import React from 'react';
import {connect} from "react-redux";
import FIndfriends from "./Findfriends";
import {addAC, deleteAC, setFriends} from "../../Redux/Friend-reducer";

let mapStateToProps = (state) =>{
    return{
        users : state.friends.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        add: (id) =>{
            dispatch(addAC(id))
        },
        delete : (id) =>{
            dispatch(deleteAC(id))
        },
        setFr : (users) =>{
            dispatch(setFriends(users))
        }
    }
}

 export default  connect(mapStateToProps, mapDispatchToProps )(FIndfriends );
import React from 'react';
import {connect} from "react-redux";
import FIndfriends from "./FIndfriends";
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

const FIndfriendsContainer = connect(mapStateToProps, mapDispatchToProps )(FIndfriends )

export default FIndfriendsContainer ;
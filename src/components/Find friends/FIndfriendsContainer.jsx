import React from 'react';
import {connect} from "react-redux";
import {acceptAdd, acceptDelete, followAC,  getUsersThunk, setCurrentAC,} from "../../Redux/Friend-reducer";
import Findfriends from './FIndfriends';

import Loader from '../../assets/image/loaders.svg';
import {  usersAPI } from '../../API/API';
 

class FindfriendsAPI extends React.Component { 
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage , this.props.pageSize);      
    }

    onpageClick = (current) =>{
        this.props.getUsersThunk(current , this.props.pageSize)
    }

    render() {
        return (
            <>
            {this.props.isFetching ? <img src={Loader}/> : null}
            <Findfriends 
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            acceptAdd={this.props.acceptAdd}
            acceptDelete={this.props.acceptDelete}
            onpageClick={this.onpageClick}
            users={this.props.users}
            followFetching={this.props.followFetching}
            followAC={this.props.followAC}
            />
            </>
        )
    }
}


let mapStateToProps = (state) =>{
    return{
        users : state.friends.users,
        pageSize : state.friends.pageSize,
        totalUsersCount : state.friends.totalUsersCount,
        currentPage : state.friends.currentPage,
        isFetching : state.friends.isFetching,
        followFetching : state.friends.followFetching
    }
}


 export default  connect(mapStateToProps, {acceptAdd , acceptDelete, setCurrentAC ,followAC ,getUsersThunk}  )(FindfriendsAPI);
import { connect } from "react-redux"
import {setUsers, addAC , deletes, totalCount ,setUSersCom, setNewUsersCom, currentPageAC , isLoadingAC} from '../../Redux/User-reducer'
import Users from "./Users"
import Loader from '../../assets/image/loaders.svg';
import { usersAPI } from "../../API/API";
import React from "react";

class UserContainerAPI extends React.Component{
    
    componentDidMount(){
        this.props.isLoadingAC(true)
        usersAPI.getUsers(this.props.currentPage , this.props.pageSize)
        .then(data =>{
            this.props.isLoadingAC(false)
            this.props.setUsers(data.items)
            this.props.totalCount(data.totalCount)
        })
    }
    
    onpageClick = (current) =>{
        this.props.currentPageAC(current)
        this.props.isLoadingAC(true);
        usersAPI.getUsers2(current , this.props.pageSize)
        .then(data =>{
            this.props.setUsers(data.items)
            this.props.isLoadingAC(false);
        })
    }

    render(){
        return(
        <>
        {this.props.isLoading ? <img src={Loader}/> : null}
        <Users   users={this.props.users}
        pageSize={this.props.pageSize}
        totalUserCount={this.props.totalUserCount}
        currentPage={this.props.currentPage}
        addAC={this.props.addAC}
        deletes={this.props.deletes}
        onpageClick={this.onpageClick}
        setUSersCom={this.props.setUSersCom} 
        setNewUsersCom={this.props.setNewUsersCom}
        newUsersCom={this.props.newUsersCom}
        usersCom={this.props.usersCom}/>
        </>    
        ) 
    }
}

let mapStateToProps = (state ) =>{
    return{
        usersCom : state.users.usersCom,
        users : state.users.users,
        totalUserCount : state.users.totalUserCount,
        pageSize : state.users.pageSize,
        currentPage : state.users.currentPage,
        isLoading : state.users.isLoading,
        newUsersCom : state.users.newUsersCom
    }
}


export default connect(mapStateToProps , {setUsers, setUSersCom, setNewUsersCom, addAC , deletes, totalCount , currentPageAC , isLoadingAC})(UserContainerAPI);
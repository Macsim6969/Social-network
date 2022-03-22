import { connect } from "react-redux"
import {setUsers, addAC , deletes, totallCount ,setUSersCom, setNewUsersCom, currentPageAC , isLoadingAC} from '../../Redux/User-reducer.ts'
import Users from "./Users"
import Loader from '../../assets/image/loaders.svg';
import { usersAPI } from "../../API/API";
import React from "react";
import { getcurrentPage, getisLoading, getnewUsersCom, getPageSize, gettotalUserCount, getUsers, getusersCom, getusersSelector } from "../../Redux/Users-selector.ts";


class UserContainerAPI extends React.Component{
    
    componentDidMount(){
        this.props.isLoadingAC(true)
        usersAPI.getUsers(this.props.currentPage , this.props.pageSize)
        .then(data =>{
            this.props.isLoadingAC(false)
            this.props.setUsers(data.items)
            this.props.totallCount(data.totalCount)
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
        usersCom : getusersCom(state),
        users : getUsers(state),
        totalUserCount : gettotalUserCount(state),
        pageSize : getPageSize(state),
        currentPage : getcurrentPage(state),
        isLoading : getisLoading(state),
        newUsersCom : getnewUsersCom(state)
    }
}


export default connect(mapStateToProps , {setUsers, setUSersCom, setNewUsersCom, addAC , deletes, totallCount , currentPageAC , isLoadingAC})(UserContainerAPI);
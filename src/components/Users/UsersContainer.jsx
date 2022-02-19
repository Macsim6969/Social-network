import { connect } from "react-redux"
import {setUsers, addAC , deletes, totalCount , currentPageAC , isLoadingAC} from '../../Redux/User-reducer'
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
        onpageClick={this.onpageClick} />
        </>    
        )
    }
}

let mapStateToProps = (state ) =>{
    return{
        users : state.users.users,
        totalUserCount : state.users.totalUserCount,
        pageSize : state.users.pageSize,
        currentPage : state.users.currentPage,
        isLoading : state.users.isLoading
    }
}


export default connect(mapStateToProps , {setUsers, addAC , deletes, totalCount , currentPageAC , isLoadingAC})(UserContainerAPI);
import React from 'react';
import {connect} from "react-redux";
import {addAC, deleteAC, followAC, isFetchingAC, isLoader, setCurrentAC, setFriends, setTotalAC} from "../../Redux/Friend-reducer";
import Findfriends from './FIndfriends';

import Loader from '../../assets/image/loaders.svg';
import {  usersAPI } from '../../API/API';
 

class FindfriendsAPI extends React.Component { 
    componentDidMount() {
        this.props.isFetchingAC(true)
        usersAPI.getUsers(this.props.currentPage , this.props.pageSize)
        .then(data =>{
            this.props.isFetchingAC(false)
            this.props.setFr(data.items);
            this.props.setTotalAC(data.totalCount)
        })         
    }

    onpageClick = (current) =>{
        this.props.setCurrentAC(current);
        this.props.isFetchingAC(true)
        usersAPI.getUsers2(current , this.props.pageSize).then(data =>{
            this.props.setFr(data.items);
            this.props.isFetchingAC(false);
        });
    }

    render() {
        return (
            <>
            {this.props.isFetching ? <img src={Loader}/> : null}
            <Findfriends 
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            add={this.props.add}
            delete={this.props.delete}
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
        },
        setCurrentAC : (current) =>{
            dispatch(setCurrentAC(current))
        },
        setTotalAC : (totalCount) =>{
            dispatch(setTotalAC(totalCount))
        },
        isFetchingAC: (isFetching) =>{
            dispatch(isFetchingAC(isFetching))
        },
        followAC : (fetching) =>{
            dispatch(followAC(fetching))
        }
    }
}

 export default  connect(mapStateToProps, mapDispatchToProps  )(FindfriendsAPI);